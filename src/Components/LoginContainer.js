import "./LoginScreen.css";

const LoginContainer = ({children}) =>{
    
    return (
      <div>
        <section className="section-content padding-y">
          <div className="container">
            <div className="row">
                {children}
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default LoginContainer;
  