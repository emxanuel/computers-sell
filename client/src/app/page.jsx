import Gallery from "@/components/Gallery/Gallery";
import { getComputers } from "@/functions/computers";

export default function Home() {
    return (
        <div className="flex-1 flex flex-col gap-10">
            <div className="bg-black relative flex justify-center">
                <img
                    className="min-h-[30rem] w-full object-cover opacity-50 md:aspect-[16/6]"
                    src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/campaign/alienware/gaming/awr16-aw2723df-aw420k-aw620m-aw720h-xml-pl-gaminggetaway-front-2560x1440.jpg?fmt=png-alpha&wid=2560&hei=1440"
                    alt=""
                />
                <div className="absolute top-[5vw]">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                        Welcome to Emm's Computers
                    </h1>
                    <p className="text-white text-center">
                        We have the best computers in the world
                    </p>
                </div>
            </div>
            <div className="px-8 md:px-36">
                <h2 className="text-4xl font-bold ">See our products</h2>
                <Gallery />
            </div>
        </div>
    );
}
