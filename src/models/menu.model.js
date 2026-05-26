import mongoose, { Schema } from 'mongoose';

const menuSchema = new Schema({
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String // Cloudinary URL
    },

    category: {
        type: String,
        enum: ['snacks', 'meal', 'beverage', 'dessert'],
        lowercase: true
    },

    isVeg: {
        type: Boolean,
        default: true
    },

    isAvailable: {
        type: Boolean,
        default: true
    },

    description: {
        type: String,
        trim: true
    }

}, { timestamps: true });

export const Menu = mongoose.model('Menu', menuSchema);