# 🩺 Prescripto - Doctor Appointment Booking Platform

A comprehensive healthcare management system that connects patients with doctors, streamlining the appointment booking process with integrated payment solutions.

---

## 📋 Problem Statement

In today's fast-paced world, patients face numerous challenges when trying to book medical appointments:

- **Long waiting times** at clinics and hospitals
- **Difficulty in finding** the right specialist
- **Lack of transparency** in doctor availability
- **Inconvenient payment** processes
- **Poor appointment management** systems

**Prescripto** solves these problems by providing:
- ✅ Easy online doctor discovery and booking
- ✅ Real-time doctor availability tracking
- ✅ Secure online payment integration
- ✅ Comprehensive appointment management
- ✅ Admin dashboard for healthcare providers

---

## 🛠️ Tech Stack

### **Frontend**
- **React.js** - UI library for building interactive interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing

### **Payment Integration**
- **Stripe** - International payment processing
- **Razorpay** - Payment gateway for India

### **Cloud Services**
- **Cloudinary** - Image upload and management

### **Development Tools**
- **Git** - Version control
- **VS Code** - Code editor
- **Postman** - API testing

---

## 🚀 Steps to Run the Project

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (Local or Atlas)
- Git
- Stripe Account (for payments)

### **1. Clone the Repository**
```bash
git clone https://github.com/Ayush-Jha1/Prescripto.git
cd Prescripto
```

### **2. Backend Setup**

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
# Copy the content below and add your credentials
```

**Backend `.env` Configuration:**
```properties
PORT=4000

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017
# OR use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/prescripto

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Admin Credentials
ADMIN_EMAIL=admin@prescripto.com
ADMIN_PASSWORD=admin123

# Stripe Payment Gateway
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Razorpay Payment Gateway (Optional)
RAZORPAY_KEY_ID=rzp_test_placeholder
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Currency
CURRENCY=USD

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

```bash
# Start backend server
node server.js
# Server will run on http://localhost:4000
```

### **3. Frontend Setup**

```bash
# Open new terminal
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
```

**Frontend `.env` Configuration:**
```properties
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=USD

# Stripe Public Key
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_publishable_key

# Razorpay Key (Optional)
VITE_RAZORPAY_KEY_ID=rzp_test_your_razorpay_key_id
```

```bash
# Start frontend
npm run dev
# Frontend will run on http://localhost:5173
```

### **4. Admin Panel Setup**

```bash
# Open new terminal
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Create .env file (same as frontend)
```

**Admin `.env` Configuration:**
```properties
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=USD
```

```bash
# Start admin panel
npm run dev
# Admin panel will run on http://localhost:5174
```

### **5. Access the Application**

| Service | URL | Credentials |
|---------|-----|-------------|
| **Patient Frontend** | http://localhost:5173 | Register new account |
| **Admin Panel** | http://localhost:5174 | admin@prescripto.com / admin123 |
| **Backend API** | http://localhost:4000 | - |
| **Database Viewer** | http://localhost:4000/database-viewer | Admin credentials |

---

## 💳 Payment Setup (Optional)

### **Stripe Integration**

1. Create account at: https://dashboard.stripe.com/register
2. Get test API keys from: https://dashboard.stripe.com/test/apikeys
3. Add keys to `.env` files (backend and frontend)
4. Test with card: `4242 4242 4242 4242`

### **Test Card Details**
- **Card Number:** 4242 4242 4242 4242
- **CVV:** 123
- **Expiry:** Any future date (e.g., 12/28)
- **ZIP:** Any postal code (e.g., 12345)

---

## 📁 Project Structure

```
Prescripto/
│
├── backend/                # Node.js + Express backend
│   ├── config/            # Database & cloud configs
│   ├── controllers/       # Business logic
│   ├── middleware/        # Authentication middleware
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── public/            # Static files
│   └── server.js          # Entry point
│
├── frontend/              # React patient interface
│   ├── src/
│   │   ├── assets/       # Images & resources
│   │   ├── components/   # Reusable components
│   │   ├── context/      # State management
│   │   ├── pages/        # Page components
│   │   └── App.jsx       # Main app component
│   └── index.html        # HTML template
│
└── admin/                 # React admin panel
    ├── src/
    │   ├── assets/       # Admin assets
    │   ├── components/   # Admin components
    │   ├── context/      # Admin state
    │   ├── pages/        # Admin pages
    │   └── App.jsx       # Admin app component
    └── index.html        # Admin HTML template
```

