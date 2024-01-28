import Image from "next/image"
import Link from "next/link"
import SignupCard from "./SignUpCard"

const page = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">Sign up to Snapchat</h1>
      <SignupCard />
    </>
  )
}

export default page