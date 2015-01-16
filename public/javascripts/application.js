$(function(){	
	$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
	});

	$("#social-network").click(function(){
		$("#sidebar-wrapper li.list-networks").toggleClass("hide");
	});
});