import './Contact.css'
export const Contact:any = () => {
  return (
    <>
        <div className="contact">
        <div className="container w-50">
                <div className="col-md-12">
                    <h1 className="text-center mt-5 contactTit">
                        Contact Me
                    </h1>
                </div>
            <div className="AK-form mt-5">
              <div className="mb-3">
              <input
                    type="text"
                    className="form-control contactInput"
                    placeholder="Full Name"
                  />
              </div>
            <div className="mb-3">
                  <input
                    type="email"
                    className="form-control contactInput"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control contactInput"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input type="submit" value="Submit" className='contactButton' />
                </div>
            </div>
              </div>
        </div>
    </>
  );
};
