import { createContext, useContext, useReducer, FC } from 'react';
import themeReducer, { initialThemeState } from './reducers/theme.reducer';

const GlobalContext = createContext<any>({});

GlobalContext.displayName = 'GlobalContext';

const GlobalContextProvider: FC = ({ children }) => {
  const [theme, themeDispatch] = useReducer(themeReducer, initialThemeState);

  const value = {
    ...theme,
    themeDispatch,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;