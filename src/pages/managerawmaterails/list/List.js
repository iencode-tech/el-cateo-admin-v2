import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faEye,
    faRedo,
    faSearch,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./List.scss";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import Table from "../../../components/common/table/Table";

import { Link } from "react-router-dom";
import { utcToLocalTime } from "../../../utils/timeHelper";
import { statuses, unitMetric } from "../../../utils/appConstants";
