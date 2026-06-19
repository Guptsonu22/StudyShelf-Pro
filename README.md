# StudyShelf Pro

StudyShelf Pro is a student-focused educational resource dashboard built with Next.js. The goal of this project is to keep college notes, coding notes, cheat sheets, roadmaps, placement preparation, quizzes, study tips, and mock interview practice in one clean web application.

> Current status: This project is currently frontend-focused. Backend, database, real authentication, file upload, and API integrations are not connected yet.

## Project Overview

StudyShelf Pro helps students access learning resources from one place instead of searching across many websites and folders. The application currently contains static/demo data and frontend pages for the main study sections.

The project can later be extended into a complete full-stack platform where admins can manage content, students can save resources, and users can upload or download study material.

## Current Features

- Dashboard with all major learning sections
- College notes section with course/category pages
- Coding languages and programming learning pages
- Cheat sheets page with search functionality
- Roadmaps section for skill-based, role-based, and project idea paths
- Placement drives page
- Quiz center page
- Study tips page
- Mock Interview AI page
- Login and signup UI
- Mock authentication using localStorage
- Responsive UI using Tailwind CSS
- Animated cards using Framer Motion
- Reusable UI components based on shadcn/ui and Radix UI

## Important Note About Backend

Backend is not connected in the current version.

At present:

- Login and signup are mock frontend flows.
- User data is stored only in browser localStorage.
- Cheat sheets, notes, roadmaps, quizzes, and placement data are mostly static frontend data.
- View and download actions are UI placeholders in some sections.
- No real database is connected.
- No real admin panel is connected.
- No secure authentication or authorization is implemented yet.

This means the app is good for frontend demonstration, UI development, and planning the product flow, but it still needs backend integration before production use.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Radix UI primitives
- Framer Motion
- Lucide React icons
- Supabase client package installed for future backend/auth/database integration
- Vercel Blob package installed for future file storage integration

## Main Pages

| Page | Route | Status |
| --- | --- | --- |
| Dashboard | `/` | Frontend ready |
| Login | `/login` | Mock frontend auth |
| Signup | `/signup` | Mock frontend auth |
| College Notes | `/college-notes` | Frontend ready |
| Coding Languages | `/coding-languages` | Frontend ready |
| Cheat Sheets | `/cheat-sheets` | Frontend ready with search |
| Roadmaps | `/roadmaps` | Frontend ready |
| Placement Drives | `/placement-drives` | Frontend ready |
| Quiz Center | `/quiz-center` | Frontend ready |
| Study Tips | `/study-tips` | Frontend ready |
| Mock Interview AI | `/mock-interview-ai` | Frontend ready/demo |

## Cheat Sheets Module

The cheat sheets page currently includes:

- Git Commands
- Linux Terminal
- Regular Expressions
- SQL Queries
- Docker Commands
- CSS Flexbox
- Python Basics
- JavaScript ES6+
- React Hooks
- Vim Commands
- Markdown Syntax
- AWS Services

Current functionality:

- Search by cheat sheet name
- Search by category
- Animated cards
- View and Download buttons as frontend placeholders

Future backend work for this module:

- Store cheat sheet data in a database
- Add detailed cheat sheet pages
- Add downloadable PDF files
- Track download count
- Add admin upload/edit/delete options

## Folder Structure

