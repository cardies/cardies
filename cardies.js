var cardnum={
    "sbi":"6074-3102-1451-2692",
    "kotak":"4594-5300-5609-1515",
    "paytm":"6080-3205-3823-8116",
    "axis":"4173-4900-0396-1568",
    "nsdl":"6077-6867-0075-2505",
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
    "nsdl":"NSDL Jiffy Payments Bank",
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
    "nsdl":"Rupay",
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
    "nsdl":"11/25",
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
    "nsdl":"201",
    "airtel":"589",
    "irctc":"082",
    "slice pay":"332",
    "payzapp":"258",
    "indusind":"647"
}
var ano={
    "sbi":"38904786063",
    "kotak":"7413145953",
    "paytm":"917993051220",
    "axis":"0000000000",
    "nsdl":"501001085896",
    "airtel":"7993051220",
    "irctc":"0000000000",
    "slice pay":"0000000000",
    "payzapp":"7993051220",
    "indusind":"157993051220"
}
var code={
    "sbi":"SBIN0004675",
    "kotak":"KKBK0007869",
    "paytm":"PYTM023456",
    "axis":"0000000000",
    "nsdl":"NSPB0000002",
    "airtel":"7993051220",
    "irctc":"0000000000",
    "slice pay":"0000000000",
    "payzapp":"7993051220",
    "indusind":"INDB0000876"
}
var lister=["sbi","kotak","paytm","nsdl","indusind"];
var came,cardnumber,exp,cv1,e1,nm,stri="";
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
        $(".back").removeClass("hide");
        if(came=="sbi"||came=="nsdl"||came=="paytm"||came=="kotak"||came=="indusind"){
        $(".details").removeClass("hide");
        }
        else{
            $(".back").removeClass("hide");
        }
        
    });
    $(".back").click(function(){
        $(".card").addClass("hide");
        $(".cards").removeClass("hide");
        $(".details").addClass("hide");
        $(".back").addClass("hide");
    });
});
function carddet(){
        came=document.getElementById("cname").value;
        came=came.toLowerCase();
        document.getElementById("bname").innerHTML=bname[came];
        document.getElementById("ctype").innerHTML=ctype[came];
        document.getElementById("expiry").innerHTML=expiry[came];
        document.getElementById("cvv").innerHTML=cvv[came];
        document.getElementById("cnum").innerHTML=cardnum[came];
        if(came=="sbi"||came=="nsdl"||came=="paytm"||came=="kotak"||came=="indusind"){
        document.getElementById("ano").innerHTML=ano[came];
        document.getElementById("code").innerHTML=code[came];
        }
        else{
            document.getElementById("details").classList.add("hide");
        }
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
