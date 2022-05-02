if (loggedin == null) {
  var loggedin = false;
}

if (loggedin == true) {
document.getElementById("nav-placeholder").innerHTML =
'<nav>'+
    '<!-- Creating a NavBar -->'+
	'<div class="navbar">'+

	   '<div class="content__left">'+
           '<a class="active" href="Index2.html"><i class="fa fa-caret-home"></i>Home</a>'+

           '<div class="lessen1">'+
           '</div>'+

	      '<div class="subnav">'+
		     '<button class="subnavbtn">Inventory <i class="fa fa-caret-down"></i></button>'+

   	         '<div class="subnav-content">'+
		           '<a href="egg_list2.html"><i class="fa fa-fw fa-database"></i>View all Items</a>'+
               '<br>'+
		           '<a href="egg_search2.html"><i class="fa fa-fw fa-search"></i>Search Items</a>'+
	           '</div>'+

   	    '</div>'+

        '<div class="lessen1">'+
        '</div>'+

        '<div class="subnav">'+
		     '<button class="subnavbtn">Information <i class="fa fa-caret-down"></i></button>'+

   	         '<div class="subnav-content">'+
		         '<a href="about2.html"><i class="fa fa-fw fa-database"></i>About</a>'+
				     '<br>'+
		         '<a href="dragon2.html"><i class="fa fa-fw fa-search"></i>Dragon Types</a>'+
	         '</div>'+

   	    '</div>'+

      '</div>'+


	   '<div class="content__right">'+

      '<div class="navback">'+
       '<a href="cart.html"><i class="fa fa-fw fa-shopping-cart"></i>Cart</a>'+
      '</div>'+

      '<div class="lessen2">'+
      '</div>'+

	      '<div class="subnav">'+
		     '<button class="subnavbtn">Account <i class="fa fa-caret-down"></i></button>'+

   	         '<div class="subnav-content">'+
		           '<a href="orders.html"><i class="fa fa-fw fa-list"></i>Orders</a>'+
				       '<br>'+
		           '<a href="settings.html"><i class="fa fa-fw fa-gear"></i>Settings</a>'+
	           '</div>'+

   	      '</div>'+

          '<div class="lessen2">'+
          '</div>'+

          '<div class="navback">'+
            '<a href="index.html"><i class="fa fa-fw fa-sign-out"></i>Logout</a>'+
          '</div>'+

	   '</div>'+

    '</div>'+
'<nav>';
} else {
document.getElementById("nav-placeholder").innerHTML =
'<nav>'+
    '<!-- Creating a NavBar -->'+
	'<div class="navbar">'+

    '<div class="content__left">'+
        '<a class="active sitename" href="Index.html"><i class="fa fa-caret-home"></i>Home</a>'+

        '<div class="lessen1">'+
        '</div>'+

        '<div class="subnav">'+
          '<button class="subnavbtn">Inventory <i class="fa fa-caret-down"></i></button>'+

          '<div class="subnav-content">'+
            '<a href="egg_list.html"><i class="fa fa-fw fa-server"></i>View all Items</a>'+
            '<br>'+
            '<a href="egg_search.html"><i class="fa fa-fw fa-search"></i>Search Items</a>'+
          '</div>'+

        '</div>'+

        '<div class="lessen1">'+
        '</div>'+

        '<div class="subnav">'+
          '<button class="subnavbtn">Information <i class="fa fa-caret-down"></i></button>'+

          '<div class="subnav-content">'+
            '<a href="about.html"><i class="fa fa-fw fa-info-circle"></i>About</a>'+
            '<br>'+
            '<a href="dragon.html"><i class="fa fa-fw fa-paw"></i>Dragon Types</a>'+
          '</div>'+

        '</div>'+

    '</div>'+


	   '<div class="content__right">'+

       '<div class="navback">'+
   		     '<a href="login.html"><i class="fa fa-fw fa-user"></i>Sign Up</a>'+
       '</div>'+

       '<div class="lessen2">'+
       '</div>'+

       '<div class="navback">'+
		       '<a href="login.html"><i class="fa fa-fw fa-sign-in"></i>Login</a>'+
       '</div>'+
	   '</div>'+

    '</div>'+
'<nav>';

}
