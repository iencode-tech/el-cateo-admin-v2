import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash, faRedo} from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { utcToLocalTime } from "../../../utils/timeHelper";

//import table
import Table from "../../../components/common/table/Table";
//import statuses
import { statuses } from "../../../utils/appConstants";
//import axios
import axios from "axios";


function ZoneList() {
    var [zonas, setInfo] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const pageName = "Zonas";
    const breadCrumbs = [
        {
            name: "Dashboard",
            link: "/dashboard",
        },
        {
            name: "Zonas",
            link: "",
        },
    ];

    const tableHeads = [
        "Zone Name",
        "Latitude",
        "Longitude",
        "Added Date",
        "Status",
        "",
    ];

    let getZonas = async (searchKey) => {
        await axios.get(`http://localhost:7000/zones?keyword=${searchKey}`,
            { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } }).then((response) => {
                const zonaData = response.data.data.dbData;
                setInfo(zonaData);
            }).catch(error => {
                console.log(error.response)
            });
    };

    const removeById = async (e, id) => {
        e.preventDefault();
        await axios.delete(`http://localhost:7000/zone/${id}/delete`,
            { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } })
            .then(res => {
                getZonas();
            })
            .catch(error => {
                console.log(error.response)
            });

    }

    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME}`;
        getZonas(searchKey);
    }, [searchKey]);

    return (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div className="col-12 p-0 content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">
                                    {pageName}&nbsp;
                                    <Link
                                        type="button"
                                        className="btn btn-sm btn-app ms-3"
                                    >
                                        Add New
                                    </Link>
                                </h1>
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
                                        <div className={"row"}>
                                            <form
                                                name={`${pageName}ListFilter`}>

                                                <div className="input-group mt-3 mb-3">
                                                    <input
                                                        name="keyword"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search Person"
                                                        value={searchKey}
                                                        onChange={(e) => setSearchKey(e.target.value)}

                                                    />
                                                    <button
                                                        className="btn btn-outline-app"
                                                        type="reset"
                                                    >
                                                        <FontAwesomeIcon icon={faRedo} />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="card-body p-0">
                                        <Table
                                            data={zonas.map((listData, index) => ({
                                                zone: listData.name,
                                                latitude: listData.latitude,
                                                longitude: listData.longitude,
                                                createdAt: utcToLocalTime(listData.createdAt),
                                                status: statuses[listData.status],
                                                actions: (
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-outline-app dropdown-toggle"
                                                            type="button"
                                                            id={`action-drop-${index}`}
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            Actions
                                                        </button>
                                                        <ul
                                                            className="dropdown-menu"
                                                            aria-labelledby={`action-drop-${index}`}
                                                        >
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to={`/zonas/${listData.id}/view`}

                                                                >
                                                                    <FontAwesomeIcon icon={faEye} /> View
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item"
                                                                >
                                                                    <FontAwesomeIcon icon={faEdit} /> Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                    onClick={(e) => removeById(e, listData.id)}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                ),
                                            }))}
                                            header={tableHeads}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );







}

export default ZoneList;