import mongoose, { Schema, Document } from "mongoose";

// 1️ Define the CartItem interface

export interface ICartItem {
  productId: mongoose.Schema.Types.ObjectId;
  quantity: number;
  size?: string;
  color?: string;
}

// 2️ Define the CartItemSchema schema

const CartItemSchema: Schema = new Schema<ICartItem>({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, default: 1 },
  size: { type: String },
  color: { type: String },
});


// 1️ Define the ICart interface

export interface ICart extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  items: ICartItem[];
  createdAt: Date;
  updatedAt: Date;
}

// 2️ Define the ICart schema

const CartSchema: Schema = new Schema<ICart>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: { type: [CartItemSchema], required: true, default: [] },
  },
  {
    timestamps: true,
  }
);

export const Cart = mongoose.model<ICart>("Cart", CartSchema);
