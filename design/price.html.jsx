
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 bg-surface/70 dark:bg-surface-container-low/70 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
<div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
<div className="font-headline-md text-headline-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer">WriteFlow</div>
<nav className="hidden md:flex gap-lg items-center">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">주요 기능</a>
<a className="font-body-md text-body-md text-primary dark:text-primary-fixed font-semibold border-b-2 border-primary" href="#">요금제</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">자주 묻는 질문</a>
</nav>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:scale-105 transition-transform" data-icon="account_circle">account_circle</span>
<button className="bg-primary-container text-on-primary px-md py-sm rounded-full font-label-md text-label-md hover:scale-105 active:scale-95 transition-all">시작하기</button>
</div>
</div>
</header>
<main className="pt-2xl pb-2xl max-w-[1920px] mx-auto">
{/*  Hero Section  */}
<section className="px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto text-center mt-xl mb-2xl">
<h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[72px] mb-md tracking-tight">당신의 창의적인 여정을 위한 완벽한 요금제</h1>
<p className="text-on-surface-variant font-body-lg text-body-lg max-w-3xl mx-auto mb-xl opacity-90">콘텐츠 요구 사항에 맞춰 확장 가능하도록 설계된 투명한 요금제입니다. 지금 바로 창의적인 추진력을 확보하세요.</p>
{/*  Pricing Toggle  */}
<div className="flex items-center justify-center gap-md mb-xl">
<span className="font-label-md text-label-md text-on-surface">월간</span>
<button className="w-14 h-7 rounded-full bg-surface-container-highest relative p-1 transition-colors hover:bg-outline-variant group">
<div className="absolute right-1 top-1 w-5 h-5 bg-primary rounded-full shadow-sm transition-all group-hover:scale-110"></div>
</button>
<span className="font-label-md text-label-md text-on-surface">연간</span>
<span className="bg-secondary-fixed text-on-secondary-fixed px-sm py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">20% 할인</span>
</div>
</section>
{/*  Pricing Cards  */}
<section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-xl mb-2xl items-center">
{/*  Free Plan  */}
<div className="glass-card p-xl rounded-2xl flex flex-col hover:border-primary/50 transition-all duration-300 h-full min-h-[500px]">
<div className="mb-lg">
<h3 className="font-headline-md text-headline-md mb-xs">Free</h3>
<p className="text-on-surface-variant text-caption font-caption">AI 입문자를 위한 플랜</p>
</div>
<div className="mb-lg">
<span className="text-[48px] font-bold">₩0</span>
<span className="text-on-surface-variant font-body-md">/월</span>
</div>
<ul className="space-y-md mb-xl flex-grow">
<li className="flex items-center gap-sm font-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    월 2,000 단어
                </li>
<li className="flex items-center gap-sm font-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    표준 AI 모델
                </li>
<li className="flex items-center gap-sm font-body-md text-outline">
<span className="material-symbols-outlined text-[20px]" data-icon="cancel">cancel</span>
                    협업 도구 미지원
                </li>
</ul>
<button className="w-full border-2 border-outline-variant text-on-surface-variant py-md rounded-xl font-label-md hover:bg-surface-container-low transition-all">무료로 시작하기</button>
</div>
{/*  Pro Plan  */}
<div className="glass-card p-xl rounded-2xl flex flex-col border-2 border-primary relative shadow-xl transform lg:scale-110 z-10 h-full min-h-[560px] bg-white/90">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg text-on-primary px-lg py-1 rounded-full text-caption font-bold tracking-tight whitespace-nowrap shadow-md">가장 인기있는 플랜</div>
<div className="mb-lg pt-2">
<h3 className="font-headline-md text-headline-md mb-xs text-primary">Pro</h3>
<p className="text-on-surface-variant text-caption font-caption">전문 크리에이터를 위한 플랜</p>
</div>
<div className="mb-lg">
<span className="text-[48px] font-bold">₩29,000</span>
<span className="text-on-surface-variant font-body-md">/월</span>
</div>
<ul className="space-y-md mb-xl flex-grow">
<li className="flex items-center gap-sm font-body-md">
<span className="material-symbols-outlined text-primary text-[22px]" data-icon="check_circle">check_circle</span>
                    무제한 단어
                </li>
<li className="flex items-center gap-sm font-body-md">
<span className="material-symbols-outlined text-primary text-[22px]" data-icon="check_circle">check_circle</span>
                    고급 Flow 모델
                </li>
