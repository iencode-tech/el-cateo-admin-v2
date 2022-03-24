import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faUsers, faFileAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { utcToLocalTime } from "../../../utils/timeHelper";



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

    let getSectors = async () => {
        await axios.get("http://localhost:7000/sectors",
            { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } }).then((response) => {
                console.log(response.data)
                const sectorData = response.data.data.dbData;
                setInfo(sectorData);
                // if (response.data.data.data.length === 0) {

                //     getUsers();
                //     alert('No data found.');
                // }
            }).catch(error => {
                console.log(error.response)
            });


    };
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
                                        className="btn btn-sm btn-app ms-3">
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
                                        <div className="table-responsive">
                                            <table className="table m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Sl.no.</th>
                                                        <th>Sector Name</th>
                                                        <th>Added Date</th>
                                                        <th>Status</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                {sector.map((sectors, index) => (
                                                        <tr key={index}>
                                                            <td >{index + 1}</td>
                                                            <td >{sectors.name}</td>
                                                            <td >{utcToLocalTime(sectors.createdAt)}</td>
                                                            {sectors.status === 1 &&
                                                                <td>
                                                                    Active
                                                                </td>
                                                            }
                                                            {sectors.status === 0 &&
                                                                <td>
                                                                    Inactive
                                                                </td>
                                                            }
                                                            <td>
                                                                <button
                                                                    className="btn btn-outline-app dropdown-toggle"
                                                                    type="button"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-expanded="false" >
                                                                    Action
                                                                </button>
                                                                <ul
                                                                    className="dropdown-menu">
                                                                    <li>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                        >
                                                                            View
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            className="dropdown-item" >
                                                                            Edit
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            >
                                                                            Delete
                                                                        </Link>
                                                                    </li>
                                                                </ul>

                                                            </td>

                                                        </tr>

                                                    ))

                                                    }
                                                    {/* <tr>
                                                        <td>
                                                            1
                                                        </td>
                                                        <td>Sector1</td>
                                                        <td>
                                                            22/01/2022
                                                        </td>
                                                        <td>
                                                            <div
                                                                className="sparkbar"
                                                                data-color="#00a65a"
                                                                data-height="20">
                                                                Inactive
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-outline-app dropdown-toggle"
                                                                type="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                Action
                                                            </button>
                                                            <ul
                                                                className="dropdown-menu"

                                                            >
                                                                <li>
                                                                    <Link
                                                                        className="dropdown-item"

                                                                    >
                                                                        View
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        className="dropdown-item"

                                                                    >
                                                                        Edit
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"

                                                                    >
                                                                        Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr> */}

                                                </tbody>
                                            </table>
                                        </div>
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
