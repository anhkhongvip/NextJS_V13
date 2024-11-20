import React from 'react'
type Props = {
    type: 'text' | 'checkbox' | 'color' | 'date' | 'email' | 'file' | 'hidden' | 'image' | 'number' | 'password';
    name: string;
    id: string;
    placeholder: string;
    value: string;
    className?: string;
}
const Input = ({ className= "", type= "text", ...props }: Props) => {
    return (
        <input className={className} type={type} {...props} />
    )
}

export default Input