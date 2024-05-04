"use client";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

//Image
import Image from "next/image";

//Authentication
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="sticky top-0 z-[999] flex w-full items-center justify-between bg-white px-6 py-4">
      <h1 className="cursor-pointer text-[1.75em] font-semibold xl:text-[2em]">
        <span className="text-[#2B60EA]">Ai</span>Mathics
      </h1>
      <label className="group peer flex flex-col gap-[5px] duration-150 has-[:checked]:mr-[125px] lg:hidden">
        <input type="checkbox" name="bar" className="hidden" />
        <span className="relative h-[5px] w-[32px] rounded-full bg-black duration-300 group-has-[:checked]:translate-y-[10px] group-has-[:checked]:rotate-45 group-has-[:checked]:bg-[#2B60EA]"></span>
        <span className="h-[5px] w-[32px] rounded-full bg-[#2B60EA] duration-150 group-has-[:checked]:opacity-0"></span>
        <span className="relative h-[5px] w-[32px] rounded-full bg-black duration-300 group-has-[:checked]:-translate-y-[10px]  group-has-[:checked]:-rotate-45"></span>
      </label>
      <section className="fixed -right-[135px] bottom-0 flex h-full w-[135px] flex-col items-center justify-between bg-[#E2EAFF] py-6 duration-200 peer-has-[:checked]:-right-[0px] lg:hidden">
        <section className="flex flex-col gap-11">
          <div className="flex flex-col items-center gap-3">
            {status === "authenticated" ? (
              <>
                <Image
                  src={session.user.image}
                  height={75}
                  width={75}
                  alt="profile picture"
                  className="rounded-full outline outline-offset-2 outline-[#2B60EA]"
                />
                <h3 className="max-w-[90px] text-center font-semibold">
                  {session.user.name}
                </h3>
                <button
                  className="h-[35px] w-[85px] rounded-md bg-[#f15555] font-medium text-white"
                  onClick={() => signOut()}
                >
                  sign out
                </button>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="h-[75px] text-[#2B60EA]"
                />
                <h3 className="max-w-[90px] font-semibold">Guest</h3>
                <button
                  className="h-[35px] w-[80px] rounded-md bg-[#2B60EA] font-medium text-white"
                  onClick={() => signIn()}
                >
                  sign in
                </button>
              </>
            )}
          </div>
          <div className="flex flex-col text-[1.15em] font-medium">
            <span className="text-[#4B4747]">Company</span>
            <span className="text-[#4B4747]">About</span>
            <span className="text-[#4B4747]">Features</span>
            <span className="text-[#4B4747]">Pricing</span>
          </div>
        </section>
        <small className="font-semibold">
          <span className="text-[#2B60EA]">Ai</span>Mathics 1.0
        </small>
      </section>
      <section className="hidden items-center gap-10 *:cursor-pointer *:font-medium lg:flex xl:*:text-[1.25em]">
        <span className="text-[#4B4747]">Company</span>
        <span className="text-[#4B4747]">About</span>
        <span className="text-[#4B4747]">Features</span>
        <span className="text-[#4B4747]">Pricing</span>
        {status === "authenticated" ? (
          <span className="flex items-center gap-5">
            <Image
              src={session.user.image}
              height={40}
              width={40}
              alt="profile picture"
              className="rounded-full outline outline-offset-2 outline-[#2B60EA]"
              onClick={() => signOut()}
            />
            <h3 className="text-[1.25em] font-semibold">{session.user.name}</h3>
          </span>
        ) : (
          <>
            <input
              type="button"
              value="Sign in"
              className="h-[36px] w-[100px] rounded-xl bg-[#2B60EA] text-white lg:ml-2 xl:ml-4 xl:h-[42px] xl:w-[115px]"
              onClick={() => signIn()}
            />
          </>
        )}
      </section>
    </nav>
  );
}
