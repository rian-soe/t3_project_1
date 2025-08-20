# Projects Section Setup Guide

## Overview
The Projects section has been added to your Next.js application. It displays a grid of projects with filtering capabilities and interactive elements.

## Features
- **Category Filtering**: Filter projects by type (Web Apps, Mobile Apps, Full Stack, Other)
- **Interactive Cards**: Hover effects with GitHub and live demo links
- **Responsive Design**: Works on all device sizes
- **Technology Tags**: Shows technologies used for each project
- **Smooth Animations**: Hover effects and transitions

## How to Customize

### 1. Add Project Images
Place your project images in the `public/images/` directory. The current placeholder projects expect these images:
- `project-ecommerce.jpg`
- `project-taskmanager.jpg`
- `project-weather.jpg`
- `project-fitness.jpg`
- `project-portfolio.jpg`
- `project-api.jpg`

### 2. Update Project Data
Edit the `projects` array in `src/components/sections/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Your project description...",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/your-project-image.jpg",
    githubUrl: "https://github.com/yourusername/your-repo",
    liveUrl: "https://your-demo-url.com", // Optional
    category: "web" // Options: 'web', 'mobile', 'fullstack', 'other'
  },
  // Add more projects...
];
```

### 3. Customize Categories
Modify the `categories` array to match your project types:

```typescript
const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
  // Add or modify categories as needed
];
```

### 4. Update Project Links
- Replace `githubUrl` with actual GitHub repository URLs
- Replace `liveUrl` with actual demo URLs (or remove if not available)
- Update the placeholder text "yourusername" with your actual GitHub username

## File Structure
```
src/
├── components/
│   └── sections/
│       ├── Projects.tsx          # Main Projects component
│       └── index.ts              # Exports all sections
├── pages/
│   └── index.tsx                 # Main page with Projects section
└── public/
    └── images/                   # Project images go here
```

## Styling
The component uses Tailwind CSS classes and follows the same design pattern as your other sections. You can customize:
- Colors by modifying the color classes (e.g., `bg-blue-600`, `text-gray-900`)
- Spacing by adjusting padding/margin classes
- Animations by modifying transition classes

## Adding New Projects
To add a new project:
1. Add the project image to `public/images/`
2. Add the project data to the `projects` array
3. Update the category counts if needed
4. The component will automatically handle the rest!

## Notes
- Project images are currently using placeholder gradients. Replace with actual project screenshots
- GitHub and live demo links are optional - projects will display without them
- The component automatically handles responsive design and filtering
- All animations and hover effects are built-in and customizable
