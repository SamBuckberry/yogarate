# Manual Setup Required

## 1. Formspree Setup (Contact Form) ⚠️ REQUIRED

The contact form currently has a placeholder Formspree ID.

### Steps:
1. Go to https://formspree.io/
2. Sign up (free tier supports 50 submissions/month)
3. Create a new form
4. Copy your form ID (looks like `xnozdqwr`)
5. In `docs/index.html`, line 211, replace `YOUR_FORM_ID` with your actual ID:
   ```html
   <form name="contact" method="post" action="https://formspree.io/f/YOUR_FORM_ID">
   ```

### Alternative Options:
- **Formsubmit**: No signup required, just use `action="https://formsubmit.co/YOUR_EMAIL"`
- **EmailJS**: Free tier, more complex setup
- **Google Forms**: Embed via iframe

---

## 2. Image Review (Optional but Recommended)

Current images are placeholders. Review them to ensure they:
- Support the anti-wellness narrative (professional, not "spa-like")
- Show diverse, non-identifiable faces
- Match the minimalist, disciplined aesthetic

**Image locations:** `docs/assets/img/`
- hero.webp
- sequence-1.webp / sequence-2.webp  
- instructor-1.webp / instructor-2.webp
- studio.webp
- og-hero.jpg

---

## 3. Remove Old Pages (Cleanup)

These files are no longer needed but still in the repo:
- `docs/about.html`
- `docs/classes.html`
- `docs/blog.html`
- `docs/contact.html`
- `docs/instructors.html`
- `docs/philosophy.html`
- `docs/shop.html`
- `docs/timetable.html`

You can delete them to clean up the repo.

---

## 4. Navigation Links

All legal pages (privacy, terms, 404) now link to sections on main page.
Header navigation on these pages uses `index.html#section` format.
This is correct for the single-page structure.

---

## 5. Custom Domain Verification

Once yogarate.site is live:
1. Check https://yogarate.site/sitemap.xml works
2. Verify HTTPS is enforced
3. Test form submission
4. Check mobile menu on various devices

---

## Completed Improvements ✅

- ✅ Fixed navigation on all pages
- ✅ Updated all URLs to yogarate.site
- ✅ Added mobile hamburger menu
- ✅ Styled contact form properly
- ✅ Added lazy loading to images
- ✅ Expanded instructor bios with credibility
- ✅ Removed shop section entirely
- ✅ Added FAQ section (5 questions)
- ✅ Added studio section with image
- ✅ Updated meta descriptions
- ✅ Removed Journal links (earlier edit)
- ✅ Fixed form labels for accessibility
- ✅ Added mobile-responsive navigation

---

## Testing Checklist

Before public launch, test:
- [ ] Mobile menu works on phones
- [ ] Form submission receives emails
- [ ] All anchor links scroll smoothly
- [ ] Images load properly
- [ ] No 404 errors
- [ ] Legal pages (privacy/terms) navigation works
- [ ] Mobile layout looks good (320px - 768px)
- [ ] Desktop layout looks good (1200px+)

---

## Quick Wins Still Available

If you want to enhance further:
- Add structured data (LocalBusiness, Organization)
- Add "Skip to content" link for accessibility
- Add print CSS for timetable
- Expand journal posts to full articles
- Add testimonials section
- Add Instagram/social media links (if applicable)

