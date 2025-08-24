import React from "react";

const PasswordInput = ({ value, onChange, placeholder }) => {

    

    return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 roundede mb-3">
        <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
    </div>
    )
}

export default PasswordInput