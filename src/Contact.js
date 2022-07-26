import React from 'react'
import "./Contact.css"

import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.png";
import github from "./images/github.png";
const Contact = () => {
  return (
    <>
    <div className="container">
       <div className="content">
         <div className="left-side">
           <a href="https://github.com/kuwarpj" target="_blank">
             <div className="github details">
               <img src={github} alt="" className="c-img"></img>
               <div className="topic">Github</div>
             </div>
           </a>
           <a
             href="https://www.linkedin.com/in/kuwarparasarjha/"
             target="_blank"
           >
             <div className="linkedin details">
               <img src = {linkedin}  alt="" className="c-img"></img>
               <div className="topic">Linkedin</div>
             </div>
           </a>

           <a href="https://www.instagram.com/kuwar_2500/" target="_blank">
             <div className="instagram details">
               <img src = {instagram} alt="" className="c-img"></img>
               <div className="topic">Instagram</div>
             </div>
           </a>
         </div>
         <div className="right-side">
           <div className="topic-text">Send us a message</div>
           <p className="c-paragraph">
             Feel free to send me a message in the contact
             form
           </p>
           <form >
             <div className="input-box">
               <input
                 type="text"
                 placeholder="Enter your name"
               
               />
             </div>
             <div className="input-box">
               <input
                 type="text"
                 placeholder="Subject"
                
               />
             </div>
             <div className="input-box">
               <input
                 type="email"
                 placeholder="Email"
                
               />
             </div>
             <div className="input-box message-box">
               <input
                 type="text"
                 placeholder="Message"
               
               />
             </div>
             <div className="c-button">
               <input
                 type="button"
                value="Send Now"
               
               />
               
             </div>
           </form>
         </div>
       </div>
     </div>
     </>
  )
}

export default Contact