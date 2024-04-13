import Image from "next/image"

export default function page() {
  return (
    <section className="h-[85vh] flex flex-col items-center justify-between text-center mb-[10vh]">
      <h1 className="text-[1.75em] text-[#383636] font-medium pt-[5vh]">We spread knowledge <br />
      through <span className="text-[#2B60EA]">solutions</span>.</h1>
      <Image
        src='/homePage.jpg'
        width={350}
        height={350}
        alt="analyst showind data on a computer screen"
        priority={true}
        quality={90}
      />
      <span>
        <button className="w-[280px] h-[60px] text-white font-semibold rounded-full bg-[#2B60EA] mb-4">Get Started</button>
        <p className="text-[0.85em] font-semibold">Do you have an account? <span className="text-[#2B60EA]">Signup</span></p>
      </span>
    </section>
  )
}