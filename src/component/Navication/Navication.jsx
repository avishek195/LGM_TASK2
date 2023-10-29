import { Link, Outlet } from "react-router-dom";


import "./navication.styles.css"

const Navication = ({changeLink, count, countset}) => {
    const getNewUser = () => {
        countset(count+1);
        if(count===3){
            countset(1)
            return;
        }
        changeLink(`https://reqres.in/api/users?page=${count}`)
    }
    return (
        <>
        <div className="nav-container">
            {/* <img src="" alt="" srcset="" /> */}
            <div className="imgs">LOGO</div>
            <Link to="/home">
               <button className="btn" onClick={getNewUser}>Get User</button>
            </Link>
        </div>
        <Outlet/>
        </>
    )
}

export default Navication;