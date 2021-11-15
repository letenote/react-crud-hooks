import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  addContact,
  updateContact,
} from "../store/redux/contact/contact.action";

const Create = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const {
    contact: { data },
  } = useSelector((state) => state);
  const [_isUpdate, _setIsUpdate] = useState(false);
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
        let getContact = data.filter((item) => item.id === id);
        _setForm({
          id: getContact[0].id,
          name: getContact[0].name,
          number: getContact[0].number,
          desc: getContact[0].desc,
        });
        _setIsUpdate(true);
      }
    } catch (error) {
      console.error({ error, message: "data id not match" });
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
    let getForm = _form;
    getForm.id = `${data.length + 1}`;

    await addContact(getForm, dispatch).then(() => history.goBack());
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateContact(_form, dispatch).then(() => history.goBack());
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
