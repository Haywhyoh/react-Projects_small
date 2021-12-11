import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSiderbarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSider = () =>{
        setIsSidebarOpen(true);
    };
    const closeSIdebar = () =>{
        setIsSidebarOpen(false)
    };
}

const openModal = () =>{
    setIsModalOpen(true);
};
const closeModal = () =>{
    setIsModalOpen(false);
}

return(
    <AppContext.Provider
        value={{
            isSidebarOpen,
            isModalOpen,
            openModal,
            closeModal,
            openSidebar,
            clsoeSidebar

        }}
    >
        {children}
    </AppContext.Provider>
)