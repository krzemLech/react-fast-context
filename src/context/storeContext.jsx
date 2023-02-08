import { useState, createContext, useContext, useEffect, useRef, useCallback, useSyncExternalStore } from "react";

const storeContext = createContext({ first: "", last: "" });

export const StoreContextProvider = ({ children }) => {
  const store = useRef({ first: "", last: "" });

  const get = useCallback(() => store.current, []);
  const subscribers = useRef(new Set());
  const set = useCallback((updates) => {
    store.current = { ...store.current, ...updates };
    subscribers.current.forEach((cb) => cb());
  }, []);
  const subscribe = useCallback((cb) => {
    subscribers.current.add(cb);
    return () => subscribers.current.delete(cb);
  }, []);

  return <storeContext.Provider value={{ get, set, subscribe }}>{children}</storeContext.Provider>;
};

export const useOldStore = () => {
  // for React older than 18
  const store = useContext(storeContext);
  if (!store) throw new Error("Store not found!");

  const [state, setState] = useState(store.get());

  useEffect(() => {
    return store.subscribe(() => setState(store.get()));
  });

  return { store: state, updateStore: store.set };
};

export const useStore = (selector) => {
  // for React 18
  const store = useContext(storeContext);
  if (!store) throw new Error("Store not found!");

  const state = useSyncExternalStore(store.subscribe, () => selector(store.get()));

  return { store: state, updateStore: store.set };
};
