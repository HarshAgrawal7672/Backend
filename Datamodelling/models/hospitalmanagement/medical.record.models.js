import mongoose from 'mongoose';

const medicalreportSchema = new mongoose.Schema({},{timestamps:true});

export const MedicalReport= mongoose.model('MedicalReport',medicalreportSchema);