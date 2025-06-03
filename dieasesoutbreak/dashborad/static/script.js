// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and prediction functions
function predictDiabetes() {
    const inputs = document.querySelectorAll('#diabetes-section input');
    let allFilled = true;
    
    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'red';
            allFilled = false;
        } else {
            input.style.borderColor = '#ccc';
        }
    });
    
    if (!allFilled) {
        document.getElementById('diabetesResult').textContent = 'Please fill all fields!';
        document.getElementById('diabetesResult').style.color = 'red';
        return;
    }
    
    // Simulate API call with timeout
    document.getElementById('diabetesResult').textContent = 'Analyzing...';
    document.getElementById('diabetesResult').style.color = '#333';
    
    setTimeout(() => {
        // This would be replaced with actual API call
        const randomResult = Math.random() > 0.5 ? 'High risk of diabetes' : 'Low risk of diabetes';
        const color = randomResult.includes('High') ? 'red' : 'green';
        
        document.getElementById('diabetesResult').textContent = `Result: ${randomResult}`;
        document.getElementById('diabetesResult').style.color = color;
        
        // Animation
        const resultElement = document.getElementById('diabetesResult');
        resultElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            resultElement.style.transform = 'scale(1)';
        }, 300);
    }, 1500);
}

function predictHeartDisease() {
    // Similar implementation to predictDiabetes()
    // Would connect to actual ML model in production
}

function predictParkinsons() {
    const inputs = document.querySelectorAll('#parkinsons-section input');
    let allFilled = true;
    
    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'red';
            allFilled = false;
        } else {
            input.style.borderColor = '#ccc';
        }
    });
    
    if (!allFilled) {
        alert('Please fill all fields!');
        return;
    }
    
    // Simulate API call
    setTimeout(() => {
        const randomResult = Math.random() > 0.5 ? 'Positive for Parkinson\'s markers' : 'Negative for Parkinson\'s markers';
        alert(`Analysis complete: ${randomResult}`);
    }, 2000);
}

// Animation on scroll
function animateOnScroll() {
    const sections = document.querySelectorAll('.form-section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.form-section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `all 0.5s ease ${index * 0.2}s`;
    });
    
    setTimeout(() => {
        animateOnScroll();
    }, 500);
});

window.addEventListener('scroll', animateOnScroll);
// Add these to your existing JavaScript

// Sidebar toggle functionality
document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.main-content').classList.toggle('shifted');
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !message) {
        document.getElementById('contactResult').textContent = 'Please fill all required fields!';
        document.getElementById('contactResult').style.color = 'red';
        return;
    }
    
    document.getElementById('contactResult').textContent = 'Sending message...';
    document.getElementById('contactResult').style.color = '#333';
    
    // Simulate sending the message
    setTimeout(() => {
        document.getElementById('contactResult').textContent = 'Thank you! Your message has been sent.';
        document.getElementById('contactResult').style.color = 'green';
        document.getElementById('contactForm').reset();
        
        // Animation
        const resultElement = document.getElementById('contactResult');
        resultElement.classList.add('pulse');
        setTimeout(() => {
            resultElement.classList.remove('pulse');
        }, 2000);
    }, 1500);
});

// Close sidebar when clicking outside
document.addEventListener('click', function(e) {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    
    if (sidebar.classList.contains('active') && 
        !sidebar.contains(e.target) && 
        e.target !== sidebarToggle) {
        sidebar.classList.remove('active');
        document.querySelector('.main-content').classList.remove('shifted');
    }
});
// Enhanced Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const resultElement = document.getElementById('contactResult');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    resultElement.textContent = '';
    resultElement.style.display = 'none';
    
    // Simulate API call (replace with actual fetch)
    setTimeout(() => {
        // Success state
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        resultElement.textContent = 'Thank you! We\'ll respond soon.';
        resultElement.style.color = '#28a745';
        resultElement.style.display = 'block';
        resultElement.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
        form.reset();
        
        // Reset button after delay
        setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }, 2000);
        
        // Animation
        form.classList.add('form-submitted');
        setTimeout(() => {
            form.classList.remove('form-submitted');
        }, 1000);
    }, 1500);
});

