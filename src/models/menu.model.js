import mongoose, {Schema} from 'mongoose'

const menuSchema = new Schema(
    {
        resturant_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Resturant'
        },
        item_name: {
            type: String,
            required: true,
        },
        item_price: {
            type: mongoose.Schema.Types.Decimal128,
            required: true
        },
        item_image: {
            type: String, // Cloudinary Url
        },
        category: {
            type: String,
            lower: true
        },
        availability: {
            type: Boolean,
            required: true
        }
    }
    ,{timestamps: true})

export const Menu = mongoose.model('Menu', menuSchema)