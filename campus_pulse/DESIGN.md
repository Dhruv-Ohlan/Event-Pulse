# Design System Strategy: The Intelligent Canvas

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Academic Co-Pilot."** 

We are moving away from the "industrial" feel of traditional SaaS and toward an experience that feels like a high-end, digital concierge. This system balances the technical authority of AI with the vibrant energy of student life. To break the "template" look, we utilize **Intentional Asymmetry**: large display type is often offset against dense information clusters, and we leverage overlapping surfaces to create a sense of tactile depth. The goal is to make the UI feel less like a "database" and more like a fluid, intelligent workspace.

---

## 2. Colors: Tonal Depth over Linework
This system rejects the rigidity of the traditional grid in favor of organic, color-driven containment.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or layout containment. Structural boundaries are defined exclusively through background shifts. For example, a dashboard widget should be a `surface-container-lowest` card sitting on a `surface-container-low` background. Use tonal contrast to guide the eye, not lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, semi-translucent vellum.
*   **Base Layer:** `surface` (#f5f7f9)
*   **Secondary Context:** `surface-container-low` (#eef1f3)
*   **Active Interaction/Cards:** `surface-container-lowest` (#ffffff)
*   **Focus Areas:** `surface-container-high` (#dfe3e6)

### The "Glass & Gradient" Rule
To signal "AI Intelligence," use glassmorphism on floating elements (like sidebars or pop-overs). Apply a backdrop blur of 12px-20px combined with a semi-transparent `surface` color. 
*   **Signature Textures:** For primary CTAs and Hero backgrounds, use a linear gradient: `primary` (#4a40e0) to `primary-container` (#9795ff) at a 135° angle. This adds "visual soul" and a sense of movement that flat colors lack.

---

## 3. Typography: The Editorial Scale
We pair **Manrope** (Display/Headline) with **Inter** (Body) to create a high-contrast, editorial feel that balances authority with approachability.

*   **Display (Manrope):** Use `display-lg` (3.5rem) for hero moments and high-impact data visualizations. Tighten letter-spacing (-0.02em) for a premium look.
*   **Headline (Manrope):** `headline-md` (1.75rem) serves as the primary navigation anchor.
*   **Body (Inter):** `body-lg` (1rem) is the workhorse. We prioritize line-height (1.6) to ensure the interface feels airy and readable during long PR drafting sessions.
*   **Labels (Inter):** `label-md` (0.75rem) should always be uppercase with +0.05em tracking when used for metadata or category tags.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "heavy" for a modern student-facing tool. We use light to define space.

*   **The Layering Principle:** Avoid shadows for static layout elements. Use the `surface-container` tiers. A `surface-container-lowest` card on a `surface` background provides enough contrast without visual noise.
*   **Ambient Shadows:** For high-priority floating elements (Modals/Dropdowns), use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(74, 64, 224, 0.06)`. Note the subtle tint of the `primary` color in the shadow to keep it "fresh" rather than "muddy."
*   **The Ghost Border:** If a boundary is required for accessibility, use `outline-variant` (#abadaf) at 15% opacity. It should be felt, not seen.

---

## 5. Components: Fluid Primitives

### Buttons: The Tactile Action
*   **Primary:** Gradient fill (`primary` to `primary-container`). Roundedness: `md` (0.75rem). Use `on-primary` (#f4f1ff) for text.
*   **Secondary:** Ghost style. No background, `primary` text, and a `Ghost Border` that appears only on hover.
*   **States:** On hover, the primary button should "lift" via a subtle `Ambient Shadow` and a 2% scale increase.

### Inputs: The Intelligent Field
*   **Style:** `surface-container-low` background, no border. On focus, transition to `surface-container-lowest` with a 1px `primary` bottom-border only. 
*   **AI Suggestion State:** When the AI "copilot" is typing, the input should have a subtle pulsing `primary` glow.

### Cards & Lists: The No-Divider Rule
*   **Lists:** Forbid the use of 1px horizontal dividers. Use the Spacing Scale `3` (1rem) or `4` (1.4rem) to separate list items. 
*   **Cards:** Use `Roundedness: lg` (1rem). Group related content using background color shifts rather than internal lines.

### Additional Signature Component: "The Pulse Chip"
A bespoke component for Event Pulse. A small, pill-shaped `tertiary` (#983772) chip with a soft "glow" (shadow) used exclusively to highlight AI-generated PR insights or trending college events.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use generous whitespace (Spacing Scale `8` or `10`) between major sections to let the AI-generated content "breathe."
*   **Do** use asymmetrical layouts—e.g., a left-aligned headline with a right-aligned action button floating in a larger margin.
*   **Do** utilize `primary-dim` (#3d30d4) for text links to ensure high-contrast accessibility against light backgrounds.

### Don’t:
*   **Don’t** use pure black (#000000) for text. Use `on-surface` (#2c2f31) to maintain a soft, professional tone.
*   **Don’t** use standard "box-shadow" presets. All shadows must be tinted with the primary or surface-on-variant color.
*   **Don’t** cram information. If a screen feels busy, increase the background-color contrast between containers rather than adding borders.