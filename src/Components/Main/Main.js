import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Addproduct from "../Addproduct/Addproduct";

const Main = (props) => {
  const navigate = useNavigate();
  const [islogin, setislogin] = useState(true);
  const [isTrue, setIsTrue] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [comments, setComments] = useState([]); 
  const [commentText, setCommentText] = useState("");
  console.log("commentText", commentText);
  const handleSignupClick = (event) => {
    event.preventDefault();
    navigate("/Signup");
  };

  const handleloginupClick = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  const handleCommentSubmit = (e) => {
    console.log("handleCommentSubmitclciked");
    e.preventDefault();
    setComments([...comments, commentText]); // add new comment to array
    setCommentText(""); // clear input field
  };

  const handleExpandClick = () => {
    setExpanded(true);
  };

  return (
    <div>
      <Signup />
      <Login />
      <Addproduct />
      <nav class="navbar navbar-light pb-0 pt-1" style={{ backgroundColor: "#36416A" }}>
        <div class="container-fluid">
          <div class="navbar-brand text-light">Feedback</div>
          <form className="d-flex ml-3">
            {islogin ? (
              <button className="btn text-light">Log out</button>
            ) : (
              <button
                className="btn text-light"
                style={{ marginRight: "10px" }}
                onClick={handleloginupClick}
              >
                Log in
              </button>
            )}

            {islogin ? (
              <span><button className="btn text-light">Hello!  
              <img
              src={require("../Images/person.png")}
              alt="Logo"
               className={styles.person}
            />
              </button></span>
            ) : (
              <button
                className="btn btn-outline-light"
                style={{ marginRight: "10px" }}
                onClick={handleSignupClick}
              >
                Sign up
              </button>
            )}
          </form>
        </div>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <div class="col-5">
            <img
              src={require("../Images/Logo.png")}
              class="img-fluid rounded-start mx-auto d-block"
              alt="Logo"
              style={{ maxHeight: "300px", marginLeft: "150px" }}
            />
          </div>
          <div class="col-7">
            <div className={styles.imagetext}>
              <h2>
                Add your products and give <br /> your valuable feedback
              </h2>
              <p class=" mt-4" className={styles.heading}>
                Easily give your feedback in a matter of minutes. Access your{" "}
                <br /> audience on all platforms. Observe result manually in
                real time
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-3 ">
            <div class="card" style={{ backgroundColor: "#36416A" }}>
              <div class="text-start mt-5 ms-4 mb-2">
                <h2 class="text-light">Feedback</h2>
                <h5 class="text-light">Apply Filter</h5>
              </div>
            </div>

            <div class="card mt-3  shadow-lg">
              <div class="card-body">
                <button className={styles.buttonchip}>Chip 1</button>
                <button className={styles.buttonchip}>Chip 1</button>
                <button className={styles.buttonchip}>Chip 1</button>
                <button className={styles.buttonchip}>Chip 1</button>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="card">
              <div class="card-body p-0">
                <div class="d-flex bd-highlight mb-0">
                  <div class="p-2 bd-highlight " className={styles.suggest}>
                    10 Suggestions
                  </div>
                  <div class="d-flex align-items-center">
                    <div
                      class="p-2 bd-highlight mr-3"
                      className={styles.sortby}
                    >
                      <span class="nowrap">Sort by:</span>
                    </div>
                    <div class="p-2 bd-highlight" className={styles.upvotes}>
                      <span class="nowrap">
                        Upvotes
                        <div class={styles.dropup}>
                          <button class={styles.dropbtn}>^</button>
                          <div class={styles.dropupcontent}>
                            <a href="#">Upvotes</a>
                            <a href="#">Comment</a>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>

                  <div class="ms-auto p-2 bd-highlight">
                    <div
                      className={styles.addbtn}
                      data-bs-toggle="modal"
                      data-bs-target={
                        isTrue ? "#exampleModal2" : "#exampleModal"
                      }
                    >
                      <h5 className="ps-4 pt-2"> + Add Products</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card-container mt-2"
              style={{ height: "400px", overflowY: "scroll" }}
            >
              <div
                class="card "
                style={{ backgroundColor: "rgba(54, 65, 106, 0.15)" }}
              >
                <div class="card-body d-flex  align-items-center pb-0 pt-0">
                  <img
                    src={require("../Images/Logo.png")}
                    class="rounded "
                    alt="..."
                    className={styles.circularimage}
                  />
                  <div class="d-flex flex-column mt-1 ms-3">
                    <h4 style={{ color: "#36416A" }}>Cred Club</h4>
                    <h6>
                      It is good for credit card payments,it is fast,secure
                    </h6>
                    <div class="d-flex flex-row ">
                      <button className={styles.buttonchip2}>Chip 1</button>
                      <button className={styles.buttonchip2}>Chip 2</button>
                      <button className={styles.buttonchip2}>Chip 2</button>
                      <button className={styles.buttonchip2}>Chip 2</button>
                      <img
                        src={require("../Images/comment.png")}
                        alt="..."
                        className={styles.comment}
                      />
                      <p className={styles.comment2}>comment</p>
                    </div>
                  </div>
                  <div class="d-flex flex-column ms-auto ">
                    <div className={styles.buttonvertical}>
                      ^<br />1
                    </div>
                    <div class="d-flex flex-row ms-auto me-2 mb-1">
                      {islogin ? (
                        <button className={styles.buttonchip3}>Edit</button>
                      ) : null}
                      <div class="ms-auto" className={styles.vector}>
                        <span>4 </span>
                        <img
                          src={require("../Images/Vector.png")}
                          alt="..."
                          onClick={handleExpandClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {expanded && (
                  <div className={styles.container}>
                    <div className={styles.inputContainer}>
                      <input
                        type="text"
                        placeholder="Add a comment......"
                        value={commentText}
                        className={styles.inputBox}
                        onChange={(e) => setCommentText(e.target.value)}
                      />
                      <div className={styles.button}>
                        {" "}
                        <img
                          src={require("../Images/arrow.png")}
                          alt="Logo"
                          onClick={handleCommentSubmit}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div style={{ maxHeight: "100px", overflowY: "auto" }}>
                  {comments.map((comment, index) => (
                    <div key={index} class="ms-3 " style={{ display: "flex" }}>
                      <span>
                        {" "}
                        <img
                          src={require("../Images/eclipse.png")}
                          alt="Logo"
                        />
                      </span>{" "}
                      <span className={styles.addcomment}>{comment}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div class="card mb-3">
                <div class="card-header">Card 2</div>
                <div class="card-body">
                  <p class="card-text">Some text for card 2</p>
                </div>
              </div> */}

              {/* <div class="card mb-3">
                <div class="card-header">Card 3</div>
                <div class="card-body">
                  <p class="card-text">Some text for card 3</p>
                </div>
              </div> */}

              {/* <div class="card mb-3">
                <div class="card-header">Card 4</div>
                <div class="card-body">
                  <p class="card-text">Some text for card 4</p>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
