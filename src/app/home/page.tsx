import Navigation from "../../components/navigation/navbar";
import Image from "next/image";
import davePic from "../../../public/davepic.png";

export default function Home() {
    return (
        // p = padding
        // m = margin | ml = margin left | mt = margin top
        <main id="content" className="container mx-auto max-w-screen-xxl">
            <span className="mt-10 relative flex justify-center bg-white w-full border-b"></span>
            <div className="flex flex-col md:grid md:grid-cols-9">
                <div className="col-start-2 mt-5 ml-40 md:ml-0 relative w-36 h-36">
                    <Image
                        src={davePic}
                        alt="Picture of David Maguire"
                        className="rounded-full"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="col-span-5 text-center col-start-3 m-1 text-8xl p-5 font-mono">
                    <p>David Maguire</p>
                    <p className="text-4xl mt-3">Full Stack Developer</p>
                </div>
            </div>
            <span className="relative flex justify-center bg-white w-full border-b"></span>

            <div className="flex justify-center flex-col md:grid md:grid-cols-4 mt-5 text-center">
                <div className="col-start-1 text-xl">
                    <p>Button 1</p>
                </div>
                <div className="col-start-2 text-xl">
                    <p>Button 2</p>
                </div>
                <div className="col-start-3 text-xl">
                    <p>Button 3</p>
                </div>
                <div className="col-start-4 text-xl">
                    <p>Button 4</p>
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                yes
            </div>
        </main>
    );
}