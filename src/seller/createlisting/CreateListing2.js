import React, { useState, useRef, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";
import { useHttpClient } from "../../shared/hooks/http-hook.js";
import { AuthContext } from "../../shared/context/auth-context";

const CreateListing = () => {
  //   For image upload
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
    <Container className="mt-5">
      <div class="row">
        <div class="col-sm-4">
          <div>
            <img
              className="photo"
              src={img}
              alt=""
              width="300px"
              height="300px"
              border="hidden"
            ></img>
          </div>

          <InputGroup size="sm" className="mb-3">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept="image/*"
                onChange={onUploadHandler}
                ref={filePickerRef}
              />
            </Form.Group>
          </InputGroup>
        </div>

        <div class="col-sm-8">
          <InputGroup size="sm" className="mb-3">
            <FormControl
              placeholder="Listing Title"
              aria-label="Listing Title"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <FormControl
              placeholder="Description"
              aria-label="Description"
              aria-describedby="basic-addon2"
              as="textarea"
              rows={5}
            />
          </InputGroup>

          <div class="row">
            <div class="col-sm-6">
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl
                  placeholder="Listing Price"
                  aria-label="Listing Price"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </div>

            <div class="col-sm-6">
              <InputGroup size="sm" className="mb-3">
                <FormControl
                  placeholder="Number Released"
                  aria-label="Number Released"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <InputGroup size="sm" className="mb-3">
                <FormControl
                  type="date"
                  placeholder="Event Date"
                  aria-label="Event Date"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </div>

            <div class="col-sm-6">
              <InputGroup size="sm" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Time"
                  aria-label="Time"
                  disabled
                  readOnly
                />
                <TimePicker start="00:00" end="23:59" step={30} />
              </InputGroup>
            </div>
          </div>

          <Button variant="outline-dark" style={{ float: "right" }}>
            List Now
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CreateListing;
