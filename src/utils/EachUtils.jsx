import React from 'react'
import { Children } from 'react'

export default function EachUtils({of, render}) {
    return ( 
        <>
        {/* Testing aja dulu */}
            {
                Children.toArray(of.map((item, index) => render(item, index)))
            }
        </>
    )
}
