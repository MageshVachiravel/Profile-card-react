import reactDOM from "react-dom/client"
import ProfileCard from "./ProfileCard"
import "./assets/css/style.css"
import { user } from "./ProfileCard"

const root = reactDOM.createRoot(document.querySelector("#root"))

root.render(
  <>
    {user.map((users) => {
      return(
        <ProfileCard name={users.name} place={users.place} position={users.position}
      status={users.status} image={users.image} skills={users.skills} />
      )
    })}
  </>
)
