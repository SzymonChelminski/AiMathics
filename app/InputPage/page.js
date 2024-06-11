"use client";

//Image
import Image from "next/image";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCircleArrowRight,
  faCircleInfo,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";

//autoTextArea
import TextareaAutosize from "react-textarea-autosize";

//Ai
import { useChat } from "ai/react";

//ProfilePicture
import { useSession } from "next-auth/react";

//ImageRecognition
import { createWorker } from "tesseract.js";

//State
import { useState, useEffect } from "react";

export default function InputPage() {
  const { data: session, status } = useSession();
  const [imgSrc, setImgSrc] = useState("");

  const { messages, input, setInput, handleInputChange, handleSubmit } =
    useChat({
      initialMessages: [
        {
          id: Date.now().toString(),
          role: "system",
          content:
            "Behave like an understanding math teacher. Your goal is to make math easy to comprehend by solving and explaining mathematical tasks. To make your explanations clear, make sure to make parahraphs or even gaps beteween major parts of each tasks. It's crucial you understand all languages and answer only mathematical questions.",
        },
      ],
    });

  useEffect(() => {
    (async () => {
      if (imgSrc) {
        const worker = await createWorker("pol");
        const ret = await worker.recognize(imgSrc);
        setInput(ret.data.text);
        await worker.terminate();
      }
    })();
  }, [imgSrc, setInput]);

  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-between pb-14 pt-8 text-center font-medium md:min-h-[93vh] lg:min-h-[95vh] xl:pt-10">
      <section className="items-center block gap-5 px-10 md:mb-12 md:flex xl:w-full">
        {status === "authenticated" ? (
          <>
            <Image
              src={session.user.image}
              width={100}
              height={100}
              alt="profile picture"
              className="mb-2 rounded-full outline outline-offset-2 outline-[#2B60EA]"
            />
            <span className="flex-col md:flex md:items-start">
              <h2 className="text-[1.25em] md:font-semibold">
                {session.user.name}
              </h2>
              <h3 className="hidden text-[1.25em] md:block">
                {session.user.email}
              </h3>
            </span>
            <span className="hidden gap-6 ml-auto xl:flex">
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="h-[40px] text-[#2B60EA] cursor-help"
              />
              <FontAwesomeIcon
                icon={faFlag}
                className="h-[40px] text-[#2B60EA] cursor-pointer"
              />
            </span>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faCircleUser}
              className="mb-2 text-[100px] text-[#2B60EA]"
            />
            <span className="flex-col items-start md:flex">
              <h2 className="text-[1.25em] md:font-semibold">User</h2>
              <h3 className="hidden text-[1.25em] md:block">
                user@example.com
              </h3>
            </span>
            <span className="hidden gap-6 ml-auto xl:flex">
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="h-[40px] text-[#2B60EA] cursor-help"
              />
              <FontAwesomeIcon
                icon={faFlag}
                className="h-[40px] text-[#2B60EA] cursor-pointer"
              />
            </span>
          </>
        )}
      </section>
      <FontAwesomeIcon
        icon={faComments}
        className="absolute left-[50%] top-[50%] -z-10 hidden h-[clamp(30vh,40vh,50vh)] -translate-x-[50%] -translate-y-[50%] text-[#e8e8e8] md:block"
      />
      <form onSubmit={handleSubmit} id="inputForm" className="md:order-2">
        <h2 className="mb-12 pt-10 text-[1.5em] text-[#4B4747] md:hidden">
          Provide question, <br /> obtain the
          <span className="text-[#2B60EA]"> answer</span>.
        </h2>
        <span className="mb-14 flex min-h-[50px] w-[250px] overflow-hidden rounded-lg bg-[#E2EAFF] p-2 outline outline-offset-4 outline-[#2B60EA] md:mb-0 md:mt-14 md:w-[500px] md:bg-transparent">
          <TextareaAutosize
            className="my-auto bg-transparent pl-1 outline-none md:w-full md:pr-4 [&::-webkit-resizer]:hidden"
            value={input}
            onChange={handleInputChange}
          />
          <label className="mt-1 ml-auto mr-1">
            <svg
              className="scale-125"
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.2 4.16667H21.5796L17.7898 0.406946C17.66 0.27772 17.5057 0.175237 17.3359 0.105396C17.166 0.0355557 16.9839 -0.000263124 16.8 1.4551e-06H11.2C11.0161 -0.000263124 10.834 0.0355557 10.6641 0.105396C10.4943 0.175237 10.34 0.27772 10.2102 0.406946L6.4204 4.16667H2.8C1.2558 4.16667 0 5.4125 0 6.94445V22.2222C0 23.7542 1.2558 25 2.8 25H25.2C26.7442 25 28 23.7542 28 22.2222V6.94445C28 5.4125 26.7442 4.16667 25.2 4.16667ZM14 20.8333C10.206 20.8333 7 17.6528 7 13.8889C7 10.1236 10.206 6.94445 14 6.94445C17.794 6.94445 21 10.1236 21 13.8889C21 17.6528 17.794 20.8333 14 20.8333Z"
                fill="#2B60EA"
              />
              <path
                d="M15.4 9.72223H12.6V12.5H9.79999V15.2778H12.6V18.0556H15.4V15.2778H18.2V12.5H15.4V9.72223Z"
                fill="#9EB8FF"
              />
            </svg>
            <input
              type="file"
              onChange={(e) => setImgSrc(e.currentTarget.files[0])}
              className="hidden"
            />
          </label>
          <label className="hidden md:flex">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="ml-3 mt-1 h-[28px] text-[#2B60EA]"
            />
            <button className="hidden"></button>
          </label>
        </span>
      </form>
      <section className="flex flex-col gap-10 px-16 md:order-1">
        {messages.map((m) =>
          m.role === "user" ? (
            <section
              key={m.id}
              className="ml-auto max-w-[80%] rounded-xl bg-white p-3 text-left outline outline-[#cfcfcf] xl:max-w-[70%]"
            >
              <span className="font-semibold text-[#2B60EA]">You</span>:{" "}
              {m.content}
            </section>
          ) : m.role === "assistant" ? (
            <section
              key={m.id}
              className="max-w-[80%] rounded-xl bg-white p-3 text-left outline outline-[#cfcfcf] xl:max-w-[70%]"
            >
              <span className="font-semibold text-[#2B60EA]">AiTeacher</span>:{" "}
              {m.content}
            </section>
          ) : (
            ""
          ),
        )}
      </section>
      <button
        className="mt-14 h-[60px] w-[275px] rounded-full bg-[#2B60EA] text-[1.25em] text-white md:hidden"
        form="inputForm"
      >
        Solve
      </button>
    </section>
  );
}
