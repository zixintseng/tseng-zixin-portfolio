const modal = document.querySelector('#case-modal');
const projectData = {
  meeting: {
    kicker: 'CASE STUDY / AI COLLABORATION',
    title: '諸葛｜智慧會議秘書系統',
    description: '針對「會議紀錄難重用、決策缺少脈絡、交辦事項容易失焦」的工作痛點，設計從會前到會後的一站式智慧協作流程。系統讓 AI 不只記錄，而是能提供知識脈絡、決策提醒與任務追蹤的會議成員。',
    items: [['核心方法', 'RAG 知識檢索、語音辨識／說話者分離、任務 NER 與決策預測'], ['設計成果', '將逐字稿轉化為重點摘要、任務清單、風險提醒與管理儀表板'], ['價值主張', '讓會議內容成為可查找、可追蹤、可持續累積的組織知識資產'], ['應用情境', '跨部門協作、專案進度管理與企業決策輔助']]
  },
  kindergarten: {
    kicker: 'CASE STUDY / EDUCATION AI',
    title: 'AI 五力智慧幼兒園',
    description: '以幼兒園真實場景為出發點，將日常影像與親師溝通中的零散資訊，轉化為透明、可追蹤的成長紀錄。此作品獲 2025 資訊應用服務創新競賽教育 AI 組第一名與資訊應用組第二名。',
    items: [['核心方法', 'YOLO、BoT-SORT、視線／動作分析、VLM 與 LLM'], ['設計成果', '五力成長報表、個人化精華影片、數位聯絡簿與自動化提醒'], ['價值主張', '降低教師行政負擔，讓家長更即時理解孩子的日常與成長'], ['應用情境', '幼兒教育、親師溝通、教育紀錄數位化']]
  },
  commerce: {
    kicker: 'CASE STUDY / CUSTOMER INTELLIGENCE',
    title: '東森購物對話智能分析',
    description: '以客服／電話專員對話資料為基礎，設計「客戶畫像—標籤—話術—回饋」閉環。目標是將散落的對話訊息轉為可運算的客戶洞察，進一步支持更有策略的溝通與推薦。',
    items: [['核心方法', 'NLP 語意分析、客戶 Persona、知識圖譜與標籤矩陣'], ['設計成果', '動態客戶標籤、探測話術庫與情緒／購買時機辨識'], ['價值主張', '讓話術不只依賴個人經驗，而能以資料持續優化'], ['應用情境', 'CRM、精準行銷、客服營運與銷售輔助']]
  }
};
function openProject(key) {
  const data = projectData[key];
  document.querySelector('#modal-kicker').textContent = data.kicker;
  document.querySelector('#modal-title').textContent = data.title;
  document.querySelector('#modal-body').innerHTML = `<p>${data.description}</p><div class="modal-grid">${data.items.map(([label, value]) => `<div><b>${label}</b><span>${value}</span></div>`).join('')}</div>`;
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
