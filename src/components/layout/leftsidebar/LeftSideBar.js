import React, { useEffect, useState } from "react";
import "./LeftSideBar.scss";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pluralize from "pluralize";
import {
  faCrosshairs,
  faDesktop,
  faFileAlt,
  faFileInvoice,
  faTree,
  faUser,
  faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";


function LeftSideBar() {
  const location = useLocation();
  const history = useHistory();
  const [sidebarLinks, setSideBarLinks] = useState([
    {
      name: "Subscription",
      icon: faArrowAltCircleUp,
      link: "/subscription",
      active: false,
    },
    {
      name: "Manage Person",
      icon: faUser,
      link: "/persons",
      active: false,
      
    },
    {
      name: "Manage Farms",
      icon: faTree,
      link: "/farms",
      active: false,
    },
    // {
    //   name: "Manage Sectors",
    //   icon: faClipboardList,
    //   link: "/sectors",
    //   active: false,
      
    // },
    // {
    //   name: "Manage Zona",
    //   icon: faPaperPlane,
    //   link: "/zonas",
    //   active: false,
    // },
    
    {
      name: "Reports",
      icon: faFileAlt,
      link: "/dashboard",
      active: false,
      children: [
        {
          name: "Work Certificate",
          icon: faFileInvoice,
          link: "/work-certificates",
          active: false,
        },
        {
          name: "ArcGis",
          icon: faCrosshairs,
          link: "/arcgis",
          active: false,
        },
      ],
    },
    {
      name: "PayRoll",
      icon: faDesktop,
      link: "/payroll",
      active: false,
    },
  ]);

  const sidebarUpdate = (newLocation) => {
    const sidebarLinksCopy = [...sidebarLinks];
    sidebarLinks.forEach((data, index) => {
      const parentRegex = new RegExp(
        `(/${pluralize.singular(data.link.replace("/", ""))})($|s|es|(/.*))`,
        "ig"
      );
      let parentMatched = parentRegex.test(newLocation.pathname);
      if (data.children) {
        parentMatched = false;
        data.children.forEach((subData, subIndex) => {
          const childRegex = new RegExp(
            `(/${pluralize.singular(
              subData.link.replace("/", "")
            )})($|s|es|(/.*))`,
            "ig"
          );
          const childMatched = childRegex.test(newLocation.pathname);
          sidebarLinksCopy[index].children[subIndex].active = childMatched;
          if (childMatched === true) {
            parentMatched = childMatched;
          }
        });
      }
      sidebarLinksCopy[index].active = parentMatched;
    });
    setSideBarLinks(sidebarLinksCopy);
  };

  useEffect(() => {
    sidebarUpdate(location);
    let unListen = history.listen((newLocation) => sidebarUpdate(newLocation));

    return () => {
      unListen();
    };
  }, []);

  return (
    <aside
      id="leftSideBarMenu"
      className="col-md-3 col-lg-2 d-md-block collapse bg-app sidebar"
    >
      <nav className="sidebar-sticky">
        <ul className="nav flex-column" id="accordionFlushMenu">
          {sidebarLinks.map((data, index) => (
            <li key={index} className="nav-item">
              {data.children && data.children.length > 0 ? (
                <div className="accordion accordion-flush">
                  <div className={`accordion-item`}>
                    <h2
                      className={`accordion-header`}
                      id={`leftMenu-flush-heading${index}`}
                    >
                      <button
                        className={`accordion-button bg-app nav-link ${
                          data.active === true ? "active" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#leftMenu-flush-collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`#leftMenu-flush-collapse${index}`}
                      >
                        <span>
                          <FontAwesomeIcon className="me-2" icon={data.icon} />
                        </span>
                        {data.name}
                      </button>
                    </h2>
                    <div
                      id={`leftMenu-flush-collapse${index}`}
                      className={`bg-app accordion-collapse collapse ${
                        data.active === true ? "show" : ""
                      }`}
                      aria-labelledby={`leftMenu-flush-heading${index}`}
                      data-bs-parent="#accordionFlushMenu"
                    >
                      <div className="accordion-body">
                        <ul className="nav flex-column">
                          {data.children.map((subData, subIndex) => (
                            <li key={subIndex} className="nav-item">
                              <NavLink
                                className={`nav-link`}
                                aria-current="page"
                                activeClassName={`active`}
                                isActive={() => subData.active}
                                to={subData.link}
                              >
                                <span>
                                  <FontAwesomeIcon
                                    className="me-2"
                                    icon={subData.icon}
                                  />
                                </span>
                                {subData.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  className={`nav-link`}
                  aria-current="page"
                  to={data.link}
                  activeClassName="active"
                  isActive={() => data.active}
                >
                  <span>
                    <FontAwesomeIcon className="me-2" icon={data.icon} />
                  </span>
                  {data.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default LeftSideBar;
