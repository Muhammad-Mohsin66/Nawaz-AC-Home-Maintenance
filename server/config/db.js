import mongoose from 'mongoose';

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.warn('⚠️  تحذير: لم يتم تعيين MONGO_URI في متغيرات البيئة. سيتم تعطيل حفظ قاعدة البيانات مؤقتًا.');
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ تم الاتصال بقاعدة بيانات MongoDB بنجاح: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`❌ خطأ في الاتصال بقاعدة البيانات: ${error.message}`);
    return false;
  }
};
