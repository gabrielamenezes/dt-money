# DT Money

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

DT Money is a front-end project built with **React** and **TypeScript**, designed to help users manage and track their personal expenses. It offers an intuitive and modern interface for registering, viewing, and filtering financial transactions.

---

## 🚀 Features

- ✅ Register income and expense transactions
- ✅ Categorize transactions with description, type, category, and amount
- ✅ Filter transactions using a search input
- ✅ Form validation with `React Hook Form` and `Zod`
- ✅ Modal-based transaction creation using Radix UI
- ✅ Global state management with Context API and `use-context-selector`
- ✅ Fast and lightweight development powered by Vite

---

## 🛠 Technologies Used

- **React 18**
- **TypeScript**
- **Vite**
- **Styled Components**
- **React Hook Form**
- **Zod**
- **Radix UI (Dialog, Radio Group)**
- **Axios**
- **JSON Server** (for mocking API)

---

## 📁 Project Structure
```yaml
dt-money/
├── public/
├── src/
│ ├── components/ # Reusable UI components
│ ├── contexts/ # React contexts (e.g., TransactionsContext)
│ ├── pages/ # Application pages and layout
│ ├── lib/ # Axios API configuration
│ ├── utils/ # Utility functions
│ ├── App.tsx # Main app component
│ └── main.tsx # Entry point
├── server.json # Mock database for JSON Server
├── package.json
└── vite.config.ts
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/gabrielamenezes/dt-money.git
cd dt-money
```

### 2. Install dependencies

```bash
npm i
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Start the mock API server

```bash
npm run dev:server
```

## 🧪 Scripts
```bash
 # Start Vite development server
npm run dev
# Start JSON Server with server.json
npm run dev:server
# Build the project for production
npm run build
# Preview the production build
npm run preview
# Lint code using ESLint
npm run lint
# Automatically fix lint issues    
npm run lint:fix
```