---
---
## Install VSCode
- descarca de aici -> [LINK](https://code.visualstudio.com/)
- apoi selecteaza:
  - Add to PATH
  - Add 'Open with Code' to right-click menu
- extensii de instalat:
  - Markdown All in One
  - Prettier - Code Formatter

---
## Install Python
- descarca de aici -> [LINK](https://www.python.org/downloads/)
- apoi selecteaza:
  - Add Python to PATH


---
## Install MkDocs
- in cmd:
```bash
pip install mkdocs
```

---
## Pentru a vedea documentatia
- in cmd trebuie sa fii in folderul cu .yml file sau poti sa dai open in terminal din folder
```bash
mkdocs serve
```

---
## GitHub
- creezi repo nou -> [LINK](https://github.com/new)
- initializare commit:
```bash
git init
git add .
git commit -m "Initial commit: ceva descriptiv la ce ai facut pana acum"
```
- conectarea la github:
```bash
git remote add origin https://github.com/YOUR_USERNAME/minesweeper.git
```

- push the code:
```bash
git branch -M main
git push -u origin main
```