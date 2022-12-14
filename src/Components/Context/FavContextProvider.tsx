import React, { useMemo, useState } from 'react';
import { parseStorage } from '../../Helpers/functions/storage-helpers';

type FavContextType = {
  fav: number,
  setFav: React.Dispatch<React.SetStateAction<number>>
};

type Props = {
  children: React.ReactNode,
}

export const FavContext = React.createContext({} as FavContextType);

export const FavContextProvider: React.FC<Props> = ({ children }) => {
  const parsedStorage = parseStorage('FavItems');
  const amount = parsedStorage.length;
  const [fav, setFav] = useState<number>(amount);
  const contextValue = useMemo(() => ({ fav, setFav }), [fav]);

  return (
    <FavContext.Provider value={contextValue}>
      {children}
    </FavContext.Provider>
  );
};
