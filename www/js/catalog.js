function setcategorydropdown(data)
{
	var drrodownhtml='<option value="">Select categories</option>';
	var shopbycategory='';
	
	  $.each(data.category, function(index) {
           
            drrodownhtml+='<option value="'+data.category[index].slug+'">'+data.category[index].name+'</option>';
        
		  shopbycategory+='<div class="item">\
                    <div class="shop-category-oil">\
                        <a onclick="categoryproducts(\''+data.category[index].slug+'\')">\
                            <div class="category-cbd">\
                                <img src="'+data.category[index].category_image+'" alt="">\
                            </div>\
                            <div class="category-text">\
							   <div class="category-text-box">\
                                <p>'+data.category[index].name+'</p>\
								</div>\
                                <span class="category-cbd-icon"><i class="fa fa-arrow-right"\
                                        aria-hidden="true"></i></span>\
                            </div></a></div></div>';
							
			
		});
		
		jQuery('#productcategory').html(drrodownhtml);
		jQuery('#shopbycategoryid').html(shopbycategory);
		 $('#shopbycategoryid').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                990: {
                    items: 2
                },

            }
        }); 
		
    		
}
function leftcategorymenu(data)
{
	var catmenu='';
	  $.each(data.category, function(index) {
           					
			catmenu+='<li class="sidbar-olist-iner"><a href="javascript:void(0)" onClick="categoryproductsCat(\''+data.category[index].slug+'\')">-&nbsp;'+data.category[index].name+'</a>';	
    			if((data.category[index].subcat).length)
				{
					catmenu+='<span class="plush-2"><i class="fa fa-plus"\
                                    aria-hidden="true"></i></span>';
					catmenu+='<ul class="sidbar-olist-iner-box">';
					$.each(data.category[index].subcat, function(index1) {
						
					catmenu+='<li><a href="javascript:void(0)" onClick="categoryproducts(\''+data.category[index].subcat[index1].slug+'\')">-&nbsp;'+data.category[index].subcat[index1].name+'</a></li>';	
    		
					});
					
					catmenu+='</ul>';
				}
		   catmenu+='</li>';
		});
		
	 jQuery('#catlist').html(catmenu);

     jQuery(".plush").click(function () {
		 if($(this).children().hasClass('fa-plus')) {
				$(this).children().removeClass('fa-plus').addClass('fa-minus');
			}else {
				$(this).children().removeClass('fa-minus').addClass('fa-plus');
			}
            jQuery(".sidbar-olist").toggle("slow");

        });
       jQuery(".plush-2").click(function () {
			if($(this).children().hasClass('fa-plus')) {
				$(this).children().removeClass('fa-plus').addClass('fa-minus');
			}else {
				$(this).children().removeClass('fa-minus').addClass('fa-plus');
			}
            jQuery(this).parent().find('.sidbar-olist-iner-box').toggle("slow");

        });		 
}	
function leftcategorymenuCat(data)
{
	var catmenu='';
	  $.each(data.category, function(index) {
           					
			catmenu+='<li class="sidbar-olist-iner"><a href="javascript:void(0)" onClick="categoryproductsCat(\''+data.category[index].slug+'\')">-&nbsp;'+data.category[index].name+'</a>';	
    			if((data.category[index].subcat).length)
				{
					catmenu+='<span class="plush-2"><i class="fa fa-plus"\
                                    aria-hidden="true"></i></span>';
					catmenu+='<ul class="sidbar-olist-iner-box">';
					$.each(data.category[index].subcat, function(index1) {
						
					catmenu+='<li><a href="javascript:void(0)" onClick="categoryproductsCat(\''+data.category[index].subcat[index1].slug+'\')">&nbsp;--&nbsp;'+data.category[index].subcat[index1].name+'</a></li>';	
    		
					});
					
					catmenu+='</ul>';
				}
		   catmenu+='</li>';
		});
		
	 jQuery('#catlist').html(catmenu);	
	 
	  jQuery(".plush").click(function () {
		  if($(this).children().hasClass('fa-plus')) {
				$(this).children().removeClass('fa-plus').addClass('fa-minus');
			}else {
				$(this).children().removeClass('fa-minus').addClass('fa-plus');
			}
            jQuery(".sidbar-olist").toggle("slow");

        });
        jQuery(".plush-2").click(function () {
			if($(this).children().hasClass('fa-plus')) {
				$(this).children().removeClass('fa-plus').addClass('fa-minus');
			}else {
				$(this).children().removeClass('fa-minus').addClass('fa-plus');
			}
            jQuery(this).parent().find('.sidbar-olist-iner-box').toggle("slow");

        });		
}
function categoryproducts(catslug)
{
	 window.localStorage.setItem("current_cat_slug", catslug);
	 window.plugins.nativepagetransitions.slide({
              "direction" : "left",
			   "duration":1000,
			   "androiddelay":  400,
              "href" : "product-list.html"
          });
}
function categoryproductsCat(catslug)
{
	 window.localStorage.setItem("current_cat_slug", catslug);
	 setvalue();
}

function productdetal(productid)
{
	window.localStorage.setItem("current_product_id", productid);
	 window.plugins.nativepagetransitions.slide({
              "direction" : "left",
			   "duration":1000,
			   "androiddelay":  400,
              "href" : "product-detail.html"
          });
}

function searchProduct()
{
	var search_cat_slug=jQuery("#productcategory").val();	
    var search_product_name=jQuery("#productname").val();   
      if(search_cat_slug=='')
	  {
		jQuery('#productcategory').css('border', '1px solid red');
		setTimeout(function(){ jQuery('#productcategory').css('border', ''); },2000);
		return false;
	  }	
	  
	  if(search_product_name=='')
	  {
		jQuery('#productname').css('border', '1px solid red');
		setTimeout(function(){ jQuery('#productname').css('border', ''); },2000);
		return false;
	  }	
	  
	window.localStorage.setItem("search_cat_slug", search_cat_slug);
	window.localStorage.setItem("search_product_name", search_product_name);
	
	 window.plugins.nativepagetransitions.slide({
              "direction" : "left",
			   "duration":1000,
			   "androiddelay":  400,
              "href" : "product-search.html"
          });
}
 