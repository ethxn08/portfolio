
import React,{useState} from 'react'
import emailjs from 'emailjs-com';

function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_jxqnm0j', 'template_3b8eo1s', e.target, 'user_RdjOucKQMLRufrAUKtN8i')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

    };
    return (
        <div className="contact-section">
            <h1>Contact Section</h1>
            <form onSubmit={sendEmail} className="formulario" id="formulario">
                <input type="hidden" name="contact_number" />
                        <div>
                            <label>Name</label>
                            <input type="text" name="user_name" className="form-control" required />
                        </div>
                    <br />
                        <div>
                            <label>Email</label>
                            <input type="email" name="user_email" className="form-control" required />
                    </div>
                   <br/>
                    <div>
                            <label>Message</label>
                            <textarea name="message" className="form-control" />
                    </div>
                   <br />
                   <div>
                    <input type="submit" value="Send" className="btn btn-light w-50" required />
                    <input type="reset" value="Clear" className="btn btn-light w-50" required />
                   </div>
            </form>
        </div>
    )
}

export default Contact