<li className="flex items-center gap-sm font-body-md">
<span className="material-symbols-outlined text-primary text-[22px]" data-icon="check_circle">check_circle</span>
                    우선 지원
                </li>
<li className="flex items-center gap-sm font-body-md">
<span className="material-symbols-outlined text-primary text-[22px]" data-icon="check_circle">check_circle</span>
                    협업 도구 지원
                </li>
</ul>
<button className="w-full gradient-bg text-on-primary py-lg rounded-xl font-bold font-label-md hover:opacity-90 shadow-lg transition-all">지금 Pro 시작하기</button>
</div>
{/*  Enterprise Plan  */}
<div className="glass-card p-xl rounded-2xl flex flex-col hover:border-primary/50 transition-all duration-300 h-full min-h-[500px]">
<div className="mb-lg">
<h3 className="font-headline-md text-headline-md mb-xs">Enterprise</h3>
<p className="text-on-surface-variant text-caption font-caption">팀과 조직을 위한 플랜</p>
</div>
<div className="mb-lg">
<span className="text-[48px] font-bold">문의 필요</span>
</div>
<ul className="space-y-md mb-xl flex-grow">
<li className="flex items-center gap-sm font-body-md">
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    커스텀 AI 학습
                </li>
<li className="flex items-center gap-sm font-body-md">
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    SSO 및 고급 보안
                </li>
<li className="flex items-center gap-sm font-body-md">
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    전담 어카운트 매니저
                </li>
</ul>
<button className="w-full border-2 border-primary text-primary py-md rounded-xl font-label-md hover:bg-primary-fixed transition-all">영업팀에 문의하기</button>
</div>
</section>
{/*  Feature Comparison Table  */}
<section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto mb-2xl">
<h2 className="font-headline-lg text-headline-lg text-center mb-xl">주요 기능 비교</h2>
<div className="overflow-x-auto rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
<table className="w-full border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="py-lg px-xl text-left font-bold text-on-surface w-1/4 border-b border-outline-variant/20">기능</th>
<th className="py-lg px-xl text-center font-bold text-on-surface w-1/4 border-b border-outline-variant/20">Free</th>
<th className="py-lg px-xl text-center font-bold text-primary w-1/4 border-b border-outline-variant/20 bg-primary/5">Pro</th>
<th className="py-lg px-xl text-center font-bold text-on-surface w-1/4 border-b border-outline-variant/20">Enterprise</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-md px-xl font-semibold text-on-surface">콘텐츠 생성</td>
<td className="py-md px-xl text-center text-on-surface-variant">월 2,000 단어</td>
<td className="py-md px-xl text-center font-semibold text-primary bg-primary/5">무제한</td>
<td className="py-md px-xl text-center text-on-surface-variant">무제한</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-md px-xl font-semibold text-on-surface">AI 모델</td>
<td className="py-md px-xl text-center text-on-surface-variant">기본 모델</td>
<td className="py-md px-xl text-center text-on-surface-variant bg-primary/5">WriteFlow Turbo</td>
<td className="py-md px-xl text-center text-on-surface-variant">커스텀 튜닝 모델</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-md px-xl font-semibold text-on-surface">지원 서비스</td>
<td className="py-md px-xl text-center text-on-surface-variant">커뮤니티 지원</td>
<td className="py-md px-xl text-center text-on-surface-variant bg-primary/5">24/7 우선 지원</td>
<td className="py-md px-xl text-center text-on-surface-variant">전담 매니저</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-md px-xl font-semibold text-on-surface">협업 기능</td>
<td className="py-md px-xl text-center">
<span className="material-symbols-outlined text-outline-variant" data-icon="remove">remove</span>
</td>
<td className="py-md px-xl text-center bg-primary/5">
<span className="material-symbols-outlined text-primary font-bold" data-icon="check">check</span>
</td>
<td className="py-md px-xl text-center">
<span className="material-symbols-outlined text-primary font-bold" data-icon="check">check</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-md px-xl font-semibold text-on-surface">보안</td>
<td className="py-md px-xl text-center text-on-surface-variant">표준</td>
<td className="py-md px-xl text-center text-on-surface-variant bg-primary/5">표준</td>
<td className="py-md px-xl text-center font-semibold">SSO 및 SOC2</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Testimonial Section  */}
<section className="bg-surface-container-low/50 py-2xl w-full">
<div className="px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto text-center">
<div className="flex justify-center mb-lg">
<img alt="Sarah Jenkins" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHhcw7VCSj8EM_4JLu9MovPiIIqbZliWsVUai1gPftnDkWxCNHat5eyRvLxXWcub__6IadHKzeu45y7THtRSE4mkop1cQ3p9VXhwVxGqigetUp86CQxjylas2DYFgmcIz03ZEg38ud9pumVf2e2EZVwqSPlSofngBtl9ibymzsuVtHWzX7JOOEG2W2UfOEDbF3gPRZzFJEYvqQevC5YYbDu6JLVoRCJM_dG6-6dVQRWls1ajXKif9B_XBazuXUWwkqvg0vHRuycxw"/>
</div>
<blockquote className="font-headline-md text-headline-md italic mb-lg text-on-surface leading-relaxed max-w-4xl mx-auto px-lg">
                "WriteFlow는 제 업무 방식을 완전히 바꿔놓았습니다. 전문 작가로서 늘 작가의 벽과 싸워야 했지만, 이제는 몇 분 만에 고품질의 초안을 생성할 수 있어 고객들이 좋아하는 세밀한 감성과 창의적인 마무리에 더 집중할 수 있게 되었습니다."
            </blockquote>
