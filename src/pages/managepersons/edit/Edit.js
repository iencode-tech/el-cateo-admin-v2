import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import axios from "axios";
import { useParams } from "react-router";

function PersonEdit() {
    const history = useHistory();
    const pageName = "Edit Person";

    const params = useParams();

    const breadCrumbs = [
        {
            name: "Dashboard",
            link: "/dashboard",
        },
        {
            name: "Person",
            link: "/persons",
        },
        {
            name: "Edit",
            link: "",
        },
    ];

    const [fname, setFName] = useState("");
    const [fnameError, setFNameError] = useState("");

    const [lname, setLName] = useState("");
    const [lnameError, setLNameError] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmilError] = useState("");

    const [address, setAddress] = useState("");
    const [adressError, setAddressError] = useState("");

    const [role, setRole] = useState("");
    const [roleError, setRoleError] = useState("");

    const [status, setStatus] = useState(1);

    let getUserData = async () => {
        await axios.get(`http://localhost:7000/person/${params.id}/read`,
            {
                headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) }
            }).then((response) => {
                const userData = response.data.data;
                setFName(userData.firstName);
                setLName(userData.lastName);
                setEmail(userData.email);
                setPhone(userData.phone);
                setAddress(userData.address);
                setRole(userData.role);
                setStatus(userData.status);

            }).catch(error => {
                console.log(error.response)
            });

    };

    const updateUser = async () => {
        await axios.put(`http://localhost:7000/person/${params.id}/update`, {
            "firstName": fname,
            "lastName": lname,
            "email": email,
            "phone": phone,
            "address": address,
            "role": role,
            "status": status
        },
            {
                headers: {
                    'authorization': localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME),
                }
            }).then((response) => {
                alert(response.data.status)
                history.push("/persons")

            }).catch((error) => {
                console.log(",,,,,,,,,,")
            })
    };


    // for submit
    const handleSubmit = (e) => {
        e.preventDefault();
        let error = false;

        if (!fname) {
            setFNameError(" First Name Required");
            error = true;
        } else {
            setFNameError("");
        }
        if (!lname) {
            setLNameError(" Last Name Required");
            error = true;
        } else {
            setLNameError("");
        }
        if (!phone) {
            setPhoneError("Phone number Required");
            error = true;
        } else {
            setPhoneError("");
        }
        if (!email) {
            setEmilError(" Email Required");
            error = true;
        } else {
            setEmilError("");
        }
        if (!address) {
            setAddressError(" Address Required");
            error = true;
        } else {
            setAddressError("");
        }

        if (!role) {
            setRoleError("Role Required");
            error = true;
        } else {
            setRoleError("");
        }

        if (error == false) {
            updateUser();        }
    }

    useEffect(() => {
        getUserData();
    }, [])


    return (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div className="col-12 p-0 content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">{pageName}</h1>
                            </div>
                            <div className="col-sm-6">
                                <Breadcrumb breadCrumbs={breadCrumbs} />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header border-transparent">
                                        <div className={"row"}>&nbsp;</div>
                                    </div>

                                    <form
                                        method="POST" onSubmit={handleSubmit}
                                        encType={`multipart/form-data`}>
                                        <div className="card-body">
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            name="firstname"
                                                            type="text"
                                                            className="form-control"
                                                            id="firstname"
                                                            placeholder="Enter first name"
                                                            value={fname}
                                                            onChange={(e) => setFName(e.target.value)}
                                                        />
                                                        <label htmlFor="floatingInput">First Name <span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{fnameError}</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            name="lastname"
                                                            type="text"
                                                            className="form-control"
                                                            id="lastname"
                                                            placeholder="Enter last name"
                                                            value={lname}
                                                            onChange={(e) => setLName(e.target.value)}
                                                        />
                                                        <label htmlFor="floatingInput">Last Name <span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{lnameError}</p>
                                                </div>
                                                <div className="col-md-6">
                                                    <br />
                                                    <div className="form-floating">
                                                        <input
                                                            name="phone"
                                                            type="number"
                                                            className="form-control"
                                                            id="phone"
                                                            placeholder="Enter phone number"
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                        />
                                                        <label htmlFor="floatingInput">Phone Number <span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{phoneError}</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <br />
                                                    <div className="form-floating">
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            placeholder="Enter email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <label htmlFor="floatingInput">Email <span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{emailError}</p>
                                                </div>
                                                <div className="mb-3">
                                                    <br />
                                                    <div className="form-floating">
                                                        <textarea
                                                            name="address"
                                                            type="text"
                                                            className="form-control"
                                                            id="address"
                                                            placeholder="Enter address"
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                        />
                                                        <label htmlFor="floatingInput">Address<span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{adressError}</p>

                                                </div>

                                                <div className="col-md-6">
                                                    <br />
                                                        <label>Role<span className="text-danger">*</span></label>

                                                        <select
                                                            id="role"
                                                            className="form-select"
                                                            name="role"
                                                            value={role}
                                                            onChange={(e) => setRole(e.target.value)}>
                                                            <option value={"H"}>Head of Planning</option>
                                                            <option value={"C"}>collaborator</option>
                                                        </select>
                                                    <p style={{ color: 'red' }}>{roleError}</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <br />
                                                        <label>Status<span className="text-danger">*</span></label>

                                                        <select
                                                            id="status"
                                                            className="form-select"
                                                            name="status"
                                                            value={status}
                                                            onChange={(e) => setStatus(e.target.value)}>
                                                            <option value={1}>Active</option>
                                                            <option value={0}>Inactive</option>

                                                        </select>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="card-footer clearfix">
                                            <button type="submit" className="btn btn-sm btn-app float-end">
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default PersonEdit;