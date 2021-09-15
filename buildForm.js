/* create a code to store input form elements id name and id email. The storaged data must be saved in a json file. */
var form = document.createElement('form');
form.innerHTML = '<input type="text" id=name name="name" placeholder="Name"><input id="email" type="email" name="email" placeholder="Email"><input type="submit" value="Submit">';
document.body.appendChild(form);

/* create a function to storage the values of each input in an array and parse into json notation */
function storeData() {
  var name = document.getElementsByid('name')[0].value;
  var email = document.getElementsByid('email')[0].value;
  var data = {
    name: name,
    email: email
  };
  var json = JSON.stringify(data);
  localStorage.setItem('data', json);
}

 