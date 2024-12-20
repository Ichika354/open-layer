import Map from "https://cdn.skypack.dev/ol/Map.js";
import OSM from "https://cdn.skypack.dev/ol/source/OSM.js";
import TileLayer from "https://cdn.skypack.dev/ol/layer/Tile.js";
import View from "https://cdn.skypack.dev/ol/View.js";
import { fromLonLat } from "https://cdn.skypack.dev/ol/proj.js";

// Create OSM source
const source = new OSM();

// Create TileLayer without source initially
const layer = new TileLayer();

// Create Map
const map = new Map({
  target: "map",
  layers: [layer],
  view: new View({
    center: fromLonLat([107.57634352477324, -6.87436891415509]), // Center to Sarijadi, Bandung
    zoom: 16,
  }),
});

// Add event listeners to buttons
document.getElementById("set-source").onclick = function () {
  layer.setSource(source); // Set OSM source to the layer
};

document.getElementById("unset-source").onclick = function () {
  layer.setSource(null); // Remove source from the layer
};
