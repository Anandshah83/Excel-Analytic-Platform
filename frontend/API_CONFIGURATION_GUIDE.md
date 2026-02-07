# Frontend Backend URL Configuration - Setup Guide

## 📋 Summary of Changes

Your frontend has been successfully updated to use your live Render backend URL. Here's what was done:

---

## 🔧 Files Modified/Created

### 1. **Created API Configuration** (`frontend/src/config/api.ts`)
   - Centralized all API endpoints in one place
   - Uses environment variables for different URLs
   - Development: `http://localhost:2000`
   - Production: `https://excel-analytic-platform-backend-lya0.onrender.com`

### 2. **Created Environment Files**
   - `.env.local` - Development environment (used by `npm run dev`)
   - `.env.production` - Production environment (used by `npm run build`)

### 3. **Updated Files**
   - `frontend/src/contexts/AuthContext.tsx` - Login/Signup API calls
   - `frontend/src/pages/Dashboard.tsx` - Dashboard data fetch
   - `frontend/src/pages/FilesPage.tsx` - File operations (upload, download, delete)
   - `frontend/src/pages/ChartsPage.tsx` - Chart operations
   - `frontend/vite.config.ts` - Build configuration

---

## 📍 What Changed in Each File

### **AuthContext.tsx**
```typescript
// BEFORE: axios.get('/api/auth/me');
// AFTER: axios.get(API_ENDPOINTS.AUTH_ME);
// Also set baseURL: axios.defaults.baseURL = API_BASE_URL;
```

### **Dashboard.tsx**
```typescript
// BEFORE: fetch('/api/dashboard/', ...)
// AFTER: fetch(`${API_BASE_URL}${API_ENDPOINTS.DASHBOARD}`, ...)
```

### **FilesPage.tsx**
```typescript
// BEFORE: fetch('/api/files/list', ...)
// AFTER: fetch(`${API_BASE_URL}${API_ENDPOINTS.FILES_LIST}`, ...)
```

### **ChartsPage.tsx**
```typescript
// BEFORE: fetch('/api/charts', ...)
// AFTER: fetch(`${API_BASE_URL}${API_ENDPOINTS.CHARTS_LIST}`, ...)
```

---

## ✅ What You Need to Do

### **For Development (Local Testing)**
No changes needed! The `.env.local` file will use `http://localhost:2000` automatically.

```bash
cd frontend
npm run dev
```

### **For Production (Render Deployment)**

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```
   
2. **The build will automatically use `.env.production`** which contains:
   ```
   VITE_API_BASE_URL=https://excel-analytic-platform-backend-lya0.onrender.com
   ```
   
   No hardcoding needed!

3. **Deploy to Render:**
   - Push your changes to GitHub
   - Connect your repository to Render
   - Render will automatically run `npm run build` and deploy

---

## 🎯 Environment Variable System

### How It Works

```
Development: npm run dev
  ↓
  Uses .env.local
  ↓
  API_BASE_URL = http://localhost:2000

Production: npm run build (for deployment)
  ↓
  Uses .env.production
  ↓
  API_BASE_URL = https://excel-analytic-platform-backend-lya0.onrender.com
```

### The Config File
```typescript
// frontend/src/config/api.ts
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:2000';

export const API_ENDPOINTS = {
  AUTH_LOGIN: '/api/auth/login',
  AUTH_SIGNUP: '/api/auth/signup',
  // ... all other endpoints
};
```

---

## 📝 API Endpoints Configured

✅ **Auth**
- Login: `/api/auth/login`
- Signup: `/api/auth/signup`
- Check Auth: `/api/auth/me`

✅ **Dashboard**
- Dashboard: `/api/dashboard/`

✅ **Files**
- List: `/api/files/list`
- Upload: `/api/files/upload`
- Download: `/api/files/{fileId}/download`
- Delete: `/api/files/{fileId}`

✅ **Charts**
- List: `/api/charts`
- Create: `/api/charts`
- Auto-generate: `/api/charts/autogen`
- Download: `/api/charts/{chartId}/download`
- Delete: `/api/charts/{chartId}`

---

## 🚀 Ready to Deploy!

Your frontend is now ready to:

1. ✅ Work locally with your local backend (`http://localhost:2000`)
2. ✅ Use your live Render backend when deployed (`https://excel-analytic-platform-backend-lya0.onrender.com`)

### Deployment Steps:
```bash
# 1. Commit your changes
git add .
git commit -m "Update API configuration for Render deployment"

# 2. Push to GitHub
git push origin main

# 3. Render will automatically:
#    - Pull your latest code
#    - Run: npm run build
#    - Deploy using .env.production
#    - Your app will connect to your live backend!
```

---

## ❓ Troubleshooting

**Q: My local development doesn't work after these changes?**
- A: Make sure `http://localhost:2000` is running in another terminal
- Check that `.env.local` exists in the `frontend` folder

**Q: Production still can't connect to backend?**
- A: Verify `https://excel-analytic-platform-backend-lya0.onrender.com` is accessible
- Check your backend logs on Render for CORS issues
- Ensure `.env.production` has the correct URL

**Q: Can I change the backend URL later?**
- A: Yes! Just update `.env.production` and redeploy

---

## 📚 Additional Resources

- Vite Environment Variables: https://vitejs.dev/guide/env-and-mode.html
- Axios Documentation: https://axios-http.com/
- Render Deployment: https://render.com/docs
