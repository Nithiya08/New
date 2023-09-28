function add(){
    var a=document.getElementById('fn').value;
    if(a==''){
      document.getElementById('spn').innerHTML="Plese Enter the value";
      return false;
    }
    else{
      document.getElementById('spn').style.display='none';
      a=Number(a);
    }
    if(!(a>0)){
        document.getElementById('spnn').innerHTML="Plese Enter the valid input";
        return false;
    }else{
        document.getElementById('spnn').style.display='none';
        a=Number(a);
    }
    var b=document.getElementById('sn').value;
    if(b==''){
        document.getElementById('spa').innerHTML="Plese Enter the value";
        return false;
      }
      else{
        document.getElementById('spa').style.display='none';
        b=Number(b);
      }
      if(!(b>0)){
          document.getElementById('spp').innerHTML="Plese Enter the valid input";
          return false;
      }else{
          document.getElementById('spp').style.display='none';
          b=Number(b);
      }
    document.getElementById('result').innerHTML=a+b;
    }

function sub(){
    var a=document.getElementById('fn').value;
    if(a==''){
        document.getElementById('spn').innerHTML="Plese Enter the valid input";
        return false;
      }
      else{
        document.getElementById('spn').style.display='none';
        a=Number(a);
      }
      if(!(a>0)){
          document.getElementById('spnn').innerHTML="Plese Enter the postive value";
          return false;
      }else{
          document.getElementById('spnn').style.display='none';
          a=Number(a);
      }
    var b=document.getElementById('sn').value;
    if(b==''){
        document.getElementById('spa').innerHTML="Plese Enter the value";
        return false;
      }
      else{
        document.getElementById('spa').style.display='none';
        b=Number(b);
      }
      if(!(b>0)){
          document.getElementById('spp').innerHTML="Plese Enter the valid input";
          return false;
      }else{
          document.getElementById('spp').style.display='none';
          b=Number(b);
      }
    if(a<b){
        document.getElementById('mm').innerHTML="The first number is must be greaterthan the second number!!";
        return false;
    }else{
        document.getElementById('mm').style.display='none';
    }
    document.getElementById('result').innerHTML=a-b;
}
function mul(){
    var a=document.getElementById('fn').value;
    if(a==''){
        document.getElementById('spn').innerHTML="Plese Enter the value";
        return false;
      }
      else{
        document.getElementById('spn').style.display='none';
        a=Number(a);
      }
      if(!(a>0)){
          document.getElementById('spnn').innerHTML="Plese Enter the valid input";
          return false;
      }else{
          document.getElementById('spnn').style.display='none';
          a=Number(a);
      }
    var b=document.getElementById('sn').value;
    if(b==''){
        document.getElementById('spa').innerHTML="Plese Enter the value";
        return false;
      }
      else{
        document.getElementById('spa').style.display='none';
        b=Number(b);
      }
      if(!(b>0)){
          document.getElementById('spp').innerHTML="Plese Enter the valid input";
          return false;
      }else{
          document.getElementById('spp').style.display='none';
          b=Number(b);
      }
    document.getElementById('result').innerHTML=a*b;
}
function div(){
    var a=document.getElementById('fn').value;
    if(a==''){
        document.getElementById('spn').innerHTML="Plese Enter the value";
        return false;
      }
      else{
        document.getElementById('spn').style.display='none';
        a=Number(a);
      }
      if(!(a>0)){
          document.getElementById('spnn').innerHTML="Plese Enter the valid input";
          return false;
      }else{
          document.getElementById('spnn').style.display='none';
          a=Number(a);
      }
    var b=document.getElementById('sn').value;
    if(b==''){
        document.getElementById('spa').innerHTML="Plese Enter the value";
        return false;
      }
      else{
        document.getElementById('spa').style.display='none';
        b=Number(b);
      }
      if(!(b>0)){
          document.getElementById('spp').innerHTML="Plese Enter the valid input";
          return false;
      }else{
          document.getElementById('spp').style.display='none';
          b=Number(b);
      }
    if(a<b){
        document.getElementById('mm').innerHTML="The first number is must be greaterthan the second number!!";
        return false;
    }else{
        document.getElementById('mm').style.display='none';   
    }
    document.getElementById('result').innerHTML=a%b;
}
