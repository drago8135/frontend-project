import React from 'react'

const Tab3 = () => {
    return (
        <div className='col'>
            <table className="table-det">
            <thead>
                <tr>
                    <th scope='col' className='lol' colSpan='9'>Transfer Details</th>
                </tr>
                <tr>
                <th scope="col" className='lol'>Sender ID</th>
                <th scope="col" className='lol'>Amount</th>
                <th scope="col" className='lol'>Receiver ID</th>
                <th scope="col" className='lol'>BIC</th>
                <th scope="col" className='lol'>Reference ID</th>
                <th scope="col" className='lol'>Amount</th>
                <th scope="col" className='lol'>Receiver ID</th>
                <th scope="col" className='lol'>BIC</th>
                <th scope="col" className='lol'>Reference ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='lol' scope='row'> for user id </td>
                    <td className='lol' scope='row'> for amount </td>
                    <td className='lol' scope='row'> for the bank id </td>
                    <td className='lol' scope='row'> for bic number </td>
                    <td className='lol' scope='row'> for the transfer number </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Tab3
