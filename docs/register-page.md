# Registration Page

## Created Components

### Form

- `Input.tsx`: Reusable input component with support for:
  - Label
  - Error validation
  - Light/dark theme
  - Custom styling

### Schemas

- `auth.ts`: Validation schema using Zod for:
  - Name (min: 3, max: 50 characters)
  - Email (valid format)
  - Password (min: 8 characters, uppercase, lowercase, and number)
  - Password confirmation

## Features

### Registration Form

- Real-time field validation
- Visual error feedback
- Loading state during submission
- Integration with React Hook Form and Zod

### Social Authentication

- GitHub login button (prepared for Supabase integration)
- Visual separator between form and social authentication

## Styling

- Responsive design
- Light/dark theme support
- Visual feedback for states:
  - Hover
  - Focus
  - Error
  - Loading
- Consistency with project visual identity

## Next Steps

1. Implement Supabase Auth integration
2. Add more social authentication providers
3. Create login page
4. Implement post-authentication redirection
5. Add unit and integration tests
