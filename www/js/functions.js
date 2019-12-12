var base_url='https://ceonpoint.com/api';

 function flippageup(page) {


             window.plugins.nativepagetransitions.slide({

                 "direction" : "up",
                  "href" : page
             });
           }

function bakpage(page) {


		 window.plugins.nativepagetransitions.slide({
			 "direction" : "right",
			 "href" : page
		 });
	   }
		   
function nextpage(page) {


		 window.plugins.nativepagetransitions.slide({
			 "direction" : "left",
			 "href" : page
		 });
	}	   


function bakpagedwn(page) {

		 window.plugins.nativepagetransitions.slide({
			 "direction" : "down",
			 "href" : page
		 });
	   }



function main()
{	
	var loggedIn=	window.localStorage.getItem("loggedIn"); 
	if(loggedIn)
	 {
	  var menuhtm='<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
	 <div class="sidbar-header">\
		<a class="profile-box" onClick="nextpage(\'index.html\')"> <span class="profile"><img src="images/logo.jpg" alt=""></span>\
			<span>'+window.localStorage.getItem("login_user_name")+'</span></div></a>\
		<ul class="sidbar-listing">\
		<li class="sidbar-listing-iner-list"><a href="javascript:void(0)"><span class="sidbar-icon"><img src="images/list8.jpg" alt=""></span>Product By\
				Category <span class="plush"><i class="fa fa-plus" aria-hidden="true"></i></span></a>\
			<ol id="catlist" class="sidbar-olist">\
				<li><a href="javascript:void(0)" onClick="categoryproducts(\'cbd-bath-body\')">-&nbsp;CBD Bath & Body</a></li>\
				<li><a href="javascript:void(0)" onClick="categoryproducts(\'cbd-beverages\')">-&nbsp;CBD Beverages</a></li>\
				<li><a href="javascript:void(0)" onClick="categoryproducts(\'cbd-edibles\')">-&nbsp;CBD Edibles</a></li>\
				<li><a href="javascript:void(0)" onClick="categoryproducts(\'cbd-wellness\')">-&nbsp;CBD Health & Wellness</a></li>\
			</ol>\
		</li>\
		<li><a href="javascript:void(0)" onClick="nextpage(\'my-orders.html\')"><span class="sidbar-icon"><img src="images/list7.jpg" alt=""></span>My Orders</a></li>\
		<li><a href="javascript:void(0)" onClick="nextpage(\'my-cart.html\')"><span class="sidbar-icon"><img src="images/list6.jpg" alt=""></span>My Cart <span\
					class="cart-rt-dtl totitem">1</span></a></li>\
		<li><a href="javascript:void(0)" onClick="nextpage(\'my-address-list.html\')"><span class="sidbar-icon"><img src="images/address-icon.png" alt=""></span>Addresses</a></li>\
		<li><a href="javascript:void(0)" onClick="nextpage(\'edit-account.html\')"><span class="sidbar-icon"><img src="images/account-detail.png" alt=""></span>Account details</a></li>\
	<li><a href="javascript:void(0)" onClick="nextpage(\'cbd-dosage-calculator.html\')"><span class="sidbar-icon"><img src="images/calculator.png" alt=""></span>CBD Dosage Calculator</a></li>\
	<li><a href="javascript:void(0)" onClick="nextpage(\'contact-us.html\')"><span class="sidbar-icon"><img src="images/contact-us.png" alt=""></span>Contact us</a></li>\
	</ul>';
	
			 menuhtm+='<div class="logout">\
				  <a href="javascript:void(0)" onClick="logout()"><span><i class="fa fa-sign-out" aria-hidden="true"></i></span> Logout</a>\
				   </div>';	

			 jQuery('#sidenavcontainer').html(menuhtm);
			 
			 jQuery(document).on('click', function (e) { 
                				 
				if (jQuery(e.target).closest(".fa").length===0 &&
				       jQuery(e.target).closest(".plush-2").length === 0 &&
					   jQuery(e.target).closest(".plush").length===0) {
					closeNav();
				}
			   });
	 }else
	 {
		 nextpage('login.html');
	 }		 

}

