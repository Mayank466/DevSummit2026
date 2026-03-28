To run this project on a different system, you primarily need Node.js installed. The project's dependencies are automatically 
tracked in package.json, so you don't need to install them one by one manually.

1. System Requirements
Node.js: Version 18.0 or higher.
Package Manager: You can use npm (comes with Node), yarn, or pnpm.
2. Core Dependencies
If you were to install them manually, these are the essential packages:
  react & react-dom: The core React 19 framework.
  framer-motion: Used for the BatSwarm animations and smooth transitions.
  vite: The build tool and development server.
  tailwindcss & @tailwindcss/vite: The styling engine (Tailwind CSS v4).
  typescript: For Type checking.
3. How to Setup on a New System
Once you have the code on the new system, just run these two commands in the project folder:

# 1. Install all required modules at once
npm install

Note:
npn install @tailwindcss/postcss
(if only 34 modules are installed only)


# 2. Start the development server
nnpm run dev

Important Note on Assets
Make sure the public/ folder is copied over entirely! It contains the critical assets used in the code:
