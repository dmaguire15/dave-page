import Navigation from "../components/navigation/navbar";

export default function Home() {
  return (
      //p = padding
      //m = margin | ml = margin left | mt = margin top
      <main id="content" className="container mx-auto max-w-screen-xxl">
          <div className="m-[2%]">
            <Navigation />
          </div>
          <div className="grid grid-cols-5 gap-4">
              <div className="mt-[5%] col-span-3 col-start-2 text-center font-mono">
                  <h1 className="text-5xl">About Me</h1>
                  <div className="mt-6 text-2xl">
                    <p>Hi, I'm David Maguire!<br/></p>
                    <br/>
                    <p>I'm a software developer based in the United States with a passion<br/></p>
                    <p>for programming! Whether it be web applications, database management,<br/></p>
                    <p>or even front end projects, if you can think it, I can build it.<br/></p>
                    <p>I love to learn and tackle complex projects whenever I can.</p>
                    <br/>
                    <p>When I'm not coding, I'm probably in the gym, learning new recipies<br/></p>
                    <p>to cook, or traveling as often as I am able.</p>

                  </div>
              </div>

          </div>
      </main>
);
}