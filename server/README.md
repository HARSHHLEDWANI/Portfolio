# Portfolio Backend API

Backend server for the portfolio website built with Node.js and Express.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```
PORT=5000
RESUME_DRIVE_URL=https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing
```

## Running the Server

### Development (with auto-reload):
```bash
npm run dev
```

### Production:
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

### GET /api/projects
Returns all projects.

**Response:**
```json
[
  {
    "title": "Project Title",
    "description": "Project description",
    "bullets": ["Bullet 1", "Bullet 2"],
    "tags": ["React", "Node.js"],
    "status": "completed"
  }
]
```

### GET /api/skills
Returns grouped skills by category.

**Response:**
```json
{
  "categories": [
    {
      "category": "Languages",
      "skills": ["Python", "Java"]
    }
  ]
}
```

### GET /api/education
Returns education entries.

**Response:**
```json
[
  {
    "institution": "University Name",
    "degree": "Degree Name",
    "duration": "2020 - 2024",
    "location": ""
  }
]
```

### POST /api/contact
Submit contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message received. I'll get back to you soon."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Validation error",
  "errors": {
    "email": "Please enter a valid email address"
  }
}
```

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Email service integration (Nodemailer/SendGrid)
- Authentication for admin panel
- Rate limiting
- Input sanitization


