import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
// import axios from 'axios';
import { BrowserRouter,Routes,Router,Route } from 'react-router-dom';
import Links from './links';
// import Test from './test'
import Address from './address'

import googleStore from '../../imge/store.jpg'
import appStore from '../../imge/appp.jpg'
import Logo from '../../imge/logo.png'
function Footer(){

    const [link,setLink]=useState([]);


    return(
        <>
            <secton className="footer row">

                <div className="col-4 textD">
                    <div className='div'>About Us</div>
                    <div className='row'>
                        <div className='col-2'>Our History</div>
                        <div className='col-3'>How we Work</div>
                        <div className='col-2'>Resources</div>
                    </div>

                    <div className='photo'>
                        <img src={googleStore} className="app"/>
                        <img src={appStore} className="app"/>
                    </div>
                </div>
                <div className="col-4 links"> 
                <BrowserRouter className="col-4"> 
                    <img src={Logo}  className="logo"/>
                    <p>FORALL</p>
                    <div>
                        <Links />
                    </div>
                    
                </BrowserRouter>
                </div>
                <div className="col-4"> 
                    <Address />
                </div>

            </secton>
        </>
    )
}

export default Footer;