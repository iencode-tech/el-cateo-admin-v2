import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import ZoneViewComponent from "../../../components/pageSpecific/zones/view/View";
import { useParams } from "react-router-dom";
import axios from "axios";

function ZonaView() {
    const params = useParams();
    const pageName = "View zona";
    const [zona, setInfo] = useState({
        latitude:"",
        longitude:"",
        name:"",
        soils:{},
        status:""
    });

    //Breadcrumbs declared
    const breadCrumbs = [
        {
            name: "Dashboard",
            link: "/dashboard",
        },
        {
            name: "Zonas",
            link: "/zonas",
        },
        {
            name: "View",
            link: "",
        },
    ];

    let getZonas = async () => {
        await axios.get(`http://localhost:7000/zone/${params.id}/read`,
            { headers: { "authorization": localStorage.getItem(process.env.REACT_APP_AUTH_KEY_NAME) } }).then((response) => {
                const zonasData = response.data.data;
                console.log(zonasData)
                setInfo(zonasData);

            }).catch(error => {
                console.log(error.response)
            });
    };
    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME}`;
        getZonas();
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
                                        <ZoneViewComponent formData={zona} />
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

export default ZonaView;