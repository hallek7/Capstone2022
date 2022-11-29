import React from 'react';
import "./profileset.css"
import Sidenav from "../../components/sidenav/Sidenav";

function ProfileSetting() {
return (
<div className="settings">
<div className="profileWrapper">
    <div className="profileTitle">
    <span className="prpfileTitleUpdate">Update Your Account</span>
    <span className="profileTitleDelete">Delete Account</span>
    </div>
    <form className="profileForm">
    <label>Profile Picture</label>
    <div className="settingsPP">
   
        <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        />
        <label htmlFor="fileInput">
        <i title="upload image" className="settingsPPIcon far fa-user-circle"></i>{" "}
        </label>
        <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        className="settingsPPInput"
        />
    </div>
    <label>Username</label>
    <input type="text" placeholder="your name" name="name" />
    <label>Email</label>
    <input type="email" placeholder="email@email.com" name="email" />
    <label>Password</label>
    <input type="password" placeholder="Password" name="password" />
    <button className="profileSubmitButton" type="submit">Update
    </button>
    </form>
</div>
<Sidenav/>
</div>
)
}

export default ProfileSetting;