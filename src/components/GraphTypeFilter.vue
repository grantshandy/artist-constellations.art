<template>
  <select
    v-model="graphType"
    v-on:change="$emit('update', graphType)"
    name="graphType"
    class="filter"
  >
    <option value="following">Artists You Follow</option>
    <option
      v-if="share && share.data && share.data.graphType == 'following'"
      value="combine-following"
    >
      You and {{ capitalize(share.data.displayName) }}'s Top Artists of the
      Month
    </option>
    <option value="short_term">Top Artists of the Month</option>
    <option
      v-if="share && share.data && share.data.graphType == 'short_term'"
      value="combine-short_term"
    >
      You and {{ capitalize(share.data.displayName) }}'s Top Artists of the
      Month
    </option>
    <option value="medium_term">Top Artists of the Year</option>
    <option
      v-if="share && share.data && share.data.graphType == 'medium_term'"
      value="combine-medium_term"
    >
      You and {{ capitalize(share.data.displayName) }}'s Top Artists of the Year
    </option>
    <option value="long_term">Top Artists of All Time</option>
    <option
      v-if="share && share.data && share.data.graphType == 'long_term'"
      value="combine-long_term"
    >
      You and {{ capitalize(share.data.displayName) }}'s Top Artists of All Time
    </option>
    <option value="available">All Available Artists</option>
    <option
      v-if="share && share.data && share.data.graphType == 'long_term'"
      value="combine-available"
    >
      You and {{ capitalize(share.data.displayName) }}'s Available Artists
    </option>
    <option
      v-if="share && share.data && share.data.graphType == 'following'"
      value="share"
    >
      Artists {{ capitalize(share.data.displayName) }} Follows
    </option>
    <option
      v-if="share && share.data && share.data.graphType == 'short_term'"
      value="share"
    >
      {{ capitalize(share.data.displayName) }}'s Top Artists of the Month
    </option>
    <option
      v-if="share && share.data && share.data.graphType == 'medium_term'"
      value="share"
    >
      {{ capitalize(share.data.displayName) }}'s Top Artists of the Year
    </option>
    <option
      v-if="share && share.data && share.data.graphType == 'long_term'"
      value="share"
    >
      {{ capitalize(share.data.displayName) }}'s Top Artists of All Time
    </option>
    <option
      v-if="share && share.data && share.data.graphType == 'available'"
      value="share"
    >
      All of {{ capitalize(share.data.displayName) }}'s Available Artist
    </option>
  </select>
</template>

<script>
export default {
  name: "GraphTypeFilter",
  props: {
    share: Object,
    graphType: String,
  },
  methods: {
    capitalize(phrase) {
      let words = phrase.split(" ");

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }

      return words.join(" ");
    },
  },
};
</script>
