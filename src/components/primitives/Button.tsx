interface Props {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    preventDefault?: boolean;
}

const Button = ({ children, onClick, preventDefault }: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (preventDefault) {
            e.preventDefault();
        }
        onClick(e);
    };

    return (
        <button
            className='min-w-[100px] p-2 bg-npink rounded-md hover:bg-npink-400 flex items-center justify-between'
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
