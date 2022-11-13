type TupleToObject<T extends readonly (string | number | symbol)[]> = { [P in T[number]]: P }

// js

// function TupleToObject(arr: any[]) {
//   const obj: any = {}
//   arr.forEach((val) => {
//     obj[val] = val
//   })
//   return obj
// }
