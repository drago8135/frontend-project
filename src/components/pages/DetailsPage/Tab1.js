import React from 'react'

const Tab1 = () => {
    return (
        <div className='col'>
            <table className='table-det'>
                <tr>
                    <td colSpan='3' className='lol'>Customer Details</td>
                </tr>
                <tr>
                    <td className='lol'>Name </td>
                    <td className='lol'> ID </td>
                    <td className='lol'>Balance</td>
                </tr>
                <tr>
                    <td className='lol'>Enter name</td>
                    <td className='lol'>Enter id</td>
                    <td className='lol'>Enter balance</td>
                </tr>
            </table>
        </div>
    )
}

export default Tab1
