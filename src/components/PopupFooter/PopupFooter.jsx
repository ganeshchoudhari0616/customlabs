import React from 'react';
import '../PopupFooter/PopupFooter.scss';
import axios from 'axios';

 const PopupFooter = (props) => {
    const setOpenPopup = props.setOpenPopup;
    const inputData = props.inputData;
    const array = props.array;
    function handleSubmit(e){
      e.preventDefault();
      if(inputData!==""){
      const result = array.map((obj) => {
        const [firstKey, firstValue] = Object.entries(obj)[0];
        return { [firstKey]: firstValue };
      });
      console.log("submit")
      const payload = {"segment_name": inputData,
        "schema":result}
     
        axios.post("https://webhook.site/8dc5a17b-4db9-4c5f-a5e7-f34444aa09c0",JSON.stringify(payload))
        .then(function(response){
          console.log(response)
        }).catch((err) => console.error(err));
    }
    }
  return (
    <div className='footer-container'>
        <div className='popup-btn-wrapper' onClick={handleSubmit}><button className='popup-save-btn'>Save the Segment</button></div>
        <div className='popup-btn-wrapper' onClick={()=>{
            setOpenPopup(false);
        }}><button className='popup-close-btn'>Cancel</button></div>
    </div>
  )
}
export default PopupFooter;