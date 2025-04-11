# Spotter Backend

The backend server for the Spotter attendance management system, built with Node.js and Express.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/spotter
   JWT_SECRET=your_jwt_secret
   ```

## Running the Server

Development mode:
```bash
npm run dev
# or
yarn dev
```

Production mode:
```bash
npm start
# or
yarn start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user (admin only)
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

### Sessions
- `POST /api/sessions` - Create new session
- `PUT /api/sessions/:id/end` - End session
- `GET /api/sessions/professor` - Get professor's sessions
- `GET /api/sessions` - Get all sessions (admin only)
- `GET /api/sessions/:id` - Get session by ID

### Attendance
- `POST /api/attendance/mark` - Mark attendance
- `GET /api/attendance/history` - Get attendance history
- `GET /api/attendance/stats` - Get attendance statistics

## Database Schema

### User
```javascript
{
  name: String,
  email: String,
  password: String,
  role: String, // 'student', 'professor', 'admin'
  status: String, // 'active', 'inactive'
  lastLogin: Date
}
```

### Session
```javascript
{
  professorId: ObjectId,
  course: String,
  startTime: Date,
  endTime: Date,
  duration: Number,
  attendanceCount: Number
}
```

### Attendance
```javascript
{
  sessionId: ObjectId,
  studentId: ObjectId,
  timestamp: Date
}
```

## Error Handling

The API uses standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

Error responses include a message and error code:
```json
{
  "message": "Error description",
  "code": "ERROR_CODE"
}
```

## Testing

Run tests:
```bash
npm test
# or
yarn test
```

## Deployment

1. Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Contributing

See the main [README](../README.md) for contribution guidelines. 