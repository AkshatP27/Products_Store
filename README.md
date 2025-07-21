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
- Add to cart (robust logic: prevents duplicate cart items, merges quantities)
- Cart quantity increment/decrement and removal when quantity is zero
- State persists user session using localStorage and Redux (with asyncCurrentUser)

---


## Redux & Data Flow

### Visual Diagram

```
   ┌──────────────┐         ┌──────────────┐         ┌──────────────┐
   │   React UI   │         │   useDispatch│         │   Thunk      │
   │ (Component)  │ ──────▶ │ (Action)     │ ──────▶ │ (Async Logic)│
   └──────────────┘         └──────────────┘         └──────────────┘
           ▲                                                    │
           │                                                    ▼
   ┌──────────────┐         ◀───────────────┐         ┌──────────────┐
   │ useSelector  │         │   Redux Store │         │   Axios      │
   │ (Read State) │ ◀────── │ (Reducers)    │ ◀────── │ (API Call)   │
   └──────────────┘         └───────────────┘         └──────────────┘
           ▲                                                    │
           │                                                    ▼
   ┌───────────────────────────────────────────────────────────────┐
   │                        Backend (JSON Server)                 │
   └───────────────────────────────────────────────────────────────┘
```

**Flow:**
- User interacts with React UI (e.g., clicks Add to Cart)
- Component dispatches an action using `useDispatch`
- Thunk (async action) handles side effects (API calls via Axios)
- Axios communicates with the backend (JSON Server)
- Backend responds, thunk dispatches result to Redux reducers
- Redux store updates state
- Components read updated state using `useSelector`
- UI re-renders with new data


### 1. Store Setup
- The Redux store is created in `src/store/store.jsx` using `configureStore` from Redux Toolkit.
- It combines reducers for user, product, and cart, making a single global state tree.
- The store is provided to the entire React app using the `<Provider store={store}>` wrapper in `main.jsx`.

### 2. Slices (State Domains)
- Each feature (user, product, cart) has its own slice (e.g., `userSlice`, `productSlice`, `cartSlice`).
- Slices define the initial state and synchronous reducers for updating state (e.g., `loaduser`, `removeuser`).
- Slices are responsible for holding and updating their part of the state.

### 3. Async Actions (Thunks)
- Asynchronous logic (like API calls) is handled by thunk actions (e.g., `asyncLoginUser`, `asyncLoadProducts`).
- Thunks use Axios to communicate with the backend and then dispatch synchronous actions to update the state.
- Example: On login, `asyncLoginUser` fetches user data from the backend, stores it in localStorage, and dispatches `loaduser` to update Redux state.

### 4. Component Usage
- Components use `useSelector` to read data from the Redux state (e.g., current user, products list).
- Components use `useDispatch` to trigger actions (e.g., login, logout, fetch products).
- UI updates automatically when the Redux state changes, thanks to React-Redux hooks.

### 5. Session Persistence
- User session is persisted using localStorage. On app load, the `App.jsx` component dispatches the `asyncCurrentUser` thunk, which checks localStorage and updates Redux state if a user is found.
- This ensures the user stays logged in even after a page refresh or navigation.

### 6. Data Flow Example (Login)
1. User submits login form in the UI.
2. Component dispatches `asyncLoginUser` thunk with form data.
3. Thunk sends a GET request to `/users` endpoint with credentials.
4. If successful, user data is saved to localStorage and `loaduser` is dispatched.
5. Redux state updates, UI re-renders to show the logged-in state.
6. On app reload, `App.jsx` dispatches `asyncCurrentUser` to restore the session from localStorage.

### 7. Data Flow Example (Product Listing & Cart)
**Product Listing:**
1. On app load, `asyncLoadProducts` thunk is dispatched.
2. Thunk fetches products from the backend and dispatches `loadproduct`.
3. Redux state updates with the product list.
4. Products page uses `useSelector` to get products and display them.

**Add to Cart:**
1. User clicks "Add to Cart" on a product.
2. The handler checks if the product is already in the cart:
   - If not, it adds the product with quantity 1.
   - If yes, it increases the quantity (never creates a duplicate entry).
3. The cart is always deduplicated before updating the backend/user state.
4. Cart page displays items using unique product IDs as keys, so no React key warnings occur.
5. Quantity can be increased/decreased; if quantity reaches zero, the item is removed from the cart.

---

## Notable Code Usage

- `asyncCurrentUser` is dispatched in `App.jsx` on app load to restore user session from localStorage.
- All async actions (login, register, update, delete, logout) are handled in `src/store/actions/userActions.jsx`.
- Redux state is updated using reducers in `src/store/reducers/`.

---

## How It Works
- On app load, user and product data are fetched from the backend and loaded into Redux state.
- Navbar shows different options based on user login and admin status.
- Admins can create new products; all users can view products.
- Login, register, and product forms use react-hook-form for validation and submission.
- All API calls are made via Axios, using a base URL configured in `axiosconfig.jsx`.
- Cart logic ensures only one entry per product in the cart, merging quantities and preventing duplicate React keys.

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
