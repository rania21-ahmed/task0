import React, { Component ,useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { NavLink } from "react-router-dom";
import './style.css'
import axios from 'axios';

function Links(){

    const [link,setLink]=useState([]);
    useEffect(()=>{
        axios.get('https://forall.sa/services/api/ads/companies?page_count=1').then(
            (d)=>{
                // console.log(d.data.data[0].social_links);
                const YouTube =(d.data.data[0].social_links.YouTube='https://m.youtube.com');
                const twitter =(d.data.data[0].social_links.twitter='https://twitter.com');
                const whatsapp =(d.data.data[0].social_links.WhatsApp='+00123456789');
                const facebook =(d.data.data[0].social_links.facebook='https://facebook.com');
                // console.log(YouTube);
                setLink([YouTube,twitter,whatsapp,facebook]);
                // console.log(link[1]);

            }
        )
    },[]);

    return(
        <>
        
            <a href={link[0]}> <i class="fa fa-brands fa-youtube fa-2xl"></i></a>
            <a href={link[1]}><i class="fa fa-brands fa-twitter"></i> </a>
            <a href={link[3]}> <i class=" fa fa-brands fa-facebook"></i></a>
            
        </>
    )
}

export default Links;