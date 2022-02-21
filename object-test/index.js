class Class_Object {
  #private_data = 30;
  static static_data = 20;
  constructor() {
    this.data = 10;
  }
  method_one() {
    console.log("method_one");
  }
  static method_static_one() {
    console.log("method_static_one");
  }

  #init() {
    console.log("init method");
  }
}

const newObj = new Class_Object();
console.log(newObj.#private_data);

// function Class_Object_By_Func() {
//   this.data = 10;
//   this.method_one = function () {
//     console.log("hi");
//   };
// }

// const COBF = new Class_Object_By_Func();
// console.log(COBF.data);
// console.log(COBF.method_one());
// const obj = {
//   data: 10,
//   method_one() {
//     console.log("method_one");
//   },
// };

// const clone = obj;

// obj.data = 20;

// console.log(clone.data); // 20

// const obj = {
//   private_members: (function () {
//     let data = 10;
//     return {
//       getData() {
//         return data;
//       },
//       setData(newData) {
//         data = newData;
//       },
//     };
//   })(),
//   method_one() {
//     console.log("hi");
//   },
// };
// console.log(obj.private_members.getData());
// console.log(obj.private_members.setData(20));
// console.log(obj.private_members.getData());
