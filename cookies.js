//how to create cookies
document.cookie="item=milk; expires=Sat, 13 May 2023 12:00:00 UTC";
document.cookie="loc=india";

// how to update existing cookie 
document.cookie="item=bread; expires=Sat, 13 May 2023 12:00:00 UTC";

//how to print
let x = document.cookie;
alert(x);

//how to delete :- just set the expiry time in past 
document.cookie="item=bread; expires=Tue, 2 May 2023 12:00:00 UTC";
