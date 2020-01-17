var ispurchase=0;
function viewlession()
{
    var course_id=window.localStorage.getItem("course_id");	 
	var userdata=JSON.parse(window.localStorage.getItem("userdata"));
	
	if(userdata)
           {
		    var user_id=userdata.id;
		   }else
            {
			  var user_id=0;
			
			}
   jQuery('.loading').show();
   jQuery('.mask').show();
   jQuery.ajax({					  
				type:'POST', 
				dataType: 'JSON',                   			
				url:base_url+"/professional/course_lesson",
				data: JSON.stringify({id: course_id,user_id:user_id }),				
				success:function(data)
					 {	 
						jQuery('.loading').hide();
						jQuery('.mask').hide();						
						console.log(data);	
                        if(data.success=="true")
						 {
                              var course_lesson='';                              
                               for (i in data.course_lesson) {
							   
							        if(data.purchase=="0" && i > 0)
									 {
									    course_lesson+='<div class="lesson-panel">\
										<div class="panel-heading">\
											<h4 class="panel-title">\
												<a data-toggle1="collapse" data-parent="#accordion" href="#lesson'+i+'"><i class="fa fa-lock"></i>\
													</i>Lesson No '+(parseInt(i)+1)+' : '+data.course_lesson[i].lesson_title+'</a>\
											</h4>\
										</div>';
									 }else
									  {
										 course_lesson+='<div class="lesson-panel">\
										<div class="panel-heading">\
											<h4 class="panel-title">\
												<a data-toggle="collapse" data-parent="#accordion" href="#lesson'+i+'">\
													<i class="fa fa-unlock"></i>Lesson No '+(parseInt(i)+1)+' : '+data.course_lesson[i].lesson_title+'</a>\
											</h4>\
										</div>';
									  }
							       
								    course_lesson+='<div id="lesson'+i+'" class="panel-collapse collapse">\
											<div class="panel-body">\
												<div class="lesson-details">\
													<p><strong>Description</strong></p>\
													<p>'+data.course_lesson[i].lesson_content+'</p>\
													<p><strong>Case Study</strong></p>\
													<p>'+data.course_lesson[i].summary+'</p>\
													<p><strong>Course Video</strong></p>\
													<p><video width="700" height="300" controls="controls" autoplay="" preload="auto">\
															<source src="'+data.course_lesson[i].lesson_video+'" type="video/mp4">\
															</video>\
													</p>\
												</div>\
											</div>\
										</div>\
									</div>';								   
							   }							   
							 jQuery('.course_lesson').html(course_lesson);  
							   
						 }  							 
						 
					}
				   });
 
}

