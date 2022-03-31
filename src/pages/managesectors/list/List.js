import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faUsers, faFileAlt, faHome, faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { utcToLocalTime } from "../../../utils/timeHelper";

//import table
import Table from "../../../components/common/table/Table";
//import statuses
import { statuses } from "../../../utils/appConstants";


import axios from "axios";

function ManageSectors() {
    var [sector, setInfo] = useState([]);
    var [page, setPage] = useState(0);
    var [Udata, setUdata] = useState([]);

    const breadCrumbs = [
        {
            name: "Dashboard",
            link: "/dashboard",
        },
        {
            name: "Sectors",
            link: "",
        },
    ];

    const tableHeads = ["Sector Name", "Added Date", "Status", ""];


    let getSectors = async () => {
        await axios.get("http://localhost:7000/sectors",
            { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } }).then((response) => {
                const sectorData = response.data.data.dbData;
                setInfo(sectorData);
            }).catch(error => {
                console.log(error.response)
            });


    };

    const removeById = async (e, id) => {
        e.preventDefault();
        await axios.delete(`http://localhost:7000/sector/${id}/delete`,
            { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } })
            .then(res => {
                getSectors();
            })
            .catch(error => {
                console.log(error.response)
            });

    }
    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME}`;
        getSectors();
    }, []);
    return (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div className="col-12 p-0 content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Sectors
                                    <Link
                                        type="button"
                                        className="btn btn-sm btn-app ms-3"
                                        to={`sectors/create`}>
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

                                        <div className="card-tools">
                                            <button
                                                type="button"
                                                className="btn btn-tool"
                                                data-card-widget="collapse"
                                            >
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-tool"
                                                data-card-widget="remove"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="card-body p-0">
                                        <Table
                                            data={sector.map((listData, index) => ({
                                                sector: listData.name,
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
                                                                    to={`/sectors/${listData.id}/view`}
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

export default ManageSectors;