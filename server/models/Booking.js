import mongoose from 'mongoose';

const saudiPhoneRegex = /^(?:\+?966|0)?5[0-9]{8}$/;

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, 'الاسم الكامل مطلوب'],
      trim: true,
      minlength: [2, 'الاسم يجب ألا يقل عن حرفين'],
      maxlength: [100, 'الاسم يجب ألا يتجاوز 100 حرف'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'رقم الجوال مطلوب'],
      trim: true,
      validate: {
        validator: function (v) {
          // Normalize spaces/dashes before regex
          const cleanPhone = v.replace(/[\s\-]/g, '');
          return saudiPhoneRegex.test(cleanPhone);
        },
        message: 'يرجى إدخال رقم جوال سعودي صالح (مثال: 05XXXXXXXX أو +9665XXXXXXXX)',
      },
    },
    serviceType: {
      type: String,
      required: [true, 'الخدمة المطلوبة مطلوبة'],
      trim: true,
      maxlength: [150, 'نوع الخدمة طويل جداً'],
    },
    district: {
      type: String,
      required: [true, 'الحي في الرياض مطلوب'],
      trim: true,
      minlength: [2, 'اسم الحي قصير جداً'],
      maxlength: [100, 'اسم الحي يجب ألا يتجاوز 100 حرف'],
    },
    notes: {
      type: String,
      trim: true,
      maxlength: [1000, 'الملاحظات يجب ألا تتجاوز 1000 حرف'],
      default: '',
    },
    status: {
      type: String,
      enum: {
        values: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        message: '{VALUE} حالة حجز غير صالحة',
      },
      default: 'Pending',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = mongoose.model('Booking', bookingSchema);
