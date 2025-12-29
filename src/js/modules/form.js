export function initForm() {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const data = {
        name: formData.get('name')?.trim(),
        email: formData.get('email')?.trim(),
        phone: formData.get('phone')?.trim(),
        company: formData.get('company')?.trim(),
        message: formData.get('message')?.trim()
      };

      // Basic validation
      if (!data.name || !data.email || !data.message) {
        showMessage('Please fill in all required fields (Name, Email, Message).', 'error');
        return;
      }

      if (!isValidEmail(data.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }

      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        // Send data to backend
        const response = await fetch('http://localhost:3001/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
          showMessage(result.message, 'success');
          form.reset();
        } else {
          showMessage(result.message || 'Failed to send message. Please try again.', 'error');
        }

      } catch (error) {
        console.error('Form submission error:', error);
        showMessage('Network error. Please check your connection and try again.', 'error');
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showMessage(message, type) {
  // Remove existing message
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create message element
  const messageEl = document.createElement('div');
  messageEl.className = `form-message ${type}`;
  messageEl.textContent = message;

  // Style the message
  messageEl.style.cssText = `
    padding: 12px 16px;
    margin-top: 15px;
    border-radius: 6px;
    font-weight: 500;
    text-align: center;
  `;

  if (type === 'success') {
    messageEl.style.backgroundColor = '#d4edda';
    messageEl.style.color = '#155724';
    messageEl.style.border = '1px solid #c3e6cb';
  } else {
    messageEl.style.backgroundColor = '#f8d7da';
    messageEl.style.color = '#721c24';
    messageEl.style.border = '1px solid #f5c6cb';
  }

  // Insert after form
  const form = document.getElementById('contactForm');
  form.parentNode.insertBefore(messageEl, form.nextSibling);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (messageEl.parentNode) {
      messageEl.remove();
    }
  }, 5000);
}