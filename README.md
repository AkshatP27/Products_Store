# Products Store - Full Stack Project

## Project Overview
This is a full-stack Products Store application with a React frontend and a mock backend using JSON Server (db.json). The project demonstrates modern React development with Redux Toolkit for state management, Axios for API calls, and Tailwind CSS for styling.

---

## Project Structure
```
Products_Store/
│
├── backend/
│   └── db.json           # Mock database for products, users, carts
│
├── frontend/
│   ├── src/
│   │   ├── components/   # Navbar, etc.
│   │   ├── pages/        # Home, Products, Login, Register, Admin, User
│   │   ├── routes/       # Mainroutes.jsx
│   │   ├── store/        # Redux slices, actions, store setup
│   │   └── utils/        # Axios config
│   ├── package.json      # Frontend dependencies
│   └── ...
└── README.md             # Project documentation (this file)
```

---

## Current Situation
- **Frontend:**
  - Built with React, using Vite for fast development.
  - Routing with React Router DOM.
  - State management with Redux Toolkit (user, product, cart slices).
  - API calls handled by Axios.
  - Forms managed with react-hook-form.
  - Styled with Tailwind CSS.
- **Backend:**
  - Mock REST API using JSON Server (`db.json`).
  - Stores products, users, and carts data.

---

## Key Features
- User authentication (login, register, logout)
- Admin can create products
- Product listing and details
- Add to cart (structure ready)
- State persists user session using localStorage

---

## Redux & Data Flow
1. **Store Setup:** Redux store combines user, product, and cart reducers.
2. **Slices:** Each slice (user, product, cart) manages its own state and sync reducers.
3. **Async Actions:** Thunks handle API calls (fetch, create, update, delete) and dispatch reducers.
4. **Component Usage:** Components use `useSelector` to read state and `useDispatch` to trigger actions.
5. **Session Persistence:** User info is stored in localStorage and loaded on app start.

---

## How It Works
- On app load, user and product data are fetched from the backend and loaded into Redux state.
- Navbar shows different options based on user login and admin status.
- Admins can create new products; all users can view products.
- Login, register, and product forms use react-hook-form for validation and submission.
- All API calls are made via Axios, using a base URL configured in `axiosconfig.jsx`.

---

## How to Run
1. **Backend:**
   - Install JSON Server globally if not already: `npm install -g json-server`
   - Run backend: `json-server --watch backend/db.json --port 3000`
2. **Frontend:**
   - Navigate to `frontend/` and run: `npm install` then `npm run dev`
   - App runs at `http://localhost:5173` (default Vite port)

---

## Extending the Project
- Add more slices for new features (orders, reviews, etc.)
- Implement cart and checkout logic
- Add authentication/authorization for protected routes
- Connect to a real backend (Node.js, Express, MongoDB, etc.)

---

## Credits
- React, Redux Toolkit, React Router, Axios, Tailwind CSS, JSON Server

---

**Project Status:** In Development 🚧
