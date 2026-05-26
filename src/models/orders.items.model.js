import mongoose, { Schema } from 'mongoose';

const orderItemSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
        index: true
    },

    menu: {
        type: Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
    },

    name: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        min: 1
    },

    priceAtPurchase: {
        type: Number,
        required: true
    }

}, { timestamps: true });

export const OrderItem = mongoose.model('OrderItem', orderItemSchema);