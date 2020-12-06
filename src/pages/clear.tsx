import { Button } from "antd"
import React from "react"
import { messagesStore } from "../stores"

export default function ClearPage() {
  return (
    <>
      <Button
        onClick={() => {
          messagesStore.clearMessages()
        }}
      >
        Clear
      </Button>
    </>
  )
}
