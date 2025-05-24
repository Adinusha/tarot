import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Page() {
    const session = await auth.api.getSession({
        headers: await headers()
     });
    if  (!session){
        return <p className="text-destructive">Unauthorized</p>
    }
  return (
    <div>
      <h1>Profile</h1>
      <p>This is the profile page.</p>
    </div>
  );
}