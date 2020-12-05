import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { userStore } from "../stores"
import { Button, Form, Input, notification } from "antd"
import "./login.less"
import { useAsyncFn } from "react-use"

interface FormProps {
  username: string
  password: string
}


export default observer(() => {
  const [form] = Form.useForm<FormProps>()
  const [loginState, onLogin] = useAsyncFn(async () => {
    const values = form.getFieldsValue()
    return await userStore.login(values.username, values.password)
  }, [])

  useEffect(() => {
    if (loginState.error) {
      notification.error({
        message: "Login error",
        description:
          "Wrong username or wrong password!"
      })
    }
  }, [loginState.error])
  return (
    <div>
      <h1 className="title">Login Page</h1>
      <Form
        form={form}
        className="login-form"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onLogin}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username: admin" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password: admin" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loginState.loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})
