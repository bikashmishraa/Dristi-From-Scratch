let map;

async function initMap() {
    const position = { lat: 27.69934046235822, lng: 85.29704373698591 };
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
        "marker",
    );
    // Change the background color.
    const pinCustom = document.createElement("div");
    const infoWindow = new InfoWindow();

    pinCustom.className = "map_pin"
    pinCustom.textContent = "Dristi 3.0"

    map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: position,
        mapId: "DristiLocation",
        disableDefaultUI: true,
        // mapTypeControl: true,
        // mapTypeControlOptions: {
        //     style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        //     mapTypeIds: ["roadmap", "terrain"],
        // },

    });

    // Default marker with title text (no PinElement).
    const markerViewWithText = new AdvancedMarkerElement({
        map,
        position: position,
        title: "Kathmandu Engineering College",
        content: pinCustom,
    });
    markerViewWithText.addListener("click", ({ domEvent, latLng }) => {
        const { target } = domEvent;

        infoWindow.close();
        infoWindow.setContent(markerViewWithText.title);
        infoWindow.open(markerViewWithText.map, markerViewWithText);
    });

}

initMap();
