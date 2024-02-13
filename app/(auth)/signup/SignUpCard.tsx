"use client"
import { Button } from "@/components/ui/button";
import { authAction } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";


function SignUpButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full flex gap-2" disabled={pending}>
      <Image src={"/github.svg"} alt="git hub" width={20} height={20} />
      Sign up with Github
    </Button>
  );
}

const signUp_card = () => {
  const [errorMessage, dispatch] = useFormState(authAction, undefined)
  return (
    <>
      <form action={dispatch} className="space-y-4">
        <SignUpButton />
      </form>
      <div className="mt-4 text-center text-[13px]">
        <span>Already have an account?</span>
        <Link
          className="text-blue-500 hover:underline text-[13px] mr-1"
          href={"/login"}
        >
          Login
        </Link>
        {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : null}
      </div>
    </>
  );
};

export default signUp_card;
