import React from 'react'

const Tab3 = () => {
    return (
        <div>
            <table className='table-det'>
                <tr>
                    <td colSpan='5' className='lol'>Transfer Details</td>
                </tr>
                <tr>
                    <td className='lol'>Sender ID</td>
                    <td className='lol'>Amount</td>
                    <td className='lol'>Receiver ID</td>
                    <td className='lol'>BIC</td>
                    <td className='lol'>Reference ID</td>
                    
                </tr>
                <tr>
                    <td className='lol'> for user id </td>
                    <td className='lol'> for amount </td>
                    <td className='lol'> for the bank id </td>
                    <td className='lol'> for bic number </td>
                    <td className='lol'> for the transfer number </td>
                </tr>
            </table>
        </div>
    )
}

export default Tab3
