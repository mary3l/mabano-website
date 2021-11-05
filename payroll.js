 function initcart(){
    cart=[];
    document.getElementById("items").value=cart.length;
    document.getElementById("cart").innerHTML="";

        
}

function clearcart(){
    var toclear;

    toclear=confirm("Delete all item(s) from cart ?");

    if (toclear) {
         initcart();
    }
        
}

function addtocart(){
     
     var cartitem = {
         "item": "1",
         "price": 0,
         "qty": 1,
         "amount": 0,
        "itemamount" : function itemamount(){
             return Math.round(this.price*this.qty*100)/100;  
           },
           "netpay" : function netpay(){
             return Math.round(this.price*this.qty*100)/100-this.amount;  
           }
    
        };
        
        
      cartitem.item=document.getElementById("itemdesc").value;
      cartitem.qty=document.getElementById("qty").value;
      cartitem.price=document.getElementById("price").value;
      cartitem.amount=document.getElementById("amount").value;
     


      console.log(cartitem.item);
      console.log(cartitem.qty);
      console.log(cartitem.price);
      console.log(cartitem.amount);
     


       cart.push(cartitem);
      //cart[cart.length]=cartitem;

      console.log(cart.length);
      document.getElementById("items").value=cart.length;

      showcart();

}

function deleteitem(){
    var todelete;
    var itemno;

    itemno=document.getElementById("delitem").value;

    todelete=confirm("Delete item no. "+itemno+"?");

    if (todelete) {

         cart.splice(itemno-1,1);
         document.getElementById("items").value=cart.length;
         showcart();   
    }

}

function showcart(){

    var i,l,carttext,totalamount,ln;
    var theader,tbody,tb,tfooter;

    theader ="<thead>";
    theader+="<tr>";
    theader+="<th>No.</th>";
    theader+='<th style="text-align:left" >Employee Name</th>';
    theader+="<th>Days Worked</th>";
    theader+='<th style="text-align:right">Daily Rate</th>';
    theader+="<th>Gross Pay</th>";
    theader+="<th>Deduction Amount</th>";
    theader+="<th>Net Pay</th>";
    theader+="</tr>";
    theader+="</thead>";

    l = cart.length;
  
    for (i=0,totalamount=0,carttext="",tbody='';i<l;i++){
        ln=i+1;
        tbody += "<tr>"
            +'<td>'+ln+' </td>'
            +'<td>'+cart[i].item+' </td>'
            +'<td style="text-align:right">'+cart[i].qty+'</td>'
            +'<td style="text-align:right">'+cart[i].price+'</td>'
            +'<td style="text-align:right">'+cart[i].itemamount()+'</td>'  
            +'<td style="text-align:right">'+cart[i].amount+'</td>'  
            +'<td style="text-align:right">'+cart[i].netpay()+'</td>' 		
            +"</tr>";
    }

    tfooter ="<tfoot>";
    tfooter+="<tr>";
     tfooter+='<th></th>';
    tfooter+='<th style="text-align:left"></th>';
    tfooter+='<th></th>';
    tfooter+='<th></th>';
    tfooter+='<th></th>';
    tfooter+='<th></th>';
    tfooter+='<th></th>';
    tfooter+="</tr>";
    tfooter+="</tfoot>";

   console.log(theader+tbody+tfooter);
    document.getElementById("cart").innerHTML=
       '<table>'+theader+tbody+tfooter+'</table>';


}


var cart = []; 



