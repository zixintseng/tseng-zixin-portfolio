const awardEvidence = {
  'ict-first': {
    title: '教育 AI 組 · 第一名',
    intro: 'AI 五力智慧幼兒園｜2025 第 30 屆大專校院資訊應用服務創新競賽',
    media: [['assets/awards/ict-event-01.jpg', '競賽現場', '點擊放大照片'], ['assets/awards/ict-first-certificate.png', '第一名獎狀', '點擊放大獎狀']]
  },
  'ict-second': {
    title: '資訊應用組 · 第二名',
    intro: 'AI 五力智慧幼兒園｜2025 第 30 屆大專校院資訊應用服務創新競賽',
    media: [['assets/awards/ict-event-02.jpg', '競賽現場', '點擊放大照片'], ['assets/awards/ict-second-certificate.png', '第二名獎狀', '點擊放大獎狀']]
  },
  'ict-popularity': {
    title: '最佳人氣獎',
    intro: 'AI 五力智慧幼兒園｜2025 第 30 屆大專校院資訊應用服務創新競賽',
    media: [['assets/awards/ict-popularity-certificate.png', '最佳人氣獎獎狀', '點擊放大獎狀']]
  },
  'ict-excellent': {
    title: '產學合作組 · 佳作',
    intro: '基於 LLM、RAG 與 AI Agent 的會議機器人',
    media: [['assets/awards/ict-excellent-certificate.png', '佳作獎狀', '點擊放大獎狀']]
  },
  creative: {
    title: '大專資訊教育組 · 特優',
    intro: '2025 全國創意與智慧科技競賽',
    media: [['assets/awards/creative-certificate.jpg', '特優獎狀', '點擊放大獎狀']]
  },
  innovation: {
    title: '智慧創新大賞 · 佳作',
    intro: 'AI 應用類／學生組｜2025 智慧創新大賞',
    media: [['assets/awards/innovation-event.jpg', '智慧創新大賞佳作獎狀', '點擊放大獎狀']]
  },
  aigo: {
    title: 'AIGO 淬煉實戰盃 · 佳作',
    intro: '全域意境感知智慧會議秘書系統',
    media: [['assets/awards/aigo-event.jpg', '競賽現場', '點擊放大照片'], ['assets/awards/aigo-certificate.jpg', '佳作獎狀', '點擊放大獎狀']]
  },
  'service-innovation': {
    title: '台灣服務創新獎 · AI 應用獎',
    intro: '2025 第十屆台灣服務創新獎｜全域意境感知智慧會議秘書系統',
    media: [['assets/awards/service-innovation-ai.webp', 'AI 應用獎獎座', '點擊放大獎座']]
  }
};

const evidenceModal = document.querySelector('#case-modal');
document.querySelectorAll('[data-award]').forEach((button) => {
  button.addEventListener('click', () => {
    const award = awardEvidence[button.dataset.award];
    document.querySelector('#modal-kicker').textContent = 'RECOGNITION / EVIDENCE';
    document.querySelector('#modal-title').textContent = award.title;
    document.querySelector('#modal-body').innerHTML = `
      <p class="award-media-intro">${award.intro}</p>
      <div class="award-media-grid">
        ${award.media.map(([src, label, hint]) => `<a href="${src}" target="_blank" rel="noopener"><figure class="${label.includes('獎狀') ? 'certificate' : 'photo'}"><img src="${src}" alt="${label}" /><figcaption>${label}<small>${hint} ↗</small></figcaption></figure></a>`).join('')}
      </div>`;
    evidenceModal.showModal();
  });
});
