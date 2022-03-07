type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// type r = TupleToObject<typeof tuple>

// js 实现
function TupleToObject(tuple = []) {
  const data: any = {}
  for (const item of tuple) {
    data[item] = item
  }
  return data
}

// 遍历 union -> in
// 遍历 interface -> keyof
// 遍历 array -> [K in keyof T] ==> 得到索引
// 遍历 array -> [K in T[number]] => 得到值
