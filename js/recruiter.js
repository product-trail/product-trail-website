/* ============================================
   PRODUCT TRAIL — recruiter.js
   Multi-step form logic + local storage save
   ============================================ */

let currentStep = 1;
let recruiterData = {};

function goNextStep() {
    if (currentStep === 1) {
        // Validate step 1 fields
        const fields = ['rec-name', 'rec-email', 'rec-company', 'rec-designation'];
        let valid = true;
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el && !el.value.trim()) {
                el.style.borderColor = 'rgba(236,72,153,0.6)';
                el.style.boxShadow = '0 0 0 3px rgba(236,72,153,0.15)';
                valid = false;
                setTimeout(() => {
                    el.style.borderColor = '';
                    el.style.boxShadow = '';
                }, 2000);
            }
        });

        if (!valid) {
            window.showToast && window.showToast('Please fill all required fields.', 'alert-circle');
            return;
        }

        recruiterData = {
            name: document.getElementById('rec-name')?.value,
            email: document.getElementById('rec-email')?.value,
            company: document.getElementById('rec-company')?.value,
            designation: document.getElementById('rec-designation')?.value,
            linkedin: document.getElementById('rec-linkedin')?.value,
        };

        setStep(2);
    } else if (currentStep === 2) {
        // Validate step 2
        const reqFields = ['job-title', 'job-company', 'job-location', 'job-type', 'job-exp', 'job-desc'];
        let valid = true;
        reqFields.forEach(id => {
            const el = document.getElementById(id);
            if (el && !el.value.trim()) {
                el.style.borderColor = 'rgba(236,72,153,0.6)';
                el.style.boxShadow = '0 0 0 3px rgba(236,72,153,0.15)';
                valid = false;
                setTimeout(() => {
                    el.style.borderColor = '';
                    el.style.boxShadow = '';
                }, 2000);
            }
        });

        if (!valid) {
            window.showToast && window.showToast('Please fill all required job fields.', 'alert-circle');
            return;
        }

        const jobData = {
            ...recruiterData,
            jobTitle: document.getElementById('job-title')?.value,
            jobCompany: document.getElementById('job-company')?.value,
            jobLocation: document.getElementById('job-location')?.value,
            jobType: document.getElementById('job-type')?.value,
            jobExp: document.getElementById('job-exp')?.value,
            jobSalary: document.getElementById('job-salary')?.value,
            jobDesc: document.getElementById('job-desc')?.value,
            applyUrl: document.getElementById('job-apply-url')?.value,
            submittedAt: new Date().toISOString(),
        };

        // Save to localStorage (MVP — no backend yet)
        const saved = JSON.parse(localStorage.getItem('pt_recruiter_jobs') || '[]');
        saved.push(jobData);
        localStorage.setItem('pt_recruiter_jobs', JSON.stringify(saved));

        showSuccess(jobData);
    }
}

function goPrevStep() {
    if (currentStep > 1) setStep(currentStep - 1);
}

function setStep(n) {
    currentStep = n;

    // Update step circles
    document.querySelectorAll('.step-circle').forEach((el, i) => {
        const step = i + 1;
        el.classList.remove('active', 'done', 'inactive');
        if (step < n) el.classList.add('done'), el.innerHTML = '✓';
        else if (step === n) el.classList.add('active'), el.textContent = step;
        else el.classList.add('inactive'), el.textContent = step;
    });

    // Update connectors
    document.querySelectorAll('.step-connector').forEach((el, i) => {
        el.classList.toggle('done', i + 1 < n);
    });

    // Show/hide content
    document.querySelectorAll('.form-step-content').forEach((el, i) => {
        el.classList.toggle('active', i + 1 === n);
    });

    // Scroll to top of form
    document.querySelector('.recruiter-form-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showSuccess(data) {
    const formEl = document.querySelector('.form-step-content.active');
    const stepsEl = document.querySelector('.form-steps');
    const successEl = document.getElementById('success-state');

    if (formEl) formEl.style.display = 'none';
    if (stepsEl) stepsEl.style.display = 'none';
    if (successEl) successEl.classList.add('show');

    const nameEl = document.getElementById('success-company');
    if (nameEl) nameEl.textContent = data.jobCompany || 'your company';

    window.showToast && window.showToast(`Job posted! We'll review "${data.jobTitle}" shortly.`, 'check-circle');
}

function postAnotherJob() {
    // Reset form
    document.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(el => el.value = '');
    document.getElementById('success-state')?.classList.remove('show');
    document.querySelector('.form-steps').style.display = '';
    recruiterData = {};
    setStep(1);

    // Show step 1 content
    document.querySelectorAll('.form-step-content').forEach((el, i) => {
        el.style.display = '';
        el.classList.toggle('active', i === 0);
    });
}

function initRecruiter() {
    // Bind next/prev buttons
    document.querySelectorAll('#btn-next-step').forEach(btn => btn.addEventListener('click', goNextStep));
    document.querySelectorAll('#btn-prev-step').forEach(btn => btn.addEventListener('click', goPrevStep));
    document.getElementById('btn-post-another')?.addEventListener('click', postAnotherJob);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRecruiter);
} else {
    initRecruiter();
}
