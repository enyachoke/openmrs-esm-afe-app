import React, { useEffect, useLayoutEffect, useRef } from 'react';
import 'afe-webcomponent';
import 'afe-webcomponent/styles.css';
import "./ngx-formentry.css";

interface CustomEl extends Element {
  testschema: any; 
  testencounter: any; 
}

import adultForm from './adult-1.4.json';
import adultFormObs from "./mock/obs.json";

export function AfeWidget() {
  const elementRef = useRef(null);
  useEffect(() => {
    const afe: CustomEl = document.querySelector('afe-webcomponent')
    afe.testschema = adultForm;
    afe.testencounter = adultFormObs;
    afe.addEventListener('onpayload', handleSubmit)
  }, [])

  function handleSubmit(e) {
    console.log('Payload to submit', e.detail);
  }
  return (
    <div>
      <afe-webcomponent testinput="Sample Form Entry"></afe-webcomponent>
    </div>
  );
}

export default AfeWidget;
