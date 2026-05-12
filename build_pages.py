import os
import re

def process_jsx(filepath, page_name, links_mapping):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Remove HTML, HEAD, BODY if present
    content = content.strip()
    
    # Add Link imports
    # Replace anchor tags with next/link
    for text, href in links_mapping.items():
        # Match <a ...>text</a>
        # This is a basic replacement, might need to be careful
        pass
        
    # First remove href="#"
    content = content.replace('href="#"', '')
    
    # Just replace all <a ...> with <Link href="..."> based on text
    content = re.sub(r'<a([^>]*)>주요 기능</a>', r'<Link href="/"\1>주요 기능</Link>', content)
    content = re.sub(r'<a([^>]*)>기능</a>', r'<Link href="/"\1>기능</Link>', content)
    content = re.sub(r'<a([^>]*)>요금제</a>', r'<Link href="/pricing"\1>요금제</Link>', content)
    content = re.sub(r'<a([^>]*)>자주 묻는 질문</a>', r'<Link href="/faq"\1>자주 묻는 질문</Link>', content)
    
    # Fix the remaining <a ...> to <Link href="/">
    content = re.sub(r'<a([^>]*)>(.*?)</a>', r'<Link href="/"\1>\2</Link>', content, flags=re.DOTALL)
    
    # Fix onsubmit
    content = content.replace('onsubmit="return false;"', 'onSubmit={(e) => e.preventDefault()}')

    # Add <Link> import at the top
    output = f'''"use client";

import Link from "next/link";
import Image from "next/image";

export default function {page_name}() {{
  return (
    <>
      {content}
    </>
  );
}}
'''
    return output

if __name__ == "__main__":
    links = {
        "주요 기능": "/",
        "요금제": "/pricing",
        "자주 묻는 질문": "/faq"
    }
    
    # Process Pricing
    pricing_jsx = process_jsx(r"e:\page\design\price.html.jsx", "Pricing", links)
    with open(r"e:\page\app\pricing\page.tsx", 'w', encoding='utf-8') as f:
        f.write(pricing_jsx)
        
    # Process FAQ
    faq_jsx = process_jsx(r"e:\page\design\faq.html.jsx", "FAQ", links)
    with open(r"e:\page\app\faq\page.tsx", 'w', encoding='utf-8') as f:
        f.write(faq_jsx)
        
    # Process Main
    main_jsx = process_jsx(r"e:\page\design\main.html.jsx", "Home", links)
    with open(r"e:\page\app\page.tsx", 'w', encoding='utf-8') as f:
        f.write(main_jsx)
