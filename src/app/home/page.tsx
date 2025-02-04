import Navigation from "../components/navigation/navbar";

export default function Home() {
    return (
        //p = padding
        //m = margin | ml = margin left | mt = margin top
        <main id="content" className="container mx-auto max-w-screen-xxl">
            <div className="mt-[2%] mb-[2%]">
                <Navigation />
            </div>
            <span className="mt-10 relative flex justify-center bg-white w-full border-b"></span>
            <div className="">
                <p className="m-[1%] text-8xl text-center p-5  font-mono hover:font-serif hover:italic">
                    Welcome To Dave's Page
                </p>
            </div>
            <span className="relative flex justify-center bg-white w-full border-b"></span>
        </main>
);
}