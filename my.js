function edit_confirm() {
  if (validateForm()) {
    alert("Are you sure you want to save these changes?");
  } else {
    alert("Please add the TF name");
  }
}

function delete_confirm() {
  if (validateForm()) {
    alert("Are you sure you want to delete this TF?");
  } else {
    alert("Please add the TF name");
  }
}
function add_confirm() {
  if (validateForm()) {
    alert("A new TF was added");
  } else {
    alert("Please add the TF name");
  }
}
function validateForm() {
  var TF_name = document.getElementById("TF_name").value;
  if (TF_name == "") {
    return false;
  } else {
    return true;
  }
}
