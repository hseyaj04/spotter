# Spotter - Modern Attendance Management System

Spotter is a modern, user-friendly attendance management system that leverages QR code technology to streamline attendance tracking for educational institutions. The system provides distinct interfaces for students, professors, and administrators, each tailored to their specific needs.

## Features

### For Students
- Real-time attendance marking via QR code scanning
- Dashboard with attendance statistics and trends
- Course-wise attendance tracking
- Visual progress indicators
- Dark mode support

### For Professors
- QR code generation for attendance sessions
- Real-time attendance monitoring
- Session management (start/end)
- Attendance analytics and reports
- Course management

### For Administrators
- User management (students, professors)
- Course management
- System-wide analytics
- Role-based access control
- Comprehensive reporting


![image](https://github.com/user-attachments/assets/a35a3b72-a6fe-4587-a50c-b80834e811d7) ![image](https://github.com/user-attachments/assets/6779392e-2c46-4b83-96c1-4f04b0b06a44) ![image](https://github.com/user-attachments/assets/f612aece-3927-4d74-8401-4da45a652461) ![image](https://github.com/user-attachments/assets/a4e26985-0622-413a-9c13-3c6a474e873e)




## Tech Stack
 - MongoDB
 - Express.js
 - React.js
 - Node.js
### Frontend
- React 18
- Vite
- Tailwind CSS
- Headless UI
- Heroicons
- React Router
- React Hot Toast
- React QR Code

### Backend (To be implemented)
- Node.js
- Express
- MongoDB
- JWT Authentication
- Socket.IO (for real-time features)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spotter.git
cd spotter
```

2. Install dependencies:
```bash
cd frontend
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts (theme, auth)
│   ├── pages/          # Page components
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Static assets
└── index.html          # HTML template
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## UI/UX Features

- Responsive design for all screen sizes
- Dark mode support
- Smooth animations and transitions
- Glassmorphism design elements
- Intuitive navigation
- Real-time feedback
- Error handling with toast notifications

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/)
- [Heroicons](https://heroicons.com/)
- [React Router](https://reactrouter.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [React QR Code](https://www.npmjs.com/package/react-qr-code)

## Future Enhancements

- Mobile app development
- Biometric authentication
- Advanced analytics
- Integration with learning management systems
- Automated attendance reminders
- Export functionality for reports
- Multi-language support 
