import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import ComingSoonComponent from "../../comingsoon/Comingsoon";
//form import
import SectorForm from "../../../components/pageSpecific/sectors/form/Form";

function SectorCreate() {
    const pageName = "Add sector";
    const breadCrumbs = [
        {
          name: "Dashboard",
          link: "/dashboard",
        },
        {
          name: "Sectors",
          link: "/sectors",
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
                    encType={`multipart/form-data`}
                  >
                    <div className="card-body">
                     <ComingSoonComponent/>
            
                    </div>

                    <div className="card-footer clearfix">
                      <button
                        className="btn btn-sm btn-app float-end"
                      
                      >
                        
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

export default SectorCreate;