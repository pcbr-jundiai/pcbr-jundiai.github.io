import json

with open('produtos.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data:
    if item['id'] == 8:
        desc = item['details.description']
        print("Final da desc:", repr(desc[-300:]))
        # Substituir a parte final com \\n
        old_part = "E de onde vem os diamante? Da lama – Mano Brown”\n\n\n\n-Carlos Rico\n\n\n\nAutor: Jefferson Garcia\n\nRevisão: Gabi Soares, Thais Ormelez, Tainá Gentil, Zara Gentil, Kélen Henn, Victor Valério, Cássius Brito\n\nNúmero de páginas: 342 páginas\n\nEdição: 2022\n\nCapa: Marjorie Assano "
        new_part = "E de onde vem os diamante? Da lama – Mano Brown”\n\n\n\n-Carlos Rico\n\n\n\n<br><br><strong>Autor:</strong> Jefferson Garcia<br><br><strong>Revisão:</strong> Gabi Soares, Thais Ormelez, Tainá Gentil, Zara Gentil, Kélen Henn, Victor Valério, Cássius Brito<br><br><strong>Páginas:</strong> 342<br><br><strong>Edição:</strong> 2022"
        if desc.endswith(old_part):
            item['details.description'] = desc.replace(old_part, new_part)
            print("Substituído")
        else:
            print("Não encontrou old_part")
        break

with open('produtos.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('Item 8 ajustado')