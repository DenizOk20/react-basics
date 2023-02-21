import React from "react"

export default function Infos(){
    return (
    <div className="Infos">
    <div className="info">
        <h1>Deniz Ök</h1>
        <h3>Frontend Developer</h3>
        <h4>denizok.website</h4>        
    </div>
    <div className="social">
        <button className="mail">E-Mail</button>
        <button className="linkedin"><i class="fa-solid fa-envelope"></i> Linkedin</button>        
    </div>
    <div className="personal">
        <h2>About</h2>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2>Interest</h2>
        <p>Space enthusiast. I loved footbal and I'm a fan of Galatasaray that is a Turkish footbal team. Of course, I always like coding.</p>
    </div>    
    </div>
    )
}