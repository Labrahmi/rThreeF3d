import Navbar from "@/app/components/sections/Navbar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <main className="max-w-7xl p-4 mx-auto font-montserrat selection:bg-zinc-200 selection:text-zinc-900">
      <Navbar />
      <section className="py-32 w-full flex justify-center">
        <div className="w-fit font-black text-zinc-800 dark:text-zinc-300 text-left max-w-3xl">
          <h1 className="md:text-4xl text-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-zinc-100 dark:to-zinc-400 from-zinc-800 to-zinc-500">
              Human software engineer
            </span>
          </h1>
          <h1 className="md:text-3xl text-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-zinc-100 dark:to-zinc-400 from-zinc-800 to-zinc-500">
              with passion for converting ideas into reality
            </span>
          </h1>
          <h2 className="font-normal py-1 text-sm md:text-base">
            with one year of experience in software development, I love building
            solutions that solve real-world problems, and I'm always looking for
            new challenges to take on.
          </h2>
        </div>
        <div className="pointer-events-none opacity-50 absolute inset-0 z-[-1] h-screen bg-grid-pattern mask-gradient"></div>
      </section>
      <section className="flex flex-col items-center">
        <h1 className="animate-pulse font-bold text-zinc-700 text-xl">Portfolio is Loading..</h1>
      </section>
    </main>
  );
}
