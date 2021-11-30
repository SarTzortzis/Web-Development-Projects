import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const ProfileTable = ({ data, isDriver }) => {
  const [page, setPage] = React.useState(0);
  let row = null;
  let columns = null;

  /************** IF DATA IS DRIVER WE USE DIFFERENT COLUMNS ***************/
  if (isDriver) {
    row = [];
    data.map((driver) => {
      /************** CREATING ROWS FOR DRIVER TABLE***************/
      row.push({
        id: driver.round,
        round: driver.round,
        circuit: driver.raceName,
        position: driver.Results[0].position,
        laps: driver.Results[0].laps,
        status: driver.Results[0].status,
        points: driver.Results[0].points,
      });
    });
    columns = [
      {
        field: "round",
        headerName: "Round",
        flex: 1,
      },
      {
        field: "circuit",
        headerName: "Circuit",
        flex: 1,
      },
      {
        field: "position",
        headerName: "Position",
        flex: 1,
      },
      {
        field: "laps",
        headerName: "Laps",
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
      },
      {
        field: "points",
        headerName: "Points",
        flex: 1,
      },
    ];
  } else {
    /************** IF DATA IS CONSTRUCTOR WE USE DIFFERENT COLUMNS ***************/
    row = [];
    data.map((driver) => {
      /************** WE ARE CREATING SOME VARIABLES **************
       * TO COMBINE DATA CAUSE WE HAVE 2 DRIVERS PER CONSTRUCTOR ***************/
      let driver1 =
        driver.Results[0].Driver.familyName +
        " position: " +
        driver.Results[0].position +
        " points: " +
        driver.Results[0].points +
        " laps: " +
        driver.Results[0].laps;
      let driver2 =
        driver.Results[1].Driver.familyName +
        " position: " +
        driver.Results[1].position +
        " points: " +
        driver.Results[1].points +
        " laps: " +
        driver.Results[1].laps;
      let laps1 = driver.Results[0].laps;
      let laps2 = driver.Results[1].laps;
      let parsedL1 = parseInt(laps1);
      let parsedL2 = parseInt(laps2);
      let totalLaps = parsedL1 + parsedL2;
      let points1 = driver.Results[0].points;
      let parsedP1 = parseInt(points1);
      let points2 = driver.Results[1].points;
      let parsedP2 = parseInt(points2);
      let totalPoints = parsedP1 + parsedP2;

      /************** CREATING ROWS FOR CONSTRUCTOR TABLE***************/
      row.push({
        id: driver.round,
        round: driver.round,
        circuit: driver.raceName,
        position1: driver1,
        position2: driver2,
        laps: totalLaps,
        status: driver.Results[0].status,
        points: totalPoints,
      });
    });
    columns = [
      {
        field: "round",
        headerName: "Round",
        flex: 0.3,
      },
      {
        field: "circuit",
        headerName: "Circuit",
        flex: 1,
      },
      {
        field: "position1",
        headerName: "1st Driver",
        flex: 1.5,
      },
      {
        field: "position2",
        headerName: "2nd Driver",
        flex: 1.5,
      },
      {
        field: "laps",
        headerName: "Total laps",
        flex: 0.5,
      },
      {
        field: "status",
        headerName: "Status",
        flex: 0.5,
      },
      {
        field: "points",
        headerName: "Total points",
        flex: 0.5,
      },
    ];
  }

  return (
    <>
      {/************** CONDITIONAL RENDERING BECAUSE WE NEED TO WAIT FOR OUR **************
       ************************ TABLE TO BE FILLED ***************/}
      {row && columns && (
        <div className="table">
          <DataGrid
            style={{
              border: "none",
              color: "#333",
              padding: "0px 20px 0px 20px",
              backgroundColor: "#fff",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
            }}
            rows={row}
            columns={columns}
            onPageChange={(newPage) => setPage(newPage)}
            pageSize={10}
            pagination
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default ProfileTable;
