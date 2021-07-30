/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { StyledWaterboxDescription } from './waterbox-description.styled';

const WaterboxDescription = () => {
  return (
    <StyledWaterboxDescription>
      <div className="description">
        <div className="waterbox">
          <h2>Aquifera Waterbox</h2>
          <p>
            Water Box adalah perangkat IoT pengukur debit otomatis. Water Box
            dapat digunakan untuk melakukan pencatatan debit air yang mengalir
            didalam pipa. Kelak data yang terkumpulkan secara berkala akan
            diteruskan ke cloud baik secara langsung melalui gsm/wifi atau
            melalui perantara gateway.
          </p>
        </div>

        <hr />

        <div className="features">
          <h4>Fitur</h4>
          <ul>
            <li>Flow Sensor 1/2 inch connection</li>
            <li>Connectivity: GSM, WiFi, LoRa*</li>
            <li>Internal RTC</li>
            <li>SD Card for local data storage</li>
            <li>AC Power Source with Internal Battery</li>
          </ul>
        </div>
      </div>
      <div className="image">
        <img src="/png/waterbox.png" alt="waterbox" />
      </div>
    </StyledWaterboxDescription>
  );
};

export default WaterboxDescription;
