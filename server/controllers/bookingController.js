import mongoose from 'mongoose';
import { Booking } from '../models/Booking.js';

// Clean and normalize Saudi phone number
const normalizeSaudiPhone = (phone) => {
  let cleaned = phone.replace(/[\s\-]/g, '');
  if (cleaned.startsWith('00966')) {
    cleaned = '+' + cleaned.slice(2);
  } else if (cleaned.startsWith('966')) {
    cleaned = '+' + cleaned;
  } else if (cleaned.startsWith('05')) {
    cleaned = '+966' + cleaned.slice(1);
  }
  return cleaned;
};

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
export const createBooking = async (req, res, next) => {
  try {
    const { customerName, phoneNumber, serviceType, district, notes } = req.body;

    // Check DB connection status
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'قاعدة البيانات غير متصلة حالياً. يمكنك إتمام الحجز مباشرة عبر واتساب +966543729238',
      });
    }

    if (!customerName || !phoneNumber || !serviceType || !district) {
      return res.status(400).json({
        success: false,
        message: 'يرجى تعبئة كافة الحقول المطلوبة: الاسم، رقم الجوال، الخدمة المطلوبة، والحي في الرياض.',
      });
    }

    const normalizedPhone = normalizeSaudiPhone(phoneNumber);

    const newBooking = await Booking.create({
      customerName: customerName.trim(),
      phoneNumber: normalizedPhone,
      serviceType: serviceType.trim(),
      district: district.trim(),
      notes: notes ? notes.trim() : '',
      status: 'Pending',
    });

    return res.status(201).json({
      success: true,
      message: 'تم استلام طلب الحجز بنجاح! سيتم التواصل معك في أقرب وقت لتأكيد الموعد.',
      data: {
        id: newBooking._id,
        customerName: newBooking.customerName,
        serviceType: newBooking.serviceType,
        district: newBooking.district,
        status: newBooking.status,
        createdAt: newBooking.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get booking details by ID
// @route   GET /api/bookings/:id
// @access  Public (Lookup with ID)
export const getBookingById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'معرف الحجز غير صالح',
      });
    }

    const booking = await Booking.findById(id).select('-__v');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'لم يتم العثور على حجز بهذا المعرّف',
      });
    }

    return res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};
