import React from "react"
import { messagesStore } from "../stores"

export default function ListPage() {
  const { messages } = messagesStore
  return (
    <>
      {messages.length === 0 ? <p>Nothing to show</p> : null}
      <ul>
        {messages.map(message => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </>
  )
}
