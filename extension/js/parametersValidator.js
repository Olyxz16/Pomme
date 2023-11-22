window.addEventListener('htmx:configRequest', function(evt) {
    evt.detail.parameters['title'] = evt.detail.parameters['title'].replaceAll(' ', '+')
}); 

