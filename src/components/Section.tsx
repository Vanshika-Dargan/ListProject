// defining section in the legacy way
// import React from 'react'



// const Section:React.FC<{title:string}> = ({children,title}) => {
//   return (
//     <section>
//         <h2>{title}</h2>
//         <p>{children}</p>
//     </section>
//   )
// }

// export default Section

//newer way of doing  it
import { ReactNode } from "react"
type SectionProps={
    title?:string,
    children:ReactNode
}

export const Section=({children,title="MySubheading"}:SectionProps)=>{

    return(
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}