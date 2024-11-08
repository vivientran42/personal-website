import Head from "next/head";
import Inline from "@/components/inline";

export default function About() {
  return (
    <div className="bg-stone-50">
      <Head>
        <link rel="preload" href="/me.jpeg" as="image" />
        <link rel="preload" href="/laptop.jpeg" as="image" />
        <link rel="preload" href="/icecream.jpeg" as="image" />
        <link rel="preload" href="/ciudad.jpeg" as="image" />
        <link rel="preload" href="/book.jpeg" as="image" />
        <link rel="preload" href="/spotify.jpeg" as="image" />
      </Head>
      <div className="flex min-h-screen flex-col items-start px-36 py-16 mb-12 bg-stone-50">
        <Inline
          text={
            <h1 className="text-slate-600 text-3xl leading-relaxed">
              Hello! I'm Vivien.{" "}
            </h1>
          }
          bullet={false}
          imageSrc="/me.jpg"
          imageAlt="Picture of the author"
        />

        <h1 className="text-slate-600 text-3xl leading-relaxed">
          A software engineer living in Melbourne/Naarm, Australia.
        </h1>

        <Inline
          text={
            <h1 className="text-slate-600 text-3xl leading-relaxed">
              Currently working at{" "}
              <a
                href="https://www.anz.com.au/plus/"
                target="_blank"
                className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
              >
                ANZ Plus
              </a>{" "}
              on the{" "}
              <a
                href="https://www.anz.com.au/plus/benefits/add-ons/"
                target="_blank"
                className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
              >
                Add-Ons feature
              </a>
              .
            </h1>
          }
          bullet={false}
          imageSrc="/laptop.jpg"
          imageAlt="Picture of the author"
        />

        <br></br>
        <br></br>

        <h1 className="text-slate-600 text-3xl leading-relaxed">
          I love problem solving and working on products that I care about.
        </h1>

        <br></br>
        <br></br>

        <h1 className="text-slate-600 text-3xl leading-relaxed">
          Some other things I enjoy:
        </h1>
        <Inline
          text={
            <h1 className="text-slate-600 text-3xl leading-relaxed">
              <a
                href={`/designing`}
                className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
              >
                Graphic design
              </a>
            </h1>
          }
          bullet={true}
        />
        <Inline
          text={
            <h1 className="text-slate-600 text-3xl leading-relaxed">
              Ice cream{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/icecream.jpg"
          imageAlt="Picture of the author"
        />
        <Inline
          text={
            <h1 className="text-slate-600 text-3xl leading-relaxed">
              Architecture / interior design{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/ciudad.jpg"
          imageAlt="Picture of the author"
        />
        <Inline
          text={
            <h1 className="text-slate-600 text-3xl leading-relaxed">
              Reading{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/book.jpg"
          imageAlt="Picture of the author"
        />
        <Inline
          text={
            <h1 className="text-slate-600 text-3xl leading-relaxed">
              <a
                href="https://letterboxd.com/nizainali/list/slice-of-life/"
                target="_blank"
                className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
              >
                Slice of life movies
              </a>
            </h1>
          }
          bullet={true}
        />
        <Inline
          text={
            <h1 className="text-slate-600 text-3xl leading-relaxed">
              Listening to music all day{" "}
            </h1>
          }
          bullet={true}
          imageSrc="/spotify.jpg"
          imageAlt="Picture of the author"
        />
      </div>
    </div>
  );
}
