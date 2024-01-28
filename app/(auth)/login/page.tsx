import Image from "next/image"
import Link from "next/link"
import LoginCard from "./LoginCard"

const Loginpage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">Log in to Snapchat</h1>
      <LoginCard />
    </>

  )
}

export default Loginpage