---

## ✨ Features

### **For Patients**
- 👤 User registration and authentication
- 🔍 Browse doctors by specialty
- 📅 Book appointments with available doctors
- 💳 Secure online payment (Stripe/Razorpay)
- 📋 View and manage appointments
- ❌ Cancel appointments
- 👨‍⚕️ View doctor profiles and experience

### **For Doctors**
- 🔐 Doctor authentication
- 📊 Personal dashboard
- 📅 View scheduled appointments
- ✅ Mark appointments as completed
- ❌ Cancel appointments
- 👤 Update profile information
- 💰 View earnings

### **For Admins**
- 🏥 Complete system management
- ➕ Add new doctors
- 📋 View all appointments
- 👥 Manage users and doctors
- 📊 Dashboard with analytics
- 🗄️ Database viewer
- 💼 Control doctor availability

### **Payment Integration**
- 💳 Stripe payment gateway
- 🇮🇳 Razorpay for Indian market
- ✅ Payment verification
- 📧 Payment confirmation
- 🔒 Secure transactions

---

## 🔒 Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Protected API routes
- ✅ Role-based access control
- ✅ Secure payment processing
- ✅ Environment variable protection

---

## 🌐 API Endpoints

### **User Routes**
```
POST   /api/user/register          - Register new user
POST   /api/user/login             - User login
GET    /api/user/profile           - Get user profile
PUT    /api/user/update-profile    - Update profile
POST   /api/user/book-appointment  - Book appointment
GET    /api/user/appointments      - List appointments
POST   /api/user/cancel-appointment - Cancel appointment
POST   /api/user/payment-stripe    - Stripe payment
POST   /api/user/payment-razorpay  - Razorpay payment
```

### **Admin Routes**
```
POST   /api/admin/login            - Admin login
POST   /api/admin/add-doctor       - Add new doctor
GET    /api/admin/appointments     - View all appointments
GET    /api/admin/all-doctors      - List all doctors
GET    /api/admin/dashboard        - Dashboard data
GET    /api/admin/view-database    - Database viewer
```

### **Doctor Routes**
```
POST   /api/doctor/login           - Doctor login
GET    /api/doctor/appointments    - Doctor's appointments
POST   /api/doctor/complete-appointment - Mark complete
POST   /api/doctor/cancel-appointment   - Cancel appointment
GET    /api/doctor/dashboard       - Doctor dashboard
GET    /api/doctor/profile         - Doctor profile
```

---

## 🐛 Troubleshooting

### **Common Issues**

**1. Backend won't start:**
- Check if MongoDB is running
- Verify `.env` file exists with correct values
- Ensure port 4000 is available

**2. Payment not working:**
- Verify Stripe keys are correct
- Check if keys start with `sk_test_` and `pk_test_`
- Restart servers after updating keys

**3. Database connection error:**
- Check MongoDB connection string
- Ensure MongoDB service is running
- Verify network connectivity

**4. Frontend can't connect to backend:**
- Verify backend is running on port 4000
- Check `VITE_BACKEND_URL` in frontend `.env`
- Disable any ad-blockers or firewalls

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Developer

**Ayush Jha**
- GitHub: [@Ayush-Jha1](https://github.com/Ayush-Jha1)
- Repository: [Prescripto](https://github.com/Ayush-Jha1/Prescripto)

---

## 🙏 Acknowledgments

- React and Node.js communities
- Stripe and Razorpay for payment solutions
- MongoDB for database services
- Cloudinary for image management

---

## 📞 Support

For issues, questions, or contributions, please:
1. Open an issue on GitHub
2. Submit a pull request
3. Contact the developer

---

**Made with ❤️ for better healthcare access**
