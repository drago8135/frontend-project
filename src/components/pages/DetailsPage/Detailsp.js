import React from 'react'
import { Link } from 'react-router-dom'
import './detailsp.css'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const Detailsp = () => {
    return (
        <div className='outdet'>
            <div className='col'>
                <Link to='/User'>
                    <button className='back-btn'>Back</button>
                </Link>
            </div>
            <div className='row'>
                <Tab3 />
            </div>
        </div>
    )
}

export default Detailsp
