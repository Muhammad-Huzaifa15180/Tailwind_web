import Image from "next/image";
import React from "react";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: 'success' | 'dark' | 'white' | 'outlined' |'text'
  
};
const Button = ({ type, title, icon,variant }: ButtonProps) => {
  const bgColor = variant==="success" && 'bg-green-500' || variant==="dark" && 'bg-stone-800'|| variant==="white" && 'bg-white	'
  const textColor = variant==="success" && 'text-white' || variant==="dark" && 'text-white'|| variant==="white" && 'text-emerald-500'
  return (
    <button className={`flex gap-2 pt-4 pb-4 pr-8 pl-8 rounded-full border ${bgColor} ${textColor} `}  type={type}>
    {icon && <Image src={icon} alt={title} width={24} height={24} />}
    <label className="bold-16 whitespace-nowrap">{title}</label>
    
  </button>
  ) 
}

export default Button;
