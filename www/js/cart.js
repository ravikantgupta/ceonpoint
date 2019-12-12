
function addProductTocart(product_id,quantity,action)
{
	var login_user_id= window.localStorage.getItem("login_user_id");	
	  if(login_user_id)
	  {
		   jQuery('.loader').show();
		   jQuery('.mask').show();
		  $.ajax({	    	
						   type:'POST',						
							url:"https://purecbdgroup.com/api.php/add_to_cart",
							data:JSON.stringify({'user_id':login_user_id,
							     'product_id':product_id,
								 'quantity':quantity,
								 'action':action}),						
							contentType: 'application/json',
							success:function(data)
							{	
							  
							  if(data.status) 
							  {
							   window.localStorage.setItem('successmsg', data.message);
							    nextpage('my-cart.html');
							  }else
							  {
								  jQuery("#msgstatus").addClass("alert-danger").text(data.message);
								  
								  setTimeout(function(){jQuery("#msgstatus").removeClass("alert-danger").text('');},3000);
							  }
							  
							  jQuery('.loader').hide();
							  jQuery('.mask').hide();
							},
							error: function(e) {
								alert('Error: ' + e.message);
							}
					});
	  }else
      {
		  nextpage('login.html');
	  }		  
}

function updateProductTocart(product_id,quantity,action)
{
	var login_user_id= window.localStorage.getItem("login_user_id"); 
	
	  if(login_user_id)
	  {
		   jQuery('.loader').show();
			  jQuery('.mask').show();	
		  $.ajax({	    	
						   type:'POST',						
							url:"https://purecbdgroup.com/api.php/add_to_cart",
							data:JSON.stringify({'user_id':login_user_id,
							     'product_id':product_id,
								 'quantity':quantity,
								 'action':action}),						
							contentType: 'application/json',
							success:function(data)
							{	
							  
							 setvalue();		  
							  
							},
							error: function(e) {
								alert('Error: ' + e.message);
							}
					});
	  }else
      {
		  nextpage('login.html');
	  }		  
}