function catmain()
{	
	var menuhtm='<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
	 <div class="sidbar-header">\
		<a class="profile-box" onClick="nextpage(\'index.html\')"> <span class="profile"><img src="images/logo.jpg" alt=""></span>\
			<span>'+window.localStorage.getItem("login_user_name")+'</span></div></a>\
		<ul class="sidbar-listing">\
		<li class="sidbar-listing-iner-list"><a href="javascript:void(0)"><span class="sidbar-icon"><img src="images/list8.jpg" alt=""></span>Product By\
				Category <span class="plush"><i class="fa fa-plus" aria-hidden="true"></i></span></a>\
			<ol id="catlist" class="sidbar-olist">\
				<li><a href="javascript:void(0)" onClick="categoryproductsCat(\'cbd-bath-body\')">-&nbsp;CBD Bath & Body</a></li>\
				<li><a href="javascript:void(0)" onClick="categoryproductsCat(\'cbd-beverages\')">-&nbsp;CBD Beverages</a></li>\
				<li><a href="javascript:void(0)" onClick="categoryproductsCat(\'cbd-edibles\')">-&nbsp;CBD Edibles</a></li>\
				<li><a href="javascript:void(0)" onClick="categoryproductsCat(\'cbd-wellness\')">-&nbsp;CBD Health & Wellness</a></li>\
			</ol>\
		</li>\
		<li><a href="javascript:void(0)" onClick="nextpage(\'my-orders.html\')"><span class="sidbar-icon"><img src="images/list7.jpg" alt=""></span>My Orders</a></li>\
		<li><a href="javascript:void(0)" onClick="nextpage(\'my-cart.html\')"><span class="sidbar-icon"><img src="images/list6.jpg" alt=""></span>My Cart <span\
					class="cart-rt-dtl totitem">5</span></a></li>\
		<li><a href="javascript:void(0)" onClick="nextpage(\'my-address-list.html\')"><span class="sidbar-icon"><img src="images/address-icon.png" alt=""></span>Addresses</a></li>\
		<li><a href="javascript:void(0)" onClick="nextpage(\'edit-account.html\')"><span class="sidbar-icon"><img src="images/account-detail.png" alt=""></span>Account details</a></li>\
	<li><a href="javascript:void(0)" onClick="nextpage(\'cbd-dosage-calculator.html\')"><span class="sidbar-icon"><img src="images/calculator.png" alt=""></span>CBD Dosage Calculator</a></li>\
	<li><a href="javascript:void(0)" onClick="nextpage(\'contact-us.html\')"><span class="sidbar-icon"><img src="images/contact-us.png" alt=""></span>Contact us</a></li>\
	</ul>';
	
		
				
			var loggedIn=	window.localStorage.getItem("loggedIn");
			
				if(loggedIn)
				{
				 menuhtm+='<div class="logout">\
				  <a href="javascript:void(0)" onClick="logout()"><span><i class="fa fa-sign-out" aria-hidden="true"></i></span> Logout</a>\
				   </div>';	
				}else
				{
				 menuhtm+='<div class="logout">\
				  <a onClick="nextpage(\'login.html\')"><span><i class="fa fa-sign-out" aria-hidden="true"></i></span> Logoin</a>\
				  </div>';
				}

			 jQuery('#sidenavcontainer').html(menuhtm);
			 
			 
			 jQuery(document).on('click', function (e) {  
                 			 
				if (jQuery(e.target).closest(".fa").length===0 &&
				       jQuery(e.target).closest(".plush-2").length === 0 &&
					   jQuery(e.target).closest(".plush").length===0) {
					closeNav();
				}
			   });

}

function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
	
function logout() {

  window.localStorage.removeItem("loggedIn");
  window.localStorage.removeItem("login_user_id");  
  window.localStorage.removeItem("login_user_email");  
  window.localStorage.removeItem("login_user_name");  
  nextpage('login.html');

}

function getCartDetail()
{
	var login_user_id= window.localStorage.getItem("login_user_id");
    
	  if(login_user_id)
	  {
		  
		  $.ajax({	    	
				   type:'POST',						
					url:"https://purecbdgroup.com/api.php/cart_total_detail",
					data:JSON.stringify({'user_id':login_user_id}),						
					contentType: 'application/json',
					success:function(data)
					{		  
					 				  
					  var carthtml='';						
						if(data.status)
						{
						  jQuery('.zero').html(data.total_cart_item);
						  
						if (jQuery('.pricehtml').length) {
                            jQuery('.pricehtml').html(data.currency+parseFloat(data.total_price).toFixed(2));
						  }	
						  
						  if (jQuery('.totitem').length) {
                            jQuery('.totitem').html(data.total_cart_item);
						  }

                          if (jQuery('.taxhtml').length) {
                            jQuery('.taxhtml').html(data.currency+parseFloat(data.total_tax).toFixed(2));
						  }	
						  
						  if (jQuery('.payablepricehtml').length) {
                            jQuery('.payablepricehtml').html(data.currency+parseFloat(data.payableamount).toFixed(2));
						  }	
						  
						}				
					  
					},
					error: function(e) {
						alert('Error: ' + e.message);
					}
			});	
		  
	  }
}