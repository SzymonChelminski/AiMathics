//Images
import Image from "next/image";

//Links
import Link from "next/link";

export default function page() {
  return (
    <section className="mb-[10vh] flex min-h-[85vh] flex-col items-center justify-between bg-white text-center sm:mb-0 sm:min-h-[95vh] sm:justify-between">
      <h1 className="pt-[5vh] text-[1.75em] font-medium text-[#383636] sm:hidden">
        We spread knowledge <br />
        through <span className="text-[#2B60EA]">solutions</span>.
      </h1>
      <section className="hidden flex-col items-center justify-between gap-6 sm:mt-[3vh] sm:flex lg:text-[1.25em] 2xl:mt-[1vh]">
        <h1 className="hidden text-[4.5em] font-medium sm:block">
          Learning Math <br /> Made{" "}
          <span className="text-[#2B60EA]">simple</span>.
        </h1>
        <h4 className="hidden text-[1.25em] font-medium text-[#4B4747] sm:block">
          Let your personal <i>ai-teacher</i> make notes, solve <br /> and
          explain each task at any moment.
        </h4>
        <Link href={"/InputPage"} className="mt-5 flex gap-12">
          <button className="rounded-full border-[3px] border-[#2B60EA] bg-[#2B60EA] px-10 py-2 text-[1.25em] font-semibold text-white">
            Get Started
          </button>
          <button className="rounded-full border-[3px] border-[#2B60EA] px-10 py-2 text-[1.25em] font-semibold">
            Learn More
          </button>
        </Link>
      </section>
      <Image
        src="/homePage.jpg"
        width={350}
        height={350}
        alt="analyst showing data on a computer screen"
        priority={true}
        quality={90}
        className="block sm:hidden"
      />
      <h6 className="my-[50px] hidden w-[75vw] text-[1.2em] font-medium text-[#4B4747] sm:block lg:text-[1.5em] xl:w-[1000px] xl:py-[25px] 2xl:max-w-[1000px]">
        Discover AI-Mathics, where a chatbot makes learning math easy and fun.
        Personalized tutoring at your fingertips, tailored to your pace.
        Transform your math skills with AI-Mathics today!
      </h6>
      <Image
        src="/chat.png"
        width={9999999}
        height={9999999}
        alt="chat picture"
        priority={true}
        quality={100}
        className="relative -z-[0] hidden w-[85vw] rounded-t-2xl drop-shadow-2xl sm:block lg:w-[75vw] lg:rounded-t-3xl 2xl:w-[1200px]"
      />
      <Link href={"/InputPage"} className="sm:hidden">
        <button className="mb-3 h-[60px] w-[280px] rounded-full bg-[#2B60EA] font-semibold text-white">
          Get Started
        </button>
        <p className="text-[0.85em] font-semibold sm:hidden">
          Do you have an account? <span className="text-[#2B60EA]">Signup</span>
        </p>
      </Link>
    </section>
  );
}
