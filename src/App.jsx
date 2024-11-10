import UserContextProvider from "./UserContextProvider"
import Signup from "./Signup"
import Profile from "./Profile"
function App() {

  return (
  <UserContextProvider>
  <Signup></Signup>
  <Profile></Profile>
  </UserContextProvider>
  )
}

export default App
