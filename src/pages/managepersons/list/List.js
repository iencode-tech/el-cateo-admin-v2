import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEye,
  faRedo,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import Table from "../../../components/common/table/Table";
import { Link } from "react-router-dom";
import { utcToLocalTime } from "../../../utils/timeHelper";
import { personRoles, statuses } from "../../../utils/appConstants";
import Pagination from "../../../components/common/pagination/Pagination";
import ReactPaginate from 'react-paginate';
import { useHistory } from 'react-router-dom';

import axios from "axios";

function PersonList() {
  const history = useHistory();

  var [person, setInfo] = useState([]);
  var [searchKey, setSearchKey] = useState("");

  const [page,setPage] = useState(1);
  const [tCount,setTCount] = useState(0);

  const pageName = "Persons";
  const breadCrumbs = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Persons",
      link: "",
    },
  ];
  const tableHeads = [
    "Name",
    "Email",
    "Phone",
    "Role",
    "Added Date",
    "Status",
    "",
  ];

  let getPerson = async (searchKey,page) => {
    await axios.get(`${process.env.REACT_APP_API_URL}/persons?keyword=${searchKey}&page=${page}`,
      { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } }).then((response) => {
        const personData = response.data.data.dbData;
        setInfo(personData);
        setTCount(response.data.data.dbCount);
      }).catch(error => {
        console.log(error.response)
      });


  };

  const removeById = async (e, id) => {
    e.preventDefault();
    await axios.delete(`${process.env.REACT_APP_API_URL}/person/${id}/delete`,
      { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } });
      var personList = person.filter((item) => {
        return item.id !== id;
      });
      setInfo(personList);

  }

  const resetList = async(e) => {
    searchKey = "";
    setSearchKey(searchKey)
    getPerson(searchKey,page)
  }

  const handlePageClick = (e) =>{
    setPage(e.selected + 1);
  }

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME}`;
    getPerson(searchKey,page);
  }, [searchKey,page]);
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
                    to={'/person/create'}>
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
                            onClick={(e) => resetList(e)}
                          >
                            <FontAwesomeIcon icon={faRedo} />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="card-body p-0">
                    <Table
                      data={person.map((listData, index) => ({
                        name: `${listData.firstName} ${listData.lastName}`,
                        email: listData.email,
                        phone: listData.phone,
                        role: personRoles[listData.role],
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
                                  to={`/person/${listData.id}/view`}
                                >
                                  <FontAwesomeIcon icon={faEye} /> View
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to={`/person/${listData.id}/edit`}
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
                  <div className="card-footer clearfix">
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel=" >>"
                      onPageChange={handlePageClick}
                      // pageRangeDisplayed={10}
                      pageCount={tCount / 10}
                      previousLabel="<<"
                      renderOnZeroPageCount={null}
                      containerClassName={"pagination justify-content-center"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                      nextClassName={"page-item"}
                      nextLinkClassName={"page-link"}
                      activeClassName={"active"}
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

export default PersonList;