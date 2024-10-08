import Signin from "@/components/Signin";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { SigninJsx } from "@/components/src-components-signin";

export default async function Login(){
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  
  return <SigninJsx/>;
}