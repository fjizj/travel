function initMap() {
  const myLatlng = { lat: 35.994, lng: 138.4299 };
  /*const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: myLatlng,
  });
  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
  });*/

  function getMapCode(latLng)
  {
    let data = {wgs_lat: latLng['lat'], wgs_lon: latLng['lng']};
    fetch("https://saibara.sakura.ne.jp/map/convgeo.cgi", {
      method: "POST", 
      body: JSON.stringify(data)
    }).then(res => {
      console.log("Request complete! response:", res);
    });
  }
  
  console.log(getMapCode(JSON.parse('{ "lat": 35.399789539129706, "lng": 137.287321875 }')));

  //infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    getMapCode(mapsMouseEvent.latLng.toJSON());
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    infoWindow.open(map);
  });
}
