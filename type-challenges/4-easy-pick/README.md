# 实现 Pick

实现 TS 内置的 `Pick<T, T>`

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}
```

```js
// MyPick JS 实现步骤
// 1. 创建空对象
// 2. 遍历联合类型(keys)
// 3. 判断类型存在即塞入(1)对象中
// 4. 返回(1)对象
const todo = {
  title: '',
  description: '',
  completed: false
}
const keys = ['title', 'completed']
const TodoPreview = MyPick(todo, keys)
console.log(TodoPreview) // { title: '', completed: false }
function MyPick(todo, keys) {
  const obj = {}
  keys.forEach((key) => {
    if (todo.hasOwnProperty(key)) {
      obj[key] = todo[key]
    }
  })
  return obj
}
```
