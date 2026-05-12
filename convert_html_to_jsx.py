import sys
import re

def convert_to_jsx(html_content):
    # Basic replacements
    content = html_content.replace('class=', 'className=')
    content = content.replace('for=', 'htmlFor=')
    
    # Self-closing tags
    for tag in ['img', 'input', 'br', 'hr', 'meta', 'link']:
        content = re.sub(r'<(%s\b[^>]*?)(?<!/)>' % tag, r'<\1/>', content)
        
    # Convert inline styles
    def style_replacer(match):
        style_string = match.group(1)
        styles = {}
        for rule in style_string.split(';'):
            rule = rule.strip()
            if not rule: continue
            parts = rule.split(':')
            if len(parts) == 2:
                key, value = parts
                key = key.strip()
                value = value.strip()
                # camelCase key
                parts_k = key.split('-')
                key_camel = parts_k[0] + ''.join(x.capitalize() for x in parts_k[1:])
                # if value has quotes inside, we just keep it as a string
                value = value.replace("'", '"')
                styles[key_camel] = value
                
        style_dict_str = ", ".join([f"{k}: '{v}'" for k, v in styles.items()])
        return f"style={{{{ {style_dict_str} }}}}"
        
    content = re.sub(r'style="([^"]+)"', style_replacer, content)
    content = re.sub(r"style='([^']+)'", style_replacer, content)
    
    # Convert HTML comments to JSX comments
    content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)
    
    return content

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python convert.py <file>")
        sys.exit(1)
        
    with open(sys.argv[1], 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Extract body content (between <body ...> and </body>)
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    if body_match:
        body = body_match.group(1)
    else:
        body = html
        
    jsx = convert_to_jsx(body)
    with open(sys.argv[1] + '.jsx', 'w', encoding='utf-8') as f:
        f.write(jsx)
