import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Create.scss";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import axios from "axios";

//material-ui import
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

function FarmCreate() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [address, setAddress] = useState("");
    const [addressError, setaddressError] = useState("");

    const [area, setArea] = useState("");
    const [areaError, setAreaError] = useState("");

    const [status, setStatus] = useState(1);
    const history = useHistory();

    const pageName = "Add Farm";
    const breadCrumbs = [
        {
            name: "Dashboard",
            link: "/dashboard",
        },
        {
            name: "Farms",
            link: "/farms",
        },
        {
            name: "Add",
            link: "",
        },
    ];

    // api calling for create user
    const createUser = async () => {
        await axios.post(`${process.env.REACT_APP_API_URL}/farm/store`, {
            "name": name,
            "location": address,
            "area": area,
            "status": status
        },
            {
                headers: {
                    'authorization': localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME),
                }
            }).then((response) => {
                alert(response.data.message)
                history.push("/farms")

            }).catch((error) => {
                alert(error.message)
            })
    };

    // for submit
    const handleSubmit = (e) => {
        e.preventDefault();
        let error = false;

        if (!name) {
            setNameError("Name is Required");
            error = true;
        } else {
            setNameError("");
        }

        if (!address) {
            setaddressError(" Address is Required");
            error = true;
        } else {
            setaddressError("");

        }

        if (!area) {
            setAreaError("Area is Required");
            error = true;
        } else {
            setAreaError("");

        }

        if (error == false) {
            createUser();
        }
    }

    useEffect(() => {
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

                                    <form onSubmit={handleSubmit}
                                        method="POST"
                                        encType={`multipart/form-data`}>
                                        <div className="card-body">
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="floatingInput">Name <span className="text-danger">*</span></label>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Enter name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                    <p style={{ color: 'red' }}>{nameError}</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="floatingInput">Area <span className="text-danger">*</span></label>
                                                    <br />
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Enter area"
                                                        value={area}
                                                        onChange={(e) => setArea(e.target.value)}
                                                    />
                                                    <p style={{ color: 'red' }}>{areaError}</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="floatingInput">Address <span className="text-danger">*</span></label>
                                                    <textarea
                                                        name="location"
                                                        rows={5}
                                                        type="text"
                                                        className="form-control"
                                                        id="location"
                                                        placeholder="Enter address"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                    />
                                                    <p style={{ color: 'red' }}>{addressError}</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <label>Status <span className="text-danger">*</span></label>
                                                    <br />
                                                    <select
                                                        id="input4"
                                                        className="form-select"
                                                        name="status"
                                                        value={status}
                                                        onChange={(e) => setStatus(e.target.value)}
                                                    >
                                                        <option value={1}>Active</option>
                                                        <option value={0}>Inactive</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <div style={{
                                                        display: 'flex',
                                                        margin: 10,
                                                        width: 400,
                                                        flexWrap: 'wrap',
                                                    }}>
                                                        {/* <div style={{ width: '100%', float: 'left' }}>
                                                        <h3>How to use create button to choose file in ReactJS?</h3> <br />
                                                    </div> */}
                                                        {/* <input
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: 'none' }}
                                                            id="contained-button-file"
                                                        /> */}
                                                        {/* <label htmlFor="contained-button-file">
                                                            <Button variant="contained" color="primary" component="span">
                                                                Upload
                                                            </Button>
                                                        </label>
                                                        <h3>  OR  </h3> */}
                                                        <label htmlFor="floatingInput">Photo Upload </label>

                                                        <label htmlFor="icon-button-file">
                                                            <IconButton color="primary" aria-label="upload picture"
                                                                component="span">
                                                                <PhotoCamera />
                                                            </IconButton>
                                                        </label>
                                                        <input accept="image/*" id="icon-button-file"
                                                            type="file" style={{ display: 'none' }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <img src="images/ricefarm.jpg" style={{
                                                        width:500,
                                                        height:200
                                                    }}/>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer clearfix">
                                            <button type="submit" className="btn btn-sm btn-app float-end">
                                                Save
                                            </button>
                                        </div>
                                        {/* </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </div >
    );
}

export default FarmCreate;
