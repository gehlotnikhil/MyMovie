function log() {
  a = document.f1.first.value;
  b = document.f1.last.value;
  c = document.f1.username.value;
  d = document.f1.email.value;
  e = document.f1.country.value;
  f = document.f1.zip.value;
    if(a=="" || b=="" ||c==""||d==""||e=="")
        return;
    else{
        
  sessionStorage.setItem("Name", a);
  window.location.href = "mymovie.html";
    }
}
