<script lang="ts">
  import { onMount } from "svelte";
  import { logout, me } from "./spotifyApi";
  import {
    NodeStyle,
    GraphType,
    updateGraphType,
    updateNodeStyle,
  } from "./graph";

  let graphType: GraphType =
    (localStorage.getItem("graphType") as GraphType) || GraphType.TopYear;
  let nodeStyle: NodeStyle =
    (localStorage.getItem("nodeStyle") as NodeStyle) || NodeStyle.Dot;

  onMount(() => {
    updateNodeStyle(nodeStyle);
    updateGraphType(graphType);
  });
</script>

<main class="panel flex flex-col">
  <div class="grow p-2 overflow-y-auto space-y-2">
    {#if $me}
      <a
        href={$me.externalURL.spotify}
        class="border rounded-lg border-slate-700 p-2 flex"
      >
        <p class="mx-auto text-2xl font-bold align-middle">
          <img
            class="inline rounded-full w-8 h-8 mr-1"
            src={$me.images[0].url}
            alt={$me.displayName}
          />
          {#if $me.displayName}
            {$me.displayName.charAt(0).toUpperCase() + $me.displayName.slice(1)}
          {:else}
            {$me.id}
          {/if}
        </p>
      </a>
    {/if}
    <div class="border rounded-lg border-slate-700 space-y-1">
      <h2 class="text-center text-xl font-semibold mt-1">Settings</h2>
      <hr class="border-t-1 border-t-slate-700" />
      <div class="px-2 pt-1 pb-2 space-y-1">
        <div class="w-full inline-flex md:block">
          <p>Artists Shown:</p>
          <select
            bind:value={graphType}
            on:change={() => {
              updateGraphType(graphType);
              localStorage.setItem("graphType", graphType.toString());
            }}
          >
            <option value={GraphType.TopMonth}
              >Your Top of the Past Month</option
            >
            <option value={GraphType.TopYear}>Your Top of the Past Year</option>
            <option value={GraphType.TopAllTime}
              >Your Top of the All Time</option
            >
            <option value={GraphType.Following}>Artist you Follow</option>
            <option value={GraphType.AllAvailable}>All Available Artists</option
            >
          </select>
        </div>
        <div class="w-full inline-flex md:block">
          <p>Artist Style:</p>
          <select
            bind:value={nodeStyle}
            on:change={() => {
              updateNodeStyle(nodeStyle);
              localStorage.setItem("nodeStyle", nodeStyle.toString());
            }}
          >
            <option value={NodeStyle.Dot}>Dots</option>
            <option value={NodeStyle.Picture}>Pictures</option>
            <option value={NodeStyle.Text}>Text</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <button class="button-1 m-2" on:click={logout}>Logout</button>
</main>
