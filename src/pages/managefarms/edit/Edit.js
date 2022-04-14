import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import axios from "axios";
import { useParams } from "react-router";
import { statuses } from "../../../utils/appConstants";


function FarmEdit() {

    const initialValues = {
        name: "",
        assignedOwner: "",
        address: "",
        area: "",
        status: "",
        files: ""
    };

    const history = useHistory();
    const params = useParams();
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [image, setImage] = useState(null);
    const [imageData, setImageData] = useState(null);

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
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setImageData(event.target.files[0]);
        }
    };

    const _handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //api calling for get farm by id
    let getFarmData = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/farm/${params.id}/read`,
            {
                headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) }
            }).then((response) => {
                setImage(response.data.data.files[0])
                setFormValues(response.data.data);

            }).catch(error => {
                console.log(error.response)
            });

    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);

    // api calling for update user
    const _handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        let formData = new FormData();
        formData.append("name", formValues.name);
        formData.append("assignedOwner", formValues.assignedOwner);
        formData.append("address", formValues.address);
        formData.append("area", formValues.area);
        formData.append("status", formValues.status);
        formData.append("files", imageData);
        setIsSubmit(true);
        await axios.put(`${process.env.REACT_APP_API_URL}/farm/${params.id}/update`, formData,
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
    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z]{3,}$/i;
        const renum = /^[0-9\b]+$/i;
        if (!values.name) {
            errors.name = "Name is required!";
        } else if (!regex.test(values.name)) {
            errors.name = "This is not a valid name!";
        }
        if (!values.address) {
            errors.address = "Address is required!";
        }
        if (!values.area) {
            errors.area = "Area is required!";
        } else if (!renum.test(values.area)) {
            errors.area = "This is not a valid area format!";
        }
        return errors;
    };

    useEffect(() => {
        getFarmData();
    }, [])
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);

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

                                    <form onSubmit={_handleFormSubmit}
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
                                                        value={formValues.name}
                                                        onChange={_handleOnChange}
                                                    />
                                                    <p style={{ color: 'red' }}>{formErrors.name}</p>
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
                                                        value={formValues.area}
                                                        onChange={_handleOnChange}
                                                    />
                                                    <p style={{ color: 'red' }}>{formErrors.area}</p>
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
                                                        value={formValues.address}
                                                        onChange={_handleOnChange}
                                                    />
                                                    <p style={{ color: 'red' }}>{formErrors.address}</p>
                                                </div>

                                                <div className="col-md-6">
                                                    <label>Status <span className="text-danger">*</span></label>
                                                    <br />
                                                    <select
                                                        id="input4"
                                                        className="form-select"
                                                        name="status"
                                                        value={formValues.status}
                                                        onChange={_handleOnChange}
                                                    >
                                                        {Object.keys(statuses).map((status, index) => (
                                                            <option key={index} value={status}>
                                                                {statuses[status]}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-md-6">
                                                    <div style={{
                                                        display: 'flex',
                                                        margin: 10,
                                                        width: 400,
                                                        flexWrap: 'wrap',
                                                    }}>
                                                        <input accept="image/*" id="icon-button-file"
                                                            type="file" onChange={onImageChange}
                                                            value={formValues.files}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <img src={image} width={300}
                                                        height={150} />

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
