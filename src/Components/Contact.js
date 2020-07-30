import React, {useState} from 'react';
// import Modal from './UI/modal/modal';


const Contact = (props) => {
  const {city, state, zip} = props.data.address;
  const {name, phone, email, contactMessage} = props.data;
  const [isModalShowing, setShowModal]=useState(false);

  const [contactForm, setContactForm] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: '',
  });
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event) => {
    setContactForm({
      ...contactForm,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceId = 'default_service';
    const templateId = 'template_aKSXTcJe';
    const template_params = {
      name: contactForm.contactName,
      subject: contactForm.contactSubject,
      email: contactForm.contactEmail,
      message: contactForm.contactMessage,
    };
	  setLoading(true);
	  event.persist();
	  setTimeout(()=>{
		  event.target.reset();
		  setLoading(false);
		  showModal();
	  }, 1000);
	  return;
	  window.emailjs
        .send(serviceId, templateId, template_params)
        .then((res) => {
          console.log('Email successfully sent!');
          event.target.reset();
          setLoading(false);
          showModal();
        })
    // Handle errors here however you like, or use a React error boundary
        .catch((err) => {
          console.error(
              'Oh well, you failed. Here some thoughts on the error that occurred:',
              err,
          );
          setLoading(false);
        });
  };


  const showModal = () => {
	  setShowModal( true);
  };

  const hideModal = () => {
    setShowModal(false);
  };


  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
          <br />
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          { isLoading? <span id="image-loader">
            <img alt="" src="images/loader.gif" />
          </span>:
          <form
            onSubmit={(event) => handleSubmit(event)}
            id="contactForm"
            name="contactForm"
          >
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={contactForm.name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(event) => handleChange(event)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={contactForm.email}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(event) => handleChange(event)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  value={contactForm.subject}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(event) => handleChange(event)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={contactForm.message}
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div>
                <button className="submit">Submit</button>
              </div>
            </fieldset>
          </form>
          }

        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {city} <br />
              {state}, {zip}
              <br />
              <span>{phone}</span>
              <br />
              <span>
                <a href="mailto:d.selal@hotmail.com">{email}</a>
              </span>
            </p>
          </div>
        </aside>
      </div>


      {/* <Modal show={isModalShowing} handleClose={hideModal}>*/}
      {/*  <p>Your message has been sent successfully. Thank you!</p>*/}
      {/* </Modal>*/}


      <button onClick={showModal}>
			open
      </button>
    </section>
  );
};

export default Contact;
