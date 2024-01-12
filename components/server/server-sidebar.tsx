import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface ServerSidebarProps {
    serverId: string
}
const ServerSidebar = async ({
    serverId
}:ServerSidebarProps) => {
    const profile = currentProfile();

    if(!profile){
        return redirect("/");
    }

    const server = await db.server.findUnique({
        where: {
            id: serverId
        },
        include: {
            channels: {
                orderBy: {
                    createdAt: "asc"
                }
            }
        }
    })

    return ( 
        <div>
            server sidebar component
        </div>
     );
}
 
export default ServerSidebar;