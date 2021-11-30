import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../../assets/images/driver.png";
import TeamAvatar from "../../assets/images/workers.png";
import StandTable from "../StandTable/StandTable";
import "./filters.css";

/****************************** FILTERS COMPONENT GETS USER'S FILTERS FROM HOME PAGE******************************
 ******************************* AND CHANGESS THE VALUES OF ITS SELECTOS. ALSO, IT USES  ******************************
 ****************************** STANDTABLE IN ORDER TO SHOW THE STANDINGS TABLE  ******************************/

const Filters = ({
  data,
  standing,
  standingsHandler,
  columns,
  period,
  periodHandler,
}) => {
  return (
    <>
      {/*****************  FILTERS   ******************/}
      <header className="standings-header">
        <h3 className="standings-h3">
          <i>
            F<span className="standings-span">1</span>
          </i>
          lters
        </h3>

        <form action="" className="standings-form">
          <label className="standings-label">
            Show table for:
            <select
              className="standings-select"
              id="standing"
              value={standing}
              onChange={standingsHandler}
            >
              <option value="drivers">Drivers</option>
              <option value="teams">Constructors</option>
            </select>
          </label>

          <label className="standings-label">
            Season:
            <select
              className="standings-select"
              id="period"
              value={period}
              onChange={periodHandler}
            >
              <option value="current">Season 2021</option>
              <option value="2020">Season 2020</option>
              <option value="2019">Season 2019</option>
              <option value="2018">Season 2018</option>
              <option value="2017">Season 2017</option>
              <option value="2016">Season 2016</option>
              <option value="2015">Season 2015</option>
              <option value="2014">Season 2014</option>
              <option value="2013">Season 2013</option>
              <option value="2012">Season 2012</option>
              <option value="2011">Season 2011</option>
              <option value="2010">Season 2010</option>
            </select>
          </label>
        </form>
      </header>
      <div className="my-table">
        <StandTable data={data} standing={standing} period={period} />
      </div>
    </>
  );
};
export default Filters;
