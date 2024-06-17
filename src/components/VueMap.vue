<script setup>
    import {ref, onMounted } from 'vue';
    import "leaflet/dist/leaflet.css"
    import * as L from 'leaflet';

    const initialMap = ref(null);

    onMounted(() => {
        initialMap.value = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19, 
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(initialMap.value);
    })
</script>
<template>
    <h3>Interactive Map</h3>
    <div id="map"></div>
</template>
<style scoped>
    #map {
        height: 90vh;
    }
</style>
