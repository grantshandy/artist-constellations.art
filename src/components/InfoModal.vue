<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] grid place-items-center"
  >
    <div
      class="w-5/6 md:w-2/3 h-5/6 rounded-md shadow-lg bg-base03 p-3 text-center text-base1 overflow-y-auto custom-scrollbar flex flex-col"
    >
      <h1 class="text-3xl font-semibold">Info</h1>
      <hr class="my-2 text-base0 rounded-md" />
      <div v-if="me && me.graphType != 'share'">
        <h2 class="text-xl font-semibold">
          Information About
          {{
            me.display_name.charAt(0).toUpperCase() + me.display_name.slice(1)
          }}
        </h2>
        <p v-if="me.graphType">
          Graph Type: {{ prettyGraphType(me.graphType) }}
        </p>
        <p v-if="userArtists.length > 0">{{ userArtists.length }} Artists</p>
        <p v-if="me">Average Popularity: {{ avgPopularity(userArtists) }}%</p>
      </div>
      <div v-if="(me.graphType.includes('combine') || me.graphType == 'share') && share.displayName">
        <h2 class="text-xl font-semibold">
          Information About
          {{
            share.displayName.charAt(0).toUpperCase() +
            share.displayName.slice(1)
          }}
        </h2>
        <p v-if="share.graphType">
          Graph Type: {{ prettyGraphType(share.graphType) }}
        </p>
        <p v-if="shareArtists.length > 0">{{ shareArtists.length }} Artists</p>
        <p v-if="share">
          Average Popularity: {{ avgPopularity(shareArtists) }}%
        </p>
      </div>
      <hr class="my-2 text-base0 rounded-md" />
      <h2 class="text-xl font-semibold">FAQ</h2>
      <div class="mx-auto text-center space-y-1 w-full md:w-2/3">
        <h3 class="italic font-semibold text-base md:text-lg">
          What do the links between the artists represent? How are they
          calculated?
        </h3>
        <p class="text-sm md:text-base">
          Links represent what Spotify considers as an artist's "Related
          Artists" in their
          <a
            href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-related-artists"
            class="underline"
            >API</a
          >. While the specifics of the algorithm aren't known,
          <a
            href="https://artists.spotify.com/en/blog/how-fans-also-like-works"
            class="underline"
            >Spotify has said it is based on factors like internet keywords and
            shared listener bases</a
          >.
        </p>
        <h3 class="italic font-semibold text-base md:text-lg">
          Where is the Code!?
        </h3>
        <p class="text-sm md:text-base">
          On 
          <a
            class="underline"
            href="https://github.com/grantshandy/artist-constellations.art"
            >Github</a
          >!
        </p>
      </div>
      <hr class="my-2 text-base0 rounded-md" />
      <div class="flow-root mt-auto">
        <button
          v-on:click="$emit('close')"
          class="float-right font-bold bg-base02 px-2 py-1 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoModal",
  props: {
    share: Object,
    me: Object,
    nodes: Object,
  },
  data() {
    return {
      shareArtists: [],
      userArtists: [],
    };
  },
  mounted() {
    this.nodes.forEach((artist) => {
      if (artist.owners.includes(this.me.display_name)) {
        this.userArtists.push(artist);
      }

      if (this.share && artist.owners.includes(this.share.displayName)) {
        this.shareArtists.push(artist);
      }
    });
  },
  methods: {
    prettyGraphType(s) {
      if (s.includes("short_term")) {
        return "Short Term";
      } else if (s.includes("medium_term")) {
        return "Medium Term";
      } else if (s.includes("long_term")) {
        return "Long Term";
      } else if (s.includes("following")) {
        return "Following";
      } else if (s.includes("available")) {
        return "All Available";
      }
    },

    avgPopularity(nodes) {
      let total = 0;
      let count = 0;

      nodes.forEach(function (artist) {
        total += artist.popularity;
        count++;
      });

      let average = total / count;

      return Math.round(average);
    },
  },
};
</script>
