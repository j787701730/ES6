/**
 * 1.变量声明
 */
// var c = 1; // 全局声明
// let a = 1; // 局部声明
// const b = 2; // 常量声明

// console.log(a);
// console.log(b);
// console.log(c);

// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }
// console.log(index);  // 报错


/**
 * 2.解构赋值
 */
// 数组解构
// let [a, b, c] = [1, 2, 3];
// let [a, [b, c]] = [1, [2, 3]];
// let [d = 'true'] = []; // 默认值
// console.log(a, b, c);

// 对象解构
// let { foo, bar } = { foo: 'hello', bar: 'world' };
// console.log(foo, bar);

// 坑 要加上圆括号
// let foo; 
// ({foo} = {foo:'hello'}) 

// 字符串解构
// const [a, b, c, d, e] = 'hello';
// console.log(a, b, c, d, e);


/**
 *  3.扩展运算符 rest运算符
 */
// ... 扩展运算符
// function hello(...arg) {
//   console.log(arg[0], arg[1], arg[2], arg[3]);
//   // 不会报错 undefined
// }
// hello(1, 2, 3);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// arr2.push('4');
// console.log(arr1);
// console.log(arr2);

// rest ... (剩余)

// function world(first, ...arg) {
//   console.log(arg.length); // 5
//   arg.forEach(element => {
//     console.log(element);
//   });
//   for (const iterator of arg) {
//     console.log(iterator);
//   }
// }

// world(0, 1, 2, 3, 4, 5);

/**
 * 4.字符串模板
 */
let name = 'huahua';
let age = 18;
console.log(`我是<b>${name}</b>,
年龄${age + 1}`);

console.log(name.includes('h'));
console.log(name.startsWith('h'));
console.log(name.endsWith('h'));
console.log(name.repeat(3));

