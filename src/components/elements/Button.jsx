import React from "react";
import clsx from "clsx";

function getClassName({className}){
    return clsx("mt-4 bg-warning rounded px-3 py-2 hover:bg-warning-dark transition-300 cursor-pointer focus-outline-none focus-ring-2 focus-ring-opacity-50",
    className)
}

const sizes = {
    small: "px-4 py-3",
    medium: "px-6 py-4",
    large: "w-100 px-4 py-3"
};

const variants = {
    yel: "bg-yel focus:ring-whi",
    outline: "bg-ppl focus:ring-whi",
    whi: "bg-whi focus:ring-yel",
};


const Button = ({children,
    className,
    size,
    variant,
    ...rest
}) => {
    return(
    <button className= {clsx(
        sizes[size],
        variants[variant],
        getClassName({className})
    )}
    {...rest}
        >
        {children}
        </button>


    )
    
    
};


export default Button;