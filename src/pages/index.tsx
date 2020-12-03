import { Button, Input } from "antd"
import { PageProps } from "gatsby"
import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { messagesStore } from "../stores"

export default observer(({ location }: PageProps) => {
  const [text, setText] = useState("")
  const addMessage = () => {
    if (!text) {
      return
    }
    messagesStore.addMessage(text)
    setText("")
  }
  return (
    <>
      {messagesStore.messages.map((message, i) => (
        <p key={message + i}>{message}</p>
      ))}
      <Input
        type="text"
        value={text}
        onChange={e => setText(e.currentTarget.value)}
        placeholder="Enter something over here..."
      />
      <Button onClick={addMessage}>Add</Button>
    </>
  )
})
