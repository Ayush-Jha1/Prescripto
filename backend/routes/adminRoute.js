import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addDoctor, allDoctors, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/doctorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
import doctorModel from '../models/doctorModel.js';
import appointmentModel from '../models/appointmentModel.js';
import userModel from '../models/userModel.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

// Database viewer endpoints
adminRouter.get("/view-database", authAdmin, async (req, res) => {
    try {
        const collections = {};
        
        // Get all doctors
        collections.doctors = await doctorModel.find({}).select('-password');
        
        // Get all users
        collections.users = await userModel.find({}).select('-password');
        
        // Get all appointments
        collections.appointments = await appointmentModel.find({});
        
        // Get collection stats
        const stats = {
            doctorsCount: collections.doctors.length,
            usersCount: collections.users.length,
            appointmentsCount: collections.appointments.length
        };
        
        res.json({ 
            success: true, 
            message: "Database contents retrieved successfully",
            stats,
            collections 
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
});

export default adminRouter;