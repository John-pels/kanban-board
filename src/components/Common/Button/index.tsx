import { FC } from "react"

interface ButtonProps {
    onClick?: () => void
    text?: string
    className?: string
}

const CustomButton: FC<ButtonProps> = ({ onClick, text = 'Get Started', className }) => {

    return (
        <button className={`btn ${className}`} onClick={onClick}>{text}</button>
    )
}


export { CustomButton }
