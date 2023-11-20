// LIB
import React from "react";
// IMPORT
import Login from "./Login";
import Register from "./Register";
import ContentAuth from "../../Components/ContentAuth";
const Auth = () => {
  const [isChangePage,setIsChangePage]=React.useState(false)
  const handleChangePage=()=> {
    setIsChangePage((prev)=>!prev )
  }
  return (
    <React.Fragment>
      <div className={`container1 ${isChangePage ? 'sign-up-mode':'null' }`}>
        <div className="forms-container">
          <div className="signin-signup">
            <Login />
            <Register />
          </div>
          <ContentAuth onChangePage={handleChangePage}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
