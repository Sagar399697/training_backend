import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },

    totalAmount: {
        type: Number,
        required: true,
        default: 0
    },

    deliveryDetails: {
        phoneNumber: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        notes: String
    },

    status: {
        type: String,
        enum: [
            'pending',
            'preparing',
            'out_for_delivery',
            'delivered',
            'cancelled'
        ],
        default: 'pending',
        index: true
    },

    deliveredAt: Date,
    cancelledAt: Date

}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);