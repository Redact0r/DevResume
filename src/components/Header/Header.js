import React from "react";

const Header = (props) => {
  const { name, jobTitle, email, phoneNumber, links } = props;

  return (
    <header className="mainHeader">
      <div className="mainHeaderName">{`${name} — ${jobTitle}`}</div>
      <div className="mainHeaderContact">
        <div className="mainHeaderContactSection">{`${email} | ${phoneNumber}`}</div>
        <div className="mainHeaderContactSection">
          {links.map((link, idx) => {
            return (
              <a
                key={idx}
                href={link.url}
                className="mainHeaderContactSectionLink"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
