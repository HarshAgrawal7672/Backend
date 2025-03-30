import mongoose from "mongoose";

const orderitemSchema= new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        required:true
    }
})
const orderSchema= new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderItems:{
        type:[orderitemSchema]
    },
    adress:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['Pending','Delivered','Cancelled'],
        default:'Pending'
    }
},{timestamps:true});

export const Order=mongoose.model("Order",orderSchema);