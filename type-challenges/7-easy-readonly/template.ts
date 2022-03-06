type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

interface User {
    name: string;
    age: number;
}

type d = keyof User; // d => {"name" | "age"} union




// JS实现
function MyReadonly(obj: any) {
  const result: any = {}
  for (const key in obj) {
    result[`__readonly__${key}`] = obj[key]
  }
  return result
}

// 1. 创建一个空对象
// 2. 遍历传入对象的key
// 3. 添加readonly标识，添加至新对象
// 4. 返回对象