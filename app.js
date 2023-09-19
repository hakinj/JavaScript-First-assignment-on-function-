function bio(name, weight){
    name = prompt("enter name");
    weight = Number(prompt("enter weight in kg to covert to pounds"));
    pounds = weight/2.2046;
    return `My name is ${name} and I weight ${pounds + " pounds"}`;
}
alert(bio());
console.log(bio());
