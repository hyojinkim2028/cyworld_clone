console.log("콘솔로그를 찍어봅니다")
let student = ["hs","hyojin","simson"]

console.log(student)
//Array(3) [ "hs", "hyojin", "simson" ]
student.includes("hs")
//true
student.push("mangu")
//4
student.length
//4
student.pop()
// 'mangu'
student.length
//3 

// 문자열을 배열처럼 사용

let email = 'codecamp@gmail.com';
email.includes("@");
let userId = email.split('@')[0];
let company = email.split('@')[1];

let protectId = userId.slice(0,userId.length-4).concat("****");
let protectEmail = `${protectId}@${company}`;

console.log(protectEmail)