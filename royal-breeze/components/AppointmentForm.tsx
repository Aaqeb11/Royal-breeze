import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [nameState, setName] = useState<string>("");
  const [numberState, setNumber] = useState<string>("");
  const [emailState, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const template = process.env.NEXT_PUBLIC_TEMPLATE;
  const service = process.env.NEXT_PUBLIC_SERVICE;
  const key = process.env.NEXT_PUBLIC_KEY;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!nameState.trim()) {
      errors.nameState = "Name is required";
    }
    // else if (nameState.trim().length < 8) {
    //   errors.nameState = "Name must be at least 8 characters";
    // }

    if (!numberState.trim()) {
      errors.numberState = "Phone number is required";
    }
    // else if (numberState.trim().length !== 10) {
    //   errors.numberState = "Phone number must be of 10 digits";
    // }

    if (!emailState.trim()) {
      errors.emailState = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailState)) {
      errors.emailState = "Email address is invalid";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const templateParams = {
      name: nameState, // Ensure these match your template variables in EmailJS
      number: numberState,
      email: emailState,
    };

    emailjs.send(service ?? "", template ?? "", templateParams, key).then(
      (response: any) => {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setNumber("");
        setEmail("");
        setFormErrors({});
        setIsSubmitted(true);
        toast.success("Form Submitted Successfully!");
      },
      (err: any) => {
        console.log("FAILED...", err);
        toast.error("Form Submission Failed!");
      }
    );
  };

  return (
    <div className="appointment-form-section ">
      <div className="form-container rounded-xl">
        <h2 className="form-title">Register Now</h2>
        <form className="form-content " onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={nameState}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {formErrors.nameState && (
              <p className="error-message">{formErrors.nameState}</p>
            )}
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="text"
              value={numberState}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            {formErrors.numberState && (
              <p className="error-message">{formErrors.numberState}</p>
            )}
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={emailState}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {formErrors.emailState && (
              <p className="error-message">{formErrors.emailState}</p>
            )}
          </label>
          <br />
          <button
            type="submit"
            className="bg-[#1a8efd] text-[#0a192f] rounded-3xl px-2 py-1 lg:px-4 lg:py-2 lg:text-xl text-lg border-[1px] border-[#1a8efd] hover:text-[#1a8efd] hover:bg-transparent hover:border-[1px] hover:border-[#1a8efd] animate-pulse"
          >
            Confirm
          </button>
          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Your information has been submitted.
          </p>
        </form>
      </div>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
