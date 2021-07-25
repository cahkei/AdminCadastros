import React, {useState} from 'react';
import { HiUsers,  HiHome, HiShoppingCart } from 'react-icons/hi';

const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HiHome />,
        name: 'nav-text'
    },
    {
        title: 'Clientes',
        path: '/clientes',
        icon: <HiUsers />,
        name: 'nav-text'
    },
    {
        title: 'Produtos',
        path: '/estoque',
        icon: <HiShoppingCart />,
        name: 'nav-text'
    },
];

export default SidebarData;