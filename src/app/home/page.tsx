
export default function Home() {
    return (
        //p = padding
        //m = margin | ml = margin left | mt = margin top
        <main id="content" className="container mx-auto max-w-screen-xxl">
            <span className="mt-10 relative flex justify-center bg-white w-full border-b"></span>
            <div className="mt-[5%] mb-[5%]">
                <p className="text-7xl text-center p-5  font-mono hover:font-serif hover:italic">
                    Welcome To Dave's Page
                </p>
            </div>
            <span className="relative flex justify-center bg-white w-full border-b"></span>
            <div className="grid grid-cols-3 gap-4">
                <div className="mt-[5%] col-span-2 text-center font-mono">
                    <h1 className="text-5xl">Who Am I?</h1>
                    <p className="mt-6 text-xl">My name is David Maguire and I am a Full Stack Software Developer.<br/>
                    I graduated from Sacred Heart University in 2022 with a Bachelor's <br/>in Computer Science and CyberSecurity.</p>
                </div>
                <div className="">
                    <img className="w-10 h-10 rounded-full" src="C:\git\dave-page\src\app\dave_25.jpg"></img>
                </div>
            </div>
        </main>
);
}