async function predictDiabetes() {
    const pregnancies = document.getElementById('diabetesPregnancies').value;
    const glucose = document.getElementById('diabetesGlucose').value;
    const bloodPressure = document.getElementById('diabetesBloodPressure').value;
    const skinThickness = document.getElementById('diabetesSkinThickness').value;
    const insulin = document.getElementById('diabetesInsulin').value;
    const bmi = document.getElementById('diabetesBMI').value;
    const diabetesPedigree = document.getElementById('diabetesDiabetesPedigree').value;
    const age = document.getElementById('diabetesAge').value;

    const response = await fetch('/predict_diabetes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pregnancies,
            glucose,
            bloodPressure,
            skinThickness,
            insulin,
            bmi,
            diabetesPedigree,
            age
        }),
    });

    const result = await response.json();
    document.getElementById('diabetesResult').innerText = result.message;
}

async function predictHeartDisease() {
    const age = document.getElementById('heartAge').value;
    const sex = document.getElementById('heartSex').value;
    const cp = document.getElementById('heartCP').value;
    const trestbps = document.getElementById('heartTrestbps').value;
    const chol = document.getElementById('heartChol').value;
    const fbs = document.getElementById('heartFbs').value;
    const restecg = document.getElementById('heartRestecg').value;
    const thalach = document.getElementById('heartThalach').value;
    const exang = document.getElementById('heartExang').value;
    const oldpeak = document.getElementById('heartOldpeak').value;
    const slope = document.getElementById('heartSlope').value;
    const ca = document.getElementById('heartCa').value;
    const thal = document.getElementById('heartThal').value;

    const response = await fetch('/predict_heart_disease', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            age,
            sex,
            cp,
            trestbps,
            chol,
            fbs,
            restecg,
            thalach,
            exang,
            oldpeak,
            slope,
            ca,
            thal
        }),
    });

    const result = await response.json();
    document.getElementById('heartResult').innerText = result.message;
}

async function predictParkinsons() {
    const mdvpFo = document.getElementById('parkinsonsMDVPFo').value;
    const mdvpFhi = document.getElementById('parkinsonsMDVPFhi').value;
    const mdvpFlo = document.getElementById('parkinsonsMDVPFlo').value;
    const mdvpJitter = document.getElementById('parkinsonsMDVPJitter').value;
    const mdvpJitterAbs = document.getElementById('parkinsonsMDVPJitterAbs').value;
    const mdvpRAP = document.getElementById('parkinsonsMDVPRAP').value;
    const mdvpPPQ = document.getElementById('parkinsonsMDVPPPQ').value;
    const jitterDDP = document.getElementById('parkinsonsJitterDDP').value;
    const mdvpShimmer = document.getElementById('parkinsonsMDVPShimmer').value;
    const mdvpShimmerDB = document.getElementById('parkinsonsMDVPShimmerDB').value;
    const shimerAPQ3 = document.getElementById('parkinsonsShimmerAPQ3').value;
    const shimerAPQ5 = document.getElementById('parkinsonsShimmerAPQ5').value;
    const mdvpAPQ = document.getElementById('parkinsonsMDVPAPQ').value;
    const shimerDDA = document.getElementById('parkinsonsShimmerDDA').value;
    const nhr = document.getElementById('parkinsonsNHR').value;
    const hnr = document.getElementById('parkinsonsHNR').value;
    const rpde = document.getElementById('parkinsonsRPDE').value;
    const dfa = document.getElementById('parkinsonsDFA').value;
    const spread1 = document.getElementById('parkinsonsSpread1').value;
    const spread2 = document.getElementById('parkinsonsSpread2').value;
    const d2 = document.getElementById('parkinsonsD2').value;
    const ppe = document.getElementById('parkinsonsPPE').value;

    const response = await fetch('/predict_parkinsons', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'MDVP:Fo(Hz)': mdvpFo,
            'MDVP:Fhi(Hz)': mdvpFhi,
            'MDVP:Flo(Hz)': mdvpFlo,
            'MDVP:Jitter(%)': mdvpJitter,
            'MDVP:Jitter(Abs)': mdvpJitterAbs,
            'MDVP:RAP': mdvpRAP,
            'MDVP:PPQ': mdvpPPQ,
            'Jitter:DDP': jitterDDP,
            'MDVP:Shimmer': mdvpShimmer,
            'MDVP:Shimmer(dB)': mdvpShimmerDB,
            'Shimmer:APQ3': shimerAPQ3,
            'Shimmer:APQ5': shimerAPQ5,
            'MDVP:APQ': mdvpAPQ,
            'Shimmer:DDA': shimerDDA,
            'NHR': nhr,
            'HNR': hnr,
            'RPDE': rpde,
            'DFA': dfa,
            'spread1': spread1,
            'spread2': spread2,
            'D2': d2,
            'PPE': ppe
        }),
    });

    const result = await response.json();
    document.getElementById('parkinsonsResult').innerText = result.message;
}
