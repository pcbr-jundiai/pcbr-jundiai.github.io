import re
with open('produtos.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Função para escapar \n dentro de strings JSON
def escape_newlines_in_json_strings(content):
    # Regex para encontrar strings JSON: "details.description": "(.*?)" multiline
    pattern = r'"details\.description": "(.*?)"'
    def replacer(match):
        string_content = match.group(1)
        escaped = string_content.replace('\n', '\\n').replace('\r', '')
        return f'"details.description": "{escaped}"'
    return re.sub(pattern, replacer, content, flags=re.DOTALL)

fixed_content = escape_newlines_in_json_strings(content)

with open('produtos.json', 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print('JSON corrigido')