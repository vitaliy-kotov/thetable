window.onload = function() {
    var t = document.createElement('table');
    for (var i = 0; i < 10; i++) {
        var r = document.createElement('tr');
        r.id = 'r' + i;
        for (var j = 0; j < 10; j++) {
            var c = document.createElement('td');
            c.id = 'r' + i + 'c' + j;
            var text = document.createTextNode(j.toString());
            c.appendChild(text);
            c.addEventListener('click', function() {
                cellClick(this);
            });
            c.addEventListener('mousedown', function() {
                cellMouseDown(this);
            });
            c.addEventListener('mouseup', function() {
                cellMouseUp(this);
            });
            c.addEventListener('mouseover', function() {
                cellMouseOver(this);
            });

            r.appendChild(c);
        }
        t.appendChild(r);
    }
    document.body.appendChild(t);

}
