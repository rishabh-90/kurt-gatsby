import React from "react"
import headerImg from "../assets/img/site-logo.png"

const Header = () => {
  return (
    <div className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header-logo">
              <a href="!#">
                <img src={headerImg} alt="..." />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
