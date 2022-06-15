import Home from './home';
import Header from './header';
import Footer from './footer';
import Addrecipe from './addrecipe';
import React from "react";


// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

// export default function Main() {
//   const [role, setRole] = useState("");

//   Axios.defaults.withCredentials = true;
//   useEffect(() => {
//     Axios.get("http://localhost:3001/login").then((response) => {
//       if (response.data.loggedIn == true) {
//         setRole(response.data.user[0].role);
//       }
//     });
//   }, []);

//   return (
//     <div>
//       {role == "visitor" && <NormalUser />}
//       {role == "mod" && <Mod />}
//       {role == "admin" && <Admin />}
//     </div>
//   );
// }

function main() {
    // if(!authorized){
    //     return <Redirect to="/" />
    // { authorized }
    // }
  return(
  <div>
  <Header /> 
  <Home />
  <Addrecipe />
  <Footer />
  </div>
  );
    
}

export default main;