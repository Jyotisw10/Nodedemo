var inner_data_url = document.location.origin+'/new/admin/';
var front_data_url = document.location.origin+'/new/';


function BookingCancel(id){
	if(confirm("Are you sure to cancel")){
	if(id!="")
	{
		           $.ajax({
					type: "POST",
					url:front_data_url.concat("customer").concat("/").concat("bookingcancel").concat("/").concat(id),
					dataType: 'json',
					success: function(data) 
					{ if(data.success==1){
					$(".success").html('<div class="alert alert-success">Booking successfully canceled reschedule now !</div>');
		$(".alert").fadeTo(7000, 0).slideUp(7000, function(){
          $(this).remove(); 
      });	
      location.reload();
					}
						
					}
				});
	} 
	}
}


function AllowNumbersOnlynumber(e) {
        var code = (e.which) ? e.which : e.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }
function AllowNumbersOnly(e) {
        var code = (e.which) ? e.which : e.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }

 function assignvendor(vendorid,requestid){
 	
 	$.ajax({
 		type:"POST",
 		url:front_data_url.concat('admin').concat('/').concat('dashboard').concat('/').concat('customupdate'),
 		data:{vendorid:vendorid,requestid:requestid},
 		 success: function(data)
          {  
          alert('Vendor Assign Successfully'); 
         // location.reload();
         }
 	});
 }
$(document).on('click','.status_checks',function(){

	var sws_data=$(this).attr('rel');



	var myarr = sws_data.split("__");



	var url = inner_data_url.concat(myarr[0]);



	 var updateColumn=$(this).attr('col');


      var status = ($(this).hasClass("btn-success")) ? '0' : '1';



      var msg = (status=='0')? 'Deactivate' : 'Activate';



      if(confirm("Are you sure to "+ msg)){



        var current_element = $(this);



       



        $.ajax({



          type:"POST",



          url: url,



    data: {id:$(current_element).attr('data'),status:status,tableName:myarr[1],updateColumn:updateColumn},



          success: function(data)



          {   

 location.reload();



          }



        });



      }      



    });



    



  $(".del").click(function() {



    	var data=$(this).attr('rel');



    	var myarr = data.split("__");



	    var url = inner_data_url.concat(myarr[0]);



		if(confirm('Are you sure delete this data?'))



      {



      	



		var id = $(this).attr('id');



		var url = url;



		 $.ajax({



            url :url,



            type: "POST",



            dataType: "JSON",



            data: {id:id,tableName:myarr[1]},



            success: function(data)



            {



           
location.reload();


            },

 

        });



		}



	});  



	



 $(function() {



      $('input[name="daterange"]').daterangepicker();



     // $('input[name="daterangeP"]').daterangepicker();



     // $('input[name="daterangeR"]').daterangepicker();



      var d = new Date().getFullYear();



     // $('#ProductRange').val('01/01/'+d+' - 12/31/'+d);



      $('#CustomerRange').val('01/01/'+d+' - 12/31/'+d);



     // $('#RegisterRange').val('01/01/'+d+' - 12/31/'+d);



   });



    



    function changeCountry(id)



    {



     if(id!=''){



	 $.ajax({



            url: inner_data_url.concat('hotel').concat('/').concat('CityData'),



            cache: false,



            type: "POST",



            data: {id:id},



            dataType: "html",



            success: function (data) {



            	



                if (data == false)



                {



                     $("#city").html('<option value="">Select Country</option>');



                }



                else



                {



                    $("#city").html(data);



                }







            }



        }); 	



	 } else {



	 	$("#city").html('<option value="">Select Country</option>');



	 }



        



    }	

var check = function() {



            if (document.getElementById('password').value ==



                document.getElementById('confirmpassword').value) {



                document.getElementById('message').style.color = 'green';



                document.getElementById('message').innerHTML = 'Password Match';



            } else {



                document.getElementById('message').style.color = 'red';



                document.getElementById('message').innerHTML = 'Confirm Password Not Match';



            }



        }

 ////////////////////////////////////////////////////////////////////////Booking Services//////////////////

$('.join_btn').click(function(){



  var servicesid = $(this).data("servicesid");

  var price = $(this).data("price");

  var val = $(this).data("customerid");
 var servicetype = $(this).data("type");

 if(servicetype==1){
 	var state = $("#state"+servicesid).val();
 	if(state==''){
		alert('Please Select State');
		return false;
	}
 }
 // var commission = "<?php echo @$studiosdetails[0]->commission_price; ?>";

  var url = front_data_url.concat('booking').concat('/').concat('cart');

  

   $.ajax({

    url:url,

    method:"POST",

    data:{servicesid:servicesid,price:price,customerid:val,state:state},

    success:function(data)

    { 

     

    

   if(data.success==2){

    $(".error").html('<div class="alert alert-danger"></div>');

	$(".alert").fadeTo(5000, 0).slideUp(200, function(){

          $(this).remove(); 

      });

	} 

    if(data.success==1){

    $(".error").html('<div class="alert alert-danger">Service already added your cart!</div>');

	$(".alert").fadeTo(5000, 0).slideUp(200, function(){

          $(this).remove(); 

      });

	} 



else {



	$(".success").html('<div class="alert alert-success">Services added successfully!</div>');



		$(".alert").fadeTo(5000, 0).slideUp(200, function(){



          $(this).remove(); 



      });

window.location.href=front_data_url.concat('booking');
 // location.reload();

	}

    }

   });

 });

 

