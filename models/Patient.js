import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    medicalHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MedicalHistory' }],
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Patient', PatientSchema);
