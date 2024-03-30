import Gallery from "@/components/Gallery/Gallery";
import { getComputers } from "@/functions/computers";

export default function Home() {
    return (
        <div className="flex-1 flex flex-col">
            <Gallery />
        </div>
    );
}
