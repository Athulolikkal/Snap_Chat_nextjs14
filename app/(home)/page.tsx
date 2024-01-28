import Image from "next/image";
import Navbar from '@/components/shared/navbar'
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  const auth = false;
  return (
    <main className="bg-[#fffc00]">
      <div className='min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto'>
        <Navbar />
        <main className='flex flex-1 flex-col md:flex-row items-center justify-center px-8 mt-4 '>
          <div className='flex-1 md:text-left text-center h-full'>
            <h1 className='text-4xl md:text-6xl font-bold'>SnapNext 4 Programmers!</h1>
            <p className='mt-4 text-xl font-semibold'>
              Share your code with friends to get feedback and imporve your code .
            </p>
            <div className='mt-4'>
              <p className='mt-2 text-lg font-semibold'>What are you waiting for?</p>
            </div>
            <Button asChild className='mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'>
              {!auth ?
                (<Link href={'/login'} className="max-w-max">
                  <Image src='/logo.svg' alt="sanpchat logo" width={20} height={20} loading="lazy" />
                  Log in explore
                </Link>) :
                (<Link href={'/chat'} className="max-w-max">
                  <Image src='/logo.svg' alt="sanpchat logo" width={20} height={20} loading="lazy" />
                  Start chatting
                </Link>)
              }
            </Button>
          </div>
          <div className='flex-1 md:w-full md:flex'>
            <Image alt="avatar" width={651} height={651} src='/hero.png' loading="lazy" />
          </div>
        </main>
      </div>
    </main>
  );
}
