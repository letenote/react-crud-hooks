import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { errorHandler } from "../lib";
import Service from "../service";
import {
  addContact,
  updateContact,
} from "../store/redux/contact/contact.action";

const Create = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [_isUpdate, _setIsUpdate] = useState(false);
  const [_contactId, _setContactId] = useState("");
  const [_form, _setForm] = useState({
    name: "",
    number: "",
    desc: "",
  });

  useEffect(() => {
    const {
      match: { path },
    } = props;
    if (path === "/contact/create") return;
    try {
      if (id) {
        Service.getContact(id)
          .then((res) => {
            _setForm({
              name: res["data"]["name"],
              number: res["data"]["number"],
              desc: res["data"]["desc"],
            });
            return res["data"]["id"];
          })
          .then((id) => _setContactId(id))
          .then(() => _setIsUpdate(true));
      };
    } catch (error) {
      errorHandler(error);
      return history.goBack();
    }
  }, [id, props, history]);

  const handleChange = (field, value) => {
    return _setForm({
      ..._form,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(_form, dispatch).then(() => history.goBack());
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateContact(_contactId, _form, dispatch).then(() => history.goBack());
  };

  return (
    <div className="contact-form">
      <h3>Contact Form</h3>
      <form onSubmit={(e) => (_isUpdate ? handleUpdate(e) : handleSubmit(e))}>
        <div className="form-group">
          <label className="control-label">Name</label>
          <input
            type="text"
            className="control-input"
            value={_form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="control-label">Phone Number</label>
          <input
            type="text"
            className="control-input"
            value={_form.number}
            onChange={(e) => handleChange("number", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="control-label">Description</label>
          <textarea
            type="textarea"
            className="control-input"
            value={_form.desc}
            onChange={(e) => handleChange("desc", e.target.value)}
          />
        </div>
        <div style={{ marginTop: 20 }} className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.goBack()}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-danger">
            {_isUpdate ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
