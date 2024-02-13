
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "@/auth";
import { logoutAction } from "@/lib/action";


const logout_button = () => {

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
