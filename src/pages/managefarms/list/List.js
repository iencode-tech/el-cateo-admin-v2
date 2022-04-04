import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faEye,
    faRedo,
    faSearch,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";

function ManageFarm() {
    const pageName = "Farms";

    var [user, setInfo] = useState([]);
    var [page, setPage] = useState(0);
    var [search, setSearch] = useState("");
    let getUsers = async (search) => {
        await axios.get(`http://localhost:7000/farms?keyword=${search}`,
            { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } }).then((response) => {
                const userData = response.data.data.dbData;
                setInfo(userData);
                if (response.data.data.data.length === 0) {
                    getUsers();
                    alert('No data found.');
                }
            }).catch(error => {
                console.log(error.response)
            });
    };

    const removeById = async (e, id) => {
        e.preventDefault();
        await axios.delete(`http://localhost:7000/farm/${id}/delete`, { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } })
            .then(res => {
                getUsers();
            })
            .catch(error => {
                console.log(error.response)
            });

    }
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
        getUsers(search);
    }, [search]);
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

                                        <form
                                            name={`${pageName}ListFilter`}>

                                            <div className="input-group mt-3 mb-3">
                                                <input
                                                    name="keyword"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search Farms"
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}

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

                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Sl.no.</th>
                                                        <th>Location</th>
                                                        <th>Name</th>
                                                        <th>Area</th>
                                                        <th>Status</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {user.map((users, index) => (
                                                        <tr key={index}>
                                                            <td >{index + 1}</td>
                                                            <td >{users.location}</td>
                                                            <td >{users.name}</td>
                                                            <td >{users.area}</td>
                                                            {users.status === 1 &&
                                                                <td>
                                                                    Active
                                                                </td>
                                                            }
                                                            {users.status === 0 &&
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
                                                                            to={`farms/${users.id}/view`}
                                                                        >
                                                                            View
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to={`farms/${users.id}/edit`}
                                                                        >
                                                                            Edit
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to={'farms/manage'}>
                                                                            Manage
                                                                        </Link>
                                                                    </li>
                                                                </ul>

                                                            </td>

                                                        </tr>

                                                    ))

                                                    }


                                                    
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

export default ManageFarm;
