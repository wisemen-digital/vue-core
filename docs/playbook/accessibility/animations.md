# Animation, Motion and Effects

## **1. Respect User Preferences with `prefers-reduced-motion`**

- Detect if a user has requested reduced motion on their device and provide alternatives or disable non-essential motion for these users:

```css

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## **2. Avoid Flashing or Strobing Effects**

- Flashing content at frequencies between 3–55 Hz can trigger seizures in users with photosensitive epilepsy.
- Follow WCAG guidelines: avoid more than **3 flashes per second**.

## **3. Minimize Excessive or Unexpected Motion**

- Avoid animations that move rapidly, jerk abruptly, or cause visual dizziness.
- Examples to avoid or tone down:
    - Parallax scrolling with large background shifts
    - Continuous bouncing, shaking, or spinning elements
    - Zoom or scale changes that jump suddenly

## **4. Provide User Controls**

- When animations are critical or complex, provide:
    - Pause, stop, and replay buttons for animated content.
    - Options in settings to disable motion entirely.

## **5. Use Motion Purposefully**

- Motion should enhance comprehension or direct attention without distraction.
- Examples of good uses:
    - Smooth transitions between UI states
    - Highlighting newly added content gently
    - Indicating loading or progress clearly

## **6. Consider Timing and Easing**

- Use smooth easing (ease-in, ease-out) to avoid abrupt motion.
- Keep animation durations moderate—too fast can startle; too slow can frustrate.

## **7. Test with Diverse Users and Tools**

- Use accessibility tools (like axe, Lighthouse) to check for motion issues.
- Test with people who have vestibular disorders or epilepsy if possible.
