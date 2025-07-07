import React, { createContext, useContext } from 'react';

interface ShopContextType {
  backendUrl: string;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const backendUrl = "https://mentorshipprojectbackend.onrender.com";

  return (
    <ShopContext.Provider value={{ backendUrl }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShopContext must be used within ShopContextProvider");
  return context;
};

export default ShopContextProvider;
