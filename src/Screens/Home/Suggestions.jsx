import React, { useState } from 'react';
import axios from 'axios';
import './Style/PostArtical.scss';
import swal from 'sweetalert';

const PostArtical = () => {
  const [name, setName] = useState('');
    const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
        setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();    

    // Send a POST request to the server to submit the name and message data
    axios.post(`${process.env.REACT_APP_URL_SERVER}/suggestions`, { name, message })
      .then((response) => {
        console.log(response.data);
        swal({
            icon: "success",
            title: "Submitted Successfuly",
         });
        setName('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error);
        swal({
            icon: "error",
            title: "Ops! some thing went wrong",
         });
      });
  };

  return (
    <div className="container">
      <div className="post-artical-cont" data-aos="fade-up">
        <div className="row d-flex container">
          <div className="section-title-main">
            <h2>YOUR FEEDBACK ON OUR SITE IS VALUABLE TO US</h2>
            <h3>
              آپ کی ویب سائٹ پر رائے ہمارے لئے قیمتی ہے۔ برائے مہربانی ہمارے ساتھ
              اپنی کوئی بھی تجاویز شیئر کریں۔
            </h3>
          </div>
        </div>
        <div>
          <form className="post-artical-form" onSubmit={handleSubmit}>
            <div className="row mt-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              {/* <div class="col">
                            <input type="text" class="form-control" placeholder="Email" />
                        </div> */}
            </div>
            <div className="row mt-3">
              <div className="col">
                <textarea
                  className="form-control"
                  placeholder="Please Write Your Suggestion"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  value={message}
                  onChange={handleMessageChange}
                  required
                />
              </div>
            </div>
            <div className="m-3">
              <button type="submit" className="btn btn-primary">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostArtical;
