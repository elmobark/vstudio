"use client";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function PortalButton() {
    const router = useRouter();
    return (
        <>
            <Button
            onClick={()  => {
                
                router.push("/dashboard");
            }
            }
            >Dashboard</Button>
        </>
    );
}