// let names = ["ahmed", "ali", "mona", "billa"];
// let grades = [  [90, 100, 60],  [40, 45, 50],  [80, 100, 75],  [90, 100, 100]];
// let minGrade = 9000;
// let maxGrade = 0 ;
// let SminGrade="",SmaxGrade="";
// for (let i = 0; i < names.length; i++) {
//     let sum = 0;
//     let avg = 0;
//     let pass=false
// // حساب التوتال
//   for (let j = 0; j < grades[i].length; j++) {
//     sum += grades[i][j];
// }

// avg = sum / grades[i].length;
//   if(avg>=50){
//     pass=true; 
//   }
//   console.log(`${names[i]} average = ${avg} pass ${pass} `);
//   //معرفة اكبر واصغر درجة
//   if(avg<minGrade){
//     minGrade = avg;
//     SminGrade = names[i] +" avg " +avg;    
//   }
//    if(avg>maxGrade){
//     maxGrade = avg;
//     SmaxGrade = names[i] +" avg " +avg;    
//   }
// }
// console.log(`max grade : ${SmaxGrade} \n , and min grade : ${SminGrade}`)
// //للبحث عن اسم
// function searchStudent() {
// let enteredName= String(document.getElementById("name").value );
// let found = false;
// for(let i = 0; i < names.length; i++) {
//     if(enteredName.toLocaleLowerCase()===names[i]){
//         found = true;
//         let sum = 0;
//         let avg = 0;
//         for (let j = 0; j < grades[i].length; j++){
//             sum += grades[i][j];
//             avg = sum / grades[i].length;
//     }
//     console.log(` ${enteredName} total grade is ${avg.toFixed(2)}`)
//     break;
//     }
// }
// if(!found) console.log("isn't found")
// }

let names = ["ahmed", "ali", "mona", "billa"];
let grades = [  [90, 100, 60],  [40, 45, 50],  [80, 100, 75],  [90, 100, 100]];
let minGrade = 9000;
let maxGrade = 0 ;
let SminGrade="",SmaxGrade="";
for (let i = 0; i < names.length; i++) {
    let sum = 0;
    let avg = 0;
    let pass=false
// حساب التوتال
  for (let j = 0; j < grades[i].length; j++) {
    sum += grades[i][j];
}

avg = sum / grades[i].length;
  if(avg>=50){
    pass=true; 
  }
  document.write(`  
    <table>
        <tr ><td>${names[i]}</td><td> ${avg.toFixed(2)}</td><td> ${pass}</td></tr>
    </table>`)
  //معرفة اكبر واصغر درجة
  if(avg<minGrade){
    minGrade = avg;
    SminGrade = names[i] +" avg " +avg;   
  }
   if(avg>maxGrade){
    maxGrade = avg;
    SmaxGrade = names[i] +" avg " +avg;    
  }
}
document.write(` 
    <div style="text-align: center;font-size: 25px;letter-spacing: 2px;">
       <span style="color: rgb(27, 238, 27);"> max grade </span>: ${SmaxGrade} \n , and <span style="color: red;"> max grade </span> : ${SminGrade}
    </div>`)

//للبحث عن اسم
function searchStudent() {
let enteredName= String(document.getElementById("name").value );
let ele = document.getElementById("dis")
let found = false;
for(let i = 0; i < names.length; i++) {
    if(enteredName.toLocaleLowerCase()===names[i]){
        found = true;
        let sum = 0;
        let avg = 0;
        for (let j = 0; j < grades[i].length; j++){
            sum += grades[i][j];
            avg = sum / grades[i].length;
    }
     ele.innerHTML =(` ${enteredName} total grade is ${avg.toFixed(2)}`)
    break;
    }
}
if(!found)   ele.innerHTML="isn't found";
    enteredName=""
}






