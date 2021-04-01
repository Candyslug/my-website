

var httpReq = new XMLHttpRequest();

alert("This page is designed for a 1920x1080 resolution.\nApologies for the inconvenience.\n(Prototype)");

document.getElementById('page-search').value = 'this input box does nothing...';


document.getElementById('search-button').onclick = function() {
    
    var searchterm = 'searchterm=' + document.getElementById('page-search').value;
    
    
    httpReq.open('POST', '/search', false);

    
    
    
    httpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    httpReq.send(JSON.stringify({ "searchterm": document.getElementById('page-search').value }));
    if (httpReq.status != 404)
    alert(httpReq.response);

}



