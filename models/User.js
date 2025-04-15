import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  phone: String,
  method: string,
  googleId: string,
}, { 
    timestamps: true
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
