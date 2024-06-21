<template>
    <div id="map" style="height: 90vh; width: 80vw;"></div>
</template>

<script lang="ts" setup>
    import {ref, onMounted } from 'vue';
    import "leaflet/dist/leaflet.css"
    import * as L from 'leaflet';

    const initialMap = ref(null);
    const props = defineProps({
      initialView: {
        type: Array<number>,
        required: true,
      },
      zoom: {
        type: Number,
        default: 6,
      },
      maxZoom: {
        type: Number,
        default: 19,
      }
    })

    onMounted(() => {
        initialMap.value = L.map('map', {
            zoomControl: true,
            zoom:1,
            zoomAnimation:false,
            fadeAnimation:true,
            markerZoomAnimation:true
        }).setView(props.initialView, props.zoom);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: props.maxZoom, 
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(initialMap.value);
    })
</script>

<style scoped>
</style>
