import React, { useState } from "react";
import { useEffect } from "react";
import StandingsTable from "../../Filters/filters";
import Filters from "../../Filters/filters";
import "./home.css";

const Home = () => {
  /*************************** SETTING COLUMNS THAT WILL BE SENT TO FILTERS COMPONENT IN ORDER TO DISPLAY PROPERLY THE STANDINGS TABLE **************************************/
  const driverColumns = ["Position", "Name", "Team", "Points", "Wins"];
  const teamsColumns = ["Position", "Name", "Nationality", "Points", "Wins"];
  /************************************* SETTING UP USE STATES TO PASS DATA FROM API TO OUR WEBSITE**************************************/
  const [dataTable, setDataTable] = useState([]);
  const [standing, setStanding] = useState("drivers");
  const [period, setPeriod] = useState("current");
  const [columns, setColumns] = useState(driverColumns);
  const periodHandler = (event) => {
    const period = event.target.value;
    setPeriod(period);
    /************************************* FETCH DATA FOR DRIVERS, IF DRIVERS ARE SELECTED ON FILTERS SELECTOR **************************************/
    if (standing === "drivers") {
      const drivers_url = `http://ergast.com/api/f1/${period}/driverStandings.json`;
      fetch(drivers_url)
        .then((res) => res.json())
        .then((json) => {
          let driversBoard =
            json.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          setDataTable(driversBoard);
        });
    } else {
      /************************************* FETCH DATA FOR CONSTRUCTORS, IF CONSTRUCTORS ARE SELECTED ON FILTERS SELECTOR **************************************/
      const constructors_url = `http://ergast.com/api/f1/${period}/constructorStandings.json`;
      fetch(constructors_url)
        .then((res) => res.json())
        .then((json) => {
          var constructorBoard =
            json.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

          setDataTable(constructorBoard);
        });
    }
  };
  /******************************* GETTING PERIOD FROM PERIOD SELECTOR AND FETCH THE DATA FOR THIS PERIOD ONLY **************************************/
  const standingsHandler = (event) => {
    setDataTable([]);
    setStanding(event.target.value);
    /************************************* FETCH DATA FOR DRIVERS, IF DRIVERS ARE SELECTED ON FILTERS SELECTOR **************************************/
    if (event.target.value === "drivers") {
      const drivers_url = `http://ergast.com/api/f1/${period}/driverStandings.json`;
      fetch(drivers_url)
        .then((res) => res.json())
        .then((json) => {
          let driversBoard =
            json.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          setColumns(driverColumns);
          setDataTable(driversBoard);
        });
    } else {
      /************************************* FETCH DATA FOR CONSTRUCTORS, IF CONSTRUCTORS ARE SELECTED ON FILTERS SELECTOR **************************************/
      const constructors_url = `http://ergast.com/api/f1/${period}/constructorStandings.json`;
      fetch(constructors_url)
        .then((res) => res.json())
        .then((json) => {
          var constructorBoard =
            json.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
          setColumns(teamsColumns);
          setDataTable(constructorBoard);
        });
    }
  };
  useEffect(() => {
    const drivers_url = `http://ergast.com/api/f1/${period}/driverStandings.json`;
    fetch(drivers_url)
      .then((res) => res.json())
      .then((json) => {
        let driversBoard =
          json.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setDataTable(driversBoard);
      });
  }, []);

  return (
    <main className="home-main">
      <section className="home-hero-image">
        <div className="home-hero-text">
          <h1 className="home-h1">
            Welcome to <i>F1</i> standings !{" "}
          </h1>
        </div>

        <div className="home-hero-text-bot">
          <p>Scroll down for standings table</p>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>
      <section className="home-hero-table" id="Standings_Table">
        {/************************** CONDITIONAL RENDERING BECAUSE WE NEED TO LOAD THE COMPONENT WHEN OUR DATA ARE FULLY LOADED**************************/}
        {dataTable && (
          <Filters
            columns={columns}
            data={dataTable}
            standing={standing}
            standingsHandler={standingsHandler}
            period={period}
            periodHandler={periodHandler}
          />
        )}
      </section>
    </main>
  );
};
export default Home;
