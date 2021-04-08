var cardnum={
    "sbi":"6074-3102-1451-2692",
    "kotak":"4594-5300-5609-1515",
    "paytm":"4389-7600-3540-4617",
    "axis":"4173-4900-0396-1568",
    "nsdl":"6077-6867-0075-2505",
    "airtel":"5471-1511-2689-8105",
    "irctc":"4321-6801-4347-5963",
    "slice pay":"4844-4101-0045-4365",
    "payzapp":"4799-4700-7480-1137",
    "indusind":"4216-8130-0070-3163",
    "mobi":"3782-553353-32478",
    "equi":"4723-5714-0206-4495",
    "ippb":"6083-1410-1002-7802"
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
    "indusind":"Indusind Bank",
    "mobi":"Mobikwick Pre-Paid Card",
    "equi":"Equitas Payment Bank",
    "ippb":"Indian Post Payments Bank"
}
var ctype={
    "sbi":"Rupay",
    "kotak":"VISA",
    "paytm":"VISA",
    "axis":"Axis Bank",
    "nsdl":"Rupay",
    "airtel":"Master",
    "irctc":"VISA",
    "slice pay":"VISA",
    "payzapp":"VISA",
    "indusind":"VISA",
    "mobi":"AMERICAN EXPRESS",
    "equi":"Rupay",
    "ippb":"Rupay"
}
var expiry={
    "sbi":"10/27",
    "kotak":"04/24",
    "paytm":"04/29",
    "axis":"11/21",
    "nsdl":"11/25",
    "airtel":"11/23",
    "irctc":"04/25",
    "slice pay":"09/25",
    "payzapp":"08/25",
    "indusind":"06/25",
    "mobi":"08/25",
    "equi":"02/22",
    "ippb":"03/26"
}
var cvv={
    "sbi":"488",
    "kotak":"717",
    "paytm":"150",
    "axis":"116",
    "nsdl":"201",
    "airtel":"589",
    "irctc":"082",
    "slice pay":"750",
    "payzapp":"258",
    "indusind":"647",
    "mobi":"4769",
    "equi":"593",
    "ippb":"231"
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
    "indusind":"157993051220",
    "equi":"100010696621",
    "ippb":"000710140425"
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
    "indusind":"INDB0000876",
    "equi":"ESFB0004005",
    "ippb":"6014846258"
}
var lister=["sbi","kotak","paytm","nsdl","indusind","equi","ippb"];
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
        if(came=="sbi"||came=="nsdl"||came=="paytm"||came=="kotak"||came=="indusind"||came=="equi"||came=="ippb"){
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
        if(came=="sbi"||came=="nsdl"||came=="paytm"||came=="kotak"||came=="indusind"||came=="equi"||came=="ippb"){
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
