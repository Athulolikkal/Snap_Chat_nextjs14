"use server";
import { signIn, signOut } from "@/auth";

export async function authAction() {
  try {
    await signIn("github");
  } catch (err: any) {
    if (err.message === "NEXT_REDIRECT") {
        throw err;
      }
      return err.message;
    }
  }


export async function logoutAction() {
  try {
    await signOut();
    
  } catch (err: any) {
    if (err.message === "NEXT_REDIRECT") {
      throw err;
    }
    return err.message;
  }
}
