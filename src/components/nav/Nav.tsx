import { useState } from 'react';
import NavItem from './NavItem';

const Nav = () => {
    const [selected, setSelected] = useState('');

    return (
        <nav className='min-w-[250px] flex flex-col gap-3 h-screen px-4 py-8 bg-[#1b1b1b] text-xl font-medium'>
            <NavItem
                href='/'
                selected={selected}
                setSelected={setSelected}
            >
                Inicio
            </NavItem>
            <NavItem
                href='/dataset/upload'
                selected={selected}
                setSelected={setSelected}
            >
                Upload dataset
            </NavItem>
            <NavItem
                href='/dataset/ready-to-use'
                selected={selected}
                setSelected={setSelected}
            >
                Ready-to-use datasets
            </NavItem>
        </nav>
    );
};

export default Nav;
