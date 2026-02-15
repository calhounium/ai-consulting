// AI Consulting Website - Main JavaScript
class AIConsultingWebsite {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeComponents();
    this.loadGoogleFonts();
    this.loadReCaptcha();
  }

  setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
      mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isActive = navLinks.classList.contains('active');
        mobileMenuToggle.innerHTML = isActive ? '✕' : '☰';
      });

      // Close mobile menu when clicking on links
      navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          navLinks.classList.remove('active');
          mobileMenuToggle.innerHTML = '☰';
        }
      });
    }

    // Smooth scrolling for anchor links
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    // FAQ toggles
    this.initializeFAQ();

    // Intersection Observer for animations
    this.initializeAnimations();
  }

  initializeComponents() {
    // Initialize any third-party components here
    this.initializeCalendly();
  }

  loadGoogleFonts() {
    if (!document.querySelector('link[href*="Inter"]')) {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }

  loadReCaptcha() {
    if (!window.grecaptcha && !document.querySelector('script[src*="recaptcha"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=YOUR_RECAPTCHA_SITE_KEY';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  initializeCalendly() {
    // Load Calendly embed script if not already loaded
    if (!window.Calendly && !document.querySelector('script[src*="calendly"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        // Initialize inline Calendly widget if container exists
        const calendlyContainer = document.getElementById('calendly-inline-widget');
        if (calendlyContainer && window.Calendly) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/YOUR_LINK',
            parentElement: calendlyContainer,
            prefill: {},
            utm: {}
          });
        }
      };
      document.head.appendChild(script);
    }
  }

  initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          
          // Close all other FAQ items
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });
          
          // Toggle current item
          item.classList.toggle('active', !isActive);
        });
      }
    });
  }

  initializeAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card, .faq-item, .form-container');
    animateElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.1}s`;
      observer.observe(element);
    });
  }

  // Form validation
  validateForm(formData) {
    const errors = {};
    
    // Name validation
    if (!formData.get('name')?.trim()) {
      errors.name = 'Name is required';
    }

    // Email validation
    const email = formData.get('email')?.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phone = formData.get('phone')?.trim();
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Company validation
    if (!formData.get('company')?.trim()) {
      errors.company = 'Company name is required';
    }

    // Message validation
    const message = formData.get('message')?.trim();
    if (!message) {
      errors.message = 'Message is required';
    } else if (message.length < 20) {
      errors.message = 'Please provide more details (minimum 20 characters)';
    }

    // Service tier validation
    if (!formData.get('service_tier')) {
      errors.service_tier = 'Please select a service tier';
    }

    return errors;
  }

  displayFormErrors(errors) {
    // Clear existing errors
    document.querySelectorAll('.error-message').forEach(msg => {
      msg.style.display = 'none';
    });
    document.querySelectorAll('.form-control').forEach(control => {
      control.classList.remove('error');
    });

    // Display new errors
    Object.keys(errors).forEach(field => {
      const input = document.querySelector(`[name="${field}"]`);
      const errorMsg = document.querySelector(`#${field}-error`);
      
      if (input) {
        input.classList.add('error');
      }
      if (errorMsg) {
        errorMsg.textContent = errors[field];
        errorMsg.style.display = 'block';
      }
    });
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const spinner = submitBtn.querySelector('.spinner');
    const formData = new FormData(form);

    // Validate form
    const errors = this.validateForm(formData);
    if (Object.keys(errors).length > 0) {
      this.displayFormErrors(errors);
      return;
    }

    // Clear any existing errors
    this.displayFormErrors({});

    try {
      // Show loading state
      submitBtn.disabled = true;
      if (spinner) spinner.style.display = 'inline-block';
      
      // Execute reCAPTCHA
      let recaptchaToken = '';
      if (window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute('YOUR_RECAPTCHA_SITE_KEY', {
            action: 'contact_form'
          });
          formData.append('recaptcha_token', recaptchaToken);
        } catch (recaptchaError) {
          console.warn('reCAPTCHA failed:', recaptchaError);
        }
      }

      // Submit form data
      const response = await fetch('YOUR_FORM_ENDPOINT_URL', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Success
        this.showFormSuccess();
        form.reset();
      } else {
        throw new Error(`Server error: ${response.status}`);
      }

    } catch (error) {
      console.error('Form submission error:', error);
      this.showFormError('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      if (spinner) spinner.style.display = 'none';
    }
  }

  showFormSuccess() {
    const message = document.createElement('div');
    message.className = 'form-message success';
    message.innerHTML = `
      <div style="background: var(--success-green); color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
        <strong>Thank you!</strong> We've received your message and will get back to you within 24 hours.
      </div>
    `;
    
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(message, form);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      message.remove();
    }, 5000);

    // Scroll to success message
    message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  showFormError(errorText) {
    const message = document.createElement('div');
    message.className = 'form-message error';
    message.innerHTML = `
      <div style="background: var(--error-red); color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
        <strong>Error:</strong> ${errorText}
      </div>
    `;
    
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(message, form);
    
    // Remove message after 8 seconds
    setTimeout(() => {
      message.remove();
    }, 8000);
  }

  // Utility methods
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Open Calendly popup
  openCalendlyPopup() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/YOUR_LINK'
      });
    }
  }
}

// Initialize the website when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new AIConsultingWebsite();
});

// Expose some methods globally for inline event handlers
window.openCalendlyPopup = () => {
  if (window.aiConsultingWebsite) {
    window.aiConsultingWebsite.openCalendlyPopup();
  }
};

// Store instance globally for debugging
document.addEventListener('DOMContentLoaded', () => {
  window.aiConsultingWebsite = new AIConsultingWebsite();
});