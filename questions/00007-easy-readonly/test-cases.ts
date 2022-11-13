import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

let findF = () => {
  return { 1: 2 }
}

type findFT = typeof findF

type testT = keyof Todo1

// keyof 遍历 ts 对象类型
// T[number] 遍历 ts 数组类型
// typeof 将 js 内容转化为 ts 类型
