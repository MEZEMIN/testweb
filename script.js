// ─── TRANSLATIONS ───────────────────────────────────────────
const translations = {
  ko: {
    nav_welcome: 'Welcome',
    nav_setup: 'Setup',
    nav_prompt: 'Prompt',
    nav_reference: 'Reference',

    welcome_greeting: '*AI Cinema Encyclopédie에 오신것을 환영합니다.',
    welcome_desc: '*AI Cinema Encyclopédie는 AI를 이용해 시네마틱한 사진/영상을 제작하는 법과 팁을 공유하는 백과사전입니다.',
    welcome_platform: '이 페이지의 대부분의 설명이나 튜토리얼은 <a href="https://higgsfield.ai/" target="_blank" class="inline-link">higgsfield.ai</a>를 사용한다는 가정 하에 제작되었습니다.',
    welcome_cta: '처음 오신분은 <button class="inline-link-btn" onclick="goToTab(\'setup\')">Setup</button>으로 가서 본인이 사용중인 AI를 셋업하는 것을 추천합니다.',

    setup_card_tag: 'Claude',
    setup_card_title: '클로드를 이미지/영상 제작 프롬프트로 세팅하기',
    setup_card_desc: '아래 내용을 전체 복사한 뒤, <strong>Claude 설정 → 일반 → 개인 맞춤설정</strong> 항목에 붙여넣으세요.<br>이후 클로드가 이미지/영상 프롬프트 요청에 자동으로 최적화된 방식으로 응답합니다.',
    copy_btn: '복사',
    copy_btn_done: '복사됨!',

    prompt_card_tag: 'Tutorial',
    prompt_card_title: 'Seedance 2.0 프롬프팅 튜토리얼과 클로드 프롬프트 생성 Skill 추가하기',

    skill_dl_btn: '바로 Skill 파일 다운로드 받기 ↓',
    modal_notice: '아래 버튼으로 <strong>Claude 전용 Skill 파일</strong>을 바로 다운로드하세요. 다운로드 후 아래 방법으로 Claude에 추가하면 됩니다.',
    modal_skill_title: 'Claude에 Skill 추가하는 법',
    modal_skill_1: '위 버튼에서 <code>.skill</code> 파일 다운로드',
    modal_skill_2: 'Claude 접속 → 우측 상단 프로필 → <strong>Settings</strong>',
    modal_skill_3: '<strong>Claude.ai Features → Skills</strong> 항목으로 이동',
    modal_skill_4: '<strong>Add Skill</strong> 클릭 후 다운로드한 파일 업로드 또는 내용 붙여넣기',
    modal_skill_5: '저장 후 Claude 대화창에서 <code>/</code> 를 입력하면 Skill 목록이 나타남',
    modal_intro_1: '해당 영상은 Higgsfield 플랫폼에서 제공하는 새로운 AI 비디오 모델인 <strong>Seedance 2.0</strong>과 <strong>Claude AI</strong>를 결합하여 압도적인 퀄리티의 영상을 제작하는 구체적인 워크플로우를 다루고 있습니다.',
    modal_intro_2: '영상의 핵심 내용은 크게 4가지 파트로 나눌 수 있습니다.',
    modal_ch1_title: 'Claude AI를 활용한 마스터급 프롬프트 생성 <span class="timestamp">00:48</span>',
    modal_ch1_p1: '<strong>커스텀 Skill 활용:</strong> 크리에이터가 무료로 배포한 Claude 전용 스킬을 설치하여, AI가 조명, 카메라 워크, 색상 코드, 대기 효과 등 고도의 VFX 전문가 수준의 용어를 사용해 프롬프트를 작성하도록 만듭니다.',
    modal_ch1_p2: '<strong>디테일한 연출 제어:</strong> 영상을 2초 단위의 컷으로 나누거나 하나의 매끄러운 롱테이크(Seamless transition)로 만들도록 지시할 수 있으며, Seedance의 글자 수 제한(약 3,000~4,000자)에 맞춰 프롬프트 분량을 조절하는 팁을 제공합니다.',
    modal_ch2_title: '실제 촬영 영상과 AI의 자연스러운 합성 <span class="timestamp">06:12</span>',
    modal_ch2_p1: '스마트폰으로 촬영한 실제 영상 중 특정 프레임을 캡처하여 Seedance 2.0의 <strong>시작 프레임(Start Frame)</strong>으로 업로드합니다.',
    modal_ch2_p2: "예를 들어, '손목시계를 터치하는 순간'의 이미지를 넣고 프롬프트를 입력하면, 홀로그램 UI가 나타나고 뒤에서 공룡이 포효하며 나타나는 복잡한 3D 트랜지션 씬을 단 한 번의 생성으로 완성할 수 있습니다.",
    modal_ch3_title: 'Omni-Reference를 통한 캐릭터 및 세계관 유지 <span class="timestamp">12:52</span>',
    modal_ch3_p1: "단일 이미지가 아닌 '캐릭터 시트(설정화)'와 '배경 이미지' 등의 다양한 레퍼런스를 동시에 제공하여 AI에게 맥락을 부여하는 기술입니다.",
    modal_ch3_p2: '이를 통해 카메라 앵글이 바뀌거나 컷이 넘어가도 동일한 캐릭터의 외형을 완벽하게 유지할 수 있습니다. 고개를 숙이고 있다가 얼굴을 드는 씬에서도 제공된 캐릭터 시트를 기반으로 정확한 얼굴을 구현해 내는 등 일관된 스토리텔링이 가능해집니다.',
    modal_ch4_title: '마케팅(광고) 및 3D 텍스트 통합 연출 <span class="timestamp">10:16</span>',
    modal_ch4_p1: '<strong>초고속 광고 영상 제작:</strong> 커스텀 프롬프트를 활용해 15초 분량의 고품질 Meta 광고 영상을 하루에도 수십 개씩 찍어낼 수 있는 마케팅 활용성을 보여줍니다.',
    modal_ch4_p2: '<strong>애프터 이펙트 대체 <span class="timestamp">16:09</span>:</strong> 텍스트 이미지와 배경 이미지를 함께 업로드하면, AI가 공간의 원근감과 조명 그림자를 계산하여 3D 텍스트를 영상 환경 속에 완벽하게 합성해 줍니다.',
    modal_summary: '요약하자면, 이 영상은 Claude를 통해 전문가 수준의 프롬프트를 구조화하고, Seedance 2.0의 다중 이미지 인식 기능(Omni-Reference)을 활용하여 기존의 복잡한 3D 모델링이나 특수효과 작업 없이도 한 편의 영화나 광고를 만들어내는 혁신적인 AI 워크플로우를 소개하고 있습니다.',

    ref1_tag: '모델 허브', ref1_desc: 'Stable Diffusion 계열 모델, LoRA, Embedding을 공유하는 최대 커뮤니티. 검색 필터로 원하는 스타일의 모델을 쉽게 찾을 수 있습니다.',
    ref2_desc: '오픈소스 AI 모델의 허브. Wan2.1, HunyuanVideo 등 주요 영상 생성 모델을 다운로드할 수 있습니다.',
    ref3_tag: '커뮤니티', ref3_desc: 'SD 관련 최신 정보, 팁, 워크플로우를 공유하는 가장 활성화된 영어권 커뮤니티입니다.',
    ref4_tag: '워크플로우', ref4_desc: 'ComfyUI 워크플로우를 공유하고 바로 불러올 수 있는 플랫폼. 복잡한 파이프라인을 빠르게 시작할 수 있습니다.',
    ref5_tag: '클라우드', ref5_desc: '로컬 GPU가 없어도 고사양 GPU를 시간당 렌탈하여 AI 영상 생성을 할 수 있는 클라우드 서비스입니다.',
    ref6_tag: '유튜브', ref6_desc: 'SD, ComfyUI, 영상 생성 관련 튜토리얼을 꾸준히 업로드하는 유튜브 채널. 초보자부터 고급 사용자까지 유용합니다.',
  },
  en: {
    nav_welcome: 'Welcome',
    nav_setup: 'Setup',
    nav_prompt: 'Prompt',
    nav_reference: 'Reference',

    welcome_greeting: 'Welcome to *AI Cinema Encyclopédie.',
    welcome_desc: '*AI Cinema Encyclopédie is an encyclopedia sharing tips and tutorials on creating cinematic photos and videos using AI.',
    welcome_platform: 'Most guides and tutorials on this page are made with the assumption that you are using <a href="https://higgsfield.ai/" target="_blank" class="inline-link">higgsfield.ai</a>.',
    welcome_cta: "If you're new here, we recommend heading to <button class=\"inline-link-btn\" onclick=\"goToTab('setup')\">Setup</button> to configure your AI tools.",

    setup_card_tag: 'Claude',
    setup_card_title: 'Setting Up Claude for AI Image/Video Prompt Generation',
    setup_card_desc: 'Copy the content below and paste it into <strong>Claude Settings → General → Personal Customization</strong>.<br>Claude will then automatically respond to image/video prompt requests in an optimized way.',
    copy_btn: 'Copy',
    copy_btn_done: 'Copied!',

    prompt_card_tag: 'Tutorial',
    prompt_card_title: 'Seedance 2.0 Prompting Tutorial & Adding a Claude Prompt Skill',

    skill_dl_btn: 'Download Skill File Now ↓',
    modal_notice: 'Download the <strong>Claude Skill file</strong> directly with the button below, then follow the steps to add it to Claude.',
    modal_skill_title: 'How to Add a Skill to Claude',
    modal_skill_1: 'Download the <code>.skill</code> file using the button above',
    modal_skill_2: 'Go to Claude → profile icon (top right) → <strong>Settings</strong>',
    modal_skill_3: 'Navigate to <strong>Claude.ai Features → Skills</strong>',
    modal_skill_4: 'Click <strong>Add Skill</strong> and upload the file or paste its contents',
    modal_skill_5: 'After saving, type <code>/</code> in Claude\'s chat to see your Skills list',
    modal_intro_1: 'This video covers a specific workflow for producing incredibly high-quality videos by combining <strong>Seedance 2.0</strong>, a new AI video model on the Higgsfield platform, with <strong>Claude AI</strong>.',
    modal_intro_2: 'The video covers 4 key sections:',
    modal_ch1_title: 'Master-Level Prompt Generation with Claude AI <span class="timestamp">00:48</span>',
    modal_ch1_p1: '<strong>Custom Skill:</strong> Install a free Claude skill shared by the creator so that AI writes prompts using VFX-level terminology — lighting, camera movement, color codes, and atmospheric effects.',
    modal_ch1_p2: '<strong>Fine-grained control:</strong> You can instruct the AI to split footage into 2-second cuts or one seamless long take, with tips on keeping prompts within Seedance\'s character limit (~3,000–4,000 chars).',
    modal_ch2_title: 'Natural AI Compositing with Real Footage <span class="timestamp">06:12</span>',
    modal_ch2_p1: 'Capture a specific frame from real smartphone footage and upload it as Seedance 2.0\'s <strong>Start Frame</strong>.',
    modal_ch2_p2: 'For example, uploading an image of a wristwatch being tapped can generate a complex 3D transition — a hologram UI appearing and a dinosaur roaring from behind — in a single generation.',
    modal_ch3_title: 'Character & World Consistency via Omni-Reference <span class="timestamp">12:52</span>',
    modal_ch3_p1: 'Instead of a single image, you provide multiple references — a character sheet and background images — to give the AI context.',
    modal_ch3_p2: 'This maintains perfect character appearance across cuts and angle changes. Even when a character lifts their head, the AI reconstructs the correct face from the character sheet, enabling consistent storytelling.',
    modal_ch4_title: 'Marketing (Ad) & 3D Text Integration <span class="timestamp">10:16</span>',
    modal_ch4_p1: '<strong>Ultra-fast ad production:</strong> Use custom prompts to generate dozens of high-quality 15-second Meta ad videos per day.',
    modal_ch4_p2: '<strong>After Effects replacement <span class="timestamp">16:09</span>:</strong> Upload a text image alongside a background image and the AI calculates perspective and lighting to perfectly composite 3D text into the scene.',
    modal_summary: 'In summary, this video introduces an innovative AI workflow — structuring expert-level prompts through Claude and using Seedance 2.0\'s multi-image recognition (Omni-Reference) to produce film or ad-quality content without complex 3D modeling or VFX.',

    ref1_tag: 'Model Hub', ref1_desc: 'The largest community for sharing Stable Diffusion models, LoRA, and Embeddings. Use search filters to find models that match your style.',
    ref2_desc: 'The hub for open-source AI models. Download major video generation models like Wan2.1 and HunyuanVideo here.',
    ref3_tag: 'Community', ref3_desc: 'The most active English-speaking community for sharing the latest SD news, tips, and workflows.',
    ref4_tag: 'Workflow', ref4_desc: 'A platform for sharing and importing ComfyUI workflows. Quickly get started with complex pipelines.',
    ref5_tag: 'Cloud', ref5_desc: 'Cloud GPU rental services that let you generate AI videos without a local GPU, billed hourly.',
    ref6_tag: 'YouTube', ref6_desc: 'A YouTube channel consistently uploading tutorials on SD, ComfyUI, and video generation. Useful for beginners and advanced users alike.',
  }
};

// ─── LANGUAGE ────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'ko';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'ko' ? '한국어' : 'English';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
}

function toggleLang() {
  applyLang(currentLang === 'ko' ? 'en' : 'ko');
}

// ─── TABS ─────────────────────────────────────────────────────
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.tab-content');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

function switchTab(target) {
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === target));
  sections.forEach(s => s.classList.toggle('hidden', s.id !== target));
}

function goToTab(target) {
  switchTab(target);
}

document.getElementById('logoBtn').addEventListener('click', () => goToTab('welcome'));

// ─── MODAL ────────────────────────────────────────────────────
document.querySelectorAll('.pcard').forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById(card.dataset.modal).classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden'));
  document.body.style.overflow = '';
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── COPY BUTTON ──────────────────────────────────────────────
function copyMemory() {
  const text = document.getElementById('memoryBlock').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = translations[currentLang].copy_btn_done;
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = translations[currentLang].copy_btn;
      btn.classList.remove('copied');
    }, 2000);
  });
}

// ─── INIT ─────────────────────────────────────────────────────
applyLang(currentLang);
