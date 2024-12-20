import React, {createContext, useState, useContext, ReactNode} from "react";
import { Property } from "../PropertyTypes";

type PropertiesContextType = {
    properties: Property[];
    setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
};


const PropertiesContext = createContext<PropertiesContextType | undefined>(undefined);

export const PropertiesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [properties, setProperties] = useState<Property[]>([]);
  
    return (
      <PropertiesContext.Provider value={{ properties, setProperties }}>
        {children}
      </PropertiesContext.Provider>
    );
  };
  
  export const useProperties = () => {
    const context = useContext(PropertiesContext);
    if (!context) throw new Error('useProperties must be used within a PropertiesProvider');
    return context;
  };