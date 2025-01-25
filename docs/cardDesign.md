# Template Card Design

## Overview

The card design has been updated to follow a more modern and informative style, inspired by the Cursor Rules layout. Each card presents information in a clear and hierarchical way, with intuitive interactions.

## Card Anatomy

### 1. Badges and Actions

- **Status Badge**

  - Position: Top left
  - Style: Soft yellow background for "New"
  - Other possible statuses: Popular, Trending, etc.

- **Like Button**
  - Position: Top right
  - Style: Floating circle with shadow
  - States: Normal and Liked (red)
  - Hover: Increases shadow and changes color

### 2. Main Content

- **Title**

  - Font: Semibold, larger size
  - Color: Primary text (dark/light)
  - Bottom margin for separation

- **Description**
  - Font: Regular, smaller size
  - Color: Secondary text
  - Maximum of 2-3 lines

### 3. Metadata

- **Editor**

  - Label in uppercase
  - Badge with soft background
  - Editor name in highlight

- **Technologies**
  - Horizontal list with scroll
  - Colored badges by technology
  - Custom colors with opacity

### 4. Footer

- **Likes Counter**

  - Number + "likes" text
  - Left aligned
  - Subtle but readable style

- **Action Button**
  - "View details" text
  - Highlight color (blue)
  - Right aligned

## Styles and Variations

### Colors

```css
/* Color variable examples */
--card-bg: #ffffff;
--card-bg-dark: #1f2937;
--badge-new-bg: #fef3c7;
--badge-new-text: #92400e;
--tech-badge-opacity: 0.15;
```

### Shadows

```css
/* Card */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Like button */
--shadow-float: 0 2px 4px rgba(0, 0, 0, 0.1);
```

### States

1. **Normal**

   - Soft shadow
   - Default backgrounds

2. **Hover**

   - Increases shadow
   - More prominent buttons
   - Smooth transition

3. **Active**
   - Visual feedback on click
   - Slightly reduced scale

## Responsiveness

- **Desktop**: Full size
- **Tablet**: Adjusts to 2 columns
- **Mobile**:
  - Full width
  - Maintains proportions
  - Adequate touch targets

## Accessibility

- Adequate contrast
- Visible focus states
- Aria labels on buttons
- Logical tab order

## Best Practices

1. Maintain visual consistency
2. Use smooth transitions
3. Clear interaction feedback
4. Respect visual hierarchy
5. Ensure readability
