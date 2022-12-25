import { Col, Row, Form, Input, Checkbox, Button, Radio } from "antd";
import { useState } from "react";
import imgpic from "./m5.png";
import { message, Space } from 'antd';
import "./Homepage.css";

function Homepage() {
    const [users, Setuser] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [profile, setProfile] = useState("");



    function onSubmit() {

        if (name == "" && email == "" && phone == "") {
            console.log("Faild");

        }
        else {
            var newstudent = {
                name: name,
                email: email,
                phone: phone,
                profile: profile,
            }
            Setuser([...users, newstudent]);
            console.log("Student added");
            setName("");
            setEmail("");
            setPhone("");
            setProfile("");
        }
    }
    function onCancle() {
        setName("");
        setEmail("");
        setPhone("");
        setProfile("");
    }

    return (

        <Row className="mainBox">

            <Col className="leftBox">
                <Row justify={"center"} className="heading">Registration Form</Row>
                <Row justify={"center"} className="heading2">Register here for a Best offer</Row>

                <Col className="formField">
                    <input type="Text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type="Text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="Text" placeholder="Mobile Number" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                    <input type="Text" placeholder="Linkdin Profile" value={profile} onChange={(e) => { setProfile(e.target.value) }} />
                    <Row className="Buttons">
                        <button className="subBtn" onClick={onCancle}>Cancle</button>
                        <button className="Cbtn" onClick={onSubmit}>Submit</button></Row>
                </Col>


            </Col>
            <Col className="rightBox">
                <Row justify={"center"} className="heading">List of Users</Row>
                <Col className="userList">
                    {
                       users==""?<div className="userBox">
                        <p className="not">No users</p>
                       </div>: users.map((e) => {
                        return (
                            <Row className="mainuser">
                                <div>
                                    {e.profile == "" ? <img className="Avatar" src={imgpic} alt="profile" /> : <img className="Avatar" src={e.profile} alt="profile" />}


                                </div>
                                <Col>
                                    <div className="usertitle">{e.name}</div>
                                    <div className="userEmail">{e.email}</div>
                                    <div className="userPhone">{e.phone}</div>
                                </Col>
                            </Row>
                        )
                    })
                    }



                </Col>
            </Col>
                <div className="footerBox" >
                        Made with ❤️ Nitish Roy
                </div>
        </Row>
    )
}
export default Homepage;