"use client"
import React, { useState } from 'react'

  
function page() {
    const CHARACTER_LIMIT = 100;
  
    const [numberEmptyError, setNumberEmptyError] = useState(false);
    const [messageEmptyError, setMessageEmptyError] = useState(false);
  
    const [formData, setFormData] = useState({
      mobileNumber: "",
      message: "",
    });
  
    const { mobileNumber, message } = formData;
  
    const onChange = (e) => {
      e.preventDefault();
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      if (mobileNumber.length < 1) {
        setNumberEmptyError(true);
        setTimeout(() => setNumberEmptyError(false), 3000);
      } else if (message.length < 1) {
        setMessageEmptyError(true);
        setTimeout(() => setMessageEmptyError(false), 3000);
      } else {
        // TODO: Enter code here
         // Regex expression to remove all characters which are NOT alphanumeric
    let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

    // Appending the phone number to the URL
    let url = `https://web.whatsapp.com/send?phone=${number}`;

    // Appending the message to the URL by encoding it
    url += `&text=${encodeURI(message)}&app_absent=0`;

    // Open our newly created URL in a new tab to send the message
    window.open(url);
      }
    };
  return (
        <div className="communication">
          <div className="whatsapp-card app">
            <div className="title flex_middle">
              <div style={{ marginRight: "0.5em" }}>
             whticon
              </div>
              <div>Send Message</div>
            </div>
            {numberEmptyError && (
              <div className="errors">Mobile number cannot be empty!</div>
            )}
            {messageEmptyError && (
              <div className="errors">Message cannot be empty!</div>
            )}
            {!numberEmptyError && !messageEmptyError && (
              <div className="errors-null">.</div>
            )}
            <div className="search_contact app">
              <input
                error={numberEmptyError}
                label="Mobile Number"
                placeholder="Mobile Number"
                name="mobileNumber"
                value={mobileNumber}
                onChange={onChange}
                size="small"
                // style={{
                //   margin: "1em 0em",
                // }}
                // inputProps={{
                //   style: textFieldStyle,
                // }}
                // InputLabelProps={{
                //   style: textFieldInputLabelStyle,
                // }}
                required
              />
            </div>
            <div className="message app" style={{ marginTop: "1.5em" }}>
              <input
                multiline
                maxRows={4}
                label="Message"
                placeholder="Hi! Sending a message from React...."
                size="small"
                // InputLabelProps={{
                //   style: textFieldInputLabelStyle,
                // }}
                // inputProps={{
                //   style: {
                //     width: "230px",
                //     height: "90px",
                //   },
                //   maxLength: CHARACTER_LIMIT,
                // }}
                // FormHelperTextProps={{
                //   style: {
                //     margin: 0,
                //     padding: "0 0 0 5px",
                //     fontSize: 10,
                //   },
                // }}
                name="message"
                value={message}
                onChange={onChange}
                required
                error={message.length > CHARACTER_LIMIT - 1 || messageEmptyError}
                helperText={
                  !(message.length > CHARACTER_LIMIT - 1)
                    ? `${message.length}/${CHARACTER_LIMIT}`
                    : "Max length exceeded"
                }
              />
            </div>
            <div style={{ marginTop: "1.5em" }}>
              <button
                onClick={onSubmit}
                variant="outlined"
                color="success"
                size="small"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      );
  
}

export default page