# AI Consulting Business Website

A professional, high-converting website for AI consulting services featuring two location-specific landing pages (generic US and Florida-specific), modern design, contact forms with reCAPTCHA integration, and Calendly scheduling.

## 🎯 Purpose

This website is designed to convert visitors into booked discovery calls for AI consulting services. It features:

- **Professional, trustworthy design** with a dark/navy theme and premium feel
- **High-conversion copy** focused on business results, not technical jargon
- **Dual targeting** with generic US and Florida-specific content
- **Modern user experience** with responsive design and smooth interactions
- **Lead capture optimization** through contact forms and Calendly integration

## 📁 Project Structure

```
ai-consulting/
├── index.html                 # Main US landing page
├── florida/
│   └── index.html            # Florida-specific landing page
├── assets/
│   ├── css/
│   │   └── style.css         # Shared styles (modern, responsive)
│   └── js/
│       └── main.js           # Shared JavaScript functionality
└── README.md                 # This file
```

## 🚀 Quick Start

1. **Clone or download** this project to your web server
2. **Configure placeholders** (see Configuration section below)
3. **Test the contact form** and Calendly integration
4. **Customize content** with your actual business information
5. **Deploy** to your hosting platform

## ⚙️ Configuration Required

### 1. Google reCAPTCHA v3 Setup

**Current placeholder:** `YOUR_RECAPTCHA_SITE_KEY`

