import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function DashBoard(){
    const session = await getServerSession();

    if (!session) {
        // Redirect to login if not authenticated
        redirect("/login");
    }

    return <UserInfo/>;
}