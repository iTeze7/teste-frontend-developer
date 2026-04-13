# EndrikTech — Landing Page

Landing page moderna e profissional para demonstração de habilidades frontend.

## 🚀 Tecnologias

- **HTML5**
- **CSS3** puro (variáveis CSS, Flexbox, Grid, animações)
- **JavaScript Vanilla** (ES6+)

## 📁 Estrutura de Pastas

```
endriktech/
├── index.html          # Página principal
├── style.css           # Estilos organizados por seção
├── script.js           # Lógica (accordion, scroll reveal, form)
├── README.md           # Documentação
└── images/
    ├── hero-bg.jpg     # Background do hero
    └── about-illustration.jpg  # Ilustração da seção About
```

## 💻 Como Rodar Localmente

1. Clone ou baixe o projeto
2. Abra `index.html` no navegador

Ou use um servidor local:
```bash
# Com Python
python3 -m http.server 8000

# Com Node.js (npx)
npx serve .
```

## 🌐 Deploy

### GitHub Pages
1. Suba o projeto para um repositório GitHub
2. Vá em Settings → Pages → selecione a branch `main`

### Netlify
1. Arraste a pasta do projeto no [Netlify Drop](https://app.netlify.com/drop)

### Vercel
```bash
npx vercel
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

## ✨ Features

- Design responsivo (mobile first)
- Animações ao scroll (Intersection Observer)
- FAQ accordion interativo
- Formulário de contato funcional
- Glassmorphism e gradientes modernos
- Performance otimizada
- HTML semântico e acessível
