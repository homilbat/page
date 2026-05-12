import { NextResponse } from 'next/server';

export async function GET() {
  const html = `<!DOCTYPE html>

<html class="light" lang="ko"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>요금제 - WriteFlow AI</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-bright": "#f7f9fb",
                        "on-error-container": "#93000a",
                        "on-surface-variant": "#464555",
                        "on-primary-fixed-variant": "#3323cc",
                        "on-primary": "#ffffff",
                        "secondary-container": "#9e41f5",
                        "error-container": "#ffdad6",
                        "secondary": "#831ada",
                        "surface-container-highest": "#e0e3e5",
                        "surface-container-high": "#e6e8ea",
                        "primary-fixed": "#e2dfff",
                        "inverse-primary": "#c3c0ff",
                        "on-tertiary": "#ffffff",
                        "surface-container": "#eceef0",
                        "on-secondary-fixed-variant": "#6800b4",
                        "surface-container-low": "#f2f4f6",
                        "on-error": "#ffffff",
                        "on-primary-container": "#dad7ff",
                        "error": "#ba1a1a",
                        "tertiary-fixed": "#acedff",
                        "on-background": "#191c1e",
                        "outline-variant": "#c7c4d8",
                        "tertiary": "#00505f",
                        "inverse-on-surface": "#eff1f3",
                        "surface": "#f7f9fb",
                        "on-secondary-container": "#fffbff",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary": "#ffffff",
                        "on-tertiary-container": "#93e8ff",
                        "surface-dim": "#d8dadc",
                        "tertiary-fixed-dim": "#4cd7f6",
                        "on-surface": "#191c1e",
                        "secondary-fixed": "#f0dbff",
                        "secondary-fixed-dim": "#ddb8ff",
                        "surface-variant": "#e0e3e5",
                        "on-tertiary-fixed": "#001f26",
                        "primary-fixed-dim": "#c3c0ff",
                        "on-primary-fixed": "#001f26",
                        "primary": "#3525cd",
                        "tertiary-container": "#006a7c",
                        "inverse-surface": "#2d3133",
                        "outline": "#777587",
                        "background": "#f7f9fb",
                        "surface-tint": "#4d44e3",
                        "on-tertiary-fixed-variant": "#004e5c",
                        "primary-container": "#4f46e5",
                        "on-secondary-fixed": "#2c0051"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "unit": "4px",
                        "gutter": "24px",
                        "lg": "24px",
                        "2xl": "64px",
                        "margin-mobile": "16px",
                        "margin-desktop": "48px",
                        "xs": "4px",
                        "md": "16px",
                        "sm": "8px",
                        "xl": "40px"
                    },
                    "fontFamily": {
                        "label-md": ["Inter"],
                        "display-lg": ["Inter"],
                        "caption": ["Inter"],
                        "body-md": ["Inter"],
                        "headline-lg-mobile": ["Inter"],
                        "body-lg": ["Inter"],
                        "headline-md": ["Inter"],
                        "headline-lg": ["Inter"]
                    },
                    "fontSize": {
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500" }],
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "caption": ["12px", { "lineHeight": "16px", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600" }]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .gradient-text {
            background: linear-gradient(to right, #3525cd, #831ada);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gradient-bg {
            background: linear-gradient(135deg, #3525cd, #831ada);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(199, 196, 216, 0.3);
        }
    </style>
</head>
<body class="bg-surface-bright text-on-surface font-body-md min-h-screen">
<!-- TopNavBar -->
<header class="fixed top-0 w-full z-50 bg-surface/70 dark:bg-surface-container-low/70 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
<div class="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
<div class="font-headline-md text-headline-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer">WriteFlow</div>
<nav class="hidden md:flex gap-lg items-center">
<a href="/" class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">주요 기능</a>
<a href="/pricing" class="font-body-md text-body-md text-primary dark:text-primary-fixed font-semibold border-b-2 border-primary" href="#">요금제</a>
<a href="/faq" class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">자주 묻는 질문</a>
</nav>
<div class="flex items-center gap-md">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:scale-105 transition-transform" data-icon="account_circle">account_circle</span>
<button class="bg-primary-container text-on-primary px-md py-sm rounded-full font-label-md text-label-md hover:scale-105 active:scale-95 transition-all">시작하기</button>
</div>
</div>
</header>
<main class="pt-2xl pb-2xl max-w-[1920px] mx-auto">
<!-- Hero Section -->
<section class="px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto text-center mt-xl mb-2xl">
<h1 class="font-display-lg text-display-lg md:text-[64px] md:leading-[72px] mb-md tracking-tight">당신의 창의적인 여정을 위한 완벽한 요금제</h1>
<p class="text-on-surface-variant font-body-lg text-body-lg max-w-3xl mx-auto mb-xl opacity-90">콘텐츠 요구 사항에 맞춰 확장 가능하도록 설계된 투명한 요금제입니다. 지금 바로 창의적인 추진력을 확보하세요.</p>
<!-- Pricing Toggle -->
<div class="flex items-center justify-center gap-md mb-xl">
<span class="font-label-md text-label-md text-on-surface">월간</span>
<button class="w-14 h-7 rounded-full bg-surface-container-highest relative p-1 transition-colors hover:bg-outline-variant group">
<div class="absolute right-1 top-1 w-5 h-5 bg-primary rounded-full shadow-sm transition-all group-hover:scale-110"></div>
</button>
<span class="font-label-md text-label-md text-on-surface">연간</span>
<span class="bg-secondary-fixed text-on-secondary-fixed px-sm py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">20% 할인</span>
</div>
</section>
<!-- Pricing Cards -->
<section class="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-xl mb-2xl items-center">
<!-- Free Plan -->
<div class="glass-card p-xl rounded-2xl flex flex-col hover:border-primary/50 transition-all duration-300 h-full min-h-[500px]">
<div class="mb-lg">
<h3 class="font-headline-md text-headline-md mb-xs">Free</h3>
<p class="text-on-surface-variant text-caption font-caption">AI 입문자를 위한 플랜</p>
</div>
<div class="mb-lg">
<span class="text-[48px] font-bold">₩0</span>
<span class="text-on-surface-variant font-body-md">/월</span>
</div>
<ul class="space-y-md mb-xl flex-grow">
<li class="flex items-center gap-sm font-body-md text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    월 2,000 단어
                </li>
<li class="flex items-center gap-sm font-body-md text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    표준 AI 모델
                </li>
<li class="flex items-center gap-sm font-body-md text-outline">
<span class="material-symbols-outlined text-[20px]" data-icon="cancel">cancel</span>
                    협업 도구 미지원
                </li>
</ul>
<button class="w-full border-2 border-outline-variant text-on-surface-variant py-md rounded-xl font-label-md hover:bg-surface-container-low transition-all">무료로 시작하기</button>
</div>
<!-- Pro Plan -->
<div class="glass-card p-xl rounded-2xl flex flex-col border-2 border-primary relative shadow-xl transform lg:scale-110 z-10 h-full min-h-[560px] bg-white/90">
<div class="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg text-on-primary px-lg py-1 rounded-full text-caption font-bold tracking-tight whitespace-nowrap shadow-md">가장 인기있는 플랜</div>
<div class="mb-lg pt-2">
<h3 class="font-headline-md text-headline-md mb-xs text-primary">Pro</h3>
<p class="text-on-surface-variant text-caption font-caption">전문 크리에이터를 위한 플랜</p>
</div>
<div class="mb-lg">
<span class="text-[48px] font-bold">₩29,000</span>
<span class="text-on-surface-variant font-body-md">/월</span>
</div>
<ul class="space-y-md mb-xl flex-grow">
<li class="flex items-center gap-sm font-body-md">
<span class="material-symbols-outlined text-primary text-[22px]" data-icon="check_circle">check_circle</span>
                    무제한 단어
                </li>
<li class="flex items-center gap-sm font-body-md">
<span class="material-symbols-outlined text-primary text-[22px]" data-icon="check_circle">check_circle</span>
                    고급 Flow 모델
                </li>
<li class="flex items-center gap-sm font-body-md">
<span class="material-symbols-outlined text-primary text-[22px]" data-icon="check_circle">check_circle</span>
                    우선 지원
                </li>
<li class="flex items-center gap-sm font-body-md">
<span class="material-symbols-outlined text-primary text-[22px]" data-icon="check_circle">check_circle</span>
                    협업 도구 지원
                </li>
</ul>
<button class="w-full gradient-bg text-on-primary py-lg rounded-xl font-bold font-label-md hover:opacity-90 shadow-lg transition-all">지금 Pro 시작하기</button>
</div>
<!-- Enterprise Plan -->
<div class="glass-card p-xl rounded-2xl flex flex-col hover:border-primary/50 transition-all duration-300 h-full min-h-[500px]">
<div class="mb-lg">
<h3 class="font-headline-md text-headline-md mb-xs">Enterprise</h3>
<p class="text-on-surface-variant text-caption font-caption">팀과 조직을 위한 플랜</p>
</div>
<div class="mb-lg">
<span class="text-[48px] font-bold">문의 필요</span>
</div>
<ul class="space-y-md mb-xl flex-grow">
<li class="flex items-center gap-sm font-body-md">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    커스텀 AI 학습
                </li>
<li class="flex items-center gap-sm font-body-md">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    SSO 및 고급 보안
                </li>
<li class="flex items-center gap-sm font-body-md">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle">check_circle</span>
                    전담 어카운트 매니저
                </li>
</ul>
<button class="w-full border-2 border-primary text-primary py-md rounded-xl font-label-md hover:bg-primary-fixed transition-all">영업팀에 문의하기</button>
</div>
</section>
<!-- Feature Comparison Table -->
<section class="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto mb-2xl">
<h2 class="font-headline-lg text-headline-lg text-center mb-xl">주요 기능 비교</h2>
<div class="overflow-x-auto rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
<table class="w-full border-collapse">
<thead>
<tr class="bg-surface-container-low/50">
<th class="py-lg px-xl text-left font-bold text-on-surface w-1/4 border-b border-outline-variant/20">기능</th>
<th class="py-lg px-xl text-center font-bold text-on-surface w-1/4 border-b border-outline-variant/20">Free</th>
<th class="py-lg px-xl text-center font-bold text-primary w-1/4 border-b border-outline-variant/20 bg-primary/5">Pro</th>
<th class="py-lg px-xl text-center font-bold text-on-surface w-1/4 border-b border-outline-variant/20">Enterprise</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/10">
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-md px-xl font-semibold text-on-surface">콘텐츠 생성</td>
<td class="py-md px-xl text-center text-on-surface-variant">월 2,000 단어</td>
<td class="py-md px-xl text-center font-semibold text-primary bg-primary/5">무제한</td>
<td class="py-md px-xl text-center text-on-surface-variant">무제한</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-md px-xl font-semibold text-on-surface">AI 모델</td>
<td class="py-md px-xl text-center text-on-surface-variant">기본 모델</td>
<td class="py-md px-xl text-center text-on-surface-variant bg-primary/5">WriteFlow Turbo</td>
<td class="py-md px-xl text-center text-on-surface-variant">커스텀 튜닝 모델</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-md px-xl font-semibold text-on-surface">지원 서비스</td>
<td class="py-md px-xl text-center text-on-surface-variant">커뮤니티 지원</td>
<td class="py-md px-xl text-center text-on-surface-variant bg-primary/5">24/7 우선 지원</td>
<td class="py-md px-xl text-center text-on-surface-variant">전담 매니저</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-md px-xl font-semibold text-on-surface">협업 기능</td>
<td class="py-md px-xl text-center">
<span class="material-symbols-outlined text-outline-variant" data-icon="remove">remove</span>
</td>
<td class="py-md px-xl text-center bg-primary/5">
<span class="material-symbols-outlined text-primary font-bold" data-icon="check">check</span>
</td>
<td class="py-md px-xl text-center">
<span class="material-symbols-outlined text-primary font-bold" data-icon="check">check</span>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors">
<td class="py-md px-xl font-semibold text-on-surface">보안</td>
<td class="py-md px-xl text-center text-on-surface-variant">표준</td>
<td class="py-md px-xl text-center text-on-surface-variant bg-primary/5">표준</td>
<td class="py-md px-xl text-center font-semibold">SSO 및 SOC2</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- Testimonial Section -->
<section class="bg-surface-container-low/50 py-2xl w-full">
<div class="px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto text-center">
<div class="flex justify-center mb-lg">
<img alt="Sarah Jenkins" class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHhcw7VCSj8EM_4JLu9MovPiIIqbZliWsVUai1gPftnDkWxCNHat5eyRvLxXWcub__6IadHKzeu45y7THtRSE4mkop1cQ3p9VXhwVxGqigetUp86CQxjylas2DYFgmcIz03ZEg38ud9pumVf2e2EZVwqSPlSofngBtl9ibymzsuVtHWzX7JOOEG2W2UfOEDbF3gPRZzFJEYvqQevC5YYbDu6JLVoRCJM_dG6-6dVQRWls1ajXKif9B_XBazuXUWwkqvg0vHRuycxw"/>
</div>
<blockquote class="font-headline-md text-headline-md italic mb-lg text-on-surface leading-relaxed max-w-4xl mx-auto px-lg">
                "WriteFlow는 제 업무 방식을 완전히 바꿔놓았습니다. 전문 작가로서 늘 작가의 벽과 싸워야 했지만, 이제는 몇 분 만에 고품질의 초안을 생성할 수 있어 고객들이 좋아하는 세밀한 감성과 창의적인 마무리에 더 집중할 수 있게 되었습니다."
            </blockquote>
<cite class="not-italic">
<span class="font-bold text-on-surface block text-lg">사라 젠킨스</span>
<span class="text-on-surface-variant text-label-md">크리에이티브 디렉터 &amp; 베스트셀러 작가</span>
</cite>
</div>
</section>
<!-- FAQ Summary -->
<section class="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto py-2xl">
<h2 class="font-headline-lg text-headline-lg text-center mb-xl">자주 묻는 질문</h2>
<div class="space-y-md">
<div class="p-lg rounded-xl glass-card hover:bg-white transition-colors cursor-default">
<h4 class="font-bold mb-xs text-lg">언제든지 요금제를 변경할 수 있나요?</h4>
<p class="text-on-surface-variant">네, 계정 설정에서 즉시 요금제를 업그레이드하거나 다운그레이드할 수 있습니다.</p>
</div>
<div class="p-lg rounded-xl glass-card hover:bg-white transition-colors cursor-default">
<h4 class="font-bold mb-xs text-lg">단어 제한에 도달하면 어떻게 되나요?</h4>
<p class="text-on-surface-variant">Free 요금제의 경우 다음 달까지 기다리거나, 무제한 생성이 가능한 Pro 요금제로 업그레이드해야 합니다.</p>
</div>
<div class="p-lg rounded-xl glass-card hover:bg-white transition-colors cursor-default">
<h4 class="font-bold mb-xs text-lg">학생 할인이 제공되나요?</h4>
<p class="text-on-surface-variant">네, 제공됩니다! 학생증과 함께 지원 팀에 문의하시면 Pro 요금제 50% 특별 할인을 받으실 수 있습니다.</p>
</div>
</div>
<div class="text-center mt-xl">
<a class="text-primary font-bold hover:underline flex items-center justify-center gap-xs group" href="#">
                전체 FAQ 보기
                <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-xl bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant/20">
<div class="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-start gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
<div class="flex flex-col gap-sm">
<div class="font-headline-sm text-headline-sm font-bold text-on-surface">WriteFlow AI</div>
<p class="font-caption text-caption text-on-surface-variant max-w-[280px]">인공지능의 유연한 추진력으로 크리에이터에게 힘을 실어줍니다. 1920x1080 해상도에 최적화된 최상의 작가 경험을 제공합니다.</p>
</div>
<div class="flex flex-wrap gap-xl lg:gap-2xl">
<div class="flex flex-col gap-sm min-w-[120px]">
<span class="font-label-md text-label-md font-bold">제품</span>
<a href="/" class="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">주요 기능</a>
<a href="/pricing" class="font-caption text-caption text-primary font-bold hover:text-secondary hover:underline transition-all" href="#">요금제</a>
<a class="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">성공 사례</a>
</div>
<div class="flex flex-col gap-sm min-w-[120px]">
<span class="font-label-md text-label-md font-bold">지원</span>
<a class="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">고객 지원</a>
<a class="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">개인정보 처리방침</a>
<a class="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">이용 약관</a>
</div>
<div class="flex flex-col gap-sm min-w-[120px]">
<span class="font-label-md text-label-md font-bold">소셜</span>
<a class="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">Twitter</a>
<a class="font-caption text-caption text-on-surface-variant hover:text-secondary hover:underline transition-all" href="#">LinkedIn</a>
</div>
</div>
<div class="w-full lg:w-auto mt-lg lg:mt-0 pt-lg lg:pt-0 border-t lg:border-t-0 border-outline-variant/10 text-on-surface-variant font-caption text-caption self-end">
            © 2024 WriteFlow AI. All rights reserved.
        </div>
</div>
</footer>
</body></html>`;
  return new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
