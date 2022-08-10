import React, { useState } from 'react'
import './transferform.css'

const TransferForm = () => {

    const [Curr, setCur] = useState();

    const curr = (testcurr) => {
        
        let idd = testcurr;

        if(idd === '1')
        {
            console.log('lol');
        }
        if(idd === '2')
        {
            console.log('lol');
        }
        if(idd === '3')
        {
            console.log('lol');
        }
        if(idd === '4')
        {
            console.log('lol');
        }

    }

    return (
        <div className='outermain'>
            <div className='outerfrom'>
                <div className='boxfrom'>
                    <form className='inputfrom' id='loginfrom'>
                        <div className='inside-form-from'>
                            <h2 className='text-effect-from'>From</h2>
                            <div className='form-ele-from'>
                                <input type='text' name='fname' id='fname' className='fname' placeholder='Enter Name' required/>
                            </div>
                            <div className='form-ele-from'>
                                <input type='text' name='facc' id='facc' className='facc' placeholder='Enter Acc Number' required/>
                            </div>
                            <div className='form-ele-from'>
                                <input type='text' name='famt' id='famt' className='famt' placeholder='Enter Amount' required/>
                            </div>
                            <div className='form-ele-from-dd'>
                                <label for='ttype'>Transfer Type : </label>
                                <select id='ttype' name='ttpye' className='ttype'>
                                    <option value='ctransfer'>Customer Transfer</option>
                                    <option value='btransfer'>Bank Transfer</option>
                                </select>
                            </div>
                            <div className='form-ele-from-dd'>
                                <label for='ttype'>Currency Type : </label>
                                <select id='ttype' name='ttpye' className='ttype' onChange={(event) => curr(event.target.value)} value = {Curr}>
                                    <option value='1' onSelect={curr()}>$ Doller</option>
                                    <option value='2' onSelect={curr()}>$ SGD</option>
                                    <option value='3' onSelect={curr()}> € Eur</option>
                                    <option value='4' onSelect={curr()}> ¥ Yen</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='outerto'>
                <div className='boxto'>
                    <form className='inputto' id='loginto'>
                        <div className='inside-form-to'>
                            <h2 className='text-effect-to'>To</h2>
                            <div className='form-ele-to'>
                                <input type='text' name='tname' id='tname' className='tname' placeholder='Enter Name' required/>
                            </div>
                            <div className='form-ele-to'>
                                <input type='text' name='tacc' id='tacc' className='tacc' placeholder='Enter Acc Number' required/>
                            </div>
                            <div className='form-ele-to'>
                                <input type='text' name='bic' id='bic' className='bic' placeholder='Enter BIC' required/>
                            </div>
                            <div className='form-ele-to'>
                                <input type='text' name='tbname' id='tbname' className='tbname' placeholder='Enter Bank Name' required/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div>
                <input type='button' className='tsubmit' value='Transfer Now' id='tsubmit'></input>
            </div>

        </div>
    )
}

export default TransferForm
