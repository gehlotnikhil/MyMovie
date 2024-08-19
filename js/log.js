function log()
{
    a = document.f1.first.value;
    b = document.f1.last.value;
    c = document.f1.username.value;
    d = document.f1.email.value;
    e = document.f1.country.value;
    f = document.f1.zip.value;

    localStorage.setItem("index",a+" "+b+" "+c+" "+d+" "+e+" "+f)
    localStorage.setItem("index2",typeof(a)+" "+typeof(b)+" "+typeof(c)+" "+typeof(d)+" "+typeof(e)+" "+typeof(f))
    if(a == "" ||  b == "" || c== "" || d== "" || e == "" || f == ""){
         return alert("Fill required field")
    }else{
    sessionStorage.setItem("Name", a);
    window.location.href ="mymovie.html";
    }
}

