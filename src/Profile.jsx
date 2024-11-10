import { useContext } from "react";
import UserContext from "./UserContext";

function Profile(){
    const {User}=useContext(UserContext)
    console.log("from profile user is",User)
    if(!User){
        return (
            <div>
                <h3>Please Login</h3>
            </div>
        )
    }

    return (
        <div>
            <h1>hello {User.name} !</h1>
            
            
        </div>
    )
}
export default Profile;