function showPass() {
  let val = document.querySelector("#inputPass");
  if (val.type == "password") {
    val.type = "text";
  } else {
    val.type = "password";
  }
}


