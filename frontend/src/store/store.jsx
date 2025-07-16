import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice
  },
})



// -------------------------------------------------------------------------------------

// Hamare 'store' mein 2 cheejein hoti hai:

// >> 1) Data puure UI mein dikhaana hai => STORE se denewala
// |
// >>>> Store ka data dena hai puure application ko; So humne "main.jsx" ko wrap kar liya, jisse 'store' puure application mein kahin bhi accessible ho.
// >>>> Ab "store" mein data kahan se aayega........

// -------------------------------------------------------------------------------------

// >> 2) Data puure UI se laana hai => STORE ko denewala
// |
// >>>> Ab store mein data kahan se ayega..!? "SLICE" se... Slice ka kaam hai data hold karke rakhne ka -> SLICE holds the data
// >>>> Ab "SLICE" mein hota hai "Initial State" <= "Inital State" mein data aata hai "ACTION" se => "ACTION" data "SLICE" ko deta hai.
// >>>> Ab "SLICE" ko data dene ke liye "REDUCER" ka use hota hai => "REDUCER" ko data "ACTION" deta hai, jisse "SLICE" ko data milta hai.
// >>>> "ACTION" 'async' bhi hote hai AUR 'sync' bhi hote hai => "ACTION" kaha se data laata hai -> "API" call kar ke (ASYNC Data) ya "UI/Components" se (SYNC Data).

// -------------------------------------------------------------------------------------

// ## Simplified explanation fo the Redux in the project:
// 1) Frontend load hone par 'useEffect' k zariye "asyncGetUsers" action call hota hai.
// 2) "asyncGetUsers" action 'axios' ka use karke backend se users data fetch karta hai.
// 3) Fetch hone ke baad, 'loadUser' action ko dispatch kiya jata hai.
// 4) 'loadUser' action, 'userSlice' ke reducer ko call karta hai, jisse 'state.data' update hota hai.
// 5) Fir reducer 'state.data' ko update karta hai, jisse 'userSlice' ka 'initialState' ka data change/update hota hai.
// 6) 'initialState' mein jo data hota hai, wo 'store' mein store hota hai.
// 7) 'store' se data ko 'useSelector' ke zariye components mein access kiya jata hai.