# Medical Electronic Record System (MERS)

## Project Pitch

[View the Google Slides presentation](https://docs.google.com/presentation/d/1GeLxS2Vfk7s-rfQg5BZwmAa7598IFwAhgDJUZYj7aTU/edit?usp=sharing)

Watch Pitch Video [![Merec System Webstack - Portfolio Project - Pitch](https://img.youtube.com/vi/MwmCaMgZG_o/0.jpg)](https://youtu.be/MwmCaMgZG_o?si=fqDKFiTXT4xScK1e)

### Name of the Project
**Medical Electronic Record System (MERS)**

### List of Team Members
- Harvey Kisiangani
- Emmanuel Ukah
- Leon Noel Irumva
- Jean Damascene NGABOYIMANA

### Description of the Project
**Objective:** To create a comprehensive Medical Electronic Record System (MERS) that will enable healthcare providers to efficiently manage patient information, improve data accuracy, and enhance patient care.

**Features:**
- Patient Registration and Profile Management
- Appointment Scheduling
- Medical History Recording
- Prescription and Medication Tracking
- Lab Test Result Integration
- Billing and Invoicing
- Reporting and Analytics

**Project Structure**
```css
MERS/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── patientController.js
│   │   └── appointmentController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Patient.js
│   │   ├── Appointment.js
│   │   └── MedicalHistory.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── patient.js
│   │   └── appointment.js
│   ├── middleware/
│   │   ├── auth.js
│   └── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── PatientRegistration.js
│   │   │   ├── AppointmentScheduler.js
│   │   │   ├── MedicalHistory.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── .env
├── Dockerfile
└── docker-compose.yml
```

### Learning Objectives
**Technical Skills:**
- Full-stack development using modern frameworks
- Database design and management
- RESTful API design and implementation
- Authentication and Authorization mechanisms

**Soft Skills:**
- Team collaboration and project management
- Problem-solving and critical thinking
- Effective communication and presentation skills

### Technologies Used
**Frontend:**
- React.js
- HTML5/CSS3
- Bootstrap

**Backend:**
- Node.js
- Express.js
- MongoDB

**Tools:**
- Git & GitHub
- Postman for API testing
- Docker for containerization

### Third-Party Services
- Authentication via OAuth
- Cloud storage for medical records

### Challenges Already Identified
- Ensuring data privacy and security
- Integrating various modules seamlessly
- Scalability of the application to handle large datasets

### Schedule of Work
Using a Trello or Kanban board to manage tasks and timelines:
- **Week 1:** Project setup, initial design, and database schema
- **Week 2:** Developing core features (Patient Management, Appointment Scheduling)
- **Week 3:** Implementing advanced features (Medical History, Lab Results, Billing)
- **Week 4:** Testing, bug fixing, and final deployment

### Mock-ups
Include visual representations of the key user interfaces (e.g., patient registration form, dashboard).

### Video Recording
A video recording of one or more team members presenting the pitch using the Google Slide presentation will be attached.

[![Watch the video](https://img.youtube.com/vi/MwmCaMgZG_o/0.jpg)](https://youtu.be/MwmCaMgZG_o?si=fqDKFiTXT4xScK1e)

---

**Note:**

- If you are multiple people in your team, decide who is going to do the review.
- Go to slack channel #cohort_X_review (your cohort) and look for “Looking for review for webstack portfolio pitch” that has not been replied to. Once you reply to this message you will become each other's reviewers. Start a DM with one another. Share the correction link in that DM and review each other.
- In case you have not found “Looking for review for webstack portfolio pitch” - then start a new thread with “Looking for review for webstack portfolio pitch” and await a new team to find you.
- Happy reviewing! 💪