function viewexam()
{
	
	var course_id=window.localStorage.getItem("course_id");	 
	var userdata=JSON.parse(window.localStorage.getItem("userdata"));
	
	var loggedIn=window.localStorage.getItem("loggedIn");
		    
		   if(!loggedIn)
			 {
			   jQuery('#Exam').html('<div class="login-box">\
				<a onclick="nextpage(\'login.html\')" href="javascript:void(0)" class="login-btn">LOG IN</a>\
			</div><div class="login-box text-right">\
				<a  onclick="nextpage(\'signup.html\')" href="javascript:void(0)" class="login-btn">SIGN UP</a></div>');
			  
			   return false;
			 }
	
	jQuery('#course_id').val(course_id);
	jQuery('#user_id').val(userdata.id);
	
	
    jQuery('.loading').show();
    jQuery('.mask').show();
    jQuery.ajax({					  
				type:'POST', 
				dataType: 'JSON',                   			
				url:base_url+"/professional/course_exam",
				data: JSON.stringify({id: course_id,user_id:userdata.id }),				
				success:function(data)
					 {	 
						jQuery('.loading').hide();
						jQuery('.mask').hide();						
							
						if(data.purchase=="0")
						{
							
							jQuery('#Exam').html('<div class="alert alert-info">Please purchase this Online Course to be opened for you.</div>');			  
			                return false;
							
						}							
                        if(data.success=="true")
						 {
							 if(data.pre_attempt=="1")
							 {
								jQuery('.premsg').html(data.pre_attempt_msg);								 
							   var pre_exam_qus='';                              
                               for (i in data.pre_exam_qus) {								   
								    pre_exam_qus+='<div class="panel panel-default">\
											<div class="panel-body">\
												<h4 class="mt-0">'+data.pre_exam_qus[i].question_title+'<span\
														class="required"> * </span></h4>\
												<div class="">';
												
												if(data.pre_exam_qus[i].selected_option=='1')
                                                    {
													   pre_exam_qus+='<label class="radio-inline">\
														<input name="ans-'+data.pre_exam_qus[i].id+'" size="20" type="radio" value="1" checked>\
														'+data.pre_exam_qus[i].option1+' </label>';
													}else
													{													
														pre_exam_qus+='<label class="radio-inline">\
														<input name="ans-'+data.pre_exam_qus[i].id+'" size="20" type="radio" value="1">\
														'+data.pre_exam_qus[i].option1+' </label>';
													}
													
													if(data.pre_exam_qus[i].selected_option=='2')
                                                    {														
													 pre_exam_qus+='<label class="radio-inline">\
														<input name="ans-'+data.pre_exam_qus[i].id+'" size="20" type="radio" value="2" checked>\
														'+data.pre_exam_qus[i].option2+' </label>';
													}else
													{													
 													  pre_exam_qus+='<label class="radio-inline">\
														<input name="ans-'+data.pre_exam_qus[i].id+'" size="20" type="radio" value="2">\
														'+data.pre_exam_qus[i].option2+' </label>';														
													}
													if(data.pre_exam_qus[i].selected_option=='3')
                                                    {
													  pre_exam_qus+='<label class="radio-inline">\
														<input name="ans-'+data.pre_exam_qus[i].id+'" size="20" type="radio" value="3" checked>\
														'+data.pre_exam_qus[i].option3+' </label>';
														
													}else
													{
														
													 pre_exam_qus+='<label class="radio-inline">\
														<input name="ans-'+data.pre_exam_qus[i].id+'" size="20" type="radio" value="3" >\
														'+data.pre_exam_qus[i].option3+' </label>';
													}
													if(data.pre_exam_qus[i].selected_option=='4')
                                                    {
													  pre_exam_qus+='<label class="radio-inline">\
														<input name="ans-'+data.pre_exam_qus[i].id+'" size="20" type="radio" value="4" checked>\
														'+data.pre_exam_qus[i].option4+'</label>';
													}else
													{
													   pre_exam_qus+='<label class="radio-inline">\
														<input name="ans-'+data.pre_exam_qus[i].id+'" size="20" type="radio" value="4">\
														'+data.pre_exam_qus[i].option4+'</label>';
														
													}

													
													if(data.pre_exam_qus[i].ansewer=='Incorrect')
                                                    {
														pre_exam_qus+='<label class="radio-inline"> <span style="color:red;">'+data.pre_exam_qus[i].ansewer+'</span></label>';
													}else
                                                    {														
												      pre_exam_qus+='<label class="radio-inline"> <span style="color:green;">'+data.pre_exam_qus[i].ansewer+'</span></label>';
													}
												  pre_exam_qus+='</div></div></div>';							   
							   								   
							   }							   
							     jQuery('.pre_exam_qus').html(pre_exam_qus); 
								 jQuery('.coursehtml').hide();
								 jQuery('.pre_exam_qus').show();
								 
								if(data.pre_exam_result=="fail")
								 {
									 jQuery('.retakebtn').show();
									 jQuery('.subbtn').hide();
									 jQuery('.checkquestion').hide();
								 }
								 
								 if(data.pre_exam_result=="exceed")
								 {
									 jQuery('.retakebtn').hide();
									 jQuery('.subbtn').hide();
									 jQuery('.checkquestion').hide();
								 }

                                if(data.pre_exam_result=="success")
								 {
									 jQuery('.retakebtn').hide();
									 jQuery('.subbtn').hide();
									 jQuery('.checkquestion').show();
								 }								 
								 
							 } 							 
							 
                               var exam_qus='';                              
                               for (i in data.exam_qus) {
								   
								    exam_qus+='<div class="panel panel-default">\
											<div class="panel-body">\
												<h4 class="mt-0">'+data.exam_qus[i].question_title+'<span\
														class="required"> * </span></h4>\
												<div class="">\
													<label class="radio-inline">\
														<input name="ans-'+data.exam_qus[i].id+'" size="20" type="radio" value="1">\
														'+data.exam_qus[i].option1+' </label>\
													<label class="radio-inline">\
														<input name="ans-'+data.exam_qus[i].id+'" size="20" type="radio" value="2">\
														'+data.exam_qus[i].option2+' </label>\
													<label class="radio-inline">\
														<input name="ans-'+data.exam_qus[i].id+'" size="20" type="radio" value="3">\
														'+data.exam_qus[i].option3+' </label>\
													<label class="radio-inline">\
														<input name="ans-'+data.exam_qus[i].id+'" size="20" type="radio" value="4">\
														'+data.exam_qus[i].option4+' </label>\
														</div></div></div>';							   
							   								   
							   }							   
							 jQuery('.coursehtml').html(exam_qus);  
							   
						 }  							 
						 
					}
				   });
	
}



