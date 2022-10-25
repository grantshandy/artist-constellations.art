<template>
  <div
    class="flex bg-base03 text-base0 grid grid-cols-1 md:grid-cols-5 grid-rows-6 md:grid-rows-1 p-3 md:p-4 lg:p-6 xl:p-10 gap-3 md:gap-4 lg:gap-6 xl:gap-10"
  >
    <!-- main block -->
    <div
      class="bg-base01 gap-0.5 col-span-1 md:col-span-4 row-span-4 md:row-span-1 shadow-md flex flex-col rounded-lg"
    >
      <!-- top filters -->
      <div
        class="grow-0 gap-0.5 w-full h-8 md:h-10 lg:h-12 grid grid-cols-2 md:grid-cols-3 text-sm md:text-md bg-transparent"
      >
        <select
          v-model="graphType"
          v-on:change="buildGraph()"
          name="graphType"
          class="filter hidden md:inline-flex rounded-tl-md"
        >
          <option value="following">Artists You Follow</option>
          <option v-if="share && share.data && share.data.graphType == 'following'" value="combine-following">You and {{ share.data.displayName }}'s Top Artists of the Month</option>
          <option value="short_term">Top Artists of the Month</option>
          <option v-if="share && share.data && share.data.graphType == 'short_term'" value="combine-short_term">You and {{ share.data.displayName }}'s Top Artists of the Month</option>
          <option value="medium_term">Top Artists of the Year</option>
          <option v-if="share && share.data && share.data.graphType == 'medium_term'" value="combine-medium_term">You and {{ share.data.displayName }}'s Top Artists of the Year</option>
          <option value="long_term">Top Artists of All Time</option>
          <option v-if="share && share.data && share.data.graphType == 'long_term'" value="combine-long_term">You and {{ share.data.displayName }}'s Top Artists of All Time</option>
          <option v-if="share && share.data && share.data.graphType == 'following'" value="share-following">Artists {{ share.data.displayName }} Follows</option>
          <option v-if="share && share.data && share.data.graphType == 'short_term'" value="share-short_term">{{ share.data.displayName }}'s Top Artists of the Month</option>
          <option v-if="share && share.data && share.data.graphType == 'medium_term'" value="share-medium_term">{{ share.data.displayName }}'s Top Artists of the Year</option>
          <option v-if="share && share.data && share.data.graphType == 'long_term'" value="share-long_term">{{ share.data.displayName }}'s Top Artists of All Time</option>
        </select>
        <select
          v-model="nodeType"
          v-on:change="updateNodeType()"
          class="filter rounded-tl-md md:rounded-none"
        >
          <option value="dot">View as Dots</option>
          <option value="image">View as Images</option>
          <option value="text">View as Text</option>
        </select>
        <select
          v-model="genreToSortBy"
          v-on:change="updateGenreSort()"
          class="filter rounded-tr-md"
        >
          <option value="null">All Genres</option>
          <option v-for="genre in genres" :key="genre" :value="genre">
            Only {{ genre.charAt(0).toUpperCase() + genre.slice(1) }}
          </option>
        </select>
      </div>
      <!-- main graph -->
      <div
        id="content"
        class="grow bg-base02 md:rounded-br-md md:rounded-bl-md text-center flex"
      >
        <div ref="graph" id="graph" class="grow select-none"></div>
      </div>
      <!-- bottom filter -->
      <select
        v-model="graphType"
        v-on:change="buildGraph()"
        class="grow-0 filter md:hidden w-full h-8 rounded-br-md rounded-bl-md"
      >
        <option value="following">Artists You Follow</option>
        <option value="short_term">Top Artists of the past Month</option>
        <option value="medium_term">Top Artists of the past Year</option>
        <option value="long_term">Top Artists of All Time</option>
      </select>
    </div>
    <!-- details block -->
    <div
      class="bg-base02 rounded-md flex flex-col col-span-1 row-span-2 md:row-span-1 md:col-span-1 shadow-md space-y-2 p-2"
    >
      <p v-if="loading" class="italic text-sm grow">{{ loading }}</p>
      <p v-if="error" class="font-bold text-sm text-red grow">{{ error }}</p>
      <div
        v-if="graph"
        class="grow gap-2 rounded-md grid grid-cols-2 md:flex md:flex-col overflow-y-auto"
      >
        <!-- info block -->
        <div
          class="bg-base03 rounded-md p-2 space-y-2 rounded-md shadow-md overflow-y-auto"
        >
          <!-- artist popularity text -->
          <p class="text-sm md:text-base text-center font-bold mx-1 mb-2">
            Average Artist Popularity: {{ avgPopularity() }}%
          </p>
          <!-- just shows the logged in person's name -->
          <UserInfo v-if="me" :me="me" />
          <!--
            color by popularity button
          
            this one is particularly complicated because of the switch :/
           -->
          <div
            v-if="graph && nodeType == 'dot'"
            class="space-y-2 select-none flex flex-col"
          >
            <label
              for="toggleB"
              class="flex items-center cursor-pointer bg-base02 hover:bg-base02-tint py-1 px-2 rounded-md shadow-md"
            >
              <div class="relative">
                <input
                  type="checkbox"
                  id="toggleB"
                  v-model="colorByPopularity"
                  @change="updateNodeColor"
                  class="sr-only"
                />
                <div class="block bg-base03 w-10 h-6 rounded-full"></div>
                <div
                  class="dot absolute left-1 top-1 bg-[#1f4a54] w-4 h-4 rounded-full transition"
                ></div>
              </div>
              <div class="ml-3 font-semibold text-xs md:text-base">
                Color by Popularity
              </div>
            </label>
            <div
              v-if="colorByPopularity"
              class="inline-grid grid-cols-2 px-3 py-1 text-xs md:text-base text-[#ffffff] rounded-md shadow-md bg-gradient-to-r from-[#15803d] via-[#7e22ce] to-[#be185d]"
            >
              <p class="text-left">Less Popular</p>
              <p class="text-right">More Popular</p>
            </div>
          </div>
        </div>
        <!-- artist info -->
        <ArtistInfo v-if="currentArtist" :artist="currentArtist" />
      </div>
      <!-- logout/share button -->
      <div class="grid grid-cols-2 md:grid-cols-1 gap-2">
        <button
          v-on:click="shareGraph"
          class="px-2 py-1 rounded-md bg-base01 text-base03 font-bold w-full shadow-md hover:shadow-lg"
        >
          Share
        </button>
        <button
          v-on:click="logout"
          class="px-2 py-1 rounded-md bg-base01 text-base03 font-bold w-full shadow-md hover:shadow-lg"
        >
          Logout
        </button>
      </div>
    </div>
    <!-- share modal dialog -->
    <div v-if="shareModal.view" class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] opacity-100 grid place-items-center">
      <div class="rounded-md shadow-lg bg-base03 p-3 text-center text-base1">
        <h1 class="text-xl font-semibold">Share Your Graph</h1>
        <div v-if="shareModal.loading">
          <p>Loading: {{ shareModal.loading }}...</p>
        </div>
        <div v-else>
          <p>Your graph is now available at</p>
          <a class="select-none underline" :href="shareModal.url">{{ shareModal.url }}</a>
        </div>
        <button class="bg-base02 mt-4 px-2 py-1 rounded-md" v-on:click="shareModal.view = false">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "./UserInfo.vue";
