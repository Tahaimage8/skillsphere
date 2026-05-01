# SkillSphere

SkillSphere is an online course browsing platform. I built this project to practice Next.js App Router, authentication, protected routes, dynamic pages, and responsive UI design.

## Live URL

https://skillsphere-ibtesam.vercel.app/

## Project Purpose

The main purpose of this project is to create a simple learning platform where users can explore different skill-based courses. Users can see course lists, search courses, view course details, create an account, login, and manage their profile.

## Key Features

- Responsive website design
- Home page with course sections
- All courses page
- Search courses by title
- Dynamic course details page
- User registration and login
- Google login
- Protected profile page
- Update user name and image
- Toast notifications
- Loading and not-found page
- Navbar and footer on all pages

## Tech Stack

- Next.js
- React
- Tailwind CSS
- HeroUI
- BetterAuth
- MongoDB
- Motion
- React Toastify
- React Icons
- Lucide React

## NPM Packages Used

- next
- react
- react-dom
- better-auth
- @better-auth/mongo-adapter
- mongodb
- @heroui/react
- @heroui/styles
- motion
- react-toastify
- react-icons
- lucide-react

## Main Routes

- `/` - Home page
- `/courses` - All courses page
- `/courses/[id]` - Course details page
- `/login` - Login page
- `/register` - Register page
- `/profile` - User profile page

## Authentication

This project uses BetterAuth for user authentication. Users can create an account using email and password. Google login is also added for social authentication.

## Deployment

This project is deployed on Vercel.

Live Site: https://skillsphere-ibtesam.vercel.app/