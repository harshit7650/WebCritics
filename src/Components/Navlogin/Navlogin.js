import React from 'react'
import style from "./Navlogin.module.css";
import {useNavigate} from "react-router-dom"
const Navlogin = () => {


    const navigate = useNavigate();
function navsignin(){
    navigate("/Signup")
}

  return (
    <div className={style.mainbackground}>
  
    <div className={style.maincard}>
      <div >
        <div className={style.feedbackstext}>Feedback</div>
        <div className={style.feedbacksitem}>
        Add your products and give us your valuable feedback
        </div>
      </div>
      <div class="card rounded " style={{ width: "35rem" }}>
        <div class="card-body">
          <div className="d-flex flex-column bd-highlight">
            <div className="p-2 bd-highlight mt-3 ms-5">
              {" "}
              <span>
                {" "}
                <img src={require("../Images/email.png")} alt="Logo" />
              </span>{" "}
              <span>
                <input
                  type="text"
                  placeholder="Email"
                  className={style.inputs}
                />
              </span>
            </div>
            <div className="p-2 bd-highlight mt-3 ms-5">
              {" "}
              <span>
                {" "}
                <img src={require("../Images/password.png")} alt="Logo" />
              </span>{" "}
              <span>
                <input
                  type="text"
                  placeholder="Password"
                  className={style.inputs}
                />
              </span>
            </div>
          </div>
          <div class="d-flex bd-highlight mb-3 ms-5 mt-3">
            <div class="p-2 bd-highlight" className={style.textbtn}>
              Don't have an account?
            </div>
            <div class=" bd-highlight">
              <button
                className={style.loginbtn}
                onClick={navsignin}
              >
                Sign in
              </button>
            </div>
          </div>
          <button className={style.buttonchip2} >
            Log in
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navlogin