import ArtistInfo from "./ArtistInfo.vue";

import {
  getFollowing,
  getMe,
  getLinks,
  getTopOf,
  logout,
} from "../spotifyApi.js";
import { uploadData, getShareData } from "../dbApi.js";

import ForceGraph3D from "3d-force-graph";

import * as THREE from "three";
import SpriteText from "three-spritetext";

export default {
  name: "MainPage",
  components: {
    UserInfo,
    ArtistInfo,
  },
  data() {
    return {
      loading: null,
      error: null,
      me: null,
      nodes: [],
      links: [],
      genres: [],
      genreToSortBy: null,
      graph: null,
      graphType: "medium_term", // following | short_term | medium_term | long_term
      nodeType: "dot", // dot | image | text
      colorByPopularity: false,
      currentArtist: null,
      shareModal: {
        view: false,
        url: null,
        loading: null,
      },
      share: {
        code: null,
        data: null,
      }
    };
  },
  async mounted() {
    this.share.code = localStorage.getItem("shareCode");
    
    if (this.share.code) {
      getShareData(this.share.code)
        .then((obj) => {
          this.share.data = obj;
        });
    }
  
    if (localStorage.getItem("userToken") != null) {
      getMe()
        .then((me) => {
          this.me = me;
        })
        .catch((error) => {
          this.error = error;
        });

      await this.buildGraph();
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeGraph);
  },
  methods: {
    logout() {
      logout();
    },

    async buildGraph() {
      this.graph = null;
      document.getElementById("graph").innerHTML = null;
      this.currentArtist = null;
      this.genreToSortBy = null;

      if (this.graphType == "following") {
        this.loading = "Loading... Getting the Users You Follow";
        this.nodes = await getFollowing().catch((error) => {
          this.error = error;
        });
      } else if (this.graphType.includes("_term")) {
        this.loading = "Loading... Getting Your Top Items";
        this.nodes = await getTopOf(this.graphType).catch((error) => {
          this.error = error;
        });
      }

      this.genres = this.buildGenreList(this.nodes);

      this.loading = "Loading... Building Links";
      this.links = await getLinks(this.nodes);

      this.loading = null;
      this.graph = ForceGraph3D();

      let width = this.$refs["graph"].clientWidth;
      let height = this.$refs["graph"].clientHeight;

      this.graph(document.getElementById("graph"))
        .graphData({
          nodes: this.nodes,
          links: this.links,
        })
        .showNavInfo(true)
        .width(width)
        .height(height)
        .enableNodeDrag(false)
        .backgroundColor("#00000000")
        .linkWidth(2)
        .nodeRelSize(7)
        .nodeLabel((node) => node.name)
        .onNodeHover((node) => {
          if (node) {
            this.currentArtist = node;
          }
        });

      this.updateNodeType();
      this.updateNodeColor();

      window.onresize = this.resizeGraph;
    },

    resizeGraph() {
      let width = document.getElementById("content").clientWidth;
      let height = document.getElementById("content").clientHeight;

      this.graph.width(width);
      this.graph.height(height);
    },

    updateNodeType() {
      if (this.nodeType == "dot") {
        this.graph.nodeThreeObject((_) => {});
        this.graph.nodeLabel((node) => node.name);
      } else if (this.nodeType == "image") {
        this.graph.nodeThreeObject((node) => {
          let imgTexture = new THREE.TextureLoader().load(node.img);
          let material = new THREE.SpriteMaterial({ map: imgTexture });
          let sprite = new THREE.Sprite(material);
          sprite.scale.set(25, 25);
          return sprite;
        });
        this.graph.nodeLabel((node) => node.name);
      } else if (this.nodeType == "text") {
        this.graph.nodeThreeObject((node) => {
          const sprite = new SpriteText(node.name);
          sprite.color = "#ffffff";
          sprite.borderColor = "#002b36";
          sprite.backgroundColor = "#002b36";
          sprite.borderWidth = 4;
          sprite.borderRadius = 4;
          sprite.textHeight = 8;

          return sprite;
        });
        this.graph.nodeLabel("");
      }
    },

    updateNodeColor() {
      this.graph.nodeColor((node) => {
        if (this.colorByPopularity) {
          let saturation = node.popularity;
          let hue = (saturation / 100) * 360;

          return `hsl(${hue},${saturation}%,50%)`;
        } else {
          return "#ffffff";
        }
      });
    },

    // return a list of genres with a popularity of > 2 artists
    buildGenreList(nodes) {
      let count = {};

      nodes.forEach(function (artist) {
        artist.genres.forEach(function (genre) {
          if (count[genre]) {
            count[genre] += 1;
          } else {
            count[genre] = 1;
          }
        });
      });

      let commonGenres = [];

      for (const genre in count) {
        let ocr = count[genre];

        if (ocr > 2) {
          commonGenres.push(genre);
        }
      }

      return commonGenres;
    },

    updateGenreSort() {
      if (
        this.genreToSortBy == "null" ||
        this.genreToSortBy == null ||
        !this.genreToSortBy
      ) {
        console.log("got null, going back to normal");
        this.graph.graphData({
          nodes: this.nodes,
          links: this.links,
        });
        return;
      } else {
        let genreToSortBy = this.genreToSortBy;

        let newNodes = [];
        let newNodeIds = [];

        this.nodes.forEach(function (artist) {
          if (artist.genres.includes(genreToSortBy)) {
            newNodes.push(artist);
            newNodeIds.push(artist.id);
          }
        });

        let newLinks = [];

        this.links.forEach(function (link) {
          if (
            newNodeIds.includes(link.source.id) &&
            newNodeIds.includes(link.target.id)
          ) {
            newLinks.push(link);
          }
        });

        this.graph.graphData({
          nodes: newNodes,
          links: newLinks,
        });
      }
    },

    avgPopularity() {
      let total = 0;
      let count = 0;

      this.nodes.forEach(function (artist) {
        total += artist.popularity;
        count++;
      });

      let average = total / count;

      return Math.round(average);
    },
    
    async shareGraph() {
      this.shareModal.loading = "Uploading Data";
      this.shareModal.view = true;
      
      // upload data and return URL
      let code = await uploadData(this.nodes, this.me.display_name, this.me.id, this.graphType);
      
      this.shareModal.url = `${window.location.origin}/?share=${code}`;
      
      this.shareModal.loading = false;
    }
  },
};
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: #586e75;
  width: 15px;
  height: 15px;
  border-radius: 25px;
}

input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #1f4a54;
}
</style>
