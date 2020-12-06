import { observable, action, makeObservable, makeAutoObservable } from "mobx"

export default class MessagesStore {
  messages = observable<string>([])

  constructor() {
    makeAutoObservable(this)
  }

  addMessage(message: string) {
    if (this.messages.includes(message)) {
      return
    }
    this.messages.push(message)
  }

  clearMessages() {
    this.messages.clear()
  }
}
