import React, { useEffect, useState } from 'react'

const Tips = () => {
  
    const onlyNum = (e) => {
    !/[0-9]/.test(e.key) && e.preventDefault() 
   } // only number function

   let [billAmt , setBillAmt] =useState(0);
   let [nPeople,setNPeople]=useState(0);
   let[tipSelected , setTipSelected]=useState(0);
   let[tipCustom , setTipCustom]=useState();
   let [result,setResult]=useState(0);
   let [tResult,setTResult]=useState(0);
   
   

 

   const changeBillAmt =(e)=> {
    setBillAmt(+e.target.value);
   };

   const changeNPeople = (e) => {
    setNPeople(+e.target.value);
   };
   
   const changeTipSelected = (e) => {
    setTipSelected(+e.target.value)
   };

   const changeTipCustom =(e) => {
    setTipCustom(+e.target.value);
   };
   
   const rez = () => {
    setBillAmt(0)
    setNPeople(0)
    setTipCustom(0)
    setResult(0)
    setTResult(0)
    setTipCustom(0)
   } 
  
   useEffect ( () => {
    setResult (tipSelected !==0 ? billAmt===0 && nPeople===0 ? "0.00" :((billAmt*(tipSelected)/100)/nPeople ).toFixed(2) : billAmt===0 && nPeople===0 ? "0.00" :((billAmt*(tipCustom)/100)/nPeople ).toFixed(2));
    setTResult (tipSelected !==0 ? billAmt===0 && nPeople===0 ? "0.00" :((billAmt*(tipSelected)/100) ).toFixed(2) : billAmt===0 && nPeople===0 ? "0.00" :((billAmt*(tipCustom)/100)).toFixed(2));
   } ,[billAmt , nPeople , tipSelected , tipCustom , result,tResult]);

   

  return (
    <div className='main'>
        <div className='title'>
            <h1>splitter</h1>
        </div>
        <div className='card'>
           <div className='leftcard'>
            <div className='inputinfo'>
                <p>bill</p>
                <input onKeyPress={onlyNum} type="name" id="bill" name="bill" placeholder="0" value={billAmt} onChange= {(e) => changeBillAmt(e)}  />
            </div>
            <div className='selecttips'>
               <p>select tip %</p>
               <div className='selectbutton' onClick={changeTipSelected}>
                <button onClick={changeTipSelected} value="5">5%</button>
                <button onClick={changeTipSelected} value="10">10%</button>
                <button onClick={changeTipSelected} value="15">15%</button>
                <button onClick={changeTipSelected} value="25">25%</button>
                <button onClick={changeTipSelected} value="50">50%</button>
                <input onKeyPress={onlyNum}  className='customtips' type="name" placeholder="Custom" value={tipCustom} onChange = {(e) => changeTipCustom(e)} />
               </div>
            </div> 
            <div className='inputinfo'>
                <p>number of people {nPeople ===0 ? <span>this field can't be 0</span> : "" }</p>
                <input onKeyPress={onlyNum} type="name" id="bill" name="bill" placeholder="0" value={nPeople} onChange= {(e) => changeNPeople(e)} />
                
            </div>
           </div> 
           <div className='rightcard'>

            <div className='tipcalc'>
                <p>tip amount <span>/ person</span></p>
                <h1>${result}</h1>
            </div>

            <div className='tipcalc'>
                <p>total <span>/ person</span></p>
                <h1 className='total'>${tResult}</h1>
            </div>

            <div className='rez'>
                <button onClick={rez} style={(billAmt===0 && nPeople===0 ? {backgroundColor:"var(--Dark-grayish-cyan)"} : {backgroundColor:"var(--Strong-cyan)"} )} >reset</button>
            </div>

           </div>

        </div>
        <div className='footer'>
            <a href='https://www.instagram.com/_hkay06'>HKAY</a>
        </div>
    </div>
  )
}

export default Tips