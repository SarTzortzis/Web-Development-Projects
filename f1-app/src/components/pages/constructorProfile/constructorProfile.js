import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Mercedes from "../../../assets/images/mercedes.jpeg";
import ProfileTable from "../../profileTable/profileTable";
import "./constructorProfile.css";

const ConstructorProfile = () => {
  /***********************************  setting up useStates to pass the data from api to our webSite ***********************************/

  const [constructorInfo, setConsInfo] = useState({});
  const [constructorSeason, setConsSeason] = useState(null);
  const { consId, season } = useParams();

  /***********************************  FETCHING DATA ***********************************/
  useEffect(() => {
    const consInfoUrl = `http://ergast.com/api/f1/${season}/constructors/${consId}.json`;
    fetch(consInfoUrl)
      .then((res) => res.json())
      .then((json) => {
        let consInfo = json.MRData.ConstructorTable.Constructors[0];
        setConsInfo(consInfo);
      });
    const consSeasonUrl = `http://ergast.com/api/f1/${season}/constructors/${consId}/results.json`;
    fetch(consSeasonUrl)
      .then((res) => res.json())
      .then((json) => {
        let consSeason = json.MRData.RaceTable.Races;
        setConsSeason(consSeason);
      });
  }, []);

  return (
    <>
      {/************************** CONDITIONAL RENDERING BECAUSE WE NEED TO LOAD THE PAGE WHEN OUR DATA ARE FULLY LOADED**************************/}
      {constructorSeason && (
        <main className="consProf-main">
          <section className="consProf-hero-image">
            <img src={Mercedes}></img>
          </section>
          <section className="consProf-section">
            <div className="consProf-div">
              <label>
                Constructor name:
                <input
                  className="profile-input"
                  value={constructorInfo.name}
                  readOnly="readonly"
                />
              </label>
              <label>
                Nationality:
                <input
                  className="profile-input"
                  value={constructorInfo.nationality}
                  readOnly="readonly"
                />
              </label>
              <label>
                Period:
                <input
                  className="profile-input"
                  value={season}
                  readOnly="readonly"
                />
              </label>
            </div>
          </section>
          <div className="table-component">
            <ProfileTable
              data={constructorSeason}
              isDriver={null}
            ></ProfileTable>
          </div>
        </main>
      )}
    </>
  );
};

export default ConstructorProfile;
