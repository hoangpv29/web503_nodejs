import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: 3,
    },
    price: {
      type: Number,
      require: true,
    },
    desc: {
      type: String,
    },
    image:{
      type:String
    },
    // categoryId: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "Categories",
    // },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Products", productSchema);
