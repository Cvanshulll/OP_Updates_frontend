import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
    return (
        <div className='text-center'>
            <img src={spinner} alt="Loading..." />
        </div>
    )
}
