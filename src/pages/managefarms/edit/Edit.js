import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import axios from "axios";
import { useParams } from "react-router";


function FarmEdit() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const [address, setAddress] = useState("");
    const [addressError, setaddressError] = useState("");

    const [area, setArea] = useState("");
    const [areaError, setAreaError] = useState("");

    const [status, setStatus] = useState(1);

    const pageName = "Edit Farm Data";
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
            name: "Edit",
            link: "",
        },
    ];
    const history = useHistory();

    const params = useParams();

    //api calling for get farm by id
    let getFarmData = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/farm/${params.id}/read`, { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } }).then((response) => {
            const userData = response.data.data;
            setArea(userData.area);
            setAddress(userData.address);
            setStatus(userData.status);
            setName(userData.name)

        }).catch(error => {
            console.log(error.response)
        });

    };

    // api calling for update user
    const createFarm = async () => {
        await axios.put(`${process.env.REACT_APP_API_URL}/farm/${params.id}/update`, {
            "name": name,
            "address": address,
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
            setNameError("Required");
            error = true;
        } else {
            setNameError("");
        }

        if (!address) {
            setaddressError("Required");
            error = true;
        } else {
            setaddressError("");

        }

        if (!area) {
            setAreaError("Required");
            error = true;
        } else {
            setAreaError("");

        }

        if (error == false) {
            createFarm();
        }
    }

    useEffect(() => {
        getFarmData();
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

export default FarmEdit;
