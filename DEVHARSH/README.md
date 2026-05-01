# Lumina Care - Digital Hospital Management System

A futuristic, premium, and highly interactive Full-Stack Digital Hospital Management System.

## Tech Stack
- **Frontend**: Next.js 13, Tailwind CSS, Framer Motion, Lucide React, Recharts
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Authentication**: JWT-based with Role-Based Access Control (RBAC)

## Project Structure
```
/client       # Next.js Frontend
/server       # Express.js Backend
```

## Setup Instructions

### Backend Setup
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (already created for you) and ensure your MongoDB URI is correct.
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- **Futuristic UI**: Dark mode, glassmorphism, neon glows, and smooth transitions.
- **Dashboard**: Animated stats, weekly inflow charts, and disease trend analysis.
- **Patient Management**: Full CRUD operations with search and filter.
- **Doctor Profiles**: Specialization cards with availability status.
- **Appointment System**: Real-time slot management and status tracking.
- **Pharmacy Inventory**: Stock level monitoring with low-stock alerts.
- **Analytics**: Deep insights into patient growth and department performance.
- **Secure Auth**: JWT-based login for Admins, Doctors, and Patients.

## UI Details
- **Glassmorphism**: Components use backdrop-blur and semi-transparent backgrounds.
- **Neon Gradients**: Buttons and active states feature glowing borders and shadows.
- **Framer Motion**: Page transitions and element entrance animations.
- **Responsive**: Fully optimized for mobile and desktop views.
