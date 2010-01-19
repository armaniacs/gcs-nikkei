(function(){
    var url = document.URL;
    var replaced = url.replace(/\/welcome.html/, '/');
    if (url != replaced) {
	location.href = replaced;
    }
})();
