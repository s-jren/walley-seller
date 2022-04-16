import React, { useState, useRef, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormInput from "../../shared/components/Forms/FormInput";
import Form, { FormContext } from "../../shared/components/Forms/Form";
import { useHttpClient } from "../../shared/hooks/http-hook.js";
import { AuthContext } from "../../shared/context/auth-context";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import "./CreateListing.css";

const CreateListings = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [img, setImg] = useState(null);
  const filePickerRef = useRef();
  const { sendRequest } = useHttpClient();
  const auth = useContext(AuthContext);

  const convertToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  const onUploadHandler = async (e) => {
    const file = e.target.files[0];
    setImg(URL.createObjectURL(file));
    const convertedFile = await convertToBase64(file);

    // Request will be sent from here in the future
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/update-user-image/${auth.userId}`,
        "POST",
        JSON.stringify({
          image: convertedFile,
          imageName: file.name,
        }),
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        }
      );
    } catch (err) {
      console.log("error sending");
    }
    //this will cause image to disappear because rerender
    //window.location.reload();
  };

  return (
    <div className="CreateListingPage">
      <h1>Listing Event</h1>
      <Form
        submit={(form) => {
          alert(`List in as ${form.listTitle}!`);
        }}
        initialValues={{
          listTitle: "",
          description: "",
          listingPrice: "",
          numberReleased: "",
        }}
        buttonText="List now"
        buttonType="listNow"
      >
        <FormContext.Consumer>
          {({ form, handleFormChange }) => (
            <div class="row">
              <div class="col1">
                <div>
                  <div>
                    <img
                      className="photo"
                      src={img}
                      alt=""
                      width="605px"
                      height="362px"
                    ></img>
                  </div>
                  <div>
                    <label for="files" class="btn" className="selectImgButton">
                      Select photo
                    </label>
                    <input
                      id="files"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={onUploadHandler}
                      ref={filePickerRef}
                    />
                  </div>
                </div>
              </div>
              <div class="col2">
                <FormInput
                  className="listingTitle"
                  name="listTitle"
                  placeholder="Listing Title"
                />
                <FormInput
                  className="description"
                  name="description"
                  placeholder="Description"
                />
                <FormInput
                  className="listingPrice"
                  name="listingPrice"
                  placeholder="$ Listing Price"
                />
                <FormInput
                  className="numberReleased"
                  name="numberReleased"
                  placeholder="Number Released"
                />
                <div>
                  <div class="datecol">
                    <DatePicker
                      className="dateSelected"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      showYearDropdown
                      scrollableMonthYearDropdown
                      placeholderText="Event Date"
                    ></DatePicker>
                  </div>
                  <div class="timecol">
                    <DatePicker
                      className="timeSelected"
                      selected={selectedTime}
                      onChange={(time) => setSelectedTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      placeholderText="Time"
                    ></DatePicker>
                  </div>
                </div>
              </div>
            </div>
          )}
        </FormContext.Consumer>
      </Form>
    </div>
  );
};

export default CreateListings;
