var map = L.map('map').setView([33.54708735862658, -7.649987977356777], 13);


googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
 });
 googleStreets.addTo(map);

L.marker([33.54708735862658, -7.649987977356777]).addTo(map)
    .bindPopup('Ici est LEHTP').openPopup();