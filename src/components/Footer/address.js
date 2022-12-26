import React, { Component ,useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

import './style.css'
import axios from 'axios';

function Address(){

    

    return(
        <>
        <h2>Saudi Arabia</h2>
        
            <p>jeddah , sultan st , lilayan tower</p>
            
            <div className="row">
                <div className="col-6">
                    <h4>Email : <span> hello@gmail.com</span> </h4> 
                </div>
                <div className="col-6">
                <h4>Office : <span>+00 123 456 789</span> </h4> 
                </div>
            </div>
        </>
    )
}

export default Address;