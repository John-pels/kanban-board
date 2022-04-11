import { FC } from "react"

interface ButtonProps {
    onClick?: (props: any) => void
    text?: string
    className?: string
    isProcessing?: boolean
}

const CustomButton: FC<ButtonProps> = ({ onClick, text = 'Get Started', className, isProcessing }) => {

    return (
        <button className={`btn ${className}`}
            onClick={onClick}
            disabled={isProcessing}>
            {isProcessing ? 'Please wait...' : text}
        </button>
    )
}


export { CustomButton }
