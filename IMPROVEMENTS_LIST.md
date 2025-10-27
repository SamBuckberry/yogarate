# Yogarate Site — Improvements List

## Critical Issues (Must Fix Before Launch)

### 1. **Navigation Inconsistency**
- **Issue**: Legal pages (privacy.html, terms.html, 404.html) still use old multi-page navigation (links to classes.html, timetable.html, etc.)
- **Impact**: Broken navigation on those pages
- **Fix**: Update nav in these pages to use hash anchors like index.html

### 2. **OG/Cannonical URLs**
- **Issue**: All URLs still point to github.io instead of yogarate.site
- **Impact**: Social sharing and SEO will link to wrong domain
- **Fix**: Update all instances to use yogarate.site

### 3. **Contact Form Functionality**
- **Issue**: Form uses `data-netlify="true"` but no Netlify deployment
- **Impact**: Form submissions won't work
- **Fix**: Switch to GitHub Pages compatible solution (Formspree, Formsubmit, or EmailJS)

## Content & UX Improvements

### 4. **Hero Image Positioning**
- **Issue**: Hero image might not match new positioning copy ("antidote to wellness culture")
- **Recommendation**: Review if current hero.webp visually supports the anti-wellness narrative

### 5. **Missing "About" Section Link**
- **Issue**: Philosophy section exists but no direct "About" or "What is Yogarate" introductory section for new visitors
- **Recommendation**: Consider adding brief intro section early, or expand hero copy

### 6. **Instructor Bios Too Brief**
- **Issue**: Instructor cards are minimal ("Founder. Black belt...")
- **Recommendation**: Add credibility markers: years of experience, certifications, teaching philosophy, what drew them to Yogarate

### 7. **Journal Entries Need Expansion**
- **Issue**: Blog posts are just teasers with ellipses
- **Recommendation**: Either expand to full articles or remove ellipses to indicate they're complete posts

### 8. **Shop Content Placeholder**
- **Issue**: Shop section says "coming soon" but with anti-wellness stance, feels contradictory
- **Recommendation**: Either fully build out or remove entirely to stay focused

### 9. **Missing Testimonials/Social Proof**
- **Issue**: No evidence anyone has tried this or it works
- **Recommendation**: Add testimonials from early practitioners (can be anonymous: "J., London")

## Technical & Performance

### 10. **Missing CSS Form Styling**
- **Issue**: Contact form has no visual styling
- **Recommendation**: Add proper form inputs, textarea, select styling

### 11. **Header Not Fixed on Mobile**
- **Issue**: Header disappears on scroll
- **Recommendation**: Consider sticky header on mobile for easier navigation

### 12. **No Mobile Menu**
- **Issue**: Full navigation visible on mobile—will be cluttered on small screens
- **Recommendation**: Add hamburger menu for mobile (<900px)

### 13. **No Loading States/Lazy Images**
- **Issue**: Large images (hero, sequences) load immediately
- **Recommendation**: Add `loading="lazy"` to images below fold

### 14. **CSS Can Be Optimized**
- **Issue**: Some unused classes (home.css is empty)
- **Recommendation**: Remove empty file or add mobile-specific styles

### 15. **No Error Handling for JavaScript**
- **Issue**: If JS fails, site still works but no graceful degradation messaging
- **Recommendation**: Add minimal error handling

## SEO & Accessibility

### 16. **Missing Meta Description Updates**
- **Issue**: Meta descriptions still use generic "blends stillness..." not new positioning
- **Fix**: Update all meta descriptions to reflect anti-wellness stance

### 17. **Alt Text for Images**
- **Issue**: Alt text is descriptive but could be more specific for SEO
- **Recommendation**: Add keywords naturally (e.g., "Yogarate Flow sequence showing breath-led movement...")

### 18. **No Schema Markup for Classes**
- **Issue**: Could add LocalBusiness, FitnessActivity schema for better SEO
- **Recommendation**: Add structured data for classes, instructors, schedule

### 19. **Form Accessibility**
- **Issue**: Labels not properly associated with inputs
- **Fix**: Use proper label[for] attributes or wrap inputs in labels

### 20. **Color Contrast Check**
- **Issue**: Muted text might not meet WCAG AA
- **Recommendation**: Test slate color contrast on paper background

## Brand & Messaging

### 21. **Inconsistent Tone**
- **Issue**: Some sections are witty, others are earnest
- **Recommendation**: Review all content to ensure consistent intellectual anti-wellness tone

### 22. **Missing "How to Start" Section**
- **Issue**: Clear call-to-action but no roadmap for beginners
- **Recommendation**: Add "Getting Started" or "Your First Class" section

### 23. **No FAQ Section**
- **Issue**: Visitors likely have questions (what to wear, what to bring, etc.)
- **Recommendation**: Add FAQ section addressing common questions

### 24. **Pricing Not Mentioned**
- **Issue**: No pricing information anywhere
- **Recommendation**: Either add pricing or explain free trial structure

## Optional Enhancements

### 25. **Add Studio Image Section**
- **Recommendation**: Use studio.webp image somewhere visible (maybe after sequences?)

### 26. **Add Social Links (If Applicable)**
- **Recommendation**: Instagram/Twitter/X if Yogarate has social presence

### 27. **Add Print CSS**
- **Recommendation**: Users might want to print timetable or philosophy

### 28. **Add Email Subscription**
- **Recommendation**: Collect emails for newsletter (keep it simple, no marketing speak)

### 29. **Add Language Selection (Future)**
- **Recommendation**: If targeting international audience

### 30. **Add Skip-to-Content Link**
- **Recommendation**: Accessibility improvement for keyboard users

---

## Quick Wins (High Impact, Low Effort)

1. ✅ Fix navigation in privacy/terms pages
2. ✅ Update all URLs to yogarate.site
3. ✅ Add form styling
4. ✅ Update meta descriptions
5. ✅ Add loading="lazy" to images
6. ✅ Add mobile menu
7. ✅ Expand instructor bios
8. ✅ Add FAQ section
9. ✅ Add studio image to layout
10. ✅ Fix contact form (switch to working solution)

---

## Critical Before Sharing Publicly

- Navigation fixed on all pages
- URLs updated to yogarate.site
- Contact form working
- Mobile menu functional
- Form styling complete
- Meta descriptions updated

