import { PageProps, navigate } from "gatsby"
import { observer } from "mobx-react-lite"
import React from "react"
import { userStore } from "../stores"
import { Button } from "antd"

export default observer(() => {
  if (userStore.user) {
    return null
  }
  const onLogin = () => {
    userStore.login()
    navigate("/", {
      replace: true
    })
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Page</h1>
      <Button onClick={onLogin}>Click me to login as a normal user</Button>
    </div>
  )
})
