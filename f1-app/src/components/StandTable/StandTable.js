import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "../../assets/images/driver.png";
import TeamAvatar from "../../assets/images/workers.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router";

const StandTable = ({ data, standing, period }) => {
  let row = null;
  let columns = null;
  if (period === null) {
    period = "current";
  }
  const [page, setPage] = React.useState(0);
  if (standing === "drivers") {
    row = [];
    data.map((driver) => {
      /* WE NEED TO COMBINE 2 VARIABLES IN ORDER TO CREATE DRIVER'S NAME */
      // let name = driver.Driver.givenName + " " + driver.Driver.familyName;
      /************** CREATING ROWS FOR DRIVERS TABLE***************/
      row.push({
        id: driver.Driver.driverId,
        position: driver.position,
        name: driver.Driver.driverId,
        team: driver.Constructors[0].name,
        points: driver.points,
        wins: driver.wins,
      });
    });

    columns = [
      {
        field: "position",
        headerName: "Position",
        flex: 0.3,
      },
      {
        field: "name",
        headerName: "Name",
        renderCell: (params) => (
          <NavLink
            className="table-link"
            to={`/drivers/${params.value}/${period}`}
          >
            <img src={Avatar} className="standings-icon" />
            <p> {params.value}</p>
          </NavLink>
        ),

        flex: 1.5,
      },
      {
        field: "team",
        headerName: "Team",
        flex: 1.5,
      },
      {
        field: "points",
        headerName: "Points",
        flex: 0.5,
      },
      {
        field: "wins",
        headerName: "Wins",
        flex: 0.5,
      },
    ];
  } else {
    /************** IF DATA IS CONSTRUCTOR WE USE DIFFERENT COLUMNS ***************/
    row = [];
    data.map((team) => {
      /************** CREATING ROWS FOR CONSTRUCTOR TABLE***************/
      row.push({
        id: team.Constructor.constructorId,
        position: team.position,
        name: team.Constructor.constructorId,
        nationality: team.Constructor.nationality,
        points: team.points,
        wins: team.wins,
      });
    });
    columns = [
      {
        field: "position",
        headerName: "Position",
        flex: 0.3,
      },
      {
        field: "name",
        headerName: "Name",
        renderCell: (params) => (
          <NavLink
            className="table-link"
            to={`/constructors/${params.value}/${period}`}
          >
            {" "}
            <img src={TeamAvatar} className="standings-icon" />
            {params.value}
          </NavLink>
        ),
        flex: 1.5,
      },
      {
        field: "nationality",
        headerName: "Nationality",
        flex: 1.5,
      },
      {
        field: "points",
        headerName: "Points",
        flex: 0.5,
      },
      {
        field: "wins",
        headerName: "Wins",
        flex: 0.5,
      },
    ];
  }

  return (
    <>
      {/************** CONDITIONAL RENDERING BECAUSE WE NEED TO WAIT FOR OUT
       *{/*********************** TABLE TO BE FILLED ***************/}
      {row && columns && (
        <DataGrid
          style={{
            border: "none",
            color: "#333",
            backgroundColor: "#fff",
            boxShadow: "0 0 30px rgba(0, 0, 0, 0.7)",
          }}
          rows={row}
          columns={columns}
          onPageChange={(newPage) => setPage(newPage)}
          pageSize={10}
          pagination
          autoHeight
        />
      )}
    </>
  );
};

export default StandTable;
