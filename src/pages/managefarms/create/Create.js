import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./Create.scss";
import { statuses, subscription } from "../../../utils/appConstants";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import {
    addNewRawMaterial,
    fetchAllRawMaterials,
    handleFormDataChange,
    handleFormValidation,
    initFormData,
    removeRawMaterial,
    selectAgriculturalPractice,
    storeData,
} from "../../../store/redux/Page/AgriculturalPractice";

import { defaultFolialDrencheId } from "../../../utils/appConstants";
import axios from "axios";

function FarmCreate() {
    const initialValues = {
        name: "",
        location: "",
        area: "",
        status: "",

    };

    const store = useSelector(selectAgriculturalPractice);
    const dispatch = useDispatch();
    const [formValue, setformValues] = useState(initialValues);
    const [formError, setformError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValue, [name]: value })
    };
    let getUsers = async () => {
        const headers = {
            'authorization': localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME)
          }
          
        await  axios.post("http://localhost:7000/farm/store", {
              headers: headers,
             
            })
            .then((response) => {
                console.log(",,,,",response.data)        
                    })
            .catch((error) => {
              console.log(",,,,,,,,,,")
            })
    


    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setformError(validate(formValue));
        setIsSubmit(true);
        const { name, location, area, status } = formValue;
        getUsers();
        // const headers = {
        //         'Content-Type': 'application/json',
        //         'Authorization': localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME)
        //       }
        //  await axios.post("http://localhost:7000/farm/store", {
        //     headers: headers,
           
        // }).then((response) => {
            
        // }).catch(error => {
        //     console.log(error.response)
        // });


        

        


    }

    const validate = (values) => {
        const error = {};
        // const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"

        if (!values.name) {
            error.name = "Name is required!"
        }


        if (!values.location) {
            error.location = "Location is required!"
        }

        if (!values.area) {
            error.area = "Area is required!"
        }

        if (!values.status) {
            error.status = "Status is required!"
        }

        return error;
    }

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            // handleSubmit();
        }
    }, [formError])

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

                                    <form onClick={handleSubmit}
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
                                                            id="floatingInput"
                                                            placeholder="name@example.com"
                                                            value={formValue.name}
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="floatingInput">Name <span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{formError.name}</p>

                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            name="location"
                                                            type="text"
                                                            className="form-control"
                                                            id="floatingInput"
                                                            placeholder="name@example.com"
                                                            value={formValue.location}
                                                            onChange={handleChange}

                                                        />
                                                        <label htmlFor="floatingInput">Location <span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{formError.location}</p>
                                                </div>

                                                <div className="mb-3">
                                                    <br />
                                                    <div className="form-floating">
                                                        <input
                                                            name="area"
                                                            type="text"
                                                            className="form-control"
                                                            id="floatingInput"
                                                            placeholder="name@example.com"
                                                            value={formValue.area}
                                                            onChange={handleChange}

                                                        />
                                                        <label htmlFor="floatingInput">Area<span className="text-danger">*</span></label>
                                                    </div>
                                                    <p style={{ color: 'red' }}>{formError.area}</p>

                                                </div>



                                                <div className="col-md-6">
                                                    <label>Status<span className="text-danger">*</span></label>

                                                    <select
                                                        id="input4"
                                                        className="form-select"
                                                        name="status"
                                                        value={formValue.status}
                                                        onChange={handleChange}

                                                    >
                                                        <option value={1}>Active</option>
                                                        <option value={2}>Inactive</option>
                                                    </select>
                                                    <p style={{ color: 'red' }}>{formError.status}</p>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="card-footer clearfix">
                                            <button className="btn btn-sm btn-app float-end">
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
