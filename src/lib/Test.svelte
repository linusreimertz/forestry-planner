<script>
  import { onMount } from "svelte";
  import L from "leaflet";

  const initialView = [56.600721, 13.086654];
  let map;

  onMount(async () => {
    map = L.map("map").setView(initialView, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  });
</script>

<div>
  <div id="map" class="w-screen h-screen" />
</div>
