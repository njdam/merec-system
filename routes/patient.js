import express from 'express';
import { getPatients, getPatientById, createPatient, updatePatient, deletePatient, getPatientMedicalHistory } from '../controllers/patientController.js';

const router = express.Router();

router.get('/', getPatients);
router.get('/:id', getPatientById);
router.post('/register', createPatient);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

// Route to get patient's medical history
router.get('/:id/medical-history', getPatientMedicalHistory);

export default router;
