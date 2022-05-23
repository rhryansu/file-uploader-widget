import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Model = ({ifAgreed}) => (


  <Popup trigger={open => (
    <button className="button">Trigger - {open ? 'Opened' : 'Closed'}</button>
  )} modal>
    <span> Disclaimer: This application is not for personal use, you must take the report to see a professional doctor. </span>
  </Popup>
);

export default Model;