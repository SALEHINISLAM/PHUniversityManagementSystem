# How I do the project?
- Create folder where you want to save the project
- On the address line write
```bash
cmd
```
and press `enter`
- Create in command line write
```bash

H:\PHUniversity\PHUFrontEnd>npm create vite
Need to install the following packages:
create-vite@6.1.1
Ok to proceed? (y)


> npx
> create-vite

√ Project name: ... phum-client
√ Select a framework: » React
√ Select a variant: » TypeScript

Scaffolding project in H:\PHUniversity\PHUFrontEnd\phum-client...

Done. Now run:

  cd phum-client
  npm install
  npm run dev


H:\PHUniversity\PHUFrontEnd>cd phum-client

H:\PHUniversity\PHUFrontEnd\phum-client>npm i

added 181 packages, and audited 182 packages in 50s

43 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

H:\PHUniversity\PHUFrontEnd\phum-client>code .

H:\PHUniversity\PHUFrontEnd\phum-client>
```
Your project is seriously initiated. Code it!
## *About the template*
## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
