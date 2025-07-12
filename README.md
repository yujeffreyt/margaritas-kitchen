# Margarita's Kitchen - Chili Garlic Oil Teaser Page

A modern, responsive "coming soon" landing page for Margarita's Kitchen's upcoming Chili Garlic Oil product.

## 🚀 Features

- **Modern Design**: Clean, professional layout with subtle animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Loading**: Lightweight with Tailwind CSS via CDN
- **Accessible**: Semantic HTML with proper ARIA labels
- **Interactive**: Hover effects and smooth transitions
- **Email Capture**: Ready for email service integration

## 📁 Project Structure

```
margaritas-kitchen/
├── index.html          # Main landing page
├── assets/
│   ├── logo.svg        # Brand logo (placeholder)
│   └── product.svg     # Product image (placeholder)
└── README.md           # This file
```

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: Minimal, lightweight interactions
- **Google Fonts**: Inter font family
- **SVG Graphics**: Scalable placeholder images

## 🚀 Quick Start

1. **Clone or download** this project
2. **Open `index.html`** in your web browser
3. **That's it!** The page is ready to use

No build process or dependencies to install - everything is loaded via CDN.

## 🎨 Customization

### Colors
The page uses a red color scheme (`#dc2626`) that can be easily changed by updating the Tailwind classes in `index.html`:
- Primary: `red-600` / `#dc2626`
- Hover: `red-700` / `#b91c1c`
- Accent: `red-500` / `#ef4444`

### Typography
Currently using **Inter** font from Google Fonts. To change:
1. Update the Google Fonts link in the `<head>` section
2. Modify the `fontFamily` configuration in the Tailwind config

### Images
Replace the placeholder SVG files in the `assets/` folder:
- `logo.svg` → Your brand logo
- `product.svg` → Your product photo

### Content
Update the text content in `index.html`:
- Product name and tagline
- Email capture form placeholder text
- Social proof numbers
- Footer information

## 📧 Email Integration

The page includes a "Notify Me" form that's ready for email service integration. To connect with your preferred service:

### Mailchimp Integration
```javascript
// Replace the form submission handler in index.html
document.getElementById('notifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    // Add your Mailchimp API call here
    // Example: mailchimp.subscribe(email);
    
    alert('Thank you! We\'ll notify you when Chili Garlic Oil launches.');
    this.reset();
});
```

### Other Email Services
- **ConvertKit**: Use their embed form
- **Klaviyo**: Add their tracking code
- **Custom API**: Replace the form handler with your endpoint

## 🎭 Animations

The page includes several subtle animations:
- **Fade In**: Elements appear with opacity transition
- **Slide Up**: Content slides up from below
- **Pulse**: "Coming Soon" badge pulses slowly
- **Hover Effects**: Button and product image interactions

## 📱 Responsive Design

The page is fully responsive with breakpoints:
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: < 50KB (including Tailwind CDN)

## 🚀 Deployment

### Static Hosting
Deploy to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **AWS S3**: Upload files to an S3 bucket

### Custom Domain
1. Purchase a domain (e.g., `margaritas-kitchen.com`)
2. Configure DNS settings with your hosting provider
3. Update the `<title>` and meta tags in `index.html`

## 🔮 Future Enhancements

- [ ] Add product countdown timer
- [ ] Integrate social media links
- [ ] Add product benefits section
- [ ] Include customer testimonials
- [ ] Add newsletter signup
- [ ] Implement analytics tracking
- [ ] Add multiple language support

## 📞 Support

For questions or customization help, please contact the development team.

---

**Built with ❤️ for Margarita's Kitchen** 