import Gallery from "@/components/Gallery/Gallery";

export default function LaptopsPage() {
    return (
        <div>
            <div className="bg-black relative flex justify-start items-center">
                <img
                    src="https://www.apple.com/v/macbook-pro/ak/images/overview/welcome/welcome_hero_endframe__66ipqm3o5gyu_large.jpg"
                    className="min-h-[30rem] w-full object-cover opacity-50 md:aspect-[16/6]"
                />
                <div className="absolute px-5 md:px-20 w-full">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
                        Laptops
                    </h1>
                    <p className="text-white lg:text-2xl text-balance lg:w-[30rem]">
                        The most powerful and comfortable laptops, here in Emm's Computers
                    </p>
                </div>
            </div>
            <Gallery category="Laptop" />
        </div>
    );
}