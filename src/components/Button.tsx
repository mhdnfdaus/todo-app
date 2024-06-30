interface valueProps {
    children: string;
    onClick: () => void;
}
const Button = ({children, onClick} : valueProps) => {
    
    return (
    <>
    <div>
        <button className='btn btn-primary' onClick={onClick}>{children}</button>
    </div>
    </>
)
}

export default Button