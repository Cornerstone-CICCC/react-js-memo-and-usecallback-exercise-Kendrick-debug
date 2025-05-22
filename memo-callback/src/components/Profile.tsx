import { memo } from "react"


type Props = {
    firstname: string
    lastname: string
}

const Profile = memo( ({ firstname, lastname }: Props) => {
    console.log("Rendered Profile Component")



  return (
    <div>
        <h1>Profile</h1>
        <h2> {firstname}</h2>
        <h2> {lastname}</h2>
    </div>
  )
})

export default Profile