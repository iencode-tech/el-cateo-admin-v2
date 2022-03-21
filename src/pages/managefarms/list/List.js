import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faUsers, faFileAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

function Dashboard() {

    const breadCrumbs = [
        {
            name: "Dashboard",
            link: "/dashboard",
        },
        {
            name: "Farms",
            link: "",
        },
    ];
    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME}`;

    }, []);
    return (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div className="col-12 p-0 content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Farms
                                    <Link
                                        type="button"
                                        className="btn btn-sm btn-app ms-3"
                                        to={`farms/create`}>
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
                                                        <th>Location</th>
                                                        <th>Area</th>
                                                        <th>Status</th>
                                                        <th></th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            1
                                                        </td>
                                                        <td>Location1</td>
                                                        <td>
                                                            Area 1
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
                                                            <div className="dropdown">
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
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            2
                                                        </td>
                                                        <td>Location1</td>
                                                        <td>
                                                            Area 1
                                                        </td>
                                                        <td>
                                                            <div
                                                                className="sparkbar"
                                                                data-color="#00a65a"
                                                                data-height="20">
                                                                Active
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="dropdown">
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
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            3
                                                        </td>
                                                        <td>Location1</td>
                                                        <td>
                                                            Area 1
                                                        </td>
                                                        <td>
                                                            <div
                                                                className="sparkbar"
                                                                data-color="#00a65a"
                                                                data-height="20">
                                                                Active
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="dropdown">
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
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            4
                                                        </td>
                                                        <td>Location1</td>
                                                        <td>
                                                            Area 1
                                                        </td>
                                                        <td>
                                                            <div
                                                                className="sparkbar"
                                                                data-color="#00a65a"
                                                                data-height="20">
                                                                Active
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="dropdown">
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
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            5
                                                        </td>
                                                        <td>Location1</td>
                                                        <td>
                                                            Area 1
                                                        </td>
                                                        <td>
                                                            <div
                                                                className="sparkbar"
                                                                data-color="#00a65a"
                                                                data-height="20">
                                                                ctive
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="dropdown">
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
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            6
                                                        </td>
                                                        <td>Location1</td>
                                                        <td>
                                                            Area 1
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
                                                            <div className="dropdown">
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
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            7
                                                        </td>
                                                        <td>Location1</td>
                                                        <td>
                                                            Area 1
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
                                                            <div className="dropdown">
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
                                                            </div>
                                                        </td>
                                                    </tr>
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

export default Dashboard;
