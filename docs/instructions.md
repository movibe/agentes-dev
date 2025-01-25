# Project Creation Instructions

This document provides detailed guidelines for creating a project template registration system, allowing users to select different code editors and technologies for creating custom agents. The project will be developed using Next.js, Tailwind CSS, Zustand, and React Query on the front-end, with Supabase for authentication and database on the back-end.

## 1. Development Environment Setup

- **Next.js**: React framework that facilitates server-side rendering and static site generation.

- **Tailwind CSS**: Utility-first CSS framework for rapid and responsive styling.

- **Zustand**: Lightweight state management library for React.

- **React Query**: Library for asynchronous state management and server data caching.

- **Supabase**: Platform providing real-time authentication and database services.

## 2. Project Structure

### 2.1. Home Page

- **Main Layout**:

  - Fixed left sidebar for filters
  - Responsive main content area

- **Filter Sidebar**:

  - Technology filters (React, Node.js, etc.)
  - IDE filters (VSCode, WebStorm, etc.)
  - Sort by likes count
  - Reset/clear filters option

- **Main Area**:

  - Responsive template grid
  - Cards with preview and basic information
  - Results pagination

- **Template Catalog**: Display a list of templates with filters by code editor, technologies (React, Tailwind, Node) and likes count.

- **Registration Option**: Allow users to register using GitHub authentication.

- **Project Details**: Provide information about the project's functionality and objectives.

- **Ad Spaces**: Reserve areas for possible advertisements or partnerships.

- **Template Interaction**: Allow users to like and comment on each template.

### 2.2. User Registration

- **Authentication**: Use Supabase for GitHub authentication.

- **Additional Information**: Request name and email during registration process.

### 2.3. Template Registration

- **Code Editor Selection**: Allow users to choose or register a new code editor.

- **Template Creation/Editing**:
  - **Question Registration**: Include questions that will help generate instructions for different projects.
  - **Instruction Generation**: Based on answers, generate specific instructions for each project type.

## 3. Technologies Used

- **Front-end**:

  - **Next.js**: For page structuring and routing.
  - **Tailwind CSS**: For modern and responsive styling.
  - **Zustand**: For simple and efficient state management.
  - **React Query**: For asynchronous data management and caching.

- **Back-end**:
  - **Supabase**: For authentication and real-time database.

## 4. Coding Standards

- **Linter**: Configure ESLint to maintain code consistency and quality.

- **Code Style**: Follow best coding practices, including consistent naming and file organization.

## 5. Styling

- **Layout**: Develop a modern and responsive design using Tailwind CSS.

- **Themes**: Implement light and dark theme options for better user experience.

## 6. Documentation

- **Comments**: Add clear and concise code comments to facilitate understanding.

- **Documentation Files**: Maintain an updated README.md with usage and development instructions.

## 7. Error Handling

- **Front-end**: Implement error boundaries to catch component exceptions.

- **Back-end**: Handle API errors with user-friendly messages.

- **Monitoring**: Integrate error monitoring service (e.g., Sentry).

## 8. Final Considerations

Following these guidelines, the system development will be aligned with best practices, ensuring a robust, efficient, and maintainable application.
