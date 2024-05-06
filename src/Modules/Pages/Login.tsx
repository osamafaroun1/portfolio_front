
export const Login = () => {
    return (
        <>
             <div id="contact">
 <div className="container w-50">
        <div className="col-md-12">
            <h1 className="text-center mt-5">
             Welcome!
            </h1>
        </div>
     <div className="AK-form mt-5">
      <div className="mb-3">
      <input
            type="text"
            className="form-control"
            placeholder="First Name"
          />
      </div>
      <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-3">
      <input
            type="text"
            className="form-control"
            placeholder="Password"
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
          <input type="submit" value="Login" />
        </div>
     </div>
      </div>
  </div>
        </>
    )
}
