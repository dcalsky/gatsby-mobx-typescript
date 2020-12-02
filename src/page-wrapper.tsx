import Layout from "./components/layout"
import React from "react"

export default ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
