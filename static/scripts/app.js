function toggleMobileNavigation() {
	$(".mobile-menu, .site-navigation, .hamburger").toggleClass("is-active");
	$("body").toggleClass("lock");
}

$(document).on("click", ".contains-expandable > h4" , function(){
	$(this).parents(".contains-expandable").toggleClass("collapsed");
});