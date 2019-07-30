$(document).ready(function(){
    $("#getdata").click(function(){
    
   
   $.ajax({
       type:"GET",
       url:"https://jsonplaceholder.typicode.com/users",
       beforeSend: function(){
           $('#load').show();
       },
       success:function(data){
           $('#load').hide();
           //console.log(data);
           var output=" ";
          //<table class='table'><thead><tr><th>id</th><th>name</th><th>username</th><th>street</th><th>suite</th><th>city</th><th>zipcode</th><th>phone</th><th>website</th><th>company name</th></tr></thead>";
      for(var i in data){
       //output+="<div class='card'><tr class='card-header'><td>"+data[i].id+"</td>"   

output+="<div class='card'><div class='card-header'>"+ data[i].name+"</div>";
output+="<div class='card-body'>username:"+ data[i].username+"<br>";
output+="street:"+ data[i].address.street+"<br>";
output+="suite:"+ data[i].address.suite+"<br>";
output+="city:"+ data[i].address.city+"<br>";
output+="zipcode:"+ data[i].address.zipcode+"<br>";
output+="phone:"+ data[i].phone+"<br>";
output+="website:"+ data[i].website+"<br>";
output+="company name:"+ data[i].company.name+"</div><div class='card-footer'><button class='btn btn-success'>contact me</button></div></div>";

      }
      
     //output+="</table>";
     $('.result').html(output);
      
        }
       
       
    });
    
    });
    
    
    
            });