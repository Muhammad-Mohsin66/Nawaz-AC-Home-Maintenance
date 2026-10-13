package com.nawaz.acmaintenanceriyadh

import android.annotation.SuppressLint
import android.content.ActivityNotFoundException
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import android.net.Uri
import android.net.http.SslError
import android.os.Build
import android.os.Bundle
import android.os.Message
import android.view.View
import android.view.ViewGroup
import android.webkit.SslErrorHandler
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import com.nawaz.acmaintenanceriyadh.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private var customView: View? = null
    private var customViewCallback: WebChromeClient.CustomViewCallback? = null
    private var isPageLoadedSuccessfully = false

    companion object {
        const val PRODUCTION_URL = "https://muhammad-mohsin66.github.io/Nawaz-AC-Home-Maintenance/"
        const val COMPANY_PHONE = "+966543729238"
        const val WHATSAPP_NUMBER = "966543729238"
        private const val HOST_NAME = "muhammad-mohsin66.github.io"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        // Switch from splash theme to main app theme
        setTheme(R.style.Theme_NawazAC)
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setupWindowInsets()
        setupBackNavigation()
        setupSwipeRefresh()
        setupErrorButtons()
        setupWebView()

        if (savedInstanceState == null) {
            loadWebsite()
        } else {
            binding.webView.restoreState(savedInstanceState)
        }
    }

    private fun setupWindowInsets() {
        WindowCompat.setDecorFitsSystemWindows(window, false)
        val insetsController = WindowCompat.getInsetsController(window, window.decorView)
        insetsController.isAppearanceLightStatusBars = false
        insetsController.isAppearanceLightNavigationBars = false

        ViewCompat.setOnApplyWindowInsetsListener(binding.rootContainer) { view, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            val displayCutout = insets.getInsets(WindowInsetsCompat.Type.displayCutout())
            val topInset = maxOf(systemBars.top, displayCutout.top)
            val bottomInset = maxOf(systemBars.bottom, displayCutout.bottom)

            if (customView == null) {
                view.setPadding(systemBars.left, topInset, systemBars.right, bottomInset)
            } else {
                view.setPadding(0, 0, 0, 0)
            }
            insets
        }
    }

    private fun setupBackNavigation() {
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                when {
                    customView != null -> {
                        // Exit full-screen video
                        hideCustomView()
                    }
                    binding.webView.canGoBack() -> {
                        binding.webView.goBack()
                    }
                    else -> {
                        isEnabled = false
                        onBackPressedDispatcher.onBackPressed()
                    }
                }
            }
        })
    }

    private fun setupSwipeRefresh() {
        binding.swipeRefreshLayout.setColorSchemeResources(R.color.primary, R.color.accent)
        binding.swipeRefreshLayout.setProgressBackgroundColorSchemeResource(R.color.surface_dark)
        binding.swipeRefreshLayout.setOnRefreshListener {
            if (isNetworkAvailable()) {
                binding.errorView.visibility = View.GONE
                binding.webView.reload()
            } else {
                binding.swipeRefreshLayout.isRefreshing = false
                showErrorScreen()
            }
        }
    }

    private fun setupErrorButtons() {
        binding.btnRetry.setOnClickListener {
            if (isNetworkAvailable()) {
                binding.errorView.visibility = View.GONE
                binding.webView.visibility = View.VISIBLE
                loadWebsite()
            } else {
                Toast.makeText(this, getString(R.string.no_internet_title), Toast.LENGTH_SHORT).show()
            }
        }

        binding.btnCallSupport.setOnClickListener {
            dialPhoneNumber(COMPANY_PHONE)
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun setupWebView() {
        val settings = binding.webView.settings

        // JavaScript & DOM Storage
        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        settings.databaseEnabled = true

        // Viewport and responsiveness
        settings.useWideViewPort = true
        settings.loadWithOverviewMode = true
        settings.setSupportZoom(false)
        settings.builtInZoomControls = false
        settings.displayZoomControls = false

        // Media & Video playback
        settings.mediaPlaybackRequiresUserGesture = false

        // Security settings
        settings.allowFileAccess = false
        settings.allowContentAccess = false
        settings.mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            settings.safeBrowsingEnabled = true
        }

        // Allow window.open requests (used by React to trigger WhatsApp / external tabs)
        settings.setSupportMultipleWindows(true)
        settings.javaScriptCanOpenWindowsAutomatically = true

        // Cache mode
        settings.cacheMode = if (isNetworkAvailable()) {
            WebSettings.LOAD_DEFAULT
        } else {
            WebSettings.LOAD_CACHE_ELSE_NETWORK
        }

        // Custom User-Agent tag
        val defaultUserAgent = settings.userAgentString
        settings.userAgentString = "$defaultUserAgent NawazAC-Android/1.0.0"

        binding.webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                val url = request?.url?.toString() ?: return false
                return handleExternalOrSpecialUrl(url)
            }

            override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
                super.onPageStarted(view, url, favicon)
                binding.progressBar.visibility = View.VISIBLE
            }

            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                binding.progressBar.visibility = View.GONE
                binding.swipeRefreshLayout.isRefreshing = false
                isPageLoadedSuccessfully = true
            }

            override fun onReceivedError(
                view: WebView?,
                request: WebResourceRequest?,
                error: WebResourceError?
            ) {
                super.onReceivedError(view, request, error)
                // Only show offline screen if the error is on the main document request
                if (request?.isForMainFrame == true) {
                    binding.progressBar.visibility = View.GONE
                    binding.swipeRefreshLayout.isRefreshing = false
                    showErrorScreen()
                }
            }

            override fun onReceivedSslError(view: WebView?, handler: SslErrorHandler?, error: SslError?) {
                // Strict security: Never bypass SSL certificate errors
                handler?.cancel()
                binding.progressBar.visibility = View.GONE
                binding.swipeRefreshLayout.isRefreshing = false
                Toast.makeText(this@MainActivity, "SSL Error: Connection refused", Toast.LENGTH_LONG).show()
            }
        }

        binding.webView.webChromeClient = object : WebChromeClient() {
            override fun onProgressChanged(view: WebView?, newProgress: Int) {
                super.onProgressChanged(view, newProgress)
                binding.progressBar.progress = newProgress
                if (newProgress >= 100) {
                    binding.progressBar.visibility = View.GONE
                }
            }

            // Capture window.open requests from JavaScript and route them through intent handling
            override fun onCreateWindow(
                view: WebView?,
                isDialog: Boolean,
                isUserGesture: Boolean,
                resultMsg: Message?
            ): Boolean {
                val tempWebView = WebView(this@MainActivity)
                tempWebView.webViewClient = object : WebViewClient() {
                    override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                        val url = request?.url?.toString() ?: return false
                        handleExternalOrSpecialUrl(url)
                        return true
                    }
                }
                val transport = resultMsg?.obj as? WebView.WebViewTransport
                transport?.webView = tempWebView
                resultMsg?.sendToTarget()
                return true
            }

            // HTML5 Fullscreen Video Support
            override fun onShowCustomView(view: View?, callback: CustomViewCallback?) {
                if (customView != null) {
                    callback?.onCustomViewHidden()
                    return
                }
                customView = view
                customViewCallback = callback
                binding.customViewContainer.addView(
                    view,
                    ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                    )
                )
                binding.customViewContainer.visibility = View.VISIBLE
                binding.swipeRefreshLayout.visibility = View.GONE
                ViewCompat.requestApplyInsets(binding.rootContainer)
            }

            override fun onHideCustomView() {
                hideCustomView()
            }
        }
    }

    private fun hideCustomView() {
        customView?.let {
            binding.customViewContainer.removeView(it)
            binding.customViewContainer.visibility = View.GONE
            binding.swipeRefreshLayout.visibility = View.VISIBLE
            customViewCallback?.onCustomViewHidden()
            customView = null
            customViewCallback = null
            ViewCompat.requestApplyInsets(binding.rootContainer)
        }
    }

    private fun loadWebsite() {
        if (!isNetworkAvailable() && !isPageLoadedSuccessfully) {
            showErrorScreen()
            return
        }
        binding.errorView.visibility = View.GONE
        binding.webView.visibility = View.VISIBLE
        binding.webView.loadUrl(PRODUCTION_URL)
    }

    private fun showErrorScreen() {
        binding.errorView.visibility = View.VISIBLE
        binding.webView.visibility = View.GONE
    }

    private fun isNetworkAvailable(): Boolean {
        val connectivityManager =
            getSystemService(Context.CONNECTIVITY_SERVICE) as? ConnectivityManager ?: return false
        val activeNetwork = connectivityManager.activeNetwork ?: return false
        val capabilities = connectivityManager.getNetworkCapabilities(activeNetwork) ?: return false
        return capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
    }

    /**
     * Intercepts external intents, WhatsApp, phone dialing, maps, and PDF viewing.
     * Keeps internal website navigation inside the WebView.
     */
    private fun handleExternalOrSpecialUrl(url: String): Boolean {
        val uri = Uri.parse(url)
        val scheme = uri.scheme?.lowercase() ?: ""
        val host = uri.host?.lowercase() ?: ""

        // 1. Phone Calling (tel:)
        if (scheme == "tel") {
            dialPhoneNumber(url)
            return true
        }

        // 2. WhatsApp links (wa.me, api.whatsapp.com, whatsapp://)
        if (isWhatsAppUrl(url)) {
            openWhatsApp(url)
            return true
        }

        // 3. Google Maps and Geo links
        if (scheme == "geo" || host.contains("google.com") && uri.path?.contains("maps") == true) {
            openExternalIntent(url)
            return true
        }

        // 4. Mail links
        if (scheme == "mailto") {
            openExternalIntent(url)
            return true
        }

        // 5. PDF Documents (Open in external viewer or browser)
        if (url.endsWith(".pdf", ignoreCase = true)) {
            openExternalIntent(url)
            return true
        }

        // 6. External web domains (non-Nawaz website domains)
        if (scheme == "http" || scheme == "https") {
            if (!host.contains(HOST_NAME)) {
                openExternalIntent(url)
                return true
            }
        }

        // Internal page navigation stays in the WebView
        return false
    }

    private fun isWhatsAppUrl(url: String): Boolean {
        val lower = url.lowercase()
        return lower.startsWith("whatsapp://") ||
                lower.contains("wa.me") ||
                lower.contains("api.whatsapp.com")
    }

    private fun openWhatsApp(url: String) {
        val uri = Uri.parse(url)
        val intent = Intent(Intent.ACTION_VIEW, uri)

        // Prefer official WhatsApp package if installed
        val isWhatsAppInstalled = isPackageInstalled("com.whatsapp") || isPackageInstalled("com.whatsapp.w4b")
        if (isWhatsAppInstalled) {
            if (isPackageInstalled("com.whatsapp")) {
                intent.setPackage("com.whatsapp")
            } else if (isPackageInstalled("com.whatsapp.w4b")) {
                intent.setPackage("com.whatsapp.w4b")
            }
        }

        try {
            startActivity(intent)
        } catch (e: ActivityNotFoundException) {
            // Fallback: Open in device browser
            try {
                val browserIntent = Intent(Intent.ACTION_VIEW, uri)
                startActivity(browserIntent)
            } catch (fallbackEx: Exception) {
                Toast.makeText(this, getString(R.string.whatsapp_not_installed), Toast.LENGTH_SHORT).show()
            }
        }
    }

    private fun dialPhoneNumber(telUriOrPhone: String) {
        val uri = if (telUriOrPhone.startsWith("tel:")) {
            Uri.parse(telUriOrPhone)
        } else {
            Uri.parse("tel:$telUriOrPhone")
        }
        val intent = Intent(Intent.ACTION_DIAL, uri)
        try {
            startActivity(intent)
        } catch (e: ActivityNotFoundException) {
            Toast.makeText(this, "تعذر فتح لوحة الاتصال", Toast.LENGTH_SHORT).show()
        }
    }

    private fun openExternalIntent(url: String) {
        try {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
            startActivity(intent)
        } catch (e: ActivityNotFoundException) {
            Toast.makeText(this, "لا يوجد تطبيق مثبت لفتح هذا الرابط", Toast.LENGTH_SHORT).show()
        }
    }

    private fun isPackageInstalled(packageName: String): Boolean {
        return try {
            packageManager.getPackageInfo(packageName, 0)
            true
        } catch (e: PackageManager.NameNotFoundException) {
            false
        }
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        binding.webView.saveState(outState)
    }

    override fun onPause() {
        super.onPause()
        binding.webView.onPause()
    }

    override fun onResume() {
        super.onResume()
        binding.webView.onResume()
    }

    override fun onDestroy() {
        binding.webView.destroy()
        super.onDestroy()
    }
}
