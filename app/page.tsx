import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#FCD0A1] relative overflow-hidden">
          <Image
            src="/mobile-app.png"
            alt="Mobile App Screenshots"
            fill
            className="object-contain mt-8 md:mt-24 px-14 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            <b>Boost Your Resume</b> <br></br>
            From overlooked to <br></br>interview-ready in minutes.
          </h1>
          <p className="text-gray-500">
            <i>One resume doesn't fit all.</i>
            <br></br> Empowering job seekers with AI-driven resume optimization
            to land their dream jobs.
          </p>

          <p className="text-gray-500">
            Join the waitlist to be notified when <b>BoostYourResume</b> is
            available!
          </p>
          <EmailForm />
        </main>
      </section>
    </>
  );
}
