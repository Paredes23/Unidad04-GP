//Aplicando lo aprendido 2, este codigo de ir aca!!
var popoverTriggerList = [].slice.call(document.querySelectorAll('data-bs-toggle="popover'))
var popoverList = popopverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popver(popoverTriggerEl)
})