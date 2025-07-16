# Redux Workflow in This Project
[![Project Structure](https://img.shields.io/badge/Project%20Status-In%20Development-yellow)]()

## Project Situation & Working

This project is a full-stack Products Store application built with React (frontend) and a mock backend (using db.json). The frontend uses Redux Toolkit for state management and Axios for API calls.

### Current Situation
- **Frontend:** React app with routing, pages for Home, Products, Cart, Login, Register, and Admin/User management.
- **Backend:** Mock API (db.json) for users and products data.
- **State Management:** Redux Toolkit is set up for user data. Product and cart slices can be added similarly.
- **API Calls:** Axios is used for communication between frontend and backend.

### Working
1. **App Initialization:** The Redux store is provided to the entire app via `<Provider>`, making state accessible everywhere.
2. **User Data Fetch:** On app load, an async Redux action fetches user data from the backend and updates the Redux state.
3. **State Usage:** Components use `useSelector` to access state and display data in the UI.
4. **Extensibility:** The same pattern can be used for products, cart, and other features.

---

1. **Store Setup:**  
   - The Redux store is created in `store.jsx` and provided to the whole app via `<Provider store={store}>` in `main.jsx`.

2. **Slice & Initial State:**  
   - `userSlice` defines the initial state (`data: []`) and the reducer (`loadUser`) to update user data.

3. **Async Action:**  
   - `asyncGetUsers` (in `userActions.jsx`) fetches user data from the backend using Axios and dispatches `loadUser` with the result.

4. **Component Usage:**  
   - In `App.jsx`, `useEffect` dispatches `asyncGetUsers` on mount.
   - `useSelector` reads the Redux state (`user.data`) for use in the UI.

5. **Data Flow:**  
   - Component mounts → dispatches async action → Axios fetches data → Redux state updates → UI re-renders with new data.

**Summary:**  
Store provides state → Slice manages state → Async action fetches data → Reducer updates state → Component displays data.
