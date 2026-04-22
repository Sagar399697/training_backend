import mongoose, {Schema} from 'mongoose'

const resturantSchema = new Schema(
    {
        resturantName: {
            type: String,
            required: [true,"resturant name is requiredd"],
            unique: true,
            index: true
        },
        resturantAddress: {
            type: String,
            required: [true,"resturant address is requiredd"],
            lower: true,
            trim: true
        },
        phoneNumber: {
            type: String,
            unique: true,
            required: [true,"phone number is requried"]
        },
        activeStatus: {
            type: Boolean,
            required: true,
        }
    }
    ,{timestamps: true})

export const Resturant = mongoose.model('Resturant', resturantSchema)