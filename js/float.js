//  Developed by Roshan Bhattarai 
//  Visit http://roshanbh.com.np for this script and more.
//  This notice MUST stay intact for legal use
$(document).ready(function()
{
	//scroll the message box to the top offset of browser's scrool bar
	$(window).scroll(function()
	{
  		$('#message_box').animate({top:$(window).scrollTop()+"px" },{queue: false, duration: 350});  
	});
    //when the close button at right corner of the message box is clicked 
	$('#close_message').click(function()
	{
  		//the messagebox gets scrool down with top property and gets hidden with zero opacity 
		$('#message_box').animate({ top:"+=15px",opacity:0 }, "slow");
	});
});
