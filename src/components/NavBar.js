import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navlinksElement = links.map((link, index) => {
    return (<a key={link} href={`#${link}`}>{link}</a>)
  })

  return <nav>{/* display an <a> tag for each link here */
  navlinksElement}</nav>;
}

export default NavBar;
