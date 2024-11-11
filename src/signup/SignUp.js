import React, { useState } from "react";
import icon from "../assets/icon.png";
import camera from "../assets/camera.png"; // Path to your camera icon image
import share from "../assets/share.png"; // Path to your share icon image
import classes from "./signUp.module.css"; // Your CSS module for styling

const Signup = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gst, setGst] = useState("");
  const [pan, setPan] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [panImage, setPanImage] = useState(null);
  const [aadhaarImage, setAadhaarImage] = useState(null);

  // Function to handle image upload
  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2 MB. Please upload a smaller file.");
        return;
      }
      setImage(URL.createObjectURL(file)); // Create a URL for the uploaded image
    }
  };

  return (
    <>
      <div className={classes.header}>
        <h2>MobiGarage</h2>
        <img src={icon} alt="MobiGarage icon" />
        <p>India’s #1 Deals on Electronics</p>
      </div>

      <form className={classes.form}>
        {/* Profile and other input fields */}
        <h3>Upload Documents</h3>

        {/* PAN Image Upload Section */}
        <div className={classes.uploadBox}>
          <label>Upload PAN Image</label>
          <div className={classes.imageOptions}>
            <button
              type="button"
              className={classes.uploadButton}
              onClick={() => document.getElementById("panUpload").click()}
            >
              <img
                src={camera}
                alt="Take Photo"
                className={classes.cameraIcon}
              />
              Take a Photo or Upload
            </button>
            <input
              id="panUpload"
              type="file"
              accept="image/*"
              className={classes.uploadInput}
              onChange={(e) => handleImageUpload(e, setPanImage)}
              style={{ display: "none" }} // Hide input element
            />
          </div>
          {panImage && (
            <div className={classes.imagePreviewContainer}>
              <p>Chosen file:</p>
              <img src={panImage} alt="PAN" className={classes.imagePreview} />
            </div>
          )}
        </div>

        {/* Aadhaar Image Upload Section */}
        <div className={classes.uploadBox}>
          <label>Upload Aadhaar Image</label>
          <div className={classes.imageOptions}>
            <button
              type="button"
              className={classes.uploadButton}
              onClick={() => document.getElementById("aadhaarUpload").click()}
            >
              <img
                src={camera}
                alt="Take Photo"
                className={classes.cameraIcon}
              />
              Take a Photo or Upload
            </button>
            <input
              id="aadhaarUpload"
              type="file"
              accept="image/*"
              className={classes.uploadInput}
              onChange={(e) => handleImageUpload(e, setAadhaarImage)}
              style={{ display: "none" }} // Hide input element
            />
          </div>
          {aadhaarImage && (
            <div className={classes.imagePreviewContainer}>
              <p>Chosen file:</p>
              <img
                src={aadhaarImage}
                alt="Aadhaar"
                className={classes.imagePreview}
              />
            </div>
          )}
        </div>

        <button type="submit" className={classes.submitButton}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
