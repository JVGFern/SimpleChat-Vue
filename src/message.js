import { reactive } from "vue";

export function generateId() {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

export const chat = reactive({
  messages: [],
  addMessage(newMessage) {
    this.messages.push(newMessage);
  },
  
});
