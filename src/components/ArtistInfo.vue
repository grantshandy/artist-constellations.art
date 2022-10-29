<template>
  <div class="overflow-y-auto custom-scrollbar rounded-md shadow-md">
    <div class="rounded-md bg-base03 shadow-md py-2 space-y-2 text-center">
      <a
        v-bind:href="'https://open.spotify.com/artist/' + artist.id"
        target="_blank"
        rel="noopener noreferrer"
        class="block"
      >
        <p class="md:text-2xl font-semibold mb-2">{{ artist.name }}</p>
        <img
          :src="artist.img"
          alt="Artist Profile Picture"
          class="rounded-md w-2/3 mx-auto"
        />
      </a>
      <p class="text-sm italic">Popularity: {{ artist.popularity }}%</p>
      <div v-if="isShare && artist.owners.length > 0">
        <p class="font-bold">Owners:</p>
        <div v-for="owner in artist.owners" :key="owner">
          <p class="text-sm">• {{ owner }}</p>
        </div>
      </div>
      <div v-if="artist.genres.length > 0">
        <p class="font-bold">Genres:</p>
        <div v-for="genre in artist.genres" :key="genre">
          <p class="text-sm">• {{ genre }}</p>
        </div>
      </div>
      <!-- <button v-if="!topTracks" v-on:click="revealTopTracks()" class="rounded-md bg-base02 hover:bg-base02-tint shadow-md px-2 py-1 font-semibold text-sm">Reveal Top Tracks</button>
			<div v-if="topTracks">
				<p class="font-bold">Top Tracks:</p>
				<div v-for="(track, index) in topTracks" :key="track">
					<p class="text-sm ml-2">{{ index + 1 }}: {{ track.name }}</p>
				</div>
			</div> -->
    </div>
  </div>
</template>

<script>
import { getArtistsTopTracks } from "../spotifyApi.js";

export default {
  name: "ArtistInfo",
  props: {
    artist: Object,
  },
  data() {
    return {
      topTracks: null,
      isShare: null,
    };
  },
  mounted() {
    this.isShare = localStorage.getItem("shareCode");
  },
  methods: {
    async revealTopTracks() {
      this.topTracks = await getArtistsTopTracks(this.artist).catch((error) => {
        this.error = error;
      });

      console.log(this.topTracks);
    },
  },
};
</script>
