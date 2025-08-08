import React, { Children } from 'react'

export default function DefaultLayout({Children}) {
    return (
        <section>{Children}</section>
    )
}
