import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faUsers, faFileAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.scss";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import { attempt, selectDashboard } from "../../store/redux/Page/Dashboard";
// import { Link } from "react-router-dom";

function Dashboard() {
  const store = useSelector(selectDashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Dashboard`;
    if (store.loading === false) {
      dispatch(attempt({}));
    }
  }, [store.loading,dispatch]);
  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <div className="col-12 p-0 content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <Breadcrumb />
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="text-white">
                      <FontAwesomeIcon icon={faHome} />
                    </i>
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Farms</span>
                    <span className="info-box-number">{store.admin}</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-danger elevation-1">
                    <i className="text-white">
                      <FontAwesomeIcon icon={faUsers} />
                    </i>
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Collaborators</span>
                    <span className="info-box-number">1000</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-success elevation-1">
                    <i className="text-white">
                      <FontAwesomeIcon icon={faTree} />
                    </i>
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Trees</span>
                    <span className="info-box-number">
                      700
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-success elevation-1">
                    <i className="text-white">
                      <FontAwesomeIcon icon={faFileAlt} />
                    </i>
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Work Plans</span>
                    <span className="info-box-number">
                      500
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            This week
          </button>
          <button type="button" className="btn btn-sm btn-outline-secondary">
            This week
          </button>
        </div> */}

      {/* <h2>Section title</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>placeholder</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>placeholder</td>
              <td>tabular</td>
              <td>information</td>
              <td>irrelevant</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>text</td>
              <td>placeholder</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>visual</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>random</td>
              <td>tabular</td>
              <td>information</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default Dashboard;