function saveexam()
{
	
	jQuery('.loading').show();
    jQuery('.mask').show();
	
    jQuery.ajax({					  
				type:'POST', 
				dataType: 'JSON',                   			
				url:base_url+"/professional/course_saveexam",
				data: jQuery("#questionfrm").serialize(),				
				success:function(data)
					 {	 
						viewexam();  							 
						 
					}
				   });
	
}
function retake()
{
	
	jQuery('.pre_exam_qus').hide();
	jQuery('.coursehtml').show();
	
	jQuery('.retakebtn').hide();
	 jQuery('.subbtn').show();
	 jQuery('.checkquestion').hide();
	
}
function checkcertificate()
{	
	jQuery('#certfct').click();	
}

function viewCertificate()
{
	 var loggedIn=window.localStorage.getItem("loggedIn");
		    
		   if(!loggedIn)
			 {
			   jQuery('#Certificate').html('<div class="login-box">\
				<a onclick="nextpage(\'login.html\')" href="javascript:void(0)" class="login-btn">LOG IN</a>\
			</div><div class="login-box text-right">\
				<a  onclick="nextpage(\'signup.html\')" href="javascript:void(0)" class="login-btn">SIGN UP</a></div>');
			 return false;
			 }

    var course_id=window.localStorage.getItem("course_id");	 
	var userdata=JSON.parse(window.localStorage.getItem("userdata"));			 
			 
		jQuery('.loading').show();
		jQuery('.mask').show();
       jQuery.ajax({					  
				type:'POST', 
				dataType: 'html',                   			
				url:base_url+"/professional/couser_certificate",
				data: JSON.stringify({id: course_id,user_id:userdata.id }),				
				success:function(data)
					 {	 
						jQuery('.loading').hide();
						jQuery('.mask').hide();						
						
						
						if(ispurchase=="0")
						{				
							jQuery('#Certificate').html('<div class="alert alert-info">Please purchase this Online Course to be opened for you.</div>');			  
			                return false;
							
						}
						if(data=="0")
						{				
							jQuery('#Certificate').html('<div class="alert alert-info">Please pass the exam.</div>');			  
			                return false;
							
						}	

                       jQuery('.certificate-box').html(data);						
                        
					}
				   }); 
	
}

function downloadCertificate()
{
	 var loggedIn=window.localStorage.getItem("loggedIn");
	
    var course_id=window.localStorage.getItem("course_id");	 
	var userdata=JSON.parse(window.localStorage.getItem("userdata"));			 
			 
		jQuery('.loading').show();
		jQuery('.mask').show();
       jQuery.ajax({					  
				type:'POST', 
				dataType: 'JSON',                   			
				url:base_url+"/professional/download_certificate",
				data: JSON.stringify({id: course_id,user_id:userdata.id }),				
				success:function(data)
					 {
                       var ref = window.open( data.url, "_blank", "EnableViewPortScale=yes" );					  
					   jQuery('.loading').hide();
					   jQuery('.mask').hide();	  													
                        
					  }
				   }); 
	
}

function viewEvaluation()
{
	
	var loggedIn=window.localStorage.getItem("loggedIn");
		   
		   if(!loggedIn)
			 {
			   jQuery('#Evaluation').html('<div class="login-box">\
				<a onclick="nextpage(\'login.html\')" href="javascript:void(0)" class="login-btn">LOG IN</a>\
			</div><div class="login-box text-right">\
				<a  onclick="nextpage(\'signup.html\')" href="javascript:void(0)" class="login-btn">SIGN UP</a></div>');
			  return false;
			 }
			 
			 if(ispurchase=="0")
			 {				
				jQuery('#Evaluation').html('<div class="alert alert-info">Please purchase this Online Course to be opened for you.</div>');			  
				return false;
				
			 }
}

function saveEvaluation()
{
   var star_mark= jQuery('input[name="rating89"]:checked').val();	
   var comments=jQuery('#evaluation').val();	
   var course_id=window.localStorage.getItem("course_id");	 
   var userdata=JSON.parse(window.localStorage.getItem("userdata"));
   jQuery('.loading').show();
   jQuery('.mask').show();
   jQuery.ajax({					  
				type:'POST', 
				dataType: 'JSON',                   			
				url:base_url+"/professional/course_evaluation",
				data: JSON.stringify({course_id: course_id,user_id:userdata.id,star_mark:star_mark,comments:comments}),				
				success:function(data)
					 {	 
						jQuery('.loading').hide();
						jQuery('.mask').hide();						
						
                        if(data.success=="true")
						 {
							  jQuery('.mesg').html(data.msg); 
						 }  							 
						 
					}
				   });	
				   
	return false;			   
	
}

function success(msg) {

 alert('r');
  
    window.open('data:application/pdf,', escape(msg.replace('\n', '')))
    
   

}
function failure(msg) {

 alert('fr');
  
  
    
   

}