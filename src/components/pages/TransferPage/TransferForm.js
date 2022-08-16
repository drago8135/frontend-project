import React, { useState } from 'react'
import './transferform.css'

const TransferForm = () => {

    const [formdet, setformdet] = useState({fname: '', facc: '', famt: '', ttype: '', curtype: '', tname: '', tacc: '', bic: '', tbname: ''});

    const testfun = e =>{
     
        console.log(formdet.fname);
        
    }

    return (
        <div className='outermain'>
            <div className='outerfrom'>
                <div className='boxfraom'>
                    <form onSubmit={testfun} className='inputfrom' id='loginfrom'>
                        <div className='inside-form-from'>
                            <h2 className='text-effect-from'>From</h2>
                            <div className='form-ele-from'>
                                <input type='text' name='fname' id='fname' className='fname' placeholder='Enter Name' onChange={e => setformdet({...formdet, fname: e.target.value})} value={formdet.fname} required/>
                            </div>
                            <div className='form-ele-from'>
                                <input type='text' name='facc' id='facc' className='facc' placeholder='Enter Acc Number' onChange={e => setformdet({...formdet, facc: e.target.value})} value={formdet.facc} required/>
                            </div>
                            <div className='form-ele-from'>
                                <input type='text' name='famt' id='famt' className='famt' placeholder='Enter Amount' onChange={e => setformdet({...formdet, famt: e.target.value})} value={formdet.famt} required/>
                            </div>
                            <div className='form-ele-from-dd'>
                                <label for='ttype'>Transfer Type : </label>
                                <select id='ttype' name='ttpye' className='ttype' onChange={e => setformdet({...formdet, ttype: e.target.value})} value={formdet.ttype}>
                                    <option value='ctransfer'>Customer Transfer</option>
                                    <option value='btransfer'>Bank Transfer</option>
                                </select>
                            </div>
                            <div className='form-ele-from-dd'>
                                <label for='curtype'>Currency Type : </label>
                                <select id='curtype' name='curtype' className='curtype' >
                                    <option value='1' >$ Doller</option>
                                    <option value='2' >$ SGD</option>
                                    <option value='3' > € Eur</option>
                                    <option value='4' > ¥ Yen</option>
                                </select>
                            </div>
                        </div>
                        <div className='inside-form-to'>
                        <h2 className='text-effect-to'>To</h2>
                        <div className='form-ele-to'>
                            <input type='text' name='tname' id='tname' className='tname' placeholder='Enter Name' onChange={e => setformdet({...formdet, tname: e.target.value})} value={formdet.tname} required/>
                        </div>
                        <div className='form-ele-to'>
                            <input type='text' name='tacc' id='tacc' className='tacc' placeholder='Enter Acc Number' onChange={e => setformdet({...formdet, tacc: e.target.value})} value={formdet.tacc} required/>
                        </div>
                        <div className='form-ele-to'>
                            <input type='text' name='bic' id='bic' className='bic' placeholder='Enter BIC' onChange={e => {testfun(); setformdet({...formdet, bic: e.target.value})}} value={formdet.bic} required/>
                        </div>
                        <div className='form-ele-to'>
                            <input type='text' name='tbname' id='tbname' className='tbname' placeholder='Enter Bank Name' onChange={e => setformdet({...formdet, tbname: e.target.value})} value={formdet.tbname} required/>
                        </div>
                    </div>
                    <div>
                    <button type='submit' className='tsubmit' id='tsubmit'>Transfer Now</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TransferForm
