export default function loading() {
  return (
    <main className="h-[93vh] py-[4vh] px-10 flex flex-col items-center justify-between animate-pulse">
          <section className="h-[12vh] w-full rounded-2xl bg-[#D9D9D9]"></section>
          <section className="w-full grid gap-[2.25vh] *:h-[2.25vh] *:rounded-full *:bg-[#D9D9D9] ">
            <hr className="w-[80%]"/>
            <hr className="w-[100%]"/>
            <hr className="w-[60%]"/>
          </section>
          <section className="h-[40vh] w-full rounded-3xl bg-[#D9D9D9]"></section>
          <section className="h-[8vh] w-full rounded-full bg-[#D9D9D9]"></section>
        </main>
      )
}
