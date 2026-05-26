import mongoose, { Schema } from 'mongoose';

const deliveryAssignmentSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
        unique: true
    },

    deliveryAgent: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    status: {
        type: String,
        enum: ['assigned', 'picked_up', 'delivered'],
        default: 'assigned'
    },

    assignedAt: {
        type: Date,
        default: Date.now,
        required: true
    },

    pickedUpAt: {
        type: Date
    },

    deliveredAt: {
        type: Date
    },

    notes: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

export const DeliveryAssignment = mongoose.model('DeliveryAssignment', deliveryAssignmentSchema); 