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


function FarmCreate() {
    const store = useSelector(selectAgriculturalPractice);
    const dispatch = useDispatch();
    const [firstLoad, setFirstLoad] = useState(true);
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
                                        name={`${pageName}Create`}
                                        encType={`multipart/form-data`}>
                                        <div className="card-body">
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            name="firstname"
                                                            type="text"
                                                            className="form-control"
                                                            id="floatingInput"
                                                            placeholder="name@example.com"

                                                        />
                                                        <label htmlFor="floatingInput">Name <span className="text-danger">*</span></label>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            name="lastname"
                                                            type="text"
                                                            className="form-control"
                                                            id="floatingInput"
                                                            placeholder="name@example.com"

                                                        />
                                                        <label htmlFor="floatingInput">Location <span className="text-danger">*</span></label>
                                                    </div>
                                                    {/* <p style={{color: 'red'}}>{formErrors.lastname}</p> */}
                                                </div>

                                                <div className="mb-3">
                                                    <br />
                                                    <div className="form-floating">
                                                        <textarea
                                                            name="address"
                                                            type="text"
                                                            className="form-control"
                                                            id="floatingInput"
                                                            placeholder="name@example.com"

                                                        />
                                                        <label htmlFor="floatingInput">Area<span className="text-danger">*</span></label>
                                                    </div>
                                                </div>



                                                <div className="col-md-6">
                                                <label>Status<span className="text-danger">*</span></label>

                                                    <select
                                                        id="input4"
                                                        className="form-select"
                                                        name="status"

                                                    >
                                                        <option>Active</option>
                                                        <option>Inactive</option>
                                                    </select>
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
