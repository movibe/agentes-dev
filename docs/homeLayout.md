# Home Page Layout

## Main Structure

```
+------------------+------------------+
|                 |                  |
|    Sidebar      |    Main          |
|    (Filters)    |    Content       |
|                 |                  |
|                 |    (Template     |
|                 |     Grid)        |
|                 |                  |
+------------------+------------------+
```

## Components

### Sidebar (w-64)

- Position: Fixed on the left
- Height: 100vh
- Background: Current theme (light/dark)
- Soft shadow for visual separation

#### Sidebar Sections

1. **Technology Filters**

   - Checkbox list
   - Popular technologies highlighted
   - "See more" option for additional technologies

2. **IDE Filters**

   - Checkbox list
   - Most popular IDEs
   - Search field for other IDEs

3. **Sorting**

   - By likes (most liked first)
   - By date (newest first)
   - By name (A-Z)

4. **Reset Button**
   - Clears all applied filters
   - Visual feedback to user

### Main Area

- Layout: Responsive grid
- Uniform spacing between cards
- Pagination at the bottom
- Loading states for async loading

#### Template Grid

- Responsive:
  - 1 column (mobile)
  - 2 columns (tablet)
  - 3 columns (desktop)
  - 4 columns (large screens)

## Interactivity

- Instant filter updates
- Smooth state transitions
- Visual feedback for user actions
- Filter state persisted in URL

## Responsiveness

- Collapsible sidebar on smaller screens
- Hamburger menu for filter access
- Fluid layout adaptable to different screen sizes
