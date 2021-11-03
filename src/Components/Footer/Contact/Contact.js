
import React,{useState} from 'react'

function Contact() {

    const [email,setEmail] = useState('')
    const [affair,setAffair] = useState('')
    const [message,setMessage] = useState('')


    const sendEmail = (event) => {
        event.preventDefault();
        console.log('Email: ', email)
        console.log('Email: ', affair)
        console.log('Email: ', message)
       
        let formulario = document.getElementById('formulario');
            formulario.addEventListener('submit', function() {
              formulario.reset();
            });
    };
    return (
        <div className="contact-section">
            <h1>Contact Section</h1>
            <form onSubmit={sendEmail} className="formulario" id="formulario">
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    name="email"
                    onChange = {e => {
                        setEmail(e.target.value)
                    }}
                    className="form-control"
                    required
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="affair">Affair</label>
                    <input 
                    type="text" 
                    name="affair"
                    onChange = {e => {
                        setAffair(e.target.value)
                    }}
                    className="form-control"
                    required
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                    rows="4"
                    type="text" 
                    name="message"
                    onChange = {e => {
                        setMessage(e.target.value)
                    }}
                    className="form-control"
                    required
                    />
                </div>
                <br />
                <div>
                  <button type="submit" className="btn btn-light w-100">Send !</button>
                </div>
            </form>
        </div>
    )
}

export default Contact
