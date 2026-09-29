# Isabella Da Silva — portfolio

Portfolio em Angular, TypeScript e SCSS.

## Desenvolvimento

```bash
npm install
npm start
```

## Validação

```bash
npm run build
npm test -- --watch=false
```

O conteúdo editável dos projetos fica em `src/app/data/portfolio.data.ts`. Para adicionar uma screenshot real, coloque o arquivo em `public/projects/` e configure o caminho no campo `image` do projeto. Enquanto `image` for `null`, o card mostra seu preview em HTML/CSS.
