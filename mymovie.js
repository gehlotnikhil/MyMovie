a = document.getElementById('new');
function enable () {
  if ((a.style = 'display: none')) {
    a.style = 'display:block';
  }
}

var na = sessionStorage.getItem('Name');
console.log(na);
document.getElementById("acc").innerHTML =  "| Hi, "+na.toUpperCase();


function f1(){
  names = document.getElementById('searching').value;
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


function jump(movie)
{
  movieName = movie;
  sessionStorage.setItem("movieName", movieName);
  window.location.href ="mymovie2.html";

}





// function enable () {
//   if ((a.style = 'display: none')) {
//     a.style = 'display:block';
//   }
//   var gk =prompt("Hello",'');
// sessionStorage.setItem("movieName", movieName);

//   window.location.href ="mymovie2.html";
//   a=3;
//   alert("Helloooo")
// }