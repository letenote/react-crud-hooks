import React from "react";

const Create = () => {
  return (
    <div className="contact-form">
      <h3>Contact Form</h3>
      <form>
        <div className="form-group">
          <label className="control-label">Name</label>
          <input type="text" className="control-input"/>
        </div>
        <div className="form-group">
          <label className="control-label">Phone Number</label>
          <input type="text" className="control-input"/>
        </div>
        <div className="form-group">
          <label className="control-label">Description</label>
          <textarea type="textarea" className="control-input"/>
        </div>
        <div style={{ marginTop: 20 }} className="btn-group">
          <button type="button" className="btn btn-primary">Cancel</button>
          <button type="submit" className="btn btn-danger">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Create;