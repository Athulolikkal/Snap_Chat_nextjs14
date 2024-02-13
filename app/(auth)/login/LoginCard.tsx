'use client'
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { authAction } from "@/lib/action";
import { useFormState, useFormStatus } from "react-dom";

function LoginButton() {
  const { pending } = useFormStatus()
  return (
    <Button className="w-full flex gap-2" disabled={pending}>
      <Image src={"/github.svg"} alt="git hub" width={20} height={20} />
      Log in with Github
    </Button>
  );
}

const login_card = () => {
  const [errorMessage, dispatch] = useFormState(authAction, undefined)
  return (
    <>
      <form action={dispatch} className="space-y-4">
        <LoginButton />
      </form>
      <div className="mt-4 text-center text-[13px]">
        <span>New To SnapChat?</span>
        <Link
          className="text-blue-500 hover:underline text-[13px] mr-1"
          href={"/signup"}
        >
          Sign Up
        </Link>
        {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : null}
      </div>
    </>
  );
};

export default login_card;
