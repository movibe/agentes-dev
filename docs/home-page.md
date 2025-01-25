# Home Page

## Created Components

### Layout

- `Layout.tsx`: Base component that wraps all pages
- `Navbar.tsx`: Responsive navigation bar with mobile menu
- `Footer.tsx`: Footer with information and useful links

### Templates

- `TemplateCard.tsx`: Card for displaying templates with support for:
  - Cover image
  - Title and description
  - Used editor
  - Technologies (tags)
  - Like system

## Home Page Structure

### Hero Section

- Main title with highlight
- Project description
- Animated gradient background:
  - Light colors: primary -> blue -> indigo -> primary
  - Dark colors: gray -> indigo -> blue -> gray
  - Smooth 15-second animation
- Call-to-action buttons:
  - View Templates (primary button)
  - Explore Editors (outline button)

### Featured Templates

- Section with featured templates
- Responsive card grid
- Mocked data for demonstration

## Styling

- Using Tailwind CSS
- Light/dark theme support
- Responsive design
- Custom colors:
  - Primary: #0070f3
  - Secondary: #1a1a1a
- Animations:
  - Background gradient in Hero
  - Smooth button transitions
  - Interactive hover states

## Next Steps

1. Implement authentication system
2. Create complete template listing page
3. Develop template details page
4. Add template like functionality
5. Implement search and filter system
