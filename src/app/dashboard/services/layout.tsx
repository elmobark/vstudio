import { ScrollArea } from "~/components/ui/scroll-area";

export default function ServicesLayout(
    {children}: {children: React.ReactNode}
) {
    return (
        <ScrollArea>

{children}
        </ScrollArea>
    );
    }