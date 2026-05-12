import os
import re

def fix_links(html):
    html = re.sub(r'<a([^>]*)>기능</a>', r'<a href="/"\1>기능</a>', html)
    html = re.sub(r'<a([^>]*)>주요 기능</a>', r'<a href="/"\1>주요 기능</a>', html)
    html = re.sub(r'<a([^>]*)>요금제</a>', r'<a href="/pricing"\1>요금제</a>', html)
    html = re.sub(r'<a([^>]*)>자주 묻는 질문</a>', r'<a href="/faq"\1>자주 묻는 질문</a>', html)
    return html

for page, html_file in [('app/route.ts', 'design/main.html'), ('app/pricing/route.ts', 'design/price.html'), ('app/faq/route.ts', 'design/faq.html')]:
    with open(html_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    html = fix_links(html)
    html_escaped = html.replace('`', '\\`').replace('$', '\\$')
    
    route_code = f"""import {{ NextResponse }} from 'next/server';

export async function GET() {{
  const html = `{html_escaped}`;
  return new NextResponse(html, {{ headers: {{ 'Content-Type': 'text/html; charset=utf-8' }} }});
}}
"""
    os.makedirs(os.path.dirname(page), exist_ok=True)
    with open(page, 'w', encoding='utf-8') as f:
        f.write(route_code)
