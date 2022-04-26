import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import "./List.scss";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { statuses, filePathUrl } from "../../../utils/appConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faLock,
    faTasks
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from 'react-paginate';
import { TextareaAutosize } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";



function ManageFarm() {
    const pageName = "Farms";

    var [user, setInfo] = useState([]);
    var [fileUrl, setFileUrl] = useState([]);

    const [page, setPage] = useState(1);
    const [tCount, setTCount] = useState(0);

    var [search, setSearch] = useState("");
    const params = useParams();
    const history = useHistory();
    // let navigate = useNavigate(); 


    let manageFarm = (farmId) => {
        let userId = JSON.parse(localStorage.getItem(process.env.REACT_USER_DATA));
        window.open("http://localhost:3000/login-by-owner/" + userId.id + "/" + farmId); 
    };

    let getUsers = async (search, page) => {
        await axios.get(`${process.env.REACT_APP_API_URL}/farms?keyword=${search}&page=${page}`,
            { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } }).then((response) => {
                const userData = response.data.data.dbData;
                setInfo(userData);
                setFileUrl(userData.files)
                setTCount(response.data.data.dbCount)
                if (response.data.data.dbData === 0) {
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
    const resetList = async (e) => {
        search = "";
        setSearch(search)
        getUsers(search, page)
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

    const handlePageClick = (e) => {
        // e.preventDefault();
        setPage(e.selected + 1);
    }
    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME}`;
        getUsers(search, page);
    }, [search, page]);
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
                        <br />
                        <div className="row" >
                            {user.map(users => (
                                <div key={users.id} className="col-md-6">
                                    {/* new card */}
                                    <div className="card" >

                                        {(() => {
                                            if (users?.files?.length > 0) {
                                                return (
                                                    <div style={{ width: '25%' }}>
                                                        {
                                                            users.files.map((images, index) => (
                                                                <img
                                                                    key={index} src={filePathUrl.farms + "/" + images} className="card-img-top" />
                                                            ))
                                                        }
                                                    </div>

                                                )
                                            } else {
                                                return (
                                                    // <img src="images/402-bg.jpg" className="card-img-top" />
                                                    <p>Image not Available</p>
                                                )
                                            }
                                        })()}

                                        <div className="card-body">
                                            <h5 className="card-title">{users.name}</h5>
                                            {(() => {
                                                if (users?.address) {
                                                    return (
                                                        <div>
                                                            <p className="card-text">Address : {users.address}</p>

                                                        </div>

                                                    )
                                                } else {
                                                    return (
                                                        <p className="card-text">Address : Not registered</p>
                                                    )
                                                }
                                            })()}

                                            {/* manage section */}

                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-outline-app dropdown-toggle cursor"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    &#8942;
                                                </button>
                                                <ul
                                                    className="dropdown-menu"
                                                >

                                                    <li>
                                                        <button
                                                            className="dropdown-item"
                                                            onClick={() => {manageFarm(users.id)}}
                                                        >
                                                            <FontAwesomeIcon icon={faTasks} />{" "} Manage
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="dropdown-item"
                                                            to={`/farms/${users.id}/edit`}

                                                        >
                                                            <FontAwesomeIcon icon={faEdit} />{" "}Edit
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="dropdown-item"
                                                            to={""}
                                                        >
                                                            <FontAwesomeIcon icon={faLock} />{" "}Status
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* end */}
                                        </div>
                                    </div>
                                    {/* end */}
                                </div>
                            ))}

                        </div >

                    </div >
                </section >
            </div >
        </div >
    );
}

export default ManageFarm;
