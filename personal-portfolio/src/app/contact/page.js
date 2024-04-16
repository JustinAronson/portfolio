"use client"

import { useContext, useState } from "react"
import { DarkmodeContext } from "../context/DarkmodeContext"
import { FormInput } from "./form-input"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const {isDark, textColor} = useContext(DarkmodeContext)

  const submitEmail = async function(e) {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: name,
        subject: subject,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  }


  return(
    <div className={"h-screen flex flex-col justify-center items-center align-middle " + (isDark ? "bg-black " : "bg-white ") + textColor}>
      <form onSubmit={submitEmail} className=" w-full">
        <FormInput 
          type="text"
          labelName="Name"
          placeholder="Enter Your Full Name..."
          val={name}
          changeFunction={(e) => {setName(e.target.value)}} />
        <FormInput 
          type="text"
          labelName="Email"
          placeholder="Enter Your Email... "
          val={email}
          changeFunction={(e) => {setEmail(e.target.value)}} />
        <FormInput 
          type="text"
          labelName="Subject"
          placeholder="Write Your Subject... "
          val={subject}
          changeFunction={(e) => {setSubject(e.target.value)}} />
      <div className="p-4">
        <label htmlFor="message" className="block">Tell me something</label>
        <textarea
          id="message"
          className={"border w-80 p-2 rounded-sm text-black "}
          value={message}
          onChange={(e) => {setMessage(e.target.value)}}
        />
      </div>
      <button
        type="submit"
        className={`bg-blue-500 text-white p-2 mx-72 rounded ${isDark ? 'hover:bg-blue-700' : 'hover:bg-blue-400'}`}
      >
        Send
      </button>
    </form>
    </div>
  )
};
