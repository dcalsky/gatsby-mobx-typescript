import { makeAutoObservable, observable } from "mobx"
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
  login() {
    this.user = {
      name: "dcalsky",
    }
    this.persist()
  }
  logout() {
    this.user = null
    this.persist()
  }
}
