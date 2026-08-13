const modal = document.querySelector('#case-modal');
const projectData = {
  meeting: {
    kicker: 'CASE STUDY / AI COLLABORATION',
    title: '諸葛｜智慧會議秘書系統',
    description: '針對「會議紀錄難重用、決策缺少脈絡、交辦事項容易失焦」的痛點，設計從會前到會後的一站式智慧協作流程。AI 不只記錄，更參與知識調用、決策提醒與任務追蹤。',
    items: [['問題', '資料分散、會後待辦難追蹤'], ['我做了什麼', '設計資料整合、逐字稿處理、摘要與任務決策辨識流程'], ['系統產出', '重點摘要、任務清單、風險提醒與管理儀表板']],
    media: [['image', 'assets/projects/meeting-interface-1.jpg', '諸葛智慧會議秘書系統介面｜會議大廳'], ['image', 'assets/projects/meeting-interface-2.jpg', '諸葛智慧會議秘書系統介面｜會議進行']]
  },
  kindergarten: {
    kicker: 'CASE STUDY / EDUCATION AI',
    title: 'AI 五力智慧幼兒園',
    description: '以幼兒園真實場景為出發點，將日常影像與親師溝通中的零散資訊，轉化為透明、可追蹤的成長紀錄。此作品獲 2025 資訊應用服務創新競賽教育 AI 組第一名、資訊應用組第二名及最佳人氣獎。',
    items: [['問題', '教師紀錄耗時，家長難即時掌握孩子的日常與成長'], ['我做了什麼', '規劃五力指標、影音紀錄、聯絡簿與提醒的整合服務'], ['系統產出', '五力成長報表、個人化精華影片與數位聯絡簿']],
    media: [['video', 'assets/projects/kindergarten-highlight-web.mp4', '一分鐘精華影片'], ['video', 'assets/projects/kindergarten-contact-book-web.mp4', '電子聯絡簿展示']]
  },
  commerce: {
    kicker: 'CASE STUDY / CUSTOMER INTELLIGENCE',
    title: '東森購物對話智能分析',
    description: '以客服／電話專員對話資料為基礎，提出「客戶畫像—標籤—話術—回饋」閉環，將散落的對話訊息轉為可運算的客戶洞察，支持更有策略的溝通與推薦。',
    items: [['問題', '關鍵客戶資訊容易散落在大量對話紀錄裡'], ['我做了什麼', '規劃客戶 Persona、語意貼標、策略話術與回饋閉環'], ['系統產出', '動態標籤、探測話術與後續營運分析依據']],
    media: [['image', 'assets/projects/commerce-interface.png', '東森購物對話智能分析專案展示']]
  },
  'video-automation': {
    kicker: 'CASE STUDY / WORKFLOW AUTOMATION',
    title: '一鍵生成行銷影片',
    description: '為商家設計可從 LINE Bot 操作的行銷短影音工作流：收集商品圖片、補充商品與活動資訊後，產出可選擇風格的文案與旁白，接著生成影片並讓使用者確認與回饋。重點不是單次生成，而是把素材、審稿、修正與進度查詢串成可使用的服務。',
    items: [['問題', '商家短影音製作涉及素材、文案、旁白與剪輯，重複溝通成本高'], ['我做了什麼', '規劃 LINE Bot 操作分流、文案風格選擇、逐字稿確認與影片回饋流程'], ['系統產出', '可追蹤進度、可反覆修正的一鍵行銷影片生成工作流'], ['整合技術', 'GPT、影片生成服務、Creatomate、LINE 推播訊息']],
    media: [['image', 'assets/projects/curious-video-automation.png', '一鍵生成行銷影片專案展示']]
  },
  'wedding-story': {
    kicker: 'CASE STUDY / GENERATIVE EXPERIENCE',
    title: '婚宴故事影像與婚紗照模擬',
    description: '將新人照片、照片說明與選擇的敘事風格整合為具連貫情緒的婚宴影片；同時規劃婚紗照模擬體驗，讓使用者依模板預覽婚紗款式、髮型、姿勢與背景，串連從婚紗視覺到婚宴故事影片的互動旅程。',
    items: [['問題', '珍貴照片與回憶敘事難整理成有節奏、具情感的婚宴影片'], ['我做了什麼', '設計風格選擇、照片與文字輸入、逐字稿生成、語音字幕與影片合成流程'], ['系統產出', '客製化婚宴故事影片與婚紗模板預覽體驗'], ['整合技術', 'LINE Bot、生成式 AI、圖像生成、Creatomate']],
    media: [['image', 'assets/projects/wedding-story.png', '婚宴故事影像與婚紗照模擬專案展示']]
  }
};
function openProject(key) {
  const data = projectData[key];
  document.querySelector('#modal-kicker').textContent = data.kicker;
  document.querySelector('#modal-title').textContent = data.title;
  const media = data.media.map(([type, src, label]) => type === 'video'
    ? `<figure class="case-video"><video controls playsinline preload="metadata"><source src="${src}" type="video/mp4" />你的瀏覽器不支援影片播放。</video><figcaption>${label}<small>可直接在此播放</small></figcaption></figure>`
    : `<a href="${src}" target="_blank" rel="noopener"><figure><img src="${src}" alt="${label}" /><figcaption>${label}<small>點擊放大 ↗</small></figcaption></figure></a>`).join('');
  document.querySelector('#modal-body').innerHTML = `<p class="case-intro">${data.description}</p><div class="case-media-grid">${media}</div><div class="modal-grid case-grid">${data.items.map(([label, value]) => `<div><b>${label}</b><span>${value}</span></div>`).join('')}</div>`;
  modal.showModal();
}
document.querySelectorAll('[data-project]').forEach((button) => button.addEventListener('click', () => openProject(button.dataset.project)));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); toggle.setAttribute('aria-label', open ? '關閉導覽選單' : '開啟導覽選單'); });
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', '開啟導覽選單'); }));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
const videoObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  const video = entry.target;
  if (entry.isIntersecting) { video.play().catch(() => {}); } else { video.pause(); }
}), { threshold: .25 });
document.querySelectorAll('.project-video-shot video').forEach((video) => videoObserver.observe(video));
document.querySelector('#year').textContent = new Date().getFullYear();
