function postRefId(refIdValue) {
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "<%= PgwSite1 %>");
    form.setAttribute("target", "_self");
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("name", "RefId");
    hiddenField.setAttribute("value", refIdValue);
    form.appendChild(hiddenField);
    document.body.appendChild(form);
    console.log(form);
    form.submit();
    document.body.removeChild(form);
}
function moneyCommaSep(ctrl) {
    var separator = ",";
    var int;
    if (ctrl.type == 'text')
        int = ctrl.value.replace(new RegExp(separator, "g"), "");
    else
        int = ctrl.textContent.replace(new RegExp(separator, "g"), "");
    if (int != "") {
        var regexp = new RegExp("\\B(\\d{3})(" + separator + "|$)");
        do {
            int = int.replace(regexp, separator + "$1");
        }
        while (int.search(regexp) >= 0)

        if (ctrl.type == 'text')
            ctrl.value = int;
        else
            ctrl.textContent = int;
    }
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}