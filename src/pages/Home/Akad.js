import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { FaCalendarAlt, FaInstagram } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Akad = () => {
    return (
        <div className="akad-container" id="add-wed">
            <div className="pembuka" data-aos="fade-up">
                <p>﷽</p>
            </div>
            <div className="judul" data-aos="fade-up">
                <p>Akad Nikah dan Walimatul 'Ursy</p>
            </div>
            <div className="text" data-aos="fade-up">
                <p>In sha Allah akan dilaksanakan pada :</p>
            </div>
            <div className="info" data-aos="fade-up">     
                <div className="info-judul">
                    <h2>Waktu dan Tempat</h2>                
                    <div></div>
                </div>           
                <div className="detail">
                    <div className="detail-wl">
                        <BiTimeFive size="3vmax" color="white" />
                        <p>13.00 - 19.00 WIB</p>                    
                    </div>
                    <div className="detail-wl">
                        <FaCalendarAlt size="3vmax" color="white" />
                        <p>Senin, 2 Agustus 2021</p>
                    </div>
                    <div className="detail-wl">
                        <FiMapPin size="3vmax" color="white" />
                        <p>Jln. Cilik Riwut II Gg. Murai RT 13 Kelurahan Sidorejo</p>
                    </div>                

                </div>
            </div>
            <div className="btn" data-aos="fade-up">
                <a           
                    target="_blank"
                    rel="noopener noreferrer" 
                    href="https://maps.app.goo.gl/gHXu9X7CscSQwpHx9" 
                    className="btn-link"
                >
                   
                    <ImLocation size="3vmax" color="#AD7961" />
                    <p>Google Maps</p>
                </a>                
                <a  
                    target="_blank"
                    rel="noopener noreferrer" 
                    href="https://www.instagram.com/muktiareif/" 
                    className="btn-link"
                >
                    <FaInstagram size="3vmax" color="#AD7961" />
                    <p>Live Instagram</p>
                </a>
            
            </div>

        </div>
    )
}

export default Akad
