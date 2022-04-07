import React, { useEffect, useState } from "react";
import "./View.scss";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import SectorViewComponent from "../../../components/pageSpecific/sectors/view/View";
import { useParams } from "react-router-dom";
import axios from "axios";



function SectorView() {
    const params = useParams();
    const pageName = "View sector";
    const [sector, setInfo] = useState({
        name: "",
        status: "",
        treeData: {},
        treeIds: {}
    });

    //Breadcrumbs declared
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
            name: "View",
            link: "",
        },
    ];

    let getUsers = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/sector/${params.id}/read`,
            { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } }).then((response) => {
                const sectorData = response.data.data;
                setInfo(sectorData);

            }).catch(error => {
                console.log(error.response)
            });


    };
    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME}`;
        getUsers();
    }, []);


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

                                    <div className="card-body">
                                        <SectorViewComponent formData={sector} />
                                    </div>

                                    <div className="card-footer clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SectorView;