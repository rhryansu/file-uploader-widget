import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Model = () => (


  <Popup trigger={
    <a className="button">Terms & Conditions.</a>
  } modal>
    <span> Disclaimer: This feature is not for personal use, you must take the report to see a professional doctor. </span>
    
  </Popup>
  
);

export default Model;