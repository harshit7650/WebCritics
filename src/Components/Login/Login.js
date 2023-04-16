import React from 'react'
import style from "./Login.module.css";
const Login = () => {
  return (
    <div>
    <div
      className="modal fade"
      id="exampleModal1"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div class="row">
            <div class="col-6">
              <div className={style.header}>
                <h3>Login to continue</h3>
              </div>
              <div className="d-flex flex-column bd-highlight">
                <div className="p-2 bd-highlight mt-4 ms-5">
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
                <div className="p-2 bd-highlight mt-4 ms-5">
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

              <button className={style.buttonchip2} data-bs-dismiss="modal">Login</button>
            </div>
            <div class="col-6"  style={{background:"#36416A"}}>
                   <div className={style.feedbackstext}>Feedback</div>
                   <div  className={style.feedbacksitem}>Add your <br/> product and <br/> rate other <br/> items.............</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login