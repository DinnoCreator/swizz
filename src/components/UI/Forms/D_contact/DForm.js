import classes from "./DForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const DForm = () => {
  let navigate = useNavigate();

  const [sent, setSent] = useState(false);
  //state for showing modal on load
  const [show, setShow] = useState(true);

  //sends to home
  function handleHome() {
    navigate("/");
  }

  //sends to modal
  function handleSent() {
    setSent(true);
  }

  if (sent === false) {
    return (
      <>
        <div className={`container ${classes.drop}`}>
          <h1>Contact</h1>
          <form onSubmit={handleSent}>
            <div class="mb-3">
              <label for="exampleInputText1" class="form-label">
                Your Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputText1"
                autoComplete="off"
                minLength="2"
                maxLength="50"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                autoComplete="off"
                required
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                autoComplete="off"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Modal show={show} backdrop="static" centered>
          <Modal.Header>
            <Modal.Title>
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Status
              </h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="centree">
              <h3>Message sent successfully!</h3>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleHome}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};

export default DForm;
