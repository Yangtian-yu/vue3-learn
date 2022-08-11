import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export type User = {
  name: string;
  age: number;
  occupation: string;
  sex?: boolean;  // 0 男  1 女
}

export const userMessage = defineStore("user", () => {
  // user
  const user = reactive<User>({
    name: "杨天宇",
    age: 18,
    occupation: "WEB"
  })

  return {
    user
  }
})
