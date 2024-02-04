import person1 from "./assets/images/person1.jpg"
import person2 from "./assets/images/person3.jpg"
import person3 from "./assets/images/person2.jpg"

const user = [
    {
        name:"Mike",
        place:"Chennai",
        position:"MERN Stack Developer",
        skills:["UI / UX","front-end developer","HTML","CSS","JavaScript","React","Node"],
        status:true,
        image:person1,
    },
    {
        name:"James",
        place:"Chennai",
        position:"Java Full Stack Developer",
        skills:["front-end developer","HTML","CSS","JavaScript","React","Node","Java"],
        status:true,
        image:person2,
    },
    {
        name:"Robert",
        place:"pudukottai",
        position:"full stack developer",
        skills:["front-end developer","HTML","CSS","JavaScript","React","Node"],
        status:false,
        image:person3,
    },

]


const ProfileCard = (props) => {
    return (
        <>
        <div className="card-container">
            <span className={props.status?"online":"offline"}>{props.status?"Online":"Offline"}</span>
            <img src={props.image} alt="person1"></img>
            <h3>{props.name}</h3>
            <h3>{props.place}</h3>
            <p>{props.position}</p>
            <div className="btn">
                <button className="primary">Message</button>
                <button className="outline">Following</button>
            </div>
            <div className="skills">
                <h5>Skills</h5>
                <ul>
                    {
                        props.skills.map((skill)=>{
                            return(<li>{skill}</li>)
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}


export default ProfileCard
export { user }