<cite className="not-italic">
<span className="font-bold text-on-surface block text-lg">사라 젠킨스</span>
<span className="text-on-surface-variant text-label-md">크리에이티브 디렉터 &amp; 베스트셀러 작가</span>
</cite>
</div>
</section>
{/*  FAQ Summary  */}
<section className="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto py-2xl">
<h2 className="font-headline-lg text-headline-lg text-center mb-xl">자주 묻는 질문</h2>
<div className="space-y-md">
<div className="p-lg rounded-xl glass-card hover:bg-white transition-colors cursor-default">
<h4 className="font-bold mb-xs text-lg">언제든지 요금제를 변경할 수 있나요?</h4>
<p className="text-on-surface-variant">네, 계정 설정에서 즉시 요금제를 업그레이드하거나 다운그레이드할 수 있습니다.</p>
</div>
<div className="p-lg rounded-xl glass-card hover:bg-white transition-colors cursor-default">
<h4 className="font-bold mb-xs text-lg">단어 제한에 도달하면 어떻게 되나요?</h4>
<p className="text-on-surface-variant">Free 요금제의 경우 다음 달까지 기다리거나, 무제한 생성이 가능한 Pro 요금제로 업그레이드해야 합니다.</p>
</div>
<div className="p-lg rounded-xl glass-card hover:bg-white transition-colors cursor-default">
<h4 className="font-bold mb-xs text-lg">학생 할인이 제공되나요?</h4>
<p className="text-on-surface-variant">네, 제공됩니다! 학생증과 함께 지원 팀에 문의하시면 Pro 요금제 50% 특별 할인을 받으실 수 있습니다.</p>
</div>
</div>
<div className="text-center mt-xl">
<a className="text-primary font-bold hover:underline flex items-center justify-center gap-xs group" href="#">
                전체 FAQ 보기
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full py-xl bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant/20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-start gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
<div className="flex flex-col gap-sm">
<div className="font-headline-sm text-headline-sm font-bold text-on-surface">WriteFlow AI</div>
<p className="font-caption text-caption text-on-surface-variant max-w-[280px]">인공지능의 유연한 추진력으로 크리에이터에게 힘을 실어줍니다. 1920x1080 해상도에 최적화된 최상의 작가 경험을 제공합니다.</p>
</div>
<div className="flex flex-wrap gap-xl lg:gap-2xl">
<div className="flex flex-col gap-sm min-w-[120px]">
<span className="font-label-md text-label-md font-bold">제품</span>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">주요 기능</a>
<a className="font-caption text-caption text-primary font-bold hover:text-secondary hover:underline transition-all" href="#">요금제</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">성공 사례</a>
</div>
<div className="flex flex-col gap-sm min-w-[120px]">
<span className="font-label-md text-label-md font-bold">지원</span>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">고객 지원</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">개인정보 처리방침</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">이용 약관</a>
</div>
<div className="flex flex-col gap-sm min-w-[120px]">
<span className="font-label-md text-label-md font-bold">소셜</span>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">Twitter</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">LinkedIn</a>
</div>
</div>
<div className="w-full lg:w-auto mt-lg lg:mt-0 pt-lg lg:pt-0 border-t lg:border-t-0 border-outline-variant/10 text-on-surface-variant font-caption text-caption self-end">
            © 2024 WriteFlow AI. All rights reserved.
        </div>
</div>
</footer>
