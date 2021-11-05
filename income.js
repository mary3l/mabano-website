function taxIncome(){
   var inc = document.getElementById("income").value*1;
   var a, percentE, fixedT, due;
   if(inc>=250000 && inc<400000){
       a=250000;
       percentE=0.20;
       fixedT=0;
   }
   else if(inc>=400000 && inc<800000){
       a=400000;
       percentE=0.25;
       fixedT=30000;
   }
   else if(inc>=800000 && inc<2000000){
       a=800000;
       percentE=0.3;
       fixedT=130000;
   }
   else if(inc>=2000000 && inc<8000000){
       a=2000000;
       percentE=0.32;
       fixedT=490000;
   }
   else if(inc>=8000000){
       a=8000000;
       percentE=0.35;
       fixedT=2410000;
   }
   else{
       a=0;
       percentE=0;
       fixedT=0;
   }
   due=(inc-a)*percentE+fixedT;
   document.getElementById("tax").value=due;
   
}