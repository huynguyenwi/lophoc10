# Học Tập Lớp 5

Ứng dụng học tập lớp 5 với Toán, Tiếng Việt, Khoa học, Lịch sử - Địa lý. Bài học tương tác, quiz, chatbot AI Gemini.

## Chạy local
```bash
npm install
echo GEMINI_API_KEY=your_key > .env.local
npm run dev  # http://localhost:3000
```

## Deploy GitHub Pages
```bash
npm run deploy
```
- Enable Pages: Settings > Pages > Source: gh-pages branch.
- Live: https://huynguyenwi.github.io/lophoc10

## Scripts
- `npm run build` - Tạo dist/
- `npm run lint` - Kiểm tra TS
- `npm run preview` - Preview build

Built with Vite + React 19 + Tailwind + Framer Motion.

