const patients = require("./patients");
console.log(patients);

for (let index = 0; index < patients.length; index++) {
    console.log(patients[index].firstName + " " + patients[index].lastName);
}

const students =[
    {name:"fairy", age:29},
    {name:"toni", age:28},
    {name:"giovanni", age:40}
]
const studentunder30 =students.filter(function(student){
    if(student.age < 30){
        return true
    } else {
        return false
    }
}
);
console.log(studentunder30);


const arrowtony=(string,saluti) => {
return string.toUpperCase()
return saluti.toUpperCase()
console.log(string);
}
console.log(arrowtony, ` im toni the best in the or;d`,`hai capito?`);

const giappone=(nome,congome) =>{
    return nome ,congome

}
console.log(giappone,"toni ","cicanecchia");





const italia =(city, age) =>{
    return city,age
}
console.log(italia, "new york",28);


const olanda=(greeting,name) =>{
    return (` ${greeting} i m ${name}`)
}
console.log(olanda,"hi","toni");



const jackson =(car,color) =>{
    return car, color 
}
console.log(jackson,"ferrari","red","light","sisi");






























const achille=(nome ,age) =>{
    return nome,age
}

console.log(achille,"my name is" ,"toni",28)



const colors=["yellow","red","blue"];

const capitaletter =colors.map (color =>  (`${color[0]}   e la prima lettera di ${color}`))
 console.log(capitaletter);



 const rino = nome => (nome.toUpperCase())
 console.log(rino,"ringhio");






 const name =["giovanni","gianni","michele"];

 const splitname = name.find(name => name.includes("michele"))
 console.log(splitname);
  

