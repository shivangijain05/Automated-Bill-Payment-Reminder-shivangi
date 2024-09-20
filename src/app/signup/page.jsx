import Register from "@/components/Signup";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return <Register/>;
}