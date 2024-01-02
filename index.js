let selectElement = document.getElementById('selecting');


selectElement.addEventListener('change', function() {

  document.getElementById('container').style.backgroundColor = selectElement.value;
});
