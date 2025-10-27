# Image Generation Specifications for Yogarate Website

## Technical Requirements
- **Format**: WEBP at ~1600px wide; quality ~80
- **Colours**: Monochrome (black & white) with **crimson (#B22222)** accent
- **Style**: Minimalist, high contrast, modern fitness aesthetic
- **Accessibility**: Ensure colour contrast ≥ 4.5:1 (WCAG AA)
- **Faces**: Diverse, non-identifiable as celebrities
- **No EXIF data**: Strip all metadata

---

## Required Images

### 1. **hero.webp** (Hero Image for Homepage)
**Prompt**: Minimalist studio, black background, cinematic rim light. Athlete transitions from yoga Warrior II into a controlled karate reverse punch, motion subtly blurred, monochrome with a single crimson sash accent, high contrast, modern fitness aesthetic, sharp detail.

**Alt text**: Practitioner flows from yoga pose to karate strike in dramatic light

**Usage**: Featured hero image on homepage, also used for OG fallback

**Dimensions**: ~1600px wide

---

### 2. **sequence-1.webp** (Flow Sequence)
**Prompt**: Series of three frames combined: sun salutation to kata footwork, clean studio, soft side light, monochrome, crimson overlay lines tracing motion arc.

**Alt text**: Flow sequence combining warrior pose and kata footwork

**Usage**: Illustrates the Flow principle on homepage

**Dimensions**: ~1600px wide

---

### 3. **sequence-2.webp** (Power Sequence)
**Prompt**: Controlled mid-air strike landing into stable low stance, strong shadows, minimalist background, monochrome + crimson highlight.

**Alt text**: Power sequence showing controlled strike into balanced hold

**Usage**: Illustrates the Power principle on homepage

**Dimensions**: ~1600px wide

---

### 4. **instructor-1.webp** (Instructor Portrait: Alex Tan)
**Prompt**: Portrait of instructor in balanced stance, calm expression, studio backdrop, monochrome with subtle crimson accent.

**Alt text**: Instructor demonstrating balanced stance

**Usage**: Instructors page - Alex Tan bio

**Dimensions**: ~800px wide (portrait orientation)

---

### 5. **instructor-2.webp** (Instructor Portrait: Maya Singh)
**Prompt**: Instructor guiding breathwork hands-on-ribcage, soft light, inclusive and welcoming tone, monochrome.

**Alt text**: Instructor guiding mindful breathwork

**Usage**: Instructors page - Maya Singh bio

**Dimensions**: ~800px wide (portrait orientation)

---

### 6. **studio.webp** (Studio Interior)
**Prompt**: Minimalist studio interior, bamboo flooring, tatami accents, warm side lighting, uncluttered.

**Alt text**: Minimalist studio with bamboo flooring and tatami accents

**Usage**: Showcase studio atmosphere

**Dimensions**: ~1600px wide (landscape orientation)

---

### 7. **og-hero.jpg** (Open Graph Image)
**Prompt**: Use the same as hero.webp OR crop hero.webp to 1200×630.

**Alt text**: Not applicable (meta image)

**Usage**: Social media preview image (Open Graph/Twitter Cards)

**Dimensions**: EXACTLY 1200×630 pixels (1.91:1 aspect ratio)
**Format**: JPG (≤300KB)
**Note**: Export from hero.webp or regenerate with specific 1200×630 dimensions

---

## Additional Specifications

### Brand Colours
- **Ink (Primary)**: #1A1A1A (Charcoal - strength/solidity)
- **Paper (Background)**: #FAFAFA (Warm white)
- **Crimson (Accent)**: #B22222 (Martial energy - use sparingly)
- **Slate (Neutral)**: #4A4A4A

### Visual Style Guidelines
- **Aesthetic**: Minimalist, uncluttered, professional
- **Lighting**: Dramatic but controlled (rim light for hero, soft for instructors)
- **Composition**: Clean, balanced, purposeful
- **Motion**: Should suggest fluidity and control
- **Energy**: Calm strength, disciplined power, mindful movement

### Important Notes
- All images should be monochrome (black & white) except for selective crimson accents
- Crimson should be used sparingly but strategically (sash, highlight, overlay lines)
- Ensure faces are diverse and not identifiable as celebrities
- All images must meet WCAG AA contrast requirements
- Remove all EXIF metadata before using
- Optimise for web delivery (reasonable file sizes)

---

## File Structure
Place all completed images in `/docs/assets/img/`:

```
docs/assets/img/
├── hero.webp
├── sequence-1.webp
├── sequence-2.webp
├── instructor-1.webp
├── instructor-2.webp
├── studio.webp
└── og-hero.jpg
```

---

## Quality Checklist
- [ ] All 7 images generated
- [ ] Monochrome aesthetic maintained
- [ ] Crimson accents applied strategically
- [ ] High contrast (accessibility compliant)
- [ ] Diverse faces (non-celebrity)
- [ ] EXIF data stripped
- [ ] File sizes optimised (WEBP ~80 quality)
- [ ] og-hero.jpg is EXACTLY 1200×630

