import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "@/auth";

const logout_button = () => {
    async function logoutAction(){
        "use server"
        await signOut()

    }
  return (
    <>
      <form action={logoutAction}>
        <Button>
          <LogOut className="cursor-pointer" />
        </Button>
      </form>
    </>
  );
};

export default logout_button;
