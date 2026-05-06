---
name: Solaris Connect
colors:
  surface: '#fff8f5'
  surface-dim: '#e9d7cb'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e9'
  surface-container: '#fdeade'
  surface-container-high: '#f7e5d9'
  surface-container-highest: '#f2dfd3'
  on-surface: '#231a13'
  on-surface-variant: '#554336'
  inverse-surface: '#392e26'
  inverse-on-surface: '#ffede3'
  outline: '#887364'
  outline-variant: '#dbc2b0'
  surface-tint: '#914d00'
  primary: '#914d00'
  on-primary: '#ffffff'
  primary-container: '#f48c25'
  on-primary-container: '#5e3000'
  inverse-primary: '#ffb77d'
  secondary: '#875121'
  on-secondary: '#ffffff'
  secondary-container: '#ffb77d'
  on-secondary-container: '#794616'
  tertiary: '#00658e'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b1f5'
  on-tertiary-container: '#00405c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6b3b0a'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#84cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6c'
  background: '#fff8f5'
  on-background: '#231a13'
  surface-variant: '#f2dfd3'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: '0'
  button-text:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.025em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-padding: 1.5rem
  stack-gap-sm: 0.5rem
  stack-gap-md: 1rem
  stack-gap-lg: 2rem
  section-padding-top: 6rem
---

## Brand & Style
Solaris Connect is a vibrant, community-focused platform designed to evoke warmth, optimism, and social energy. The brand personality is "Warmly Modern"—it balances high-energy social discovery with a refined, premium feel.

The design style is **Corporate Modern with Tactile Accents**. It utilizes high-quality photography as a backdrop, paired with ultra-rounded "pill" geometry and soft ambient shadows. The interface feels approachable yet highly polished, using subtle gradients and rotating elements (like the logo) to add a sense of playfulness and life to an otherwise structured layout.

## Colors
The palette is centered around a "Solaris Orange" primary (#f48c25), representing energy and connection. 

- **Primary:** Used for main actions and brand identity. It should be paired with white text for maximum legibility.
- **Secondary/Surface:** We use a warm off-white (`#f8f7f5`) for light mode and a deep chocolate-toned black (`#221910`) for dark mode to maintain the "warm" brand feel even in dark settings.
- **Accents:** Soft pinks and ambers are used sparingly for borders or hover states to prevent the UI from feeling too monochromatic.
- **System:** Text relies on a range of Slates, shifting from `#0f172a` for primary headings to `#94a3b8` for secondary captions.

## Typography
We use **Plus Jakarta Sans** exclusively across all levels to maintain a friendly, geometric, and modern aesthetic. 

- **Headlines:** Set with ExtraBold (800) weight and tight tracking to create a strong visual anchor.
- **Body:** Uses Medium (500) weight for standard text to ensure it holds up against vibrant backgrounds.
- **Interactive:** Buttons and labels use SemiBold or Bold weights with slightly increased letter spacing for clarity and "punch."
- **Scale:** The system emphasizes hierarchy through weight shifts rather than massive size differences, keeping the mobile-first experience compact.

## Layout & Spacing

- **Margins:** A standard 24px (1.5rem) horizontal margin is applied to all main content containers.
- **Rhythm:** Vertical spacing uses a base-4 system. Primary action buttons are spaced 16px apart, while major sections (Hero vs. Actions) use 32px or 64px gaps to create clear visual separation.
- **Safe Areas:** Extra padding is reserved at the bottom (16px) for gesture navigation bars.

## Elevation & Depth
Depth is created through a mix of **Tonal Gradients** and **Ambient Tinted Shadows**.

- **Hero Depth:** A linear gradient transitions from transparent to the background color at the bottom of hero images, allowing text to "emerge" from the image.
- **Shadows:** We do not use neutral grey shadows. Shadows are tinted with the primary color (e.g., `orange-500/20`) to create a glowing, energetic effect rather than a heavy, muddy one.
- **Surface Layering:** Buttons use `shadow-lg` for primary actions and `shadow-sm` or thin borders for secondary/tertiary actions to define a clear hierarchy of importance.

## Shapes
The shape language is defined by **Extreme Roundedness (Pill-shaped)**. 

- **Buttons:** Always use a `full` border-radius to create a friendly, "squishy" tactile feel.
- **Containers:** Large cards or sections use `rounded-2xl` (1rem) to `rounded-3xl` (1.5rem).
- **Icons:** Icons and decorative elements (like the logo) use a `rounded-2xl` (1rem) container with a slight rotation (3-5 degrees) to break the rigid grid and add character.

## Components
- **Primary Button:** Pill-shaped, Primary Orange background, White text. Features a tinted orange shadow. Height is fixed at 56px (h-14).
- **Secondary Button:** Pill-shaped, Transparent background, 2px Primary Orange border. Light tinted hover states (Orange-50).
- **Tertiary/Social Button:** Pill-shaped, White/Slate background with a very subtle border (Pink-200 or Slate-700). Used for third-party integrations like Google.
- **Dividers:** Thin 1px lines (`Slate-200`) interrupted by "Or" text in uppercase Bold (12px) to signify alternative paths.
- **Theme Toggle:** A custom "pill" switch using `light_mode` and `dark_mode` symbols. The toggle track is neutral, with a white circular thumb that slides to indicate state.
- **Input Fields (System Design):** Should follow the pill-shaped pattern with a 2px border on focus matching the primary brand color.