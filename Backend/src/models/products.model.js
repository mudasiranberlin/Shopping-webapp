import mongoose,{Schema} from 'mongoose'
const productSchema = new Schema({
    image: {
        type:String,
        required:true
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      stars: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        required: true,
        min: 0,
      },
    },
    priceCents: {
      type: Number,
      required: true,
      min: 0,
    },
    keywords: {
      type: [String],
      default: [],
    }

},{timestamps:true})

export const Product = mongoose.model("Product",productSchema);