import React, { ChangeEvent } from 'react'
type Props = {
    type: 'text' | 'checkbox' | 'color' | 'date' | 'email' | 'file' | 'hidden' | 'image' | 'number' | 'password';
    name: string;
    id: string;
    placeholder?: string;
    value: string;
    className?: string;
    onChange: (value: string, id: string) => void
}
const Input = ({ className = "", type = "text", placeholder = "", onChange, ...props }: Props) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value, event.target.id)
    }
    return (
        <input className={className} type={type} placeholder={placeholder} onChange={handleChange}{...props} />
    )
}

export default Input;