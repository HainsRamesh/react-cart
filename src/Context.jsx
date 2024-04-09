import { useContext, useEffect, useReducer, createContext } from "react";
import cartItems from "./data";
import reducer from "./reducer";
import {
  CLEAR_CART,
  CLEAR,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./action";
import utilities from "./utilities";

// create context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // default state
  const defaultState = {
    loading: false,
    cart: new Map(cartItems.map((item) => [item.id, item])),
  };

  // functions
  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  // remove item
  const removeItem = (id) => {
    dispatch({ type: CLEAR, payload: { id } });
  };
  // increase
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  // decrease
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  // useReducer
  const [state, dispatch] = useReducer(reducer, defaultState);

  // utilities
  const { totalCount, totalValue } = utilities(state.cart);

  // return
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalCount,
        totalValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
