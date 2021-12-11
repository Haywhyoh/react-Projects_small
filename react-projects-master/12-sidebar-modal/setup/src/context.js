import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ( children }) => {
    const [isSiderbarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSider = () =>{
        setIsSidebarOpen(true);
    };
    const closeSIdebar = () =>{
        setIsSidebarOpen(false)
    };
}