////////////////////Delete Cart/////////////////////////////////

function delete_cart(id)

{ var url = front_data_url.concat('booking').concat('/').concat('delete').concat('/').concat(id);

  $.ajax({

      url : url,

      type: "POST",

      dataType: "JSON",

      success: function(data)

      {

     $(".success").html('<div class="alert alert-success">Remove successfully!</div>');

		$(".alert").fadeTo(7000, 0).slideUp(7000, function(){

          $(this).remove(); 

      });

      location.reload();

      },

      error: function (jqXHR, textStatus, errorThrown)

      {

alert("error");

      }

  });

} 

/////////////////////////////

function chkcoupon(totalamount){
  if($("#couponcode").val()){
  $.ajax({
  		url:front_data_url.concat("booking").concat("/").concat("checkcoupon"),

  		type:'POST',

  		dataType:"json",

  	    data:{couponcode:$("#couponcode").val(),totalamount:totalamount},

  		success:function(data){

  			if(data.success!='' && data.success1==4){

			 $("#grandtotaldata").html(data.success);	

			 $("#grandtotalhide").hide();
			 $("#voucher_discount").val(data.couponamount);	
			 $("#total_amount").val(data.total_amount); 
			 $("#coupon_code").val(data.coupon_code);
			}

  			if(data.success==0){

$("#error").html("Incorrect Coupon Code");

				}

  			if(data.success==1){

			$("#error").html("Coupon Code Expired");

			}

		if(data.success==3){

		$("#error").html("Amount is not sufficient for this coupon code");

			}	

		if(data.success==4){

			$("#error").html("you have already used this coupon code");

			}	

		}



  	});	

  }

else {

	$("#error").html("Enter Coupon Code");

}

  }  

////////////////////////////booking////////////////////////////

function BookingBtn(){
var url = front_data_url.concat('booking').concat('/').concat('bookingcreate');

   $.ajax({
    url:url,
    method:"POST",
    data:{booking_no:$("input[name='booking_no']").val(),customerid:$("input[name='customerid']").val(),voucher_discount:$("input[name='voucher_discount']").val(),coupon_code:$("input[name='coupon_code']").val(),customer_name:$("input[name='customer_name']").val(),email:$("input[name='email']").val(),phone:$("input[name='phone']").val(),date:$("input[name='date']").val(),pay_amount:$("input[name='pay_amount']:checked").val(),total_amount:$("input[name='total_amount']").val(),payment:$("input[name='payment']:checked").val()},
    success:function(data)
    { 
 // window.location.href=front_data_url.concat('booking').concat('/').concat('success');
    }
   });

}

function savebtn(){

  	$.ajax({

  		url:front_data_url.concat("customer").concat("/").concat("profileedit"),

  		type:'POST',

  		dataType:"json",

  	data:{name:$("#name").val(),email:$("#email").val(),mobile:$("#mobile").val()},

  		success:function(data){

  			if(data.success==1){

			$(".success").html('<div class="alert alert-success">Save successfully!</div>');

		$(".alert").fadeTo(5000, 0).slideUp(200, function(){

          $(this).remove(); 

      });	

			}else{

			$(".errorvalil").css('display','block');

			$.each(data, function(key, value){

			$('#error1-'+key).html(value);	

			});	

			}

			

		}

  	});

   

}

function changePw(){

	

	    	var oldpassword = $("#oldpassword").val();

	    	var newpassword = $("#newpassword").val();

	    	var confirmpassword = $("#confirmpassword").val();

	    	



	        $.ajax({

	            url:front_data_url.concat("customer").concat("/").concat("changepassword"),

	            type:'POST',

	            dataType: "json",

	            data: {oldpassword:oldpassword,newpassword:newpassword,confirmpassword:confirmpassword},

	            success: function(data) {

	            	 if(data.success==0){

                $('#error1-oldpassword').html('<p class="mt-3 text-danger">Current do not match!</p>');

                    }else if(data.success==1){

			$(".success").html('<div class="alert alert-success">Save successfully!</div>');

		    $(".alert").fadeTo(5000, 0).slideUp(200, function(){

             $(this).remove(); 

             });	

			} else {

					 $(".errorvali1").css('display','block');

                    $.each(data, function(key, value) {

                    $('#error1-'+key).html(value);

                     });	

					}

                

	            }

	        });



	    }   

