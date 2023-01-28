var a=prompt("Enter your mark of a subject");
if(a>80 && a<=100){
   console.log("A grade");
}
else if(a>60 && a<=80){
   console.log("B grade");
}
else if(a>50 && a<=60){
   console.log("C grade");
}
else if(a>45 && a<=50){
   console.log("D grade");
}
else if(a>=25 && a<=45){
   console.log("E grade");
}
else{
   console.log("F");
}