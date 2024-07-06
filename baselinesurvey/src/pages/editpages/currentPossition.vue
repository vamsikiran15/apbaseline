<template>
  <ion-content>
    <div v-if="latitude && longitude">
      <p>Latitude: {{ latitude }}</p>
      <p>Longitude: {{ longitude }}</p>
    </div>
  </ion-content>
</template>

<script>
import { ref } from "vue";
import { Geolocation } from "@capacitor/geolocation";

export default {
  data() {
    return {
      latitude: null,
      longitude: null,
    };
  },
  methods: {
    async getCurrentPosition() {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        this.latitude = coordinates.coords.latitude;
        this.longitude = coordinates.coords.longitude;
      } catch (e) {
        console.error("Error getting location", e);
      }
    },
  },
  mounted() {
    this.getCurrentPosition();
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
