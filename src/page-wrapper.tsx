import Layout from "./components/layout"
import React from "react"
import { navigate, WrapPageElementBrowserArgs } from "gatsby"
import { userStore } from "./stores"
import { autorun } from "mobx"

export default ({ element, props }: WrapPageElementBrowserArgs) => {
  autorun(() => {
    if (!userStore.user) {
      // Navigate to login page if user doesn't login
      navigate("/login", { replace: true })
    } else if (props.path === "/login/") {
      // Navigate to index page if user has already login but still request login page
      navigate("/", { replace: true })
    }
  })
  if (props.path === "/login/") {
    return <div>{element}</div>
  } else {
    return <Layout {...props}>{element}</Layout>
  }
}