```text
StudyShelf-Pro/
  app/
    cheat-sheets/
    coding-languages/
    college-notes/
    login/
    mock-interview-ai/
    placement-drives/
    quiz-center/
    roadmaps/
    signup/
    study-tips/
    layout.tsx
    page.tsx
  components/
    ui/
    Logo.tsx
    theme-provider.tsx
  hooks/
  lib/
    auth-context.tsx
    utils.ts
  public/
  styles/
  package.json
  tailwind.config.ts
  tsconfig.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/StudyShelf-Pro.git
cd StudyShelf-Pro
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

### 3. Run the development server

Using npm:

```bash
npm run dev
```

Or using pnpm:

```bash
pnpm dev
```

### 4. Open in browser

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production server after build.

```bash
npm run lint
```

Runs linting.

## Future Enhancements

### Backend and Database

- Connect a real backend API
- Add database support using Supabase, PostgreSQL, MongoDB, or another backend service
- Store notes, cheat sheets, roadmaps, quizzes, users, and placement data in the database
- Add proper API routes for create, read, update, and delete operations
- Add backend validation for all forms

### Authentication and User Management

- Replace mock localStorage auth with secure authentication
- Add email/password login
- Add Google/GitHub OAuth login
- Add password reset
- Add protected routes
- Add user profiles
- Add role-based access for student, admin, and contributor

### Admin Panel

- Add admin dashboard
- Add notes upload management
- Add cheat sheet upload management
- Add quiz creation and editing
- Add placement drive management
- Add roadmap content management
- Add user management
- Add content approval workflow

### Notes and File Uploads

- Upload PDF notes
- Upload images and documents
- Store files using Vercel Blob, Supabase Storage, AWS S3, or Cloudinary
- Add preview before download
- Add subject, semester, branch, and category filters
- Add download tracking
- Add bookmarked notes

### Cheat Sheets

- Add detailed pages for each cheat sheet
- Add PDF download support
- Add copy-to-clipboard snippets
- Add categories and tags
- Add difficulty levels
- Add admin-created cheat sheets
- Add user-submitted cheat sheets

### Coding Languages

- Add structured lessons
- Add code examples
- Add syntax highlighting
- Add practice problems
- Add compiler/editor integration in future
- Add progress tracking

### Roadmaps

- Add interactive roadmap progress
- Add completed/pending step tracking
- Add resources for each roadmap step
- Add role-based roadmaps like Frontend Developer, Backend Developer, Full Stack Developer, Data Analyst, AI/ML Engineer, and DevOps Engineer
- Add project-based learning paths

### Quiz Center

- Add dynamic quiz questions from backend
- Add timer-based quizzes
- Add score calculation
- Add result history
- Add leaderboard
- Add topic-wise quizzes
- Add difficulty levels

### Placement Drives

- Add real company drive listings
- Add eligibility filters
- Add application links
- Add deadline reminders
- Add company-wise preparation resources
- Add notification system

### Mock Interview AI

- Connect AI API for real interview practice
- Add role-based interview questions
- Add voice input/output
- Add feedback reports
- Add scoring system
- Add interview history

### Search and Filtering

- Add global search across the whole platform
- Add advanced filters by category, branch, semester, technology, and difficulty
- Add sorting by newest, most downloaded, and most popular

### User Experience

- Add dark mode
- Improve mobile responsiveness
- Add loading skeletons
- Add toast notifications
- Add empty states and error states
- Add better accessibility support
- Add keyboard navigation support

### Production Readiness

- Add environment variables
- Add proper error handling
- Add unit tests and integration tests
- Add analytics
- Add SEO metadata for all pages
- Add sitemap and robots.txt
- Add deployment documentation
- Add CI/CD workflow

## Suggested Backend Models

Possible database tables/collections:

- users
- profiles
- notes
- cheat_sheets
- roadmaps
- roadmap_steps
- quizzes
- quiz_questions
- quiz_attempts
- placement_drives
- bookmarks
- downloads
- feedback

## Environment Variables for Future Backend

When backend is connected, the project may need variables like:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
BLOB_READ_WRITE_TOKEN=
NEXT_PUBLIC_APP_URL=
```

Do not commit real secret keys to GitHub.

## Development Status

| Area | Current Status |
| --- | --- |
| Frontend UI | In progress / mostly ready |
| Backend API | Not connected |
| Database | Not connected |
| Authentication | Mock only |
| File upload | Not connected |
| Admin panel | Not built |
| Deployment | To be configured |

## Contributing

Contributions are welcome. You can help by:

- Improving UI pages
- Adding responsive design fixes
- Creating backend APIs
- Connecting database
- Adding real authentication
- Adding tests
- Improving documentation
- Fixing bugs

Basic contribution flow:

```bash
git checkout -b feature/your-feature-name
git add .
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

Then open a pull request.

## Project Goal

The final goal of StudyShelf Pro is to become a complete student learning platform where students can:

- Find college notes quickly
- Learn programming concepts
- Download cheat sheets
- Follow career roadmaps
- Prepare for placements
- Practice quizzes
- Improve study habits
- Practice mock interviews

## License

This project can be released under the MIT License. Add a `LICENSE` file before publishing if required.

