import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      
    },
    name: { type: String  },
    email: { type: String  },
    street: { type: String },
    city: { type: String,},
    state: { type: String,  },
    postalCode: { type: String,  },
    country: { type: String,  },
    phone: { type: String, },
    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Address || mongoose.model("Address", AddressSchema);







