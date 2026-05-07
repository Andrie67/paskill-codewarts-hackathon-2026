---
name: mobile-device-frame
description: Wraps web application previews or UI components in a visual mobile phone frame. Use this when the user asks to condense a web app into a mobile view.
---

# Mobile Device Frame

This skill provides instructions on how to present web applications inside a simulated mobile device frame.

## When to use

Use this skill whenever you need to demonstrate how a web application looks on a mobile device, or when the user explicitly asks to condense the web app into a mobile phone with borders showing.

## Instructions

When building a web preview that needs to be shown in a mobile device frame, wrap the main application content in a CSS container that simulates a physical phone.

Additionally, if you are using the `generate_image` tool to create UI mockups for the user, this skill explicitly overrides the default behavior to avoid surrounding device frames. Because the user has requested this skill, you **MUST** include a mobile phone frame (the physical borders of the phone) in your generated images or HTML prototypes.

### CSS Example for Web Prototypes

Here is a simple CSS approach to create a mobile phone frame:

```css
.device-frame {
  width: 375px; /* Typical mobile width */
  height: 812px; /* Typical mobile height */
  margin: 2rem auto;
  border: 14px solid #1a1a1a;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
}

/* Optional Notch */
.device-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 30px;
  background-color: #1a1a1a;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  z-index: 9999;
}
```

### HTML Structure

```html
<div class="device-frame">
  <div class="device-notch"></div>
  <div class="app-content" style="width: 100%; height: 100%; overflow-y: auto;">
    <!-- Web app content goes here -->
  </div>
</div>
```

Ensure that the internal content is fully responsive but constrained by the `.device-frame` dimensions.
