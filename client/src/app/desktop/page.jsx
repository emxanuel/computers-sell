import Gallery from "@/components/Gallery/Gallery";

export default function DesktopsPage() {
    return (
        <div>
            <div className="bg-black relative flex justify-start items-center">
                <img
                    src="https://www.omen.com/content/dam/sites/omen/worldwide/desktops/2022-desktop-home-2-0/background1.png"
                    alt="Desktop PCs"
                    className="min-h-[30rem] w-full object-cover opacity-50 md:aspect-[16/6]"
                />
                <div className="absolute px-5 md:px-20">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
                        Desktop PCs
                    </h1>
                    <p className="text-white text-center lg:text-2xl text-balance">
                        Our catalog of the best desktop computers
                    </p>
                </div>
            </div>
            <Gallery category="Desktop" />
        </div>
    );
}
