
export const Contact = () => {
  return (
    <>
        <div id="contact">
        <div className="container w-50">
                <div className="col-md-12">
                    <h1 className="text-center mt-5">
                        Contact Me
                    </h1>
                </div>
            <div className="AK-form mt-5">
              <div className="mb-3">
              <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
              </div>
            <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    type="textarea"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input type="submit" value="Submit" />
                </div>
            </div>
              </div>
        </div>
    </>
  );
};
