//1
let reg = /^((?=.*[a-zA-z])(?=.*[!@#$%^&*()_+-=])(?=.{8,16}$))/
let test = 'asd123@gmail.com'
console.log(reg.test(test))
//2
reg = /^\d{1,2} ([ก-ฮ]).([ก-ฮ]). \d{1,4}$/
test = '07 ก.ย. 2564'
console.log(reg.test(test))
//3
reg = /^youtu.be[/]v[/][a-zA-z0-9]/g
test = 'youtu.be/v/ffjwr34rfaf'
console.log(reg.test(test))
//4
reg = /^\d{1,9} ([A-za-z ]+) \d{1,9}$/
test = '1 Chocolate 10'
console.log(reg.test(test))