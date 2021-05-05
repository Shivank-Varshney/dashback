import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./Popup.scss";
 
export default () => (
  <Popup trigger={<h5 className="button">To register for webinar click here</h5>} modal>
        <form>
          <div className="form-group">
            <label htmlFor="InputName">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Enter your name" id="InputName" />
          </div>
          <div className="form-group">
            <label htmlFor="InputEmail">Email</label>
            <input type="email" className="form-control" name="email" placeholder="Enter your email" id="InputEmail" />
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
  </Popup>
);