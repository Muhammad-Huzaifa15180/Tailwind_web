import React from 'react'

interface Columnprops{
    title:string;
    children:React.ReactNode;
}
const FooterColumn = ({title, children}:Columnprops) => {
  return (
    <div>
        <h1>{title}</h1>
        {children}
    </div>
  )
}

export default FooterColumn