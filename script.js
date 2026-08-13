const modal = document.querySelector('#case-modal');
const projectData = {
  meeting: {
    kicker: 'CASE STUDY / AI COLLABORATION',
    title: '諸葛｜智慧會議秘書系統',
    description: '針對「會議紀錄難重用、決策缺少脈絡、交辦事項容易失焦」的痛點，設計從會前到會後的一站式智慧協作流程。AI 不只記錄，更參與知識調用、決策提醒與任務追蹤。',
    items: [['問題', '資料分散、會後待辦難追蹤'], ['我做了什麼', '設計資料整合、逐字稿處理、摘要與任務決策辨識流程'], ['系統產出', '重點摘要、任務清單、風險提醒與管理儀表板']],
    media: [['assets/projects/meeting-10.png', '會前／會中／會後的智慧協作情境'], ['assets/projects/meeting-24.png', '會議資料到任務追蹤的系統架構']]
  },
  kindergarten: {
    kicker: 'CASE STUDY / EDUCATION AI',
    title: 'AI 五力智慧幼兒園',
    description: '以幼兒園真實場景為出發點，將日常影像與親師溝通中的零散資訊，轉化為透明、可追蹤的成長紀錄。此作品獲 2025 資訊應用服務創新競賽教育 AI 組第一名、資訊應用組第二名及最佳人氣獎。',
    items: [['問題', '教師紀錄耗時，家長難即時掌握孩子的日常與成長'], ['我做了什麼', '規劃五力指標、影音紀錄、聯絡簿與提醒的整合服務'], ['系統產出', '五力成長報表、個人化精華影片與數位聯絡簿']],
    media: [['assets/projects/kindergarten-20.png', '六大功能與親師溝通服務'], ['assets/projects/kindergarten-21.png', '五力指標與資料處理架構（不含兒童影像）']]
  },
  commerce: {
    kicker: 'CASE STUDY / CUSTOMER INTELLIGENCE',
    title: '東森購物對話智能分析',
    description: '以客服／電話專員對話資料為基礎，提出「客戶畫像—標籤—話術—回饋」閉環，將散落的對話訊息轉為可運算的客戶洞察，支持更有策略的溝通與推薦。',
    items: [['問題', '關鍵客戶資訊容易散落在大量對話紀錄裡'], ['我做了什麼', '規劃客戶 Persona、語意貼標、策略話術與回饋閉環'], ['系統產出', '動態標籤、探測話術與後續營運分析依據']],
    media: [['assets/projects/commerce-5.png', '客戶畫像與標籤矩陣'], ['assets/projects/commerce-7.png', '語意貼標與即時話術調整概念']]
  }
};
function openProject(key) {
  const data = projectData[key];
  document.querySelector('#modal-kicker').textContent = data.kicker;
  document.querySelector('#modal-title').textContent = data.title;
  document.querySelector('#modal-body').innerHTML = `<p class="case-intro">${data.description}</p><div class="case-media-grid">${data.media.map(([src, label]) => `<a href="${src}" target="_blank" rel="noopener"><figure><img src="${src}" alt="${label}" /><figcaption>${label}<small>點擊放大 ↗</small></figcaption></figure></a>`).join('')}</div><div class="modal-grid case-grid">${data.items.map(([label, value]) => `<div><b>${label}</b><span>${value}</span></div>`).join('')}</div>`;
  modal.showModal();
}
document.querySelectorAll('[data-project]').forEach((button) => button.addEventListener('click', () => openProject(button.dataset.project)));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
