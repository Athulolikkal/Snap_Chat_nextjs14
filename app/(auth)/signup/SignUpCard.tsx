import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

function SignUpButton() {
    return (
        <Button className='w-full flex gap-2'>
            <Image src={'/github.svg'} alt="git hub" width={20} height={20} />
            Sign up with Github
        </Button>
    )

}

const signUp_card = () => {
    return (
        <>
            <form className="space-y-4">
                <SignUpButton />
            </form>
            <div className="mt-4 text-center text-[13px]">
                <span>Already have an account?</span>
                <Link className="text-blue-500 hover:underline text-[13px] mr-1" href={'/login'}>
                    Login
                </Link>
            </div>
        </>
    )
}

export default signUp_card