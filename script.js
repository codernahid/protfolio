// Mobile Navigation with smooth animation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Sample projects data
const projects = [
    {
        title: 'Environmental Monitoring System',
        description: 'Science Fair Project 2021: Developed an IoT-based environmental monitoring system that tracks air quality, temperature, and humidity. The project won first place for its innovative approach to environmental awareness.',
        image: 'images/science-fair-project-2021.jpg',
        skills: ['IoT', 'Environmental Science', 'Data Analysis'],
        details: {
            challenge: 'Creating an affordable and accurate environmental monitoring system',
            solution: 'Used Arduino with multiple sensors and created a web dashboard',
            impact: 'Implemented in school campus, helping reduce energy consumption by 15%'
        }
    },
    {
        title: 'Smart Waste Management',
        description: 'Science Fair Project 2023: Created an automated waste sorting system using machine learning and robotics, earning recognition for innovative application of AI in environmental conservation.',
        image: 'images/science-fair-project-2023.jpg',
        skills: ['Machine Learning', 'Robotics', 'Environmental Science'],
        details: {
            challenge: 'Automating waste segregation for recycling efficiency',
            solution: 'Developed ML model for waste classification and robotic sorting mechanism',
            impact: 'Achieved 90% accuracy in waste sorting, potential for industrial application'
        }
    },
    {
        title: 'Personal Portfolio Website',
        description: 'A responsive portfolio website built from scratch using pure HTML, CSS, and JavaScript, showcasing modern web development practices and creative design.',
        image: 'images/nahid-cse.jpg',
        skills: ['HTML5', 'CSS3', 'JavaScript'],
        details: {
            challenge: 'Creating an interactive and responsive website without frameworks',
            solution: 'Implemented custom animations and responsive design patterns',
            impact: 'Showcases technical skills and achievements effectively'
        }
    }
];

// Populate projects
const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'skill-card';
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-skills">
            ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

// Form submission
const contactForm = document.getElementById('contact-form');

// Form validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Replace existing form submission with enhanced version
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name.length < 2) {
        alert('Please enter a valid name');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (message.length < 10) {
        alert('Please enter a message with at least 10 characters');
        return;
    }

    const formData = { name, email, message };
    console.log('Form submitted:', formData);
    
    // Show success message with animation
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    contactForm.appendChild(successMessage);
    
    // Clear form
    contactForm.reset();
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Gallery image hover and click effects
document.querySelectorAll('.gallery-item, .achievement-gallery img').forEach(img => {
    // Hover effect
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
    
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = '';
    });    // Click to view full size
    img.addEventListener('click', () => {
        const fullscreen = document.createElement('div');
        fullscreen.className = 'fullscreen-overlay';
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'fullscreen-container';
        
        const imgClone = img.cloneNode();
        imgClone.className = 'fullscreen-image';
        
        // Get description if available
        const description = img.closest('.gallery-container')?.querySelector('.image-description')?.innerHTML || '';
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'fullscreen-description';
        descriptionDiv.innerHTML = description;
        
        imgContainer.appendChild(imgClone);
        imgContainer.appendChild(descriptionDiv);
        fullscreen.appendChild(imgContainer);
        
        fullscreen.addEventListener('click', (e) => {
            if (e.target === fullscreen) {
                fullscreen.remove();
            }
        });
        
        document.body.appendChild(fullscreen);
    });
});

// Video playback handling
document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('video');
    const playButton = container.querySelector('.play-button');

    container.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.textContent = 'Pause';
        } else {
            video.pause();
            playButton.textContent = 'Play Video';
        }
    });

    video.addEventListener('play', () => {
        playButton.textContent = 'Pause';
    });

    video.addEventListener('pause', () => {
        playButton.textContent = 'Play Video';
    });
});
