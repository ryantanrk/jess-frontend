import React from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faUserPlus,
  faCheckCircle,
  faUpload,
  faSyncAlt,
  faFileAlt,
  faSignOutAlt,
  faMoneyBillAlt,
  faFileUpload,
  faEdit,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  let userName = "Tomas John";
  return (
    <div className="topNavMainDiv">
      <div className="divLeft">
        <div className="iconDiv">
          <FontAwesomeIcon icon={faUserCircle} /> &nbsp; Hi, {userName}
        </div>
      </div>

      <div className="divRight">
        <Link to="/dashboard/review" className="navA">
          <div className="iconDiv iconDivHover">
            <FontAwesomeIcon icon={faEye} />
            <br /> Review
          </div>
        </Link>

        <Link to="/dashboard/assign" className="navA">
          <div className="iconDiv iconDivHover">
            <FontAwesomeIcon icon={faUserPlus} />
            <br /> Assign
          </div>
        </Link>

        <Link to="/dashboard/finalCheck" className="navA">
          <div className="iconDiv iconDivHover">
            <FontAwesomeIcon icon={faCheckCircle} />
            <br />
            Final Check
          </div>
        </Link>

        <Link to="/dashboard/publish" className="navA">
          <div className="iconDiv iconDivHover">
            <FontAwesomeIcon icon={faUpload} />
            <br />
            Publish
          </div>
        </Link>

        <Link to="/dashboard/update" className="navA">
          <div className="iconDiv iconDivHover">
            <FontAwesomeIcon icon={faSyncAlt} />
            <br />
            Update
          </div>
        </Link>

        <Link to="/dashboard/report" className="navA">
          <div className="iconDiv iconDivHover">
            <FontAwesomeIcon icon={faFileAlt} />
            <br />
            Report
          </div>
        </Link>

        <Link to="/dashboard/upload" className="navA">
          <div className="iconDiv iconDivHover">
            <FontAwesomeIcon icon={faFileUpload} />
            <br />
            Upload
          </div>
        </Link>

        <Link to="/dashboard/modify" className="navA">
          <div className="iconDiv iconDivHover">
            <FontAwesomeIcon icon={faEdit} />
            <br />
            Modify
          </div>
        </Link>

        <Link to="/dashboard/payment" className="navA">
          <div className="iconDiv iconDivHover">
            <FontAwesomeIcon icon={faMoneyBillAlt} />
            <br />
            Payment
          </div>
        </Link>

        <Link to="/dashboard/signOut" className="navA">
          <div className="iconDiv iconDivHover">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <br />
            Sign out
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;