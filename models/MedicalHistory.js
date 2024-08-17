import mongoose from 'mongoose';

const MedicalHistorySchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    diagnosis: { type: String, required: true },
    treatment: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

export default mongoose.model('MedicalHistory', MedicalHistorySchema);
