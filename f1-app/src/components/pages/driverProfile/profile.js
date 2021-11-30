import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProfileTable from "../../profileTable/profileTable";
import Avatar from "../../../assets/images/driverProfile.png";
import "./profile.css";

const Profile = () => {
  /************************************* SETTING UP USE STATES TO PASS DATA FROM API TO OUR WEBSITE**************************************/
  const [driverInfo, setDriverInfo] = useState({});
  const [driverFinished, setDriverFinished] = useState({});
  const [driverConstructor, setDriverConstructor] = useState({});
  const [driverSeason, setDriverSeason] = useState(null);
  const { driverId, season } = useParams();

  useEffect(() => {
    /************************************* FETCH OUR DATA **************************************/
    const drivers_url = `http://ergast.com/api/f1/drivers/${driverId}.json`;
    fetch(drivers_url)
      .then((res) => res.json())
      .then((json) => {
        let driver = json.MRData.DriverTable.Drivers[0];
        setDriverInfo(driver);
      });
    const driverMoreInfoUrl = `http://ergast.com/api/f1/${season}/drivers/${driverId}/status.json`;
    fetch(driverMoreInfoUrl)
      .then((res) => res.json())
      .then((json) => {
        let driverMoreInfo = json.MRData.StatusTable.Status[0];
        setDriverFinished(driverMoreInfo);
      });
    const driverConstructorUrl = `http://ergast.com/api/f1/${season}/drivers/${driverId}/qualifying.json`;
    fetch(driverConstructorUrl)
      .then((res) => res.json())
      .then((json) => {
        let driverCons =
          json.MRData.RaceTable.Races[1].QualifyingResults[0].Constructor;
        setDriverConstructor(driverCons);
      });
    const driversSeason_url = `http://ergast.com/api/f1/${season}/drivers/${driverId}/results.json`;
    fetch(driversSeason_url)
      .then((res) => res.json())
      .then((json) => {
        let driverSeason = json.MRData.RaceTable.Races;
        setDriverSeason(driverSeason);
      });
  }, []);

  return (
    <>
      <main className="profile-main">
        <header className="profile-header">
          <img src={Avatar}></img>
          <div className="profile-intro">
            {/************************** CONDITIONAL RENDERING BECAUSE WE NEED TO LOAD THE PAGE WHEN OUR DATA ARE FULLY LOADED**************************/}
            {driverInfo.givenName} {driverInfo.familyName}
          </div>
        </header>
        {driverSeason && (
          <div>
            <form method="" className="profile-form">
              <label>
                Name:
                <input
                  className="profile-input"
                  value={driverInfo.givenName}
                  readOnly="readonly"
                />
              </label>
              <label>
                Surname:
                <input
                  className="profile-input"
                  value={driverInfo.familyName}
                  readOnly="readonly"
                />
              </label>
              <label>
                Nationality:
                <input
                  className="profile-input"
                  value={driverInfo.nationality}
                  readOnly="readonly"
                />
              </label>
              <label>
                Date of birth:
                <input
                  className="profile-input"
                  value={driverInfo.dateOfBirth}
                  readOnly="readonly"
                />
              </label>
              <label>
                Team:
                <input
                  className="profile-input"
                  value={driverConstructor.name}
                  readOnly="readonly"
                />
              </label>
              <label>
                Completed Races <span className="profile-span">{season}</span>{" "}
                season:
                <input
                  className="profile-input"
                  value={driverFinished.count}
                  readOnly="readonly"
                />
              </label>
            </form>
            <div className="table-component">
              <ProfileTable data={driverSeason} isDriver="1" />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Profile;
