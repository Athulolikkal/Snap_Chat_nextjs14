import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

function LoginButton() {
    return (
        <Button className='w-full flex gap-2'>
            <Image src={'/github.svg'} alt="git hub" width={20} height={20} />
            Log in with Github
        </Button>
    )

}

const login_card = () => {
    return (
        <>
            <form className="space-y-4">
                <LoginButton />
            </form>
            <div className="mt-4 text-center text-[13px]">
                <span>New To SnapChat?</span>
                <Link  className="text-blue-500 hover:underline text-[13px] mr-1" href={'/signup'}>
                    Sign Up
                </Link>
            </div>
        </>
    )
}

export default login_card