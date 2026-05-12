
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
<nav className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
<div className="font-headline-md text-headline-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">WriteFlow</div>
<div className="hidden md:flex gap-lg items-center">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:scale-105 transition-transform duration-200" href="#">기능</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:scale-105 transition-transform duration-200" href="#">요금제</a>
<a className="font-body-md text-body-md text-primary font-semibold border-b-2 border-primary hover:scale-105 transition-transform duration-200" href="#">자주 묻는 질문</a>
</div>
<div className="flex items-center gap-md">
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">account_circle</button>
<button className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-md text-label-md hover:scale-105 active:scale-95 transition-all">시작하기</button>
</div>
</nav>
</header>
<main className="pt-40 pb-2xl">
{/*  Hero Search Section  */}
<section className="max-w-4xl mx-auto px-margin-mobile text-center mb-xl">
<h1 className="font-display-lg text-display-lg mb-md text-on-surface lg:text-5xl">무엇을 도와드릴까요?</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">지식 베이스를 검색하거나 아래 카테고리를 찾아보세요.</p>
<div className="relative group max-w-2xl mx-auto">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
<input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl py-lg pl-2xl pr-md font-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-lg shadow-sm" placeholder="궁금한 점을 검색해보세요 (예: 결제, API 등)" type="text"/>
</div>
</section>
{/*  Category Tabs  */}
<section className="max-w-[1920px] mx-auto px-margin-mobile mb-xl">
<div className="flex flex-wrap justify-center gap-sm">
<button className="flex items-center gap-sm px-lg py-md rounded-full bg-primary text-on-primary font-label-md text-label-md transition-all shadow-md">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>info</span>
                    일반
                </button>
<button className="flex items-center gap-sm px-lg py-md rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-all">
<span className="material-symbols-outlined">payments</span>
                    결제
                </button>
<button className="flex items-center gap-sm px-lg py-md rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-all">
<span className="material-symbols-outlined">settings_suggest</span>
                    기술 지원
                </button>
<button className="flex items-center gap-sm px-lg py-md rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-all">
<span className="material-symbols-outlined">shield</span>
                    개인정보 보호
                </button>
</div>
</section>
{/*  Bento Layout FAQ Content  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/*  Left Column: Featured Guides  */}
<div className="lg:col-span-4 space-y-gutter">
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-md">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
</div>
<h3 className="font-headline-md text-headline-md mb-sm">AI 퀵 스타트</h3>
<p className="text-on-surface-variant mb-md">고급 AI 프롬프트 가이드를 통해 창의적인 흐름을 시작하는 방법을 배워보세요.</p>
<a className="text-primary font-label-md text-label-md flex items-center gap-xs hover:gap-sm transition-all" href="#">
                        가이드 읽기 <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="relative overflow-hidden bg-primary-container rounded-xl p-lg text-on-primary shadow-sm h-72 flex flex-col justify-end group cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-500" data-alt="Modern creative workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5XW16w06AbMxjAI7K7T1lFQLAfKQ-D3DRBKOOk1UStFd3-eUP5AWXdFaVTQkyP4cFX4t0Ag-I_jn4LIHg_I9uuRCp1SPJTGvO0BSHMjZg4GesAToCS5LbTkNr1w3u6tgX4ohQGgZybNHcpkVHBvCeV4US9tIFr4a4rhiOWXHtlMikElfLX5QNEJnA9HSQyP5iRP1u1myd3x_Io7vK9ME2cv9V0UP_MORP4zSmkaORsxZTpwh6h_Am7gdOeJWcVmorPWONMAU_sfQ"/>
<h3 className="font-headline-md text-headline-md mb-xs relative z-10">연동 서비스</h3>
<p className="text-primary-fixed/80 font-body-md relative z-10">Notion, Slack 등 즐겨 사용하는 도구와 WriteFlow를 연결하세요.</p>
</div>
</div>
{/*  Right Column: Detailed Accordion List  */}
<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/20 shadow-sm p-lg md:p-xl lg:px-16">
<h2 className="font-headline-lg text-headline-lg mb-xl">일반적인 질문</h2>
<div className="space-y-md">
{/*  FAQ Item 1  */}
<div className="border-b border-outline-variant/30 pb-md">
<button aria-expanded="true" className="faq-accordion-header w-full flex justify-between items-center text-left py-md group">
<span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors pr-md">WriteFlow AI란 무엇인가요?</span>
<span className="expand-icon material-symbols-outlined text-outline group-hover:text-primary transition-all flex-shrink-0">expand_more</span>
</button>
<div className="pt-sm pb-md text-on-surface-variant leading-relaxed max-w-4xl">
                            WriteFlow는 창의적 마찰을 없애기 위해 설계된 프리미엄 AI 기반 작문 보조 도구입니다. 고급 대규모 언어 모델과 집중력에 최적화된 인터페이스를 결합하여 사용자의 고유한 브랜드 목소리를 유지하면서 10배 더 빠르게 전문적인 콘텐츠를 제작할 수 있도록 돕습니다.
                        </div>
