# 🖼️ Imagify AI – Smart Image Processing App

**Imagify** is a full-stack AI-powered image enhancement platform that lets users restore, erase, and clean up images with just a few clicks.

From background removal to object erasing and color restoration — this tool helps creators, designers, and businesses transform visuals effortlessly.

👉 Live: [imagify-gold.vercel.app](https://imagify-gold.vercel.app)

---

## ✨ Features

- 🧠 AI-based image enhancement (background removal, object erasing, restoration)
- ⚡ Credit-based system with 3 free credits on sign-up
- 🔐 Auth system via Clerk
- 💾 Upload & serve images via Cloudinary
- 💳 Stripe integration for credit top-ups
- 🎨 Modern, responsive UI built with TailwindCSS
- 🧾 Dashboard to track transformations & usage

---

## 🛠 Tech Stack

- **Framework**: Next.js 14  
- **Frontend**: React 18, TailwindCSS, Radix UI, Lucide Icons  
- **State & Forms**: React Hook Form + Zod  
- **Auth**: Clerk (OAuth, JWT)  
- **Storage**: Cloudinary via `next-cloudinary`  
- **Database**: MongoDB (via Mongoose)  
- **Payments**: Stripe  
- **Other**: Svix (Webhooks), QS, Tailwind Merge

---

## 🗂 Folder Structure (simplified)

```
src/
├── app/
│   ├── (auth)/              # Sign-in / Sign-up logic
│   ├── (root)/              # Main pages
│   │   ├── credits/         # Credit history and purchase
│   │   ├── profile/         # User profile & usage stats
│   │   ├── transformations/ # Uploaded and processed images
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/webhooks/
│   │   ├── clerk/           # Clerk webhook
│   │   └── stripe/          # Stripe webhook
├── public/
├── styles/
├── layout.tsx
├── globals.css
```

---

## 📦 Environment Variables

```env
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
MONGODB_URI=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
```

---

## 🧪 Run Locally

```bash
git clone https://github.com/tamjid-mostafa/imagify-ai
cd imagify-ai
pnpm install
pnpm dev
```

---

## 📬 Contact

- GitHub: [github.com/tamjid-mostafa](https://github.com/tamjid-mostafa)  
- Website: [devtamjid.com](https://devtamjid.com)  
- Email: hello@devtamjid.com  

---

> Smart image editing. AI-powered workflow. Lightning-fast results.
