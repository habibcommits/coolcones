# Cool Cones Design Guidelines

## Design Approach

**Reference-Based Approach** inspired by premium ice cream parlors like Jeni's Ice Cream and modern dessert establishments. The design balances playful energy with clean sophistication, ensuring the ice cream imagery takes center stage while maintaining professional credibility.

**Core Principles:**
- Appetite appeal through vibrant imagery
- Clean, spacious layouts that don't compete with product photos
- Playful yet refined aesthetic suitable for both casual visitors and premium positioning
- Dual-theme compatibility (light for daytime freshness, dark for evening sophistication)

---

## Typography

**Primary Font:** Poppins (Google Fonts) - Modern, friendly, highly readable
- Hero Headlines: 700 weight, 3.5rem (desktop), 2.5rem (mobile)
- Section Headings: 600 weight, 2.5rem (desktop), 1.875rem (mobile)
- Subheadings: 500 weight, 1.5rem
- Body Text: 400 weight, 1rem, line-height 1.7
- Menu Items: 600 weight, 1.25rem
- Captions/Labels: 400 weight, 0.875rem

**Secondary Font:** Inter (Google Fonts) - For body content and UI elements
- Maintains readability in smaller sizes
- Use for navigation, forms, buttons, and detailed descriptions

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 8, 12, 16, 20, 24, 32
- Component padding: p-8 to p-12
- Section vertical spacing: py-20 (desktop), py-12 (mobile)
- Element gaps: gap-8 for cards, gap-4 for list items
- Container max-width: max-w-7xl with px-6 horizontal padding

**Grid System:**
- Menu items: 3 columns (lg), 2 columns (md), 1 column (mobile)
- Gallery: 4 columns (lg), 3 columns (md), 2 columns (mobile) - masonry style
- Testimonials: 3 columns (lg), 2 columns (md), 1 column (mobile)

---

## Section-Specific Design

### Navigation Bar
- Sticky header with backdrop blur effect
- Logo left, navigation center, theme toggle right
- Smooth scroll navigation with active section highlighting
- Mobile: Hamburger menu with slide-in drawer
- Height: h-20, backdrop-blur-md with subtle shadow

### Hero Section (Home)
- Full viewport height (90vh) with large hero image
- Ice cream imagery: Vibrant soft-serve cone or sundae with toppings
- Centered content overlay with blurred background panel (backdrop-blur-lg, bg-opacity-80)
- Main headline + subheadline + CTA button
- Animated scroll indicator at bottom
- **Hero Image:** Colorful ice cream cone or sundae, professional food photography, bright and appetizing

### About Us
- Two-column layout: Text left, image/collage right (desktop)
- Stack on mobile
- Include brand story, mission statement, and what makes Cool Cones special
- Supporting image showing the parlor interior or team

### Menu Section
- Category tabs or headers: Soft Serve, Sundaes, Waffles, Milkshakes, Specialty Items
- Card-based layout with image, item name, description, and price
- Hover effect: subtle lift and shadow enhancement
- Each card: rounded-2xl, overflow-hidden for images
- **Menu Item Images:** Professional food photography of each item, well-lit, appetizing

### Gallery
- Masonry grid layout showcasing product diversity
- Clickable images with lightbox overlay for full-screen viewing
- Mix of product shots, ambiance photos, and customer moments
- Lazy loading for performance
- **Gallery Images:** 12-16 images from Instagram showcasing ice cream varieties, toppings, parlor atmosphere, happy customers

### Testimonials
- Card-based layout with customer photo, name, rating (stars), and review text
- Alternating card backgrounds for visual interest
- Include 5-6 testimonials minimum
- Star ratings prominently displayed

### Location
- Two-column: Embedded Google Maps left, contact details right
- Maps iframe: rounded corners, h-96 minimum
- Contact info: Address, phone, hours, directions link
- Decorative ice cream cone illustration or pattern

### Contact Us
- Clean form with: Name, Email, Phone, Message fields
- Form left, additional contact methods right (WhatsApp, social, business hours)
- Clear CTA button: "Send Message"
- Success/error state handling

### Footer
- Three-column layout: Branding/tagline, Quick Links, Social Media
- Social icons: Instagram, Facebook (prominent, large clickable areas)
- Copyright and attribution
- Background slightly darker/lighter than body (theme-dependent)

---

## Component Library

**Buttons:**
- Primary: Rounded-full, px-8, py-3, font-semibold
- When on images: backdrop-blur-md with semi-transparent background
- Icon buttons: Square aspect ratio, p-3, rounded-lg

**Cards:**
- Rounded-2xl corners throughout
- Shadow: shadow-lg on hover, shadow-md default
- Padding: p-6 for content areas
- Image cards: overflow-hidden with aspect-ratio-square or 4:3

**Theme Toggle:**
- Top right corner, always visible
- Sun/Moon icon toggle
- Smooth transition between themes
- Position: fixed, top-8, right-8

**WhatsApp Popup:**
- Fixed bottom-right: bottom-8, right-8
- Circular button (w-16, h-16) with WhatsApp icon
- Pulse animation for attention
- Click opens WhatsApp chat link
- Subtle shadow and hover lift effect

**Form Inputs:**
- Rounded-lg, px-4, py-3
- Border thickness: 2px
- Focus state: ring effect with theme accent
- Labels above inputs, font-medium

---

## Theme Implementation

**Light Theme:**
- Clean, fresh, bright atmosphere
- Ample whitespace
- Soft shadows for depth
- High contrast text for readability

**Dark Theme:**
- Sophisticated evening ambiance
- Reduced eye strain
- Preserve image vibrancy (avoid dimming product photos)
- Subtle gradients for visual interest

**Transition:** All theme switches use transition-colors duration-200 for smooth experience

---

## Images Strategy

**Essential Images:**
1. **Hero Background:** Large, professional ice cream photograph (1920x1080 minimum)
2. **About Section:** Parlor interior or team photo
3. **Menu Items:** 15-20 product photos (cones, sundaes, waffles, shakes)
4. **Gallery:** 12-16 diverse images from Instagram feed
5. **Testimonial Avatars:** 6 customer photos (use placeholder if not available)

All images should be optimized for web (WebP format preferred), with appropriate alt text for accessibility.

---

## Animations

**Use Sparingly:**
- Hero: Gentle fade-in on load
- Scroll reveal: Sections fade up as they enter viewport (intersection observer)
- WhatsApp button: Subtle pulse animation
- Theme toggle: Smooth icon rotation
- Card hovers: Gentle lift (translateY: -4px)
- No parallax, no excessive motion

---

## Accessibility

- Minimum touch target: 44x44px
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus visible states for all interactive elements
- Color contrast ratios meet WCAG AA standards in both themes
- Form validation with clear error messages