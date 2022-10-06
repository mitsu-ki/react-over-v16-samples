import React, {
  createContext,
  useContext as useContextOriginal,
  FC,
} from "react";
import { useTodo, Store } from "./Store";

interface AppStore {
  todo: Store;
}

const Context = createContext<AppStore>({} as any);
const { Provider } = Context;

export const StoreProvider: FC = ({ children }) => {
  const todo = useTodo();
  return <Provider value={{ todo }}>{children}</Provider>;
};

export function useContext() {
  return useContextOriginal(Context);
}
