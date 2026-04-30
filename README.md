 # SkillSphere – Online Learning Platform

## Live Site
https://skillsphere-ibtesam.vercel.app/

## GitHub Repository
https://github.com/Tahaimage8/skillsphere

## Project Purpose
SkillSphere is a modern online learning platform where users can explore different skill-based courses such as web development, design, marketing, and more. Users can browse courses, view popular and trending courses, check course details, and manage their profile after authentication.

## Key Features
- Responsive online learning platform
- Persistent Navbar and Footer
- Home page with hero section
- Popular courses section
- Trending courses section
- Learning tips section
- Top instructors section
- All courses page
- Course details page
- Protected route for private pages
- User login and registration system
- Google social login
- User profile page
- Update user name and image
- Search courses by title
- Toast notifications for success and error messages
- Loader implementation
- Not-found page implementation
- Clean Next.js App Router structure

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

## Authentication
This project uses BetterAuth for authentication. Users can register with name, email, photo URL, and password. Users can also login using email/password or Google social login.

## Environment Variables
The project uses environment variables to secure sensitive configuration keys such as authentication secret, database URL, Google client ID, and Google client secret.

## Main Routes
- `/` – Home page
- `/courses` – All courses page
- `/courses/[id]` – Course details page
- `/login` – Login page
- `/signup` – Register page
- `/profile` – My Profile page

## Deployment
The application is deployed on Vercel.

Live URL: https://skillsphere-ibtesam.vercel.app/