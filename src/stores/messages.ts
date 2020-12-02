import { observable, action, makeObservable, makeAutoObservable } from "mobx"

export default class MessagesStore {
  messages = observable<string>([])
  constructor() {
    makeAutoObservable(this)
  }
  addMessage(message: string) {
    this.messages.push(message)
  }

  clearMessages() {
    this.messages.clear()
  }
}