**Steps to configure:**
1. Visit [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Create a new reCAPTCHA v3 site
3. Add your domain(s) to the site list
4. Copy the Site Key
5. Replace `YOUR_RECAPTCHA_SITE_KEY` in:
   - `assets/js/main.js` (line ~80 and ~150)

**Files to update:**
```javascript
// In assets/js/main.js
script.src = 'https://www.google.com/recaptcha/api.js?render=YOUR_ACTUAL_SITE_KEY';

// And later in the same file:
recaptchaToken = await window.grecaptcha.execute('YOUR_ACTUAL_SITE_KEY', {
```

### 2. Calendly Integration

**Current placeholder:** `https://calendly.com/YOUR_LINK`

**Steps to configure:**
1. Set up your Calendly account and create a meeting type
2. Get your Calendly scheduling URL
3. Replace `https://calendly.com/YOUR_LINK` in:
   - `assets/js/main.js` (appears twice)

**Files to update:**
```javascript
// In assets/js/main.js
url: 'https://calendly.com/YOUR_ACTUAL_LINK',
```

### 3. Contact Form Endpoint

**Current placeholder:** `YOUR_FORM_ENDPOINT_URL`

**Steps to configure:**
1. Choose a form processing service:
   - **Netlify Forms** (if hosting on Netlify)
   - **Formspree** (https://formspree.io)
   - **Custom API endpoint**
   - **Email service like EmailJS**

2. Replace `YOUR_FORM_ENDPOINT_URL` in both HTML files:
   - `index.html`
   - `florida/index.html`

**Example configurations:**

```html
<!-- For Formspree -->
<form id="contact-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">

<!-- For Netlify Forms -->
<form id="contact-form" method="POST" action="#" netlify>

<!-- For custom endpoint -->
<form id="contact-form" method="POST" action="https://your-api.com/contact">
```

### 4. Business Information

**Search and replace these placeholders throughout both HTML files:**

- `AI Consulting` → Your actual business name
- `hello@aiconsulting.com` → Your email address
- `florida@aiconsulting.com` → Your Florida-specific email (or same email)
- `(555) 123-4567` → Your phone number
- `https://your-domain.com` → Your actual domain
- Update the favicon path if needed

## 🎨 Design Features

### Visual Design
- **Modern dark/navy theme** with cyan and gold accents
- **Professional typography** using Inter font family
- **Gradient effects and animations** for premium feel
- **Card-based layouts** for easy scanning
- **Mobile-first responsive design**

### User Experience
- **Smooth scrolling navigation**
- **Interactive FAQ accordions**
- **Form validation with error handling**
- **Loading states and success messages**
- **Mobile-friendly interface**
- **Accessibility considerations**

### Conversion Optimization
- **Clear value propositions** in headlines
- **Social proof** through testimonials
- **Multiple call-to-action buttons**
- **Two-step lead capture** (contact form + Calendly)
- **Industry-specific messaging** (especially Florida page)
- **Objection handling** through FAQ section

## 📱 Mobile Responsiveness

The website is fully responsive with:
- **Collapsible mobile navigation**
- **Optimized touch targets**
- **Readable typography on small screens**
- **Properly sized form elements**
- **Fast loading on mobile connections**

## 🔧 Technical Features

### Form Handling
- **Client-side validation** with real-time feedback
- **reCAPTCHA v3 integration** for spam protection
- **Progressive enhancement** (works without JavaScript)
- **Error handling** with user-friendly messages
- **Success confirmation** with visual feedback

### Performance
- **Minimal dependencies** (no heavy frameworks)
- **Optimized CSS** with custom properties
- **Efficient JavaScript** with event delegation
- **Web fonts loaded asynchronously**
- **Fast loading times**

### SEO Optimization
- **Semantic HTML structure**
- **Meta tags for social sharing**
- **Descriptive alt texts** (add for any images you include)
- **Proper heading hierarchy**
- **Local SEO optimization** (Florida page)

## 🏢 Content Sections

### Both Pages Include:
1. **Hero section** with compelling headline and dual CTAs
2. **Services overview** with 6 key AI consulting services
3. **Pricing tiers** with clear value propositions
4. **About section** emphasizing practical experience
5. **Testimonials** (placeholder content)
6. **FAQ section** addressing common concerns
7. **Contact form** with lead qualification
8. **Calendly integration** for direct booking
9. **Professional footer** with navigation

### Florida Page Differences:
- **Local references** to Florida cities and industries
- **Industry-specific services** (tourism, agriculture, logistics)
- **Hurricane preparedness** messaging
- **Multilingual capabilities** for international business
- **Local success stories** and case studies
- **Florida-specific compliance** considerations

## 🎯 Target Audience

### Primary Audience:
- **Business owners** looking to implement AI
- **Operations managers** seeking automation solutions
- **CTOs/IT directors** evaluating AI consulting
- **Small to medium businesses** ready for AI transformation

### Secondary Audience:
- **Entrepreneurs** exploring AI opportunities
- **Industry executives** researching AI trends
- **Investors** evaluating AI consulting market

## 💡 Customization Tips

### Content Updates:
1. **Add real testimonials** with photos and specific results
2. **Include case studies** with detailed ROI metrics
3. **Update pricing** based on your actual rates
4. **Add team photos** and bios in About section
5. **Create industry-specific landing pages** beyond Florida

### Design Enhancements:
1. **Add professional photos** of your team and office
2. **Include client logos** for social proof
3. **Create custom icons** for services
4. **Add video testimonials** or explainer videos
5. **Implement A/B testing** for headlines and CTAs

### Technical Improvements:
1. **Add Google Analytics** tracking
2. **Implement conversion tracking** for forms and calls
3. **Set up heat mapping** (Hotjar, Crazy Egg)
4. **Add live chat** integration
5. **Create thank-you pages** with next steps

## 🚀 Deployment Options

### Static Hosting (Recommended):
- **Netlify** (free tier available, forms included)
- **Vercel** (free tier, easy GitHub integration)
- **GitHub Pages** (free, simple setup)
- **AWS S3 + CloudFront** (scalable, cost-effective)

### Traditional Hosting:
- **Any web host** supporting HTML/CSS/JS
- **WordPress hosting** (upload as custom theme)
- **Shared hosting** providers

### CDN Considerations:
- Ensure assets are properly cached
- Use appropriate MIME types
- Enable gzip compression

## 📊 Analytics & Tracking

### Recommended Tracking:
1. **Google Analytics 4** for website analytics
2. **Google Tag Manager** for event tracking
3. **Facebook Pixel** for retargeting
4. **LinkedIn Insight Tag** for B2B tracking
5. **Conversion tracking** for form submissions and calls

### Key Metrics to Monitor:
- **Page views** and unique visitors
- **Time on page** and bounce rate
- **Form submission rate**
- **Calendly booking rate**
- **Mobile vs desktop performance**
- **Traffic sources** and conversion rates

## 🔒 Security Considerations

### Form Security:
- reCAPTCHA v3 integration helps prevent spam
- Server-side validation should be implemented
- HTTPS is required for reCAPTCHA
- Consider rate limiting for form submissions

### General Security:
- Use HTTPS everywhere
- Keep dependencies updated
- Implement Content Security Policy headers
- Regular security audits

## 📞 Support & Maintenance

### Regular Updates:
- **Content refresh** every 3-6 months
- **Testimonial updates** as you get new clients
- **Pricing adjustments** as needed
- **Industry trends** reflection in copy

### Technical Maintenance:
- **Monitor form submissions** and fix any issues
- **Test Calendly integration** regularly
- **Update contact information** as needed
- **Check mobile responsiveness** on new devices

## 📝 License & Usage

This website template is created for AI consulting business use. Customize it with your branding, content, and business information.

## 🤝 Getting Help

If you need assistance with:
- **Configuration** of reCAPTCHA or Calendly
- **Customization** for your specific business
- **Deployment** to hosting platforms
- **Performance optimization**
- **Additional features** or integrations

Consider hiring a web developer or the original creator of this template for professional implementation and customization.

---

**Ready to launch?** Don't forget to test all forms and integrations before going live!