import Image from "next/image"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoutButton from "./logout-button"
import { auth } from "@/auth";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="w-full py-4 px-8 flex justify-between items-center">
            <Image src='/logo.svg' alt="snapchat logo" width={40} height={40} className="cursor-pointer" />
            <div className='flex space-x-1'>
                <Button className="bg-transparent hover:bg-primary/5 text-black">Stories</Button>
                <Button className="bg-transparent hover:bg-primary/5 text-black">Spotlight</Button>
                <Button asChild className="bg-transparent hover:bg-primary/5 text-black">
                    <Link href={'/chat'}>Chat</Link>
                </Button>
            </div>
            <div className="flex space-x-2">
                <Button className="bg-black text-white rounded-full p-3 text-xs md:text-sm">Watch tutorial</Button>
                {session && <LogoutButton />}
            </div>
        </header>
    )
}

export default Navbar;