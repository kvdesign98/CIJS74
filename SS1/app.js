console.log("Hi🤣")

// module:1 file js,chứa các chức năng để thực hiện những công việc gì đấy
// package = nhiều module
// export / export default / import
// json: chuỗi có cấu trúc , phân tích -> object || mảng 
// .json: lưu trữ dữ liệu mẫu || làm file cấu hình cho dự án 

import hello,{ helloThai,helloVN } from "./hello(module).js"

helloThai("Chinh Chin");
helloVN("Chinh")

hello("Chim")

//array method:
//filter, map, includes, forEach, slice ,splice,...(phương thức của mảng)
//template literal:"",'',` có thể chèn biến và viết nhiều dòng `