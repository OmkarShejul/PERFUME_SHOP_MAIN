# 🎉 Vite.js GitHub Pages Deployment

This is a simple web app built using [Vite.js](https://vitejs.dev/) and deployed to **GitHub Pages**.

## 🚀 Live Demo

🔗 [View it here:]

> Replace the link above with your actual GitHub Pages URL.

---

## 📁 Project Structure

```

my-vite-app/
├── index.html
├── src/
│   └── main.js / main.ts
├── vite.config.js
├── package.json
└── README.md

````

---

## 🛠️ How to Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
````

---

## 🚚 How to Deploy to GitHub Pages

### 1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. Edit `vite.config.js`

```js
// vite.config.js
export default {
  base: 'OmkarShejul/PERFUME_SHOP_MAIN/new/main',
}
```

### 3. Add deploy script in `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

### 4. Deploy

```bash
npm run deploy
```

---

## 🧾 License

This project is licensed under the MIT License.


