import React, { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert"

const Contact = () => {
  const formRef = useRef(null);
  const[form, setForm] = useState({name: '', email: '', message: ''})
  const[isLoading, setIsLoading] = useState(false);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = ({target: {name, value}}) => {
    setForm({ ...form, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Emma",
        from_email: form.email,
        to_email: 'emmahypark@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      // TODO: Show success message
      showAlert({show: true, text: 'Message sent successfully', type: 'success'});

      setTimeout(() => {
        hideAlert(false);
        setForm({ name: '', email: '', message: ''});
      }, [2000])
      // TODO: Hide an alert
    }).catch((error) => {
      setIsLoading(false);
      console.error(error);
      // TODO: Show message
      showAlert({show: true, text: 'I did not receive your message', type: 'danger'})
    })
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert}/>}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form ref={formRef} className="w-full flex flex-col gap-7 mt-14"
              onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Emma"
                    required
                    value={form.name}
                    onChange={handleChange}
                    />
          </label>
          <label className="text-black-500 font-semibold">
            Email <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="emmapk@student.ubc.ca"
                    required
                    value={form.email}
                    onChange={handleChange}
                    />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message <textarea
                    name="message"
                    rows={4}
                    className="textarea"
                    placeholder="Let me know how I can help you!"
                    required
                    value={form.message}
                    onChange={handleChange}
                    />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact