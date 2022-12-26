import React, { Component ,useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import theImge from '../../imge/serv.png';
import './style.css'
import axios from 'axios';

function Services(){

  

    return(
        <>
            <secton className="services">
                <div className="  row">
                    <div className="col-6 center">
                        <img src={theImge} className="h-100 serImg"/>
                    </div>
                    <div className="textone col-4 offset-2">
                        <div className=" ptext"> 
                            <h3>What we Offers</h3>
                            <p>we Offers you differnt kinds os services that will help you save your time and be more comfortabl</p>
                            <button>Our Services</button>
                        </div>
                    </div>
                    
                </div>

                

            </secton>
        </>
    )
}

export default Services;