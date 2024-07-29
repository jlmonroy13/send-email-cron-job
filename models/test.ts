import { Schema, model, models } from "mongoose";

const testSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Test = models?.Test || model("Test", testSchema);

export default Test;
