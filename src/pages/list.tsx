import { PageProps } from "gatsby"
import React from "react"
import { messagesStore } from "../stores"

export default function Demo1(props: PageProps) {
  const { messages } = messagesStore
  return (
    <>
      {messages.length === 0 ? <p>Nothing to show</p> : null}
      <ul>
        {messages.map(message => (
          <li>{message}</li>
        ))}
      </ul>
    </>
  )
}
