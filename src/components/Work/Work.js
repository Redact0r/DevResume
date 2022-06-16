import React from "react";

const Work = (props) => {
  const { jobs } = props;

  return (
    <div className="jobs">
      {jobs.map((job, idx) => {
        console.log(jobs);
        const { company, startDate, endDate, title, responsibilities } = job;
        return (
          <div className="job" key={idx}>
            <div className="jobHeader">
              <div className="jobCompany">{company}</div>
              <div className="jobDates">{`${startDate} — ${endDate}`}</div>
            </div>
            <div className="jobTitle">{title}</div>
            <div className="jobResponsibilities">
              <ul className="jobResponsibilitiesList">
                {responsibilities.map((responsibility, i) => {
                  return <li key={i}>{responsibility}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
