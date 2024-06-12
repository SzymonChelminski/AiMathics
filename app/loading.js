export default function loading() {
  return (
    <main className="flex h-[93vh] animate-pulse flex-col items-center justify-between px-10 py-[4vh]">
      <section className="h-[12vh] w-full rounded-2xl bg-[#D9D9D9]"></section>
      <section className="grid w-full gap-[2.25vh] *:h-[2.25vh] *:rounded-full *:bg-[#D9D9D9] ">
        <hr className="w-[80%]" />
        <hr className="w-[100%]" />
        <hr className="w-[60%]" />
      </section>
      <section className="h-[40vh] w-full rounded-3xl bg-[#D9D9D9]"></section>
      <section className="h-[8vh] w-full rounded-full bg-[#D9D9D9]"></section>
    </main>
  );
}
