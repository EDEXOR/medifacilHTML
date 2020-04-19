
window.onload = function usuarios(){







    if ((localStorage.getItem("users")==null)) {
   
        localStorage.setItem("users", '1');
   
    }else{
        var u = localStorage.getItem("users");
   
   var x = parseInt(u);
   
    
    }
   
   
   }
   function Login()
   { 
       var done=0; 
       var usuario=document.getElementById("username").value; 
       var password=document.getElementById("password").value;  
   
       if (usuario=="test" && password=="test1") { 
           window.location="ewallet.html"; 
           } 
   
       if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
           window.location="ewallet.html"; 
           } 
       if (usuario=="" && password=="") { 
           alert("escriba algun dato"); 
           } 
   } 
   function reg()
   { 
       var done=0; 
       var usuario=document.getElementById("user").value; 
       var password=document.getElementById("pass").value;  
   
       if (usuario=="test" && password=="test1") { 
           window.location="ewallet.html"; 
           } 
   
       if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
           window.location="ewallet.html"; 
           } 
       if (usuario=="" && password=="") { 
           alert("escriba algun dato"); 
           } 
   } 
   
   
   

   
   
   
   function registrar() {
    var nombre = document.getElementById("nombre").value;
    var fech = document.getElementById("fecha").value; 
    var altura = document.getElementById("altura").value; 
    var peso = document.getElementById("peso").value;  
    var username = document.getElementById("email").value; 
    var contraseña = document.getElementById("passs").value;

    var u = localStorage.getItem("users");
   
    var x = parseInt(u);
   
    if (nombre =="" || email=="" || pass=="" || dui==""  || pre1g=="" || fech=="") {
   
       alert("Falta un dato, favor revise los campos");
    }
    else{
   
   
   var dataEMA= JSON.parse(localStorage.getItem("email"));
   var dataP= JSON.parse(localStorage.getItem("pass"));
   var dataN= JSON.parse(localStorage.getItem("nombre"));
   var dataA= JSON.parse(localStorage.getItem("altura"));
   var dataPeso= JSON.parse(localStorage.getItem("peso"));
   var dataDA= JSON.parse(localStorage.getItem("dato"));
   
   var emailG = [];  
    var passG = [];
    var nombreG = [];
    var datosG = [];
    var alturaG=[];
    var pesoG=[];
   

   var j =parseInt(1); 
   
   if (dataEMA==null) {
   
   }
   else{
   
   
   
   
           for (;dataEMA[j];) {
             
                emailG[j] = dataEMA[j];
                passG[j] =dataP[j];
                nombreG[j] =dataN[j]; 
                datosG[j] =dataDA[j];
               alturaG[j]= dataA[j];
               pesoG[j]= dataPeso[j];
                j++
           } 
        }
           
   
   
   
    emailG[u] =username.value;  
    passG[u] = contraseña.value;
    nombreG[u] = nombre.value;
    datosG[u] = 0;
    alturaG[u] = altura.value;
    pesoG[u] = peso.value;
    conteocuG[u]=0;
    conteotaG[u]=0;
    cuenG[u] = cuenG[0] = new Array();
   cuenG[0][0] = new Array()
   tarjG[u] = tarjG[0] = new Array();
   tarjG[0][0] = new Array()
   ingrG[u] = ingrG[0] = new Array();
   ingrG[0][0] = new Array()
   gastG[u] = gastG[0] = new Array();
   gastG[0][0] = new Array()
        var y = (parseInt(x)+1);
   
   
   
   
       alert(dataP);
   
     localStorage.setItem("email",JSON.stringify(emailG));
     localStorage.setItem("pass",JSON.stringify(passG));
   
     localStorage.setItem("dui", JSON.stringify(duiG));
     localStorage.setItem("nit", JSON.stringify("lol"));
   
   
     localStorage.setItem("tel", JSON.stringify(telG));
     localStorage.setItem("nombre", JSON.stringify(nombreG));
   
   
     localStorage.setItem("apellido", JSON.stringify(apellidoG));
   
     localStorage.setItem("dato", JSON.stringify(datosG));
     localStorage.setItem("pre", JSON.stringify(alturaG));
     localStorage.setItem("pre1", JSON.stringify(pesoG));
     localStorage.setItem("cuentas", JSON.stringify(cuenG));
     localStorage.setItem("tarjeta", JSON.stringify(tarjG));
     localStorage.setItem("contcu", JSON.stringify(conteocuG));
     localStorage.setItem("contta", JSON.stringify(conteotaG));
     localStorage.setItem("ingreso", JSON.stringify(ingrG));
     localStorage.setItem("gasto", JSON.stringify(gastG));
     localStorage.setItem("contin", JSON.stringify(conteocuG));
     localStorage.setItem("contga", JSON.stringify(conteocuG));
   
     localStorage.setItem("users", y);
     j=1;
     window.location="login.html";
   }
   
     
   
   
   }
   function entrar(){
   
       var oc2=document.getElementById("pass").value;
       var oc1=document.getElementById("email").value;
   
       var entrar1 = JSON.parse(localStorage.getItem("email"));
       var entrar2 = JSON.parse(localStorage.getItem("pass"));
   
       entrar1.indexOf(oc1);
   
       if ((entrar1.indexOf(oc1))=='-1') {
           alert("El usuario no esta registrado")
   
       }
       else{
           var bandera= entrar1.indexOf(oc1);
           if (oc1==entrar1[bandera] && oc2==entrar2[bandera]) {
   
           window.location="ewallet.html"; 
           localStorage.setItem("login", "simon");
           localStorage.setItem("id", bandera);
           }
           else{
           alert("Contraseña Incorrecta");
           }
       }
   
       
       
   }
   function salir(){
   
       localStorage.setItem("login", "nel");
       localStorage.setItem("id", 0);
   
       window.location="login.html";
       
       
   }function primera(){
   
       var idxd=localStorage.getItem("id");
       
   var monto=document.getElementById("monto");
       var saldo=document.getElementById("saldo");
       var banco=document.getElementById("banco").value;
       var cuentas=document.getElementById("cuenta").value;
   
   
   
   var u = localStorage.getItem("users");
   
   var x = parseInt(u);
   if (monto=="" || saldo==""|| banco==""|| cuentas=="") {
   
       alert("Falta un dato, favor revise los campos");
   }
   else{
   var dataDA= JSON.parse(localStorage.getItem("dato"));
   var dataCU= JSON.parse(localStorage.getItem("cuentas"));
   var conCU= JSON.parse(localStorage.getItem("conteo"));
   var conteo = JSON.parse(localStorage.getItem("contcu"));
   
   
   
   var conteoc=[];
    var datosG = [];
     var conG = [];
   
   
   var cuentasG = [[[]]];
   
   
   
   var j =parseInt(1); 
   
   if (dataDA==null) {
   
   }
   else{
   
   
   
   
           for (;u>j;) {
                datosG[j] =dataDA[j];
                cuentasG[j]=dataCU[j];
                conteoc[j]=conteo[j];
                j++
           } 
            
   
   
   }
           var y =((parseInt(conteo[idxd]))+1);
           alert(y);
       conteoc[idxd] = y
       conteo[idxd] = y
    datosG[idxd] = monto.value;
   
       var saldo=document.getElementById("saldo").value;
       var banco=document.getElementById("banco").value;
       var cuentas=document.getElementById("cuenta").value;
       cuentasG[idxd][y] = [saldo,cuentas,banco] ;
   
    
   
        
       alert(saldo.value );
   
   
     localStorage.setItem("dato", JSON.stringify(datosG));
     localStorage.setItem("cuentas", JSON.stringify(cuentasG));
     localStorage.setItem("contcu", JSON.stringify(conteo));
   
     j=1;
   
     window.location="ewallet.html";
           
   }}
   function occ(){
       var oc1=document.getElementById("oc").value;
       var xd = localStorage.getItem("rec");
       var entrar1 = JSON.parse(localStorage.getItem("pre1"));
       var bandera= entrar1.indexOf(oc1);
   
       var pre1 = JSON.parse(localStorage.getItem("pre1"));
   
       if (pre1[bandera]==oc1) {
           var pass = JSON.parse(localStorage.getItem("pass"));
   
           alert(pass[bandera]);
           localStorage.setItem("rec", 0);
           window.location="login.html";
       }
       else{
           alert("Respuesta incorrecta");
       }
   
       
   }
   function recu(){
   
   
       var oc1=document.getElementById("email").value;
   
       var entrar1 = JSON.parse(localStorage.getItem("email"));
   
       entrar1.indexOf(oc1);
   
       if ((entrar1.indexOf(oc1))=='-1') {
           alert("El usuario no esta registrado")
   
       }
       else{
           var bandera= entrar1.indexOf(oc1);
   
           var pre = JSON.parse(localStorage.getItem("pre"));
           var pre1 = JSON.parse(localStorage.getItem("pre1"));
           
           document.getElementById("1").innerHTML="<br><br><h2>"+pre[bandera]+"</h2><br><br>";
   
   
           document.getElementById("email").id="oc";
           document.getElementById("4").insertAdjacentHTML("beforeBegin","<input value='Recuperar' id='rec'  target='_parent' onclick='occ()'' type='button'/>");
           document.getElementById("2").style=" opacity: 0;";
           localStorage.setItem("rec", oc1);
           
       }
   }
   
   