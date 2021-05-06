import React, { useState,useEffect,useReducer, useRef,useMemo } from 'react';
//useContext in the header
import MAP from './map';
import axios from 'axios';
import fp from "fingerprintjs2";
import '../App.css';
import GoogleMapReact from 'google-map-react';



    const IPaddressData = props =>{

        const [ipAddress, setIpAddress] = useState("");
        const [ipAddressDetails, setIpAddressDetails] = useState("");

        useEffect(() => {
            axios.get('https://extreme-ip-lookup.com/json/').then(result =>{
                console.log(result);
                setIpAddressDetails(result.data);
            });
            
        },[]);

        useEffect(() => {
            new Promise(resolve => {
                fp.get(components => {
                  resolve(components);
                  console.log(components);
                });
            });
        },[]);

        const todoRemoveHandler = event =>{
            setIpAddress(event.target.value);
        }

        const findButtonHandler= event =>{
            axios.get('https://extreme-ip-lookup.com/json/'+ipAddress).then(result =>{
                setIpAddressDetails(result.data);
            });
        }
        
        return (
          <div className="">
            <h1>IP Address Tracker</h1>
            <br/><br/>
            <input placeholder={ipAddressDetails.query} onChange={todoRemoveHandler}/>
            <br/>
            <button onClick={findButtonHandler}>Find</button>

            <table className="mainTable">  
                        <tr>
                            <td>Status </td>
                            <td>{ipAddressDetails.status}</td>
                        </tr>
                        <tr>
                            <td>IP Address </td>
                            <td>{ipAddressDetails.query}</td>
                        </tr>
                        <tr>
                            <td>ISP </td>
                            <td>{ipAddressDetails.org}</td>
                        </tr>
                        <tr>
                            <td>IP Type </td>
                            <td>{ipAddressDetails.ipType}</td>
                        </tr>
                       
                        <tr>
                            <td><hr/> </td>
                            <td><hr/></td>
                        </tr>
                        <tr>
                            <td>City </td>
                            <td>{ipAddressDetails.city}</td>
                        </tr>
                        <tr>
                            <td>Country </td>
                            <td>{ipAddressDetails.country}</td>
                        </tr>
                        <tr>
                            <td>Continent </td>
                            <td>{ipAddressDetails.continent}</td>
                        </tr>

                        <tr>
                            <td>Latitude </td>
                            <td>{ipAddressDetails.lat}</td>
                        </tr>
                        <tr>
                            <td>Longitude  </td>
                            <td>{ipAddressDetails.lon}</td>
                        </tr>
                
            </table>

            {/* <MAP/> */}
            <a href="https://aboutme-b0750.web.app/" target="_blank">About Me</a>
          </div>
        );
    } 

export default IPaddressData;





