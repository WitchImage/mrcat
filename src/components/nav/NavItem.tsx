import Link from 'next/link';

interface Props {
    children: React.ReactNode;
    href: string;
    selected: string;
    setSelected: (value: string) => void;
}

const NavItem = ({ children, href, selected, setSelected }: Props) => {
    return (
        <Link href={href}>
            <div
                className={`
                    transition-all ease-in-out duration-500 p-2 flex bg-gradient-to-r from-transparent to-transparent 
                    hover:from-npink-400 hover:cursor-pointer rounded-lg ${
                        selected === href && 'from-npink-400'
                    }
                `}
                onClick={() => setSelected(href)}
            >
                {children}
            </div>
        </Link>
    );
};

export default NavItem;
