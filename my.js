console.log("Exit");
var movieName = sessionStorage.getItem('movieName');
console.log(movieName);
var awm = sessionStorage.getItem('Name');
console.log(awm);
document.getElementById("acc").innerHTML =  "| Hi, "+awm.toUpperCase();
sec = document.getElementsByClassName("sections");
console.log("Exit");
n =  document.getElementsByClassName("success");


function f1(){
  names = document.getElementById('field').value;
  names= names.toLowerCase();
  new_names = '';
  for(let i = 0; i<names.length; i++)
  {
    if(names[i] == ' ')
    continue;

    new_names += names[i];
  }
  console.log(new_names);


  switch (new_names) {
    case "pathan":
        movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
    case "brahmastra":
        movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      case "kgf2":
          movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      case "annabelle":
          movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      case "thenun":
          movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      case "theconjuring":
          movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      case "happynewyear":
          movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      case "housefull4":
          movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      case "sonofsardaar":
          movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      case "ramsetu":
          movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      case "jersey":
          movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      case "laalsinghchaddha":
          movieName = new_names;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
      break;
      default:
        alert(names+" movie not available yet");
  }

}





switch (movieName) {
  case "pathan":
    sec[0].style = "display: block";
    n[0].innerHTML = "8";
     var total_point= 8;
     var lo = 0;
    break;
  case "brahmastra":
    sec[1].style = "display: block";
    n[1].innerHTML = "6.6";
     var total_point= 6.6;
     var lo = 1;
    break;
    case "kgf2":
      sec[2].style = "display: block";
      n[2].innerHTML = "7";
      var total_point= 7;
      var lo = 2;

    break;
    case "annabelle":
      sec[3].style = "display: block";
      n[3].innerHTML = "8.8";
      var total_point= 8.8;
      var lo = 3;

    break;
    case "thenun":
      sec[4].style = "display: block";
      n[4].innerHTML = "6";
      var total_point= 6;
      var lo = 4;

    break;
    case "theconjuring":
      sec[5].style = "display: block";
      n[5].innerHTML = "7";
      var total_point= 7;
      var lo = 5;

    break;
    case "happynewyear":
      sec[6].style = "display: block";
      n[6].innerHTML = "8";
      var total_point= 8;
      var lo = 6;

    break;
    case "housefull4":
      sec[7].style = "display: block";
      n[7].innerHTML = "8.7";
      var total_point= 8.7;
      var lo = 7;

    break;
    case "sonofsardaar":
      sec[8].style = "display: block";
      n[8].innerHTML = "6.7";
      var total_point= 6.7;
      var lo = 8;
    break;
    case "ramsetu":
      sec[9].style = "display: block";
      n[9].innerHTML = "5.5";
      var total_point= 5.5;
      var lo = 9;

    break;
    case "jersey":
      sec[10].style = "display: block";
      n[10].innerHTML = "5.2";
      var total_point= 5.2;
      var lo = 10;

    break;
    case "laalsinghchaddha":
      sec[11].style = "display: block";
      n[11].innerHTML = "8.1";
      var total_point= 8.1;
      var lo = 11;

    break;
    default:console.log("Exit");
}

console.log("Exit");
function sign () {
  window.location.href = "Log.html";
}
function enable () {
  a = document.getElementById('new');
  if ((a.style = 'display: none')) {
    a.style = 'display:block';
  }
}

function jump(movie)
{
  movieName = movie;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";
}
function watch()
{
  window.location.href = 'video/Bhajrangi bhaijaan full movie(360P).mp4';
}

no_of_user = 10;

function click_rate(num)
{

  n =  document.getElementsByClassName("success");
  total_point = total_point+parseInt(num);
no_of_user = no_of_user+1;
display = (total_point*10)/no_of_user;
n[lo].innerHTML = display.toFixed(1);
console.log(display);
}