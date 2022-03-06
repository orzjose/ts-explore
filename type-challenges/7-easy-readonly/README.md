# 实现 TS 内置的 `readonly`

type-challenges[地址](https://github.com/type-challenges/type-challenges/blob/master/questions/7-easy-readonly/README.md)

readonly 功能演示

```ts
type User {
    name: string;
}
const user: User = {
    name: ''
}
user.name = '123' // 可以修改成功


type ReadonlyUser = {
    readonly name: string;
}
const readonlyUser: ReadonlyUser = {
    name: ''
}
readonlyUser.name = '1' // 报只读类型的错误
```
