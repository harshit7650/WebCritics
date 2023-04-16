import React from "react";
import style from "./Signup.module.css";
import Login from "../Login/Login";
const Signup = () => {
  return (
    <div>
    <Login/>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div class="row">
              <div class="col-6">
                <div className={style.header}>
                  <h3>Signup to continue</h3>
                </div>
                <div className="d-flex flex-column bd-highlight">
                  <div className="p-2 bd-highlight mt-4 ms-5">
                    <span>
                      <img
                        src={require("../Images/user.png")}
                        alt="Logo"
                        style={{ height: "27px", width: "27px" }}
                      />
                    </span>{" "}
                    <span>
                      <input
                        type="text"
                        placeholder="Name"
                        className={style.inputs}
                      />
                    </span>
                  </div>
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
                      <img src={require("../Images/mobile.png")} alt="Logo" />
                    </span>{" "}
                    <span>
                      <input
                        type="text"
                        placeholder="Mobile"
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

                <div class="d-flex bd-highlight mb-3 ms-5 mt-3">
                  <div class="p-2 bd-highlight" className={style.textbtn}>
                    Already have an account?
                  </div>
                  <div class=" bd-highlight">
                    <button className={style.loginbtn} data-bs-toggle="modal" data-bs-target="#exampleModal1">Log in</button>
                  </div>
                </div>

                <button className={style.buttonchip2} data-bs-dismiss="modal">Signup</button>
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
  );
};

export default Signup;

//   <div className="container-fluid">
//     <div className="row mt-5">
//       <div className="col-7">
//         <div>
//           <h4>Signup to continue</h4>
//         </div>
//         <div className="d-flex flex-column bd-highlight">
//           <div className="p-2 bd-highlight mt-4">
//             <span>
//               <img
//                 src={require("../Images/user.png")}
//                 alt="Logo"
//                 style={{ height: "27px", width: "27px" }}
//               />
//             </span>{" "}
//             <span>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className={style.inputs}
//               />
//             </span>
//           </div>
//           <div className="p-2 bd-highlight mt-4">
//             {" "}
//             <span>
//               {" "}
//               <img
//                 src={require("../Images/email.png")}
//                 alt="Logo"
//               />
//             </span>{" "}
//             <span>
//               <input
//                 type="text"
//                 placeholder="Email"
//                 className={style.inputs}
//               />
//             </span>
//           </div>
//           <div className="p-2 bd-highlight mt-4">
//             {" "}
//             <span>
//               {" "}
//               <img
//                 src={require("../Images/mobile.png")}
//                 alt="Logo"
//               />
//             </span>{" "}
//             <span>
//               <input
//                 type="text"
//                 placeholder="Mobile"
//                 className={style.inputs}
//               />
//             </span>
//           </div>
//           <div className="p-2 bd-highlight mt-4">
//             {" "}
//             <span>
//               {" "}
//               <img
//                 src={require("../Images/password.png")}
//                 alt="Logo"
//               />
//             </span>{" "}
//             <span>
//               <input
//                 type="text"
//                 placeholder="Password"
//                 className={style.inputs}
//               />
//             </span>
//           </div>
//         </div>

//       </div>
//       <div className="col-5">world</div>
//     </div>
//   </div>
