var cardnum={
    "sbi":"6074-3102-1451-2692",
    "kotak":"4594-5300-5609-1515",
    "paytm":"6080-3205-3823-8116",
    "axis":"4173-4900-0396-1568",
    "fincare":"6080-8111-0545-4219",
    "airtel":"5471-1511-2689-8105",
    "irctc":"4321-6801-4347-5963",
    "slice pay":"6077-8204-0189-7745",
    "payzapp":"4799-4700-7480-1137",
    "indusind":"4216-8130-0070-3163"
}
var bname={
    "sbi":"State Bank Of India",
    "kotak":"Kotak Mahindra Bank",
    "paytm":"Paytm Payments Bank",
    "axis":"Axis Bank",
    "fincare":"Fincare Small Payments Bank",
    "airtel":"Airtel Payments Bank",
    "irctc":"Irctc E-Wallet Card",
    "slice pay":"Slice-Pay Credit Card",
    "payzapp":"PAYZAPP E-Wallet Card",
    "indusind":"Indusind Bank"
}
var ctype={
    "sbi":"Rupay",
    "kotak":"VISA",
    "paytm":"Rupay",
    "axis":"Axis Bank",
    "fincare":"Rupay",
    "airtel":"Master",
    "irctc":"VISA",
    "slice pay":"Rupay",
    "payzapp":"VISA",
    "indusind":"VISA"
}
var expiry={
    "sbi":"10/27",
    "kotak":"04/24",
    "paytm":"11/27",
    "axis":"11/21",
    "fincare":"12/26",
    "airtel":"11/23",
    "irctc":"04/25",
    "slice pay":"11/22",
    "payzapp":"08/25",
    "indusind":"06/25"
}
var cvv={
    "sbi":"488",
    "kotak":"717",
    "paytm":"343",
    "axis":"116",
    "fincare":"737",
    "airtel":"589",
    "irctc":"082",
    "slice pay":"332",
    "payzapp":"258",
    "indusind":"647"
}
var came,cardnumber,exp,cv1,e1,nm,stri="hello";
function auth(){
    var ss=document.getElementById("passwd").value;
    if(ss==stri){
       
        document.getElementById("authorize").classList.add("hide");
        $(".cards").removeClass("hide");
        
    
    }
    
    
}
$(document).ready(function(){
    $(".getcard").click(function(){
        $(".cards").addClass("hide");
        $(".card").removeClass("hide");
    });
});
function carddet(){
        came=document.getElementById("cname").value;
        document.getElementById("bname").innerHTML=bname[came];
        document.getElementById("ctype").innerHTML=ctype[came];
        document.getElementById("expiry").innerHTML=expiry[came];
        document.getElementById("cvv").innerHTML=cvv[came];
        document.getElementById("cnum").innerHTML=cardnum[came];
}
function copyc() {
    const el = document.createElement('textarea');
  el.value = cardnum[came].replaceAll('-','');
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
function copyex(){
    const el = document.createElement('textarea');
  el.value = expiry[came];
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
function copycvv(){
    const el = document.createElement('textarea');
  el.value = cvv[came];
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}