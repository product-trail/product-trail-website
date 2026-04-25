/* ============================================
   PRODUCT TRAIL — resources.js
   Resource data, category filters, card render
   ============================================ */

const RESOURCES = [
  { id: 1, title: 'Inspired: How to Create Tech Products Customers Love', category: 'Books', author: 'Marty Cagan', icon: 'book', isFeatured: true, link: 'https://www.amazon.in/INSPIRED-Create-Tech-Products-Customers/dp/1119387507', desc: 'The PM bible. Learn how the most successful tech companies structure their product organization.' },
  { id: 2, title: 'PM School — Free Product Management Course', category: 'Courses', author: 'PM School', icon: 'graduation-cap', isFeatured: true, link: 'https://pmschool.io', desc: 'India\'s most popular free PM resource for beginners looking to break into product.' },
  { id: 3, title: 'Lenny\'s Podcast & Newsletter', category: 'Communities', author: 'Lenny Rachitsky', icon: 'mic', isFeatured: true, link: 'https://www.lennysnewsletter.com', desc: 'Deep dives on product, growth, and management from the world\'s top PM leaders.' },
  { id: 4, title: 'The CIRCLES Method for Product Design', category: 'Frameworks', author: 'Lewis C. Lin', icon: 'circle-dot', isFeatured: false, link: 'https://lewisclin.com', desc: 'A structured framework to answer product design interview questions effectively.' },
  { id: 5, title: 'Product Hunt: Discover New Products', category: 'Tools', author: 'Product Hunt', icon: 'layout', isFeatured: false, link: 'https://producthunt.com', desc: 'The place to discover the latest mobile apps, websites, and technology products.' },
  { id: 6, title: 'The Product Management Twitter (X) Community', category: 'Communities', author: 'Various', icon: 'twitter', isFeatured: false, link: 'https://twitter.com/search?q=product+management', desc: 'Follow top PM voices for daily insights, debates, and career advice.' },
  { id: 7, title: 'Exponent: PM Interview Prep YouTube', category: 'YouTube', author: 'Exponent', icon: 'play-circle', isFeatured: false, link: 'https://youtube.com/@tryexponent', desc: 'The best channel for mock PM interviews (Google, Meta, Amazon).' },
  { id: 8, title: 'Cracking the PM Interview', category: 'Books', author: 'Gayle McDowell', icon: 'book', isFeatured: false, link: 'https://amazon.in', desc: 'A comprehensive guide to landing a PM role at top tech companies.' },
  { id: 9, title: 'The Opportunity Solution Tree', category: 'Frameworks', author: 'Teresa Torres', icon: 'git-branch', isFeatured: false, link: 'https://producttalk.org', desc: 'A visual aid to help you find the best path to your desired product outcome.' },
  { id: 10, title: 'RICE Prioritization Framework', category: 'Frameworks', author: 'Intercom', icon: 'layers', isFeatured: false, link: 'https://intercom.com', desc: 'Reach, Impact, Confidence, and Effort — a simple tool for prioritization.' },
  { id: 11, title: 'The Lean Startup', category: 'Books', author: 'Eric Ries', icon: 'book', isFeatured: false, link: 'https://amazon.in', desc: 'Learn the Build-Measure-Learn feedback loop for rapid innovation.' },
  { id: 12, title: 'Reforge: Advanced PM Growth Programs', category: 'Courses', author: 'Reforge', icon: 'graduation-cap', isFeatured: false, link: 'https://reforge.com', desc: 'The frontier of product and growth education for experienced PMs.' }
];

const CAT_ICONS = {
  All: 'star',
  Books: 'book',
  Courses: 'graduation-cap',
  YouTube: 'play-circle',
  Frameworks: 'zap',
  Communities: 'users',
  Tools: 'wrench'
};

let activeCategory = 'All';

function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;

  const categories = ['All', ...new Set(RESOURCES.map(r => r.category))];

  container.innerHTML = categories.map(cat => `
    <button class="cat-btn ${activeCategory === cat ? 'active' : ''}" onclick="filterCategory('${cat}')">
      <i data-lucide="${CAT_ICONS[cat]}" style="width:14px;height:14px;display:inline-block;vertical-align:middle;margin-right:6px"></i> ${cat}
    </button>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function filterCategory(cat) {
  activeCategory = cat;
  renderCategoryFilters();
  renderAllResources();
}

function renderFeatured() {
  const container = document.getElementById('featured-resources-grid');
  if (!container) return;

  const featured = RESOURCES.filter(r => r.isFeatured);
  container.innerHTML = featured.map(res => `
    <div class="featured-resource-card glass-card reveal">
      <div class="resource-card-header">
        <div class="resource-icon"><i data-lucide="${res.icon}"></i></div>
        <span class="badge badge-purple">${res.category}</span>
      </div>
      <h3>${res.title}</h3>
      <p class="resource-source">📌 ${res.author}</p>
      <div class="resource-desc">${res.desc}</div>
      <div class="resource-footer">
        <a href="${res.link}" target="_blank" rel="noopener" class="resource-access-link">
          Access Free →
        </a>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 100);
}

function renderAllResources() {
  const container = document.getElementById('all-resources-grid');
  const heading = document.getElementById('resources-heading');
  if (!container) return;

  const list = activeCategory === 'All'
    ? RESOURCES.filter(r => !r.isFeatured)
    : RESOURCES.filter(r => r.category === activeCategory);

  if (heading) heading.textContent = activeCategory === 'All' ? 'All Resources' : `${activeCategory} Resources`;

  if (list.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--clr-text-muted);padding:40px">No resources in this category yet — we're adding more soon!</div>`;
    return;
  }

  container.innerHTML = list.map(r => `
    <div class="resource-card glass-card reveal">
      <div class="resource-card-header">
        <span class="resource-card-icon"><i data-lucide="${r.icon}"></i></span>
        <span class="badge badge-purple">${r.category}</span>
      </div>
      <h4>${r.title}</h4>
      <p class="resource-source" style="font-size:.8rem;color:var(--clr-text-muted);margin-bottom:4px">📌 ${r.author}</p>
      <p>${r.desc}</p>
      <div class="resource-card-footer">
        <a href="${r.link}" target="_blank" rel="noopener" class="resource-access-link" style="font-size:.85rem">
          Access →
        </a>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 100);
}

function getCatColor(cat) {
  const map = { Books: 'purple', Courses: 'teal', YouTube: 'gold', Frameworks: 'pink', Communities: 'green', Tools: 'teal' };
  return map[cat] || 'purple';
}

function initResources() {
  renderCategoryFilters();
  renderFeatured();
  renderAllResources();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initResources);
} else {
  initResources();
}
