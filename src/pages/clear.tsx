import { Input, Button } from "antd"
import React, { useState } from "react"
import { messagesStore } from "../stores"

export default function Demo() {
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
