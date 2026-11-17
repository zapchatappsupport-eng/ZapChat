/* Edit only this line, then every page shows your contact email. */
const SITE={email:"jyotirmoydas020@gmail.com"};
document.querySelectorAll(".em").forEach(function(a){a.textContent=SITE.email;a.href="mailto:"+SITE.email});
