import { ChangeEvent, FC } from 'react'
import './style.css'

interface InputProps {
    name: string
    label?: string
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

type OtherProps = Omit<InputProps, 'onChange'>

interface TextareaProps extends OtherProps {
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}


const CustomInput: FC<InputProps> = ({ name, label = 'Task name', value, onChange, placeholder }) => {
    return (
        <>
            <label htmlFor={name} className='input-label'>{label}</label>
            <input type='text' name={name} className="inputfield" value={value} onChange={onChange} placeholder={placeholder} required />
        </>
    )
}

export { CustomInput }


export const CustomTextArea: FC<TextareaProps> = ({ name, label = 'Task Description', value, onChange }) => {
    return (
        <>
            <label htmlFor={name} className='input-label'>{label}</label>
            <textarea name={name} className="textarea-field" value={value} onChange={onChange} required />
        </>
    )
}
