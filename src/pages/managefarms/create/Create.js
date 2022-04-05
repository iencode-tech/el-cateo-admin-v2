import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Create.scss";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import axios from "axios";

function FarmCreate() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [location, setLocation] = useState("");
    const [locationError, setLocationError] = useState("");

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
        await axios.post("http://localhost:7000/farm/store", {
            "name": name,
            "location": location,
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

        if(!name) {
            setNameError("Required");
            error = true;
        } else {
            setNameError("");
        }

        if(!location) {
            setLocationError("Required");
            error = true;
        }else{
            setLocationError("");

        }

        if(!area) {
            setAreaError("Required");
            error = true;
        }else{
            setAreaError("");

        }

        if(error == false) {
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
                                                    <div className="form-floating">
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="Enter name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                        />
                                                        <label htmlFor="floatingInput">Name <span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{nameError}</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            name="location"
                                                            type="text"
                                                            className="form-control"
                                                            id="location"
                                                            placeholder="Enter location"
                                                            value={location}
                                                            onChange={(e) => setLocation(e.target.value)}
                                                        />
                                                        <label htmlFor="floatingInput">Location <span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{locationError}</p>
                                                </div>

                                                <div className="mb-3">
                                                    <br />
                                                    <div className="form-floating">
                                                        <input
                                                            name="area"
                                                            type="text"
                                                            className="form-control"
                                                            id="area"
                                                            placeholder="Enter area"
                                                            value={area}
                                                            onChange={(e) => setArea(e.target.value)}
                                                        />
                                                        <label htmlFor="floatingInput">Area<span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{areaError}</p>

                                                </div>



                                                <div className="col-md-6">
                                                    <label>Status<span className="text-danger">*</span></label>

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
                                                    {/* <p style={{ color: 'red' }}>{formError.status}</p> */}

                                                </div>

                                            </div>
                                        </div>

                                        <div className="card-footer clearfix">
                                            <button type="submit" className="btn btn-sm btn-app float-end">
                                                Save
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

export default FarmCreate;
