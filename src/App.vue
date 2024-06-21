<script setup lang="ts">
import VueMap from './components/VueMap.vue'
</script>

<template>
    <div>
        <VueMap :initialView="[39.074208, 21.824312]" :zoom="7" :maxZoom="10" />
    </div>
</template>

<style scoped>
</style>
