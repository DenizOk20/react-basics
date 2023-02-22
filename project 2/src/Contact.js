import React from "react"

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={require(`${props.img}`)} alt=""/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={require(`./images/phone-icon.png`)} alt="" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={require(`./images/mail-icon.png`)} alt="" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}