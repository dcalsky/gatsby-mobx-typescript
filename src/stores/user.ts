import { makeAutoObservable } from "mobx"
import User from "../models/user"

export default class UserStore {
  user: User | null = null

  constructor() {
    makeAutoObservable(this)
    this.recovery()
  }

  recovery() {
    if (typeof window === "undefined") {
      return
    }
    const res = window.localStorage.getItem("user")
    if (res) {
      this.user = JSON.parse(res) as User
    }
  }

  persist() {
    if (this.user) {
      window.localStorage.setItem("user", JSON.stringify(this.user))
    } else {
      window.localStorage.removeItem("user")
    }
  }

  async login(username: string, password: string) {
    return await new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "admin") {
          const result = {
            name: username
          } as User
          this.user = result
          this.persist()
          resolve(result)
        } else {
          reject(new Error("401"))
        }
      }, 1000)
    })
  }

  logout() {
    this.user = null
    this.persist()
  }
}
