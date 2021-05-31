var namesarr = new Array();
namesarr[0]="Yaakov";
namesarr[1]="John";
namesarr[2]="Jen";
namesarr[3]="jason";
namesarr[4]="paul";
namesarr[5]="frank";
namesarr[6]="larry";
namesarr[7]="paula";
namesarr[8]="laura";
namesarr[9]="jim";


// console.log(namesarr[0].charAt(0));

for(var i=0; i<namesarr.length;i++){
// console.log(namesarr[i]);
//Give 1st charecter in array use 
//  javascript function (chartAt)

if(namesarr[i].charAt(0)==="J"|| namesarr[i].charAt(0)==="j"){
    console.log("Goodbye " + namesarr[i]);

}
else{
    console.log("Hello "+ namesarr[i]);
}
}