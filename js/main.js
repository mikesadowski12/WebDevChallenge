window.onload = function() {
  loadMembers();
};

function testing() {
  var agc = new ApiGetClient();
    //apibaseurl = 'https://randomuser.me',
    //apipath = '/api/?results=5';


    // direct way
    agc.initialize(function (data, response) {
        // parsed response body as js object
        //console.log(data);
        // raw response
        alert(response);
    });


  alert(agc.getRequestUrl());

  //agc.initialize('https://randomuser.me');

  //agc.onreadystatechange = function() {

  //}

/*
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();

*/

//https://randomuser.me
//api
//this.responseText
}

//Load 5 new members to the members sections
function loadMembers() {
  var xhttp = new XMLHttpRequest();
  var url = new Array();
  var name = new Array();
  var email = new Array();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);

      //Insert 5 members into the arrays
      for (var i = 0; i < 5; i++) {
        url.push(obj.results[i].picture.large);
        name.push(toTitleCase(obj.results[i].name.first) + " "
              + toTitleCase(obj.results[i].name.last));
        email.push(obj.results[i].email);
      }

      //Build the div for the HTML page with all the new members
      var div_final = buildMemberLayout(url, name, email);

      document.getElementById("memberlist").innerHTML += div_final;
    }
  };

  xhttp.open("GET", "https://randomuser.me/api/?results=5", true);
  xhttp.send();
}

//Build the entire row of the new list of members
function buildMemberLayout(url, name, email) {
  var start = "<div style='color: black'> <div class='parentElement' onload='document.getElementById(card).style.opacity='1''>";
  var cards = new Array();
  var end = "</div></div></div>";
  var final_string = "";

  //We don't want to offset the first card, the div is already in the correct position
  for (var i = 0; i < 5; i++) {
    if(i == 0) {
      cards.push(buildMemberProfileCard(url[i], name[i], email[i], 0));
    } else if (i > 0) {
      cards.push(buildMemberProfileCard(url[i], name[i], email[i], 5));
    }
  }

  //Build the entire new div containing 5 new member cards, placed in a row
  final_string = start;
  for (var i = 0; i < 5; i++) {
    final_string += cards[i];
  }
  final_string += end;

  return final_string;
}

//Build a member card for a new member
function buildMemberProfileCard (url, name, email, offset) {
  return "<div class='card' style='margin-left: " + offset
        + "%;'> <img class='img-circle' src='" + url
        + "' style='width:65%'> <div class='container'> <span style='display: inline-block;'>"
        + name +"</span> <p class='emailtitle'>" + email + "</p> </div> </div>";
}

//Captilalize first letter of each word for the names
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase()
      + txt.substr(1).toLowerCase();});
}