</div>
{/*  FAQ Item 2  */}
<div className="border-b border-outline-variant/30 pb-md">
<button className="faq-accordion-header w-full flex justify-between items-center text-left py-md group">
<span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors pr-md">WriteFlow를 상업적 프로젝트에 사용할 수 있나요?</span>
<span className="expand-icon material-symbols-outlined text-outline group-hover:text-primary transition-all flex-shrink-0">expand_more</span>
</button>
</div>
{/*  FAQ Item 3  */}
<div className="border-b border-outline-variant/30 pb-md">
<button className="faq-accordion-header w-full flex justify-between items-center text-left py-md group">
<span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors pr-md">Flow Sparkle은 어떻게 작동하나요?</span>
<span className="expand-icon material-symbols-outlined text-outline group-hover:text-primary transition-all flex-shrink-0">expand_more</span>
</button>
</div>
{/*  FAQ Item 4  */}
<div className="border-b border-outline-variant/30 pb-md">
<button className="faq-accordion-header w-full flex justify-between items-center text-left py-md group">
<span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors pr-md">작성량에 제한이 있나요?</span>
<span className="expand-icon material-symbols-outlined text-outline group-hover:text-primary transition-all flex-shrink-0">expand_more</span>
</button>
</div>
{/*  FAQ Item 5  */}
<div className="pb-md">
<button className="faq-accordion-header w-full flex justify-between items-center text-left py-md group">
<span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors pr-md">교육용 할인이 제공되나요?</span>
<span className="expand-icon material-symbols-outlined text-outline group-hover:text-primary transition-all flex-shrink-0">expand_more</span>
</button>
</div>
</div>
</div>
</section>
{/*  Contact / Still Have Questions Section  */}
<section className="max-w-[1440px] mx-auto px-margin-mobile mt-2xl">
<div className="bg-surface-container-low rounded-2xl p-xl lg:p-2xl flex flex-col lg:flex-row items-center gap-xl border border-outline-variant/20">
<div className="flex-1 text-center lg:text-left lg:max-w-xl">
<h2 className="font-headline-lg text-headline-lg mb-md lg:text-4xl">여전히 궁금한 점이 있으신가요?</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl lg:max-w-md">원하는 답변을 찾을 수 없나요? 저희 팀과 실시간 채팅을 하거나 언제든지 메시지를 남겨주세요.</p>
<div className="flex flex-wrap justify-center lg:justify-start gap-md">
<button className="bg-primary text-on-primary px-xl py-md rounded-full font-label-md text-label-md shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-sm">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>chat_bubble</span>
                            실시간 채팅
                        </button>
<button className="bg-surface-container-highest text-on-surface px-xl py-md rounded-full font-label-md text-label-md hover:bg-outline-variant/40 transition-all flex items-center gap-sm border border-outline-variant/10">
<span className="material-symbols-outlined">mail</span>
                            고객 지원 문의
                        </button>
</div>
</div>
<div className="flex-1 w-full max-w-lg">
<div className="bg-surface-container-lowest p-lg lg:p-xl rounded-xl shadow-sm border border-outline-variant/10">
<form className="space-y-md" onsubmit="return false;">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">이메일</label>
<input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="you@company.com" type="email"/>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">주제</label>
<select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
<option>계정 액세스</option>
<option>결제 관련</option>
<option>기능 제안</option>
<option>기타</option>
</select>
</div>
<button className="w-full bg-secondary text-on-secondary py-md rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity mt-md" type="submit">
                                메시지 보내기
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full py-xl bg-surface-container-lowest border-t border-outline-variant/20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-start gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
<div className="space-y-md">
<div className="font-headline-sm text-headline-sm font-bold text-on-surface">WriteFlow</div>
<p className="font-caption text-caption text-on-surface-variant max-w-xs">원활한 AI 협업을 통해 인간의 창의성을 높입니다. 현대적인 전문가들을 위해 만들어졌습니다.</p>
<div className="font-caption text-caption text-on-surface-variant">© 2024 WriteFlow AI. All rights reserved.</div>
</div>
<div className="grid grid-cols-2 gap-xl">
<div className="flex flex-col gap-sm">
<span className="font-label-md text-label-md text-on-surface font-bold">법적 고지</span>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">개인정보 처리방침</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">서비스 약관</a>
</div>
<div className="flex flex-col gap-sm">
<span className="font-label-md text-label-md text-on-surface font-bold">고객 지원</span>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">문의하기</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">헬프 센터</a>
</div>
</div>
<div className="flex flex-col gap-sm">
<span className="font-label-md text-label-md text-on-surface font-bold">소셜</span>
<div className="flex gap-md">
<a className="text-on-surface-variant hover:text-secondary opacity-80 hover:opacity-100 transition-all flex items-center gap-xs" href="#">
<span className="w-2 h-2 rounded-full bg-outline-variant/50"></span> Twitter
                    </a>
<a className="text-on-surface-variant hover:text-secondary opacity-80 hover:opacity-100 transition-all flex items-center gap-xs" href="#">
<span className="w-2 h-2 rounded-full bg-outline-variant/50"></span> LinkedIn
                    </a>
</div>
</div>
</div>
</footer>
