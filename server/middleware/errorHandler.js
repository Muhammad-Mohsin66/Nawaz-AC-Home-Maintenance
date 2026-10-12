export const errorHandler = (err, req, res, next) => {
  console.error('API Error:', err);

  // Mongoose Bad ObjectId (CastError)
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    return res.status(404).json({
      success: false,
      message: 'لم يتم العثور على الحجز المطلوب (معرّف غير صالح)',
    });
  }

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({
      success: false,
      message: messages[0] || 'بيانات الإدخال غير صالحة',
      errors: messages,
    });
  }

  // Fallback generic error
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  return res.status(statusCode).json({
    success: false,
    message: err.message || 'حدث خطأ غير متوقع في الخادم. يرجى المحاولة لاحقاً أو التواصل عبر واتساب مباشرة.',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
