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

         window.localStorage.setItem("curpage", page);
		 
		 window.plugins.nativepagetransitions.slide({
			 "direction" : "left",
			 "href" : page
		 });
	}	   
function nextpagewithback(bkpage,page) {

         window.localStorage.setItem("page", bkpage);
		 
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

function backscreen()
{
	  var page=window.localStorage.getItem("page");	 
	  bakpage(page);
}

function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
	
function logout() {

  window.localStorage.removeItem("loggedIn");
  window.localStorage.removeItem("userdata");    
  nextpage('index.html');

}



function addfootermenu()
{
	 var curpage=window.localStorage.getItem("curpage");	
	var footerhtml='<div class="home-link-banner">\
		<div class="main-link-box">\
			<div class="hero-link-box">\
				<a href="javascript:void(0)" onclick="nextpage(\'dhasboard.html\')">\
					<div class="hero-link-img">\
						<img class="img-fluid" src="images/home.png" alt="">\
					</div>\
					<div class="hero-link-text">\
						<span>HOME</span>\
					</div>\
				</a>\
			</div>\
			<div class="hero-link-box">\
				<a href="javascript:void(0)" onclick="nextpage(\'onlinecourses.html\')">\
					<div class="hero-link-img">\
						<img class="img-fluid" src="images/online-course.png" alt="">\
					</div>\
					<div class="hero-link-text">\
						<span>Online Courses</span>\
					</div>\
				</a>\
			</div>\
			<div class="hero-link-box">\
				<a href="javascript:void(0)" onclick="nextpage(\'traingseminar.html\')">\
					<div class="hero-link-img">\
						<img class="img-fluid" src="images/bord.png" alt="">\
					</div>\
					<div class="hero-link-text">\
						<span>Training</span>\
					</div>\
				</a>\
			</div>\
			<div class="hero-link-box">\
				<a href="javascript:void(0)" onclick="nextpagewithback(\''+curpage+'\',\'profile.html\')">\
					<div class="hero-link-img">\
						<img class="img-fluid" src="images/user-icon.png" alt="">\
					</div>\
					<div class="hero-link-text">\
						<span>Account</span>\
					</div>\
				</a>\
			</div>\
		</div>\
	</div>';
	
	$( "body" ).append(footerhtml);
	
}