///////////////////////////Agent////////////////////////////////////////////////
function savebtnAgent(){

  	$.ajax({

  		url:front_data_url.concat("agent").concat("/").concat("profileedit"),

  		type:'POST',

  		dataType:"json",

  	data:{name:$("#name").val(),email:$("#email").val(),mobile:$("#mobile").val()},

  		success:function(data){

  			if(data.success==1){

			$(".success").html('<div class="alert alert-success">Save successfully!</div>');

		$(".alert").fadeTo(5000, 0).slideUp(200, function(){

          $(this).remove(); 

      });	

			}else{

			$(".errorvalil").css('display','block');

			$.each(data, function(key, value){

			$('#error1-'+key).html(value);	

			});	

			}

			

		}

  	});

   

}

function changePwAgent(){

	

	    	var oldpassword = $("#oldpassword").val();

	    	var newpassword = $("#newpassword").val();

	    	var confirmpassword = $("#confirmpassword").val();

	    	



	        $.ajax({

	            url:front_data_url.concat("agent").concat("/").concat("changepassword"),

	            type:'POST',
	            dataType: "json",
	            data: {oldpassword:oldpassword,newpassword:newpassword,confirmpassword:confirmpassword},

	            success: function(data) {

	            	 if(data.success==0){

                $('#error1-oldpassword').html('<p class="mt-3 text-danger">Current do not match!</p>');

                    }else if(data.success==1){

			$(".success").html('<div class="alert alert-success">Save successfully!</div>');

		    $(".alert").fadeTo(5000, 0).slideUp(200, function(){

             $(this).remove(); 

             });	

			} else {

					 $(".errorvali1").css('display','block');

                    $.each(data, function(key, value) {

                    $('#error1-'+key).html(value);

                     });	

					}

                

	            }

	        });



	    }  

function edit_posale(id)
{  var total_amount=$("#total_amount1").text();
   var qt1 = $('#qt-'+id).val();
   var shareqty = $('#qtshare-'+id).val();
        $.ajax({
        	url:front_data_url.concat("booking").concat("/").concat("edit").concat("/").concat(id),
            type: "POST",
            dataType: "JSON",
            data: {qt1: qt1,total_amount:total_amount,shareqty:shareqty},
            success: function(data)
            {
//$("#total_amount1").text(data.totalamount); 
//alert(data.totalamount);
location.reload();
            },

error: function (jqXHR, textStatus, errorThrown)
            {
            }

        });



}

function edit_shareholder(id)
{ 
var total_amount=$("#total_amount1").text();
   var qt1 = $('#qtshare-'+id).val();
        $.ajax({
        	url:front_data_url.concat("booking").concat("/").concat("shareedit").concat("/").concat(id),
            type: "POST",
            dataType: "JSON",
            data: {qtshare: qt1,total_amount:total_amount},
            success: function(data)
            {
$("#total_amount1").html(data.totalamount); 
//alert(data.totalamount);
//location.reload();
            },

error: function (jqXHR, textStatus, errorThrown)
            {
            }

        });



}
//////////////////////////////////
$('.divshow').hide();
$('.divhide').hide();
 $('#trademarkon').on('change',function(){
 	var getval = $(this).val();
 	if(getval==1){
	$('.divhide').hide();
	$('.divshow').show();	
	}else{
	$('.divhide').show();
	$('.divshow').hide();		
	}
 });	
//////////////////////////////////
function companyDetailsSave(){
	//cid,bid,sid alert(cid);alert(bid);
var url = front_data_url.concat('customer').concat('/').concat('companyDetails');
   $.ajax({
    url:url,
    method:"POST",
    //data: new FormData($(".location_first").serialize()),
   // data: new FormData(document.getElementById("location_first"+bid)),
    data: $('form').serialize(),
    dataType: "json",
    processData: false,
    contentType: false,
    cache: true,
    async: false,
   // data:{customerid:cid,sid:sid,bid:bid,first_name_company:$("input[name='first_name_company']").val(),second_name_company:$("input[name='second_name_company']").val(),nature_of_business:$("select[name='nature_of_business']").val(),registered_trademarkon:$("select[name='registered_trademarkon']").val(),no_of_director:$("select[name='no_of_director']").val(),no_of_shareholders:$("select[name='no_of_shareholders']").val(),number_of_person:$("select[name='number_of_person']").val(),state_company:$("select[name='state_company']").val(),share_capital:$("select[name='share_capital']").val()},
    success:function(data)
    { 
 // window.location.href=front_data_url.concat('booking').concat('/').concat('success');
    }
   });
}
////////////////////////////////////////////

 