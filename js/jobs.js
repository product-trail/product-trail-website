/* ============================================
   PRODUCT TRAIL — jobs.js
   Job data, filters, search, modal, pagination
   ============================================ */

/* ── Job Data (MVP Mock) ─────────────────────── */
const JOBS = [
    {
        id: 1,
        title: 'Product Manager — Growth',
        company: 'Razorpay',
        companyIcon: 'credit-card',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '3-5',
        salary: '₹30-45 LPA',
        tags: ['Growth', 'Fintech', 'B2B'],
        posted: '2 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+growth+razorpay',
        description: `Razorpay is hiring a Product Manager to drive growth for their payments suite. You'll own the end-to-end product roadmap for growth experiments and work closely with engineering, design, and marketing teams.`,
        requirements: [
            '3-5 years of experience in product management',
            'Prior experience in fintech or growth product roles',
            'Strong analytical skills with experience in SQL or similar',
            'Excellent communication and stakeholder management'
        ],
        niceToHave: ['Experience with A/B testing and experimentation', 'MBA from a top institute']
    },
    {
        id: 2,
        title: 'Associate Product Manager (APM)',
        company: 'Swiggy',
        companyIcon: 'heart',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '0-2',
        salary: '₹18-28 LPA',
        tags: ['APM', 'Consumer', 'Food-tech'],
        posted: '1 day ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=associate+product+manager+swiggy',
        description: `Join Swiggy's APM program and work on some of the most exciting consumer product challenges in India. This role is ideal for recent graduates or early-career professionals passionate about product.`,
        requirements: [
            '0-2 years of experience (freshers welcome)',
            'Passion for product thinking and user empathy',
            'Strong problem-solving and structured thinking',
            'Data-driven mindset'
        ],
        niceToHave: ['Previous internship at a tech company', 'Engineering or MBA background']
    },
    {
        id: 3,
        title: 'Senior Product Manager — Platform',
        company: 'Zepto',
        companyIcon: 'zap',
        location: 'Mumbai',
        type: 'Full-Time',
        experience: '5+',
        salary: '₹45-65 LPA',
        tags: ['Platform', 'Senior', 'Quick-commerce'],
        posted: '3 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=senior+product+manager+zepto',
        description: `Zepto is scaling rapidly and looking for a Senior PM to lead their platform team. You'll define the platform roadmap and work with multiple stakeholders across the organization to deliver mission-critical features.`,
        requirements: [
            '5+ years of PM experience, preferably in platform/infra products',
            'Proven track record of driving complex, multi-team initiatives',
            'Deep technical acumen — able to collaborate with engineers on system design',
            'Experience with API products or developer platforms'
        ],
        niceToHave: ['Previous experience at a high-growth startup', 'Computer Science background']
    },
    {
        id: 4,
        title: 'Product Manager — B2B SaaS',
        company: 'Chargebee',
        companyIcon: 'bar-chart-3',
        location: 'Remote',
        type: 'Remote',
        experience: '3-5',
        salary: '₹28-40 LPA',
        tags: ['B2B', 'SaaS', 'Remote'],
        posted: '5 hours ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+chargebee+b2b+saas',
        description: `Chargebee is a global subscription billing leader. You'll be owning the product roadmap for a key module and working with global customers to solve real-world billing and revenue problems.`,
        requirements: [
            '3-5 years of PM experience in B2B SaaS',
            'Strong customer empathy and ability to translate customer needs into product requirements',
            'Experience with enterprise customer discovery and roadmap prioritization',
            'Familiarity with revenue metrics (ARR, churn, LTV)'
        ],
        niceToHave: ['Experience in fintech or billing products', 'International product exposure']
    },
    {
        id: 5,
        title: 'Group Product Manager — Monetization',
        company: 'ShareChat',
        companyIcon: 'message-square',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '5+',
        salary: '₹60-90 LPA',
        tags: ['GPM', 'Monetization', 'Social'],
        posted: '1 week ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=group+product+manager+monetization+sharechat',
        description: `Lead ShareChat's monetization charter with ownership of ads, creator economy, and subscription features. As a Group PM, you'll manage a team of PMs and drive company-level revenue goals.`,
        requirements: [
            '7+ years of PM experience with 2+ years in a lead/GPM role',
            'Experience with digital advertising, creator platforms, or monetization products',
            'Strong people management skills',
            'Ability to influence at VP and C-suite level'
        ],
        niceToHave: ['Experience at scale (10M+ DAU products)', 'International market exposure']
    },
    {
        id: 6,
        title: 'Product Manager — AI/ML',
        company: 'Sarvam AI',
        companyIcon: 'bot',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '3-5',
        salary: '₹35-55 LPA',
        tags: ['AI', 'ML', 'GenAI'],
        posted: '2 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+ai+ml+sarvam',
        description: `Work at the frontier of AI — Sarvam AI is building India's foundational language models. You'll shape the product strategy for AI APIs and help developers and enterprises integrate LLM capabilities.`,
        requirements: [
            '3+ years of PM experience with exposure to AI/ML products',
            'Strong technical understanding of ML concepts and APIs',
            'Experience with developer/API products (bonus)',
            'Ability to work in a fast-paced, research-driven environment'
        ],
        niceToHave: ['Published research or technical writing', 'Experience with LLM APIs (OpenAI, Gemini, etc.)']
    },
    {
        id: 7,
        title: 'Product Manager — Lending',
        company: 'KreditBee',
        companyIcon: 'landmark',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '3-5',
        salary: '₹25-38 LPA',
        tags: ['Fintech', 'Lending', 'NBFC'],
        posted: '4 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+lending+kreditbee',
        description: `Own the lending product roadmap at one of India's fastest-growing digital lending NBFCs. Drive loan disbursement flows, credit policy automation, and borrower experience improvements.`,
        requirements: [
            '3-5 years of PM experience, preferably in fintech',
            'Understanding of lending/credit product lifecycle',
            'Experience with data-driven decision making',
            'Stakeholder management across risk, tech, and business teams'
        ],
        niceToHave: ['CA, CFA or MBA from a top institute', 'Experience with credit scoring models']
    },
    {
        id: 8,
        title: 'APM — Product Strategy',
        company: 'Meesho',
        companyIcon: 'shopping-bag',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '0-2',
        salary: '₹20-30 LPA',
        tags: ['APM', 'E-commerce', 'Strategy'],
        posted: '3 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=associate+product+manager+meesho',
        description: `Meesho is on a mission to democratize internet commerce for India. Join as an APM and work on seller-facing products that help millions of small businesses grow online.`,
        requirements: [
            '0-2 years experience (fresh graduates welcome)',
            'Strong first-principles thinking',
            'Interest in e-commerce, social commerce, or marketplace dynamics',
            'Excellent verbal and written communication'
        ],
        niceToHave: ['Summer internship in product/strategy', 'IIT/IIM or Tier-1 background']
    },
    {
        id: 9,
        title: 'Product Manager — Healthcare',
        company: 'Practo',
        companyIcon: 'heart-pulse',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '3-5',
        salary: '₹22-35 LPA',
        tags: ['Healthtech', 'B2C', 'SaaS'],
        posted: '6 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+practo+healthcare',
        description: `Drive meaningful impact in healthcare at Practo. You'll work on patient-facing features that improve health outcomes for millions of Indians, from teleconsultations to health records.`,
        requirements: [
            '3+ years of product management experience',
            'Empathy for patients and healthcare providers',
            'Comfortable working in regulated environments (healthcare/data privacy)',
            'Experience with user research and usability testing'
        ],
        niceToHave: ['Healthcare domain knowledge', 'Prior experience with ABHA or PHR standards']
    },
    {
        id: 10,
        title: 'Senior PM — Developer Experience',
        company: 'Postman',
        companyIcon: 'mail',
        location: 'Remote',
        type: 'Remote',
        experience: '5+',
        salary: '₹50-75 LPA',
        tags: ['Developer Tools', 'Remote', 'Senior'],
        posted: '1 week ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=senior+product+manager+postman+developer',
        description: `Postman is the world's leading API platform. As a Senior PM for Developer Experience, you'll shape how millions of developers discover, test, and collaborate on APIs.`,
        requirements: [
            '5+ years of PM experience, ideally in developer tools',
            'Technical background (experience as an engineer is a strong plus)',
            'Deep understanding of APIs and developer workflows',
            'Track record of building beloved developer-facing products'
        ],
        niceToHave: ['Open source contribution', 'Previous experience at Stripe, Twilio, or similar API-first companies']
    },
    {
        id: 11,
        title: 'Product Manager — EdTech',
        company: 'Unacademy',
        companyIcon: 'book',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '3-5',
        salary: '₹20-32 LPA',
        tags: ['EdTech', 'Consumer', 'Video'],
        posted: '8 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+unacademy+edtech',
        description: `Drive the future of learning at Unacademy. You'll own the learner journey — from discovery to activation to long-term retention — and work closely with educators and students.`,
        requirements: [
            '3+ years of product management experience in consumer products',
            'Passion for education and improving learning outcomes',
            'Strong analytical skills; comfort with funnel analysis and cohort behavior',
            'Experience with video streaming or learning products preferred'
        ],
        niceToHave: ['MBA or engineering background', 'Experience with gamification or behavioral psychology']
    },
    {
        id: 12,
        title: 'Product Lead — Payments',
        company: 'PhonePe',
        companyIcon: 'smartphone',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '5+',
        salary: '₹55-80 LPA',
        tags: ['Payments', 'UPI', 'Lead'],
        posted: '2 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+lead+payments+phonepe',
        description: `PhonePe is India's leading payments super-app. As Product Lead for Payments, you'll set the vision for UPI, cards, and wallet products used by 500M+ Indians.`,
        requirements: [
            '7+ years of PM experience including 2+ years in a lead role',
            'Deep understanding of Indian payments ecosystem (UPI, NPCI, RBI regulations)',
            'Proven ability to own product strategy at scale',
            'Strong cross-functional collaboration skills'
        ],
        niceToHave: ['Experience at a NSDL/NPCI-regulated entity', 'MBA from IIM/ISB']
    },
    {
        id: 13,
        title: 'PM — Marketplace & Catalog',
        company: 'Flipkart',
        companyIcon: 'shopping-cart',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '3-5',
        salary: '₹30-42 LPA',
        tags: ['Marketplace', 'E-commerce', 'Catalog'],
        posted: '3 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+marketplace+flipkart',
        description: `Join Flipkart and own the seller tools and catalog enrichment experience for one of India's largest e-commerce platforms. Work with 400K+ sellers to improve listing quality and discoverability.`,
        requirements: [
            '3-5 years PM experience in marketplace or e-commerce',
            'Understanding of search, catalog, and recommendation systems',
            'Experience working with large seller/supplier ecosystems',
            'Strong business acumen and problem decomposition skills'
        ],
        niceToHave: ['Experience with NLP or catalog automation', 'IIT/IIM or BITS background']
    },
    {
        id: 14,
        title: 'Product Manager — Supply Chain',
        company: 'Delhivery',
        companyIcon: 'truck',
        location: 'Delhi',
        type: 'Full-Time',
        experience: '3-5',
        salary: '₹24-38 LPA',
        tags: ['Logistics', 'Supply Chain', 'Ops-tech'],
        posted: '5 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+supply+chain+delhivery',
        description: `Build the operating system for Indian logistics. At Delhivery, you'll work on warehouse management, route optimization, and fulfillment intelligence products that power India's e-commerce backbone.`,
        requirements: [
            '3+ years of PM experience, preferably in logistics, ops-tech, or supply chain',
            'Comfort with complex operational workflows and process optimization',
            'Data-driven approach to product decisions',
            'Ability to work with engineering, data science, and ops teams'
        ],
        niceToHave: ['Operations research or industrial engineering background', 'Experience with WMS or TMS systems']
    },
    {
        id: 15,
        title: 'PM — Consumer App (India Market)',
        company: 'CRED',
        companyIcon: 'gem',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '3-5',
        salary: '₹32-48 LPA',
        tags: ['Consumer', 'Fintech', 'Premium'],
        posted: '1 day ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+consumer+cred+fintech',
        description: `CRED is building trust and rewards for India's most creditworthy individuals. Join as a PM and work on consumer-facing features for one of India's most design-forward apps.`,
        requirements: [
            '3-5 years PM experience in consumer fintech or lifestyle apps',
            'Obsession with design, UX, and product craft',
            'Strong intuition for user behavior and motivation',
            'Experience shipping high-quality consumer experiences'
        ],
        niceToHave: ['Experience with reward/loyalty products', 'Previous CRED-adjacent company (luxury, premium finance)']
    },
    {
        id: 16,
        title: 'Product Manager — Contract',
        company: 'GreytHR',
        companyIcon: 'clipboard-list',
        location: 'Remote',
        type: 'Contract',
        experience: '3-5',
        salary: '₹8-12L fixed',
        tags: ['HR-tech', 'Contract', 'SaaS'],
        posted: '10 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+contract+hrtech',
        description: `6-month contract role at GreytHR to drive product improvements for their payroll and compliance modules. Ideal for freelance PMs or those between roles looking for meaningful contract work.`,
        requirements: [
            '3+ years PM experience in B2B SaaS',
            'Strong ownership mindset and ability to operate independently',
            'Experience with HR tech or payroll products (bonus)',
            'Excellent documentation and communication skills'
        ],
        niceToHave: ['Prior freelance or consulting PM experience', 'Quick ramp-up ability in new domains']
    },
    {
        id: 17,
        title: 'Senior Product Manager — InsurTech',
        company: 'Acko',
        companyIcon: 'shield',
        location: 'Bangalore',
        type: 'Full-Time',
        experience: '5+',
        salary: '₹42-60 LPA',
        tags: ['InsurTech', 'Senior', 'D2C'],
        posted: '4 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=senior+product+manager+acko+insurance',
        description: `Acko is reimagining insurance for India. You'll lead the D2C customer journey from quote to claim, owning NPS and conversion metrics across Acko's auto and health insurance products.`,
        requirements: [
            '5+ years of PM experience, preferably in D2C or fintech',
            'Strong understanding of conversion funnel optimization',
            'Comfort with insurance domain concepts (bonus)',
            'Experience managing senior stakeholders and cross-functional teams'
        ],
        niceToHave: ['Background in actuarial or financial services', 'Prior experience in regulated industries']
    },
    {
        id: 18,
        title: 'APM Program — 2024 Cohort',
        company: 'Dream11',
        companyIcon: 'trophy',
        location: 'Mumbai',
        type: 'Full-Time',
        experience: '0-2',
        salary: '₹22-35 LPA',
        tags: ['APM', 'Gaming', 'Sports-tech'],
        posted: '7 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=apm+program+dream11+product',
        description: `Dream11's APM Program is one of the most prestigious entry-level PM opportunities in India. Work on India's biggest sports gaming platform, with 200M+ users, and build real-world PM skills under mentorship.`,
        requirements: [
            '0-2 years of experience',
            'Entrepreneurial mindset and high ownership',
            'Strong passion for sports, gaming, or fantasy platforms',
            'Excellent analytical and logical reasoning'
        ],
        niceToHave: ['Prior product or startup internship', 'IIT/IIM/top-tier college graduate']
    },
    {
        id: 19,
        title: 'Product Manager — Travel Tech',
        company: 'ixigo',
        companyIcon: 'plane',
        location: 'Gurugram',
        type: 'Full-Time',
        experience: '3-5',
        salary: '₹20-30 LPA',
        tags: ['Travel', 'Consumer', 'Mobile'],
        posted: '2 weeks ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+ixigo+travel',
        description: `ixigo connects millions of Indians to their travel dreams. As a PM, you'll work on search, booking, and post-booking experiences making travel frictionless for Tier-2 and Tier-3 India.`,
        requirements: [
            '3-5 years of PM experience in consumer mobile apps',
            'Passion for travel and understanding of India\'s travel consumer',
            'Experience with search/discovery and booking flows',
            'Data fluency with product analytics tools'
        ],
        niceToHave: ['Travel tech or OTA background', 'UX research experience']
    },
    {
        id: 20,
        title: 'Product Manager — Agritech',
        company: 'DeHaat',
        companyIcon: 'leaf',
        location: 'Patna / Remote',
        type: 'Remote',
        experience: '3-5',
        salary: '₹18-28 LPA',
        tags: ['Agritech', 'Impact', 'B2B'],
        posted: '5 days ago',
        linkedin: 'https://www.linkedin.com/jobs/search/?keywords=product+manager+agritech+dehaat',
        description: `Build impactful products for 1M+ farmers with DeHaat. This role combines deep rural empathy with tech innovation — you'll own the farmer-facing app and advisory platform.`,
        requirements: [
            '3+ years PM experience',
            'Passion for social impact and rural technology',
            'Ability to design for low-bandwidth, vernacular-first users',
            'Strong field research and user interview skills'
        ],
        niceToHave: ['Domain knowledge of Indian agriculture', 'Experience with offline-first or low-connectivity products']
    }
];

