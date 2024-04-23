import Image from "next/image"

export default function page() {
  return (
    <section className="h-[85vh] flex flex-col items-center justify-between text-center mb-[10vh] sm:mb-0 sm:justify-between sm:min-h-[95vh]">
      <h1 className="text-[1.75em] text-[#383636] font-medium pt-[5vh] sm:hidden">We spread knowledge <br />
      through <span className="text-[#2B60EA]">solutions</span>.</h1>
      <section className="hidden sm:flex flex-col items-center justify-between gap-6 lg:text-[1.25em] sm:mt-[3vh]">
        <h1 className="hidden sm:block text-[4.5em] font-medium">Learning Math <br/> Made <span className="text-[#2B60EA]">simple</span>.</h1>
        <h4 className="hidden sm:block text-[1.25em] font-medium text-[#4B4747]">Let your personal <i>ai-teacher</i> make notes, solve <br /> and explain each task at any moment.</h4>
        <section className="flex gap-12 mt-5">
          <button className="text-[1.25em] font-semibold border-[3px] border-[#2B60EA] rounded-full py-2 px-10 lg:bg-[#2B60EA] lg:text-white">Get Started</button>
          <button className="text-[1.25em] font-semibold border-[3px] border-[#2B60EA] rounded-full py-2 px-10">Learn More</button>
        </section>
      </section>
      <Image
        src='/homePage.jpg'
        width={350}
        height={350}
        alt="analyst showing data on a computer screen"
        priority={true}
        quality={90}
        className="block sm:hidden"
      />
      <h6 className="w-[75vw] text-[1.2em] lg:text-[1.5em] font-medium text-[#4B4747] hidden sm:block my-[50px]">
        Discover AI-Mathics, where a chatbot makes learning math easy and fun. Personalized tutoring at your fingertips, tailored to your pace. Transform your math skills with AI-Mathics today!
      </h6>
      <Image
        src='/chat.png'
        width={350}
        height={350}
        alt="chat picture"
        priority={true}
        quality={100}
        className="hidden sm:block w-[85vw] rounded-t-2xl lg:rounded-t-3xl drop-shadow-2xl relative -z-[9999]"
      />
      <span className="sm:hidden">
        <button className="w-[280px] h-[60px] text-white font-semibold rounded-full bg-[#2B60EA] mb-3">Get Started</button>
        <p className="text-[0.85em] font-semibold sm:hidden">Do you have an account? <span className="text-[#2B60EA]">Signup</span></p>
      </span>
    </section>
  )
}