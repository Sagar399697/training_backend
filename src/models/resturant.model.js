import mongoose, { Schema } from 'mongoose';

const restaurantSchema = new Schema({
    restaurantName: {
        type: String,
        required: [true, "restaurant name is required"],
        trim: true,
        index: true
    },

    restaurantAddress: {
        type: String,
        required: [true, "restaurant address is required"],
        lowercase: true,
        trim: true
    },

    phoneNumber: {
        type: String,
        required: [true, "phone number is required"]
    },

    isActive: {
        type: Boolean,
        default: true
    },

    campus: {
        type: Schema.Types.ObjectId,
        ref: "Campus",
        required: true
    },

    openingTime: {
        type: String
    },

    closingTime: {
        type: String
    }

}, { timestamps: true });

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);