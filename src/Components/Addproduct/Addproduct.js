import React from 'react'
import style from "./Addproduct.module.css";
const Addproduct = () => {
  return (
    <div>
    {/* <Login/> */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div class="row">
              <div class="col-6">
                <div className={style.header}>
                  <h3>Add your product </h3>
                </div>
                <div className="d-flex flex-column bd-highlight">
                  <div className="p-2 bd-highlight mt-4 ms-4">
                
                    <span>
                      <input
                        type="text"
                        placeholder="Name of the company"
                        className={style.inputs}
                      />
                    </span>
                  </div>
                  <div className="p-2 bd-highlight mt-4 ms-4">
                    <span>
                      <input
                        type="text"
                        placeholder="Category"
                        className={style.inputs}
                      />
                    </span>
                  </div>
                  <div className="p-2 bd-highlight mt-4 ms-4">
                    <span>
                      <input
                        type="text"
                        placeholder="Add logo url"
                        className={style.inputs}
                      />
                    </span>
                  </div>
                  <div className="p-2 bd-highlight mt-4 ms-4">
                    <span>
                      <input
                        type="text"
                        placeholder="Link of product"
                        className={style.inputs}
                      />
                    </span>
                  </div>
                  <div className="p-2 bd-highlight mt-4 ms-4">
                    <span>
                      <input
                        type="text"
                        placeholder="Add description"
                        className={style.inputs}
                      />
                    </span>
                  </div>
                </div>

                <button className={style.buttonchip2} data-bs-dismiss="modal">+Add</button>
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

export default Addproduct