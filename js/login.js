function validate()
{
  var username = document.getElementById(username).nodeValue;
  var pass = document.getElementById(password).nodeValue;
  if (username =="alkahlawy" || pass == "123456")
  {
    alert("login successfully");
    return true;
  }
  else
  {
    alert ("Invalid Username or Password!");
    return false;
  }
}