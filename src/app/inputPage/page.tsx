'use client'

//CSS
import input_page from '../styles/input_page.module.css'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

//Chatgpt
import { useChat } from 'ai/react'

export const runtime = 'edge'

export default function InputPage() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({});

  return (
    <div className={input_page.containerAll}>
        <header className={input_page.headerContainer}>
            <FontAwesomeIcon
                icon={faCircleUser}
                className={input_page.profilePicture}
            />
            <p className={input_page.userName}>User</p>
            <h2 className={input_page.slogan}>
                Provide question,<br/>
                obtain the <span className={input_page.blueDistinction}>answer</span>.
            </h2>
        </header>
        <main className={input_page.main}>
            <section className={input_page.inputContainer}>
                    <form id='formGetAnswer' onSubmit={handleSubmit} className={input_page.form}>
                        <textarea
                            className={input_page.inputField}
                            onChange={handleInputChange}
                            value={input}
                        />
                    </form>
                    <svg className={input_page.svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5 0-2.711 2.29-5 5-5s5 2.289 5 5c0 2.71-2.29 5-5 5z"></path>
                    <path d="M13 9h-2v2H9v2h2v2h2v-2h2v-2h-2z" className={input_page.cameraPlus}></path></svg>
            </section>
            <section className={input_page.chatAnswerBox}>
                {messages.map(m => (
                    m.role==='user' ? 
                    <section key={m.id} className={input_page.userMessage}>
                        <span className={input_page.messageName}>You</span>: {m.content}
                    </section> : 
                    <section key={m.id} className={input_page.aiMessage}>
                        <span className={input_page.messageName}>AiTeacher</span>: {m.content}
                    </section>
                ))}
            </section>
        </main>
        <button type='submit' className={input_page.button} form='formGetAnswer'>Solve</button>
    </div>
  )
}
