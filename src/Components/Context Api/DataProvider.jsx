import { createContext } from "react";

 export const parentProvider=createContext(null)

const DataProvider = ({children}) => {

    // google authentication















    const value={name:"saiful"}
    return (
        <parentProvider.Provider value={value}>
            {children}
        </parentProvider.Provider>
    );
};

export default DataProvider;