// // const arr =[1,2,3,4];

const { rollupVersion } = require("vite");

// // const result = arr.reduce((acc,item) =>{
// //     // console.log(acc);
// //     acc.push(acc + item);
// //     return acc;
// // }, []);

// // console.log('Final Result', result);


// const adminPaths =[
//     {
//         name:'Dashboard',
//         path:'dashboard',
//         element:'Admin',
//     },
//     {
//         name:"User Management",
//         children:[
//             {
//                 name:'Create Admin',
//                 path:'create-admin',
//                 element:'Create_Admin'
//             },
//             {
//                 name:'Create Faculty',
//                 path:'create-faculty',
//                 element:'Create_faculty'
//             },
//             {
//                 name:'Create Student',
//                 path:'create-student',
//                 element:'create_student'
//             }
//         ],
//     },
// ];

// const newArray = adminPaths.reduce((acc,item)=>{
//     if(item.path && item.name){
//        acc.push(
//         {
//             key: item.name,
//             label: "NavLink",
//         }
//        );
//     }
//     if(item.children){
//         acc.push({
//             key:item.name,
//             label:item.name,
//             children: item.children.map((child)=>({
//                 key:child.name,
//                 label:"NAvlink"
//             }))
//         })
//     }

//     return acc;
// },[]);
// // const newArray = adminPaths.reduce((acc,item)=>{
// //     if(item.path && item.element){
// //        acc.push(
// //         {
// //             path: item.path,
// //             element: item.element,
// //         }
// //        );
// //     }
// //     if(item.children){
// //         item.children.forEach((child) =>{
// //             acc.push({
// //                 path:child.path,
// //                 element:child.element,
// //             })
// //         })
// //     }

// //     return acc;
// // },[]);

// console.log(JSON.stringify(newArray));

const obj ={
    name:'Munir',
    role:'admin',
    age:23,
    greet:()=>{
        return 'Hello World';
    }
}
console.log(JSON.stringify(obj));