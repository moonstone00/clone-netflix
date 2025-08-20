import React from 'react'

export default function SectionLayout({children}) {
    return (
        <section className='relative w-full text-white bg-black' >
            <div className='grid sm:grid-cols-2 justify-center items-center text-center sm:text-left p-8' >
                {children}
            </div>
            <div className='bg-stone-700 w-full absolute top-0 left-0 h-2' />
        </section>
    )
}