/* State */
let filtered = [...JOBS];
let currentPage = 1;
const PER_PAGE = 8;

/* ── Render Jobs ─────────────────────────────── */
function renderJobs() {
    const list = document.getElementById('jobs-list');
    const count = document.getElementById('results-count');
    const pag = document.getElementById('pagination');
    if (!list) return;

    const start = (currentPage - 1) * PER_PAGE;
    const page = filtered.slice(start, start + PER_PAGE);

    if (count) count.innerHTML = `Showing <strong>${filtered.length}</strong> PM jobs`;

    if (filtered.length === 0) {
        list.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon"><i data-lucide="search"></i></div>
        <h3>No jobs found</h3>
        <p>Try adjusting your filters or search term.</p>
      </div>`;
        if (pag) pag.innerHTML = '';
        return;
    }

    list.innerHTML = page.map(job => `
    <article class="job-card glass-card reveal" onclick="openApplyModal(${job.id})">
      <div class="company-logo"><i data-lucide="${job.companyIcon}"></i></div>
      <div class="job-info">
        <h3>${job.title}</h3>
        <p class="job-company">${job.company} · ${job.location}</p>
        <div class="job-tags">
          <span class="badge badge-purple">${job.type}</span>
          <span class="badge badge-teal">${job.experience} yrs</span>
          ${job.tags.map(t => `<span class="badge badge-green">${t}</span>`).join('')}
        </div>
      </div>
      <div class="job-actions">
        <span class="job-salary">${job.salary}</span>
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); openApplyModal(${job.id})">Apply Now</button>
        <span class="job-posted"><i data-lucide="clock" style="width:12px;height:12px;display:inline-block;vertical-align:middle"></i> ${job.posted}</span>
      </div>
    </article>
  `).join('');

    if (window.lucide) window.lucide.createIcons();

    // Trigger reveal for newly rendered elements
    setTimeout(() => {
        document.querySelectorAll('#jobs-list .reveal').forEach(el => el.classList.add('visible'));
    }, 50);

    renderPagination(pag);
}

function renderPagination(pag) {
    if (!pag) return;
    const total = Math.ceil(filtered.length / PER_PAGE);
    if (total <= 1) { pag.innerHTML = ''; return; }

    let html = '';
    if (currentPage > 1) html += `<button class="page-btn" onclick="goPage(${currentPage - 1})">‹</button>`;
    for (let i = 1; i <= total; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
    }
    if (currentPage < total) html += `<button class="page-btn" onclick="goPage(${currentPage + 1})">›</button>`;
    pag.innerHTML = html;
}

function goPage(n) {
    currentPage = n;
    renderJobs();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Filter & Search ─────────────────────────── */
function applyFilters() {
    const search = document.getElementById('search-input')?.value.toLowerCase() || '';
    const types = [...document.querySelectorAll('input[name="type"]:checked')].map(i => i.value);
    const exps = [...document.querySelectorAll('input[name="exp"]:checked')].map(i => i.value);
    const locs = [...document.querySelectorAll('input[name="loc"]:checked')].map(i => i.value);

    filtered = JOBS.filter(job => {
        const matchSearch = !search ||
            job.title.toLowerCase().includes(search) ||
            job.company.toLowerCase().includes(search) ||
            job.tags.some(t => t.toLowerCase().includes(search));

        const matchType = types.length === 0 || types.includes(job.type);
        const matchExp = exps.length === 0 || exps.includes(job.experience);
        const matchLoc = locs.length === 0 || locs.some(l => job.location.toLowerCase().includes(l.toLowerCase()));

        return matchSearch && matchType && matchExp && matchLoc;
    });

    currentPage = 1;
    renderJobs();
}

function clearFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    const si = document.getElementById('search-input');
    if (si) si.value = '';
    filtered = [...JOBS];
    currentPage = 1;
    renderJobs();
}

/* ── Apply Modal ─────────────────────────────── */
function openApplyModal(id) {
    const job = JOBS.find(j => j.id === id);
    if (!job) return;

    const modal = document.getElementById('apply-modal');
    const content = document.getElementById('modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
    <div class="job-detail-header">
      <div class="modal-company-logo"><i data-lucide="${job.companyIcon}"></i></div>
      <div>
        <h2 class="modal-job-title">${job.title}</h2>
        <p class="modal-company-name">${job.company} · ${job.location}</p>
        <div class="modal-tags">
          <span class="badge badge-purple">${job.type}</span>
          <span class="badge badge-teal">${job.experience} yrs exp</span>
          <span class="badge badge-green">${job.salary}</span>
        </div>
      </div>
    </div>

    <div class="job-description">
      ${job.description}
      <h4>Requirements</h4>
      <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
      <h4>Nice to Have</h4>
      <ul>${job.niceToHave.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>

    <div class="apply-tabs">
      <button class="apply-tab-btn active" onclick="switchApplyTab('linkedin', this)"><i data-lucide="link" style="width:16px;height:16px;display:inline-block;vertical-align:middle"></i> Apply via LinkedIn</button>
      <button class="apply-tab-btn" onclick="switchApplyTab('direct', this)"><i data-lucide="edit-3" style="width:16px;height:16px;display:inline-block;vertical-align:middle"></i> Quick Apply</button>
    </div>

    <div id="tab-linkedin" class="apply-tab-content active">
      <p style="color:var(--clr-text-secondary);font-size:.9375rem;margin-bottom:16px;line-height:1.7">
        This job is listed on LinkedIn. Click below to apply directly. Your LinkedIn profile will be used for application.
      </p>
      <a href="${job.linkedin}" target="_blank" rel="noopener" class="btn btn-accent btn-lg" style="width:100%;justify-content:center">
        Apply on LinkedIn <i data-lucide="arrow-right" style="width:18px;height:18px;display:inline-block;vertical-align:middle"></i>
      </a>
    </div>

    <div id="tab-direct" class="apply-tab-content">
      <form onsubmit="submitQuickApply(event)" style="display:flex;flex-direction:column;gap:16px">
        <div class="form-group">
          <label class="form-label">Full Name *</label>
          <input class="form-input" type="text" placeholder="Ananya Sharma" required />
        </div>
        <div class="form-group">
          <label class="form-label">Email Address *</label>
          <input class="form-input" type="email" placeholder="ananya@example.com" required />
        </div>
        <div class="form-group">
          <label class="form-label">LinkedIn Profile URL</label>
          <input class="form-input" type="url" placeholder="https://linkedin.com/in/your-profile" />
        </div>
        <div class="form-group">
          <label class="form-label">Resume Link (Google Drive / Notion / any public URL)</label>
          <input class="form-input" type="url" placeholder="https://drive.google.com/..." />
        </div>
        <div class="form-group">
          <label class="form-label">Why are you a great fit? (optional)</label>
          <textarea class="form-textarea" placeholder="Tell us about yourself and why this role excites you..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center">Submit Application <i data-lucide="sparkles" style="width:18px;height:18px;display:inline-block;vertical-align:middle"></i></button>
      </form>
    </div>
  `;

    if (window.lucide) window.lucide.createIcons();

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function switchApplyTab(tab, btn) {
    document.querySelectorAll('.apply-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.apply-tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${tab}`)?.classList.add('active');
}

function closeApplyModal() {
    document.getElementById('apply-modal')?.classList.remove('open');
    document.body.style.overflow = '';
}

function submitQuickApply(e) {
    e.preventDefault();
    closeApplyModal();
    window.showToast && window.showToast('Application submitted! We\'ll reach out soon.', 'check-circle');
}

/* ── Init ────────────────────────────────────── */
function initJobs() {
    renderJobs();

    // Search event
    const si = document.getElementById('search-input');
    if (si) si.addEventListener('input', applyFilters);

    // Filter checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });

    // Modal close on overlay click
    const modal = document.getElementById('apply-modal');
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) closeApplyModal();
        });
    }

    // Close button
    document.getElementById('modal-close-btn')?.addEventListener('click', closeApplyModal);

    // Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeApplyModal();
    });
}

// Run immediately if DOM is already ready, otherwise wait for event
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJobs);
} else {
    initJobs();
}
