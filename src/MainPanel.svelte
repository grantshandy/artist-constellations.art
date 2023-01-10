<script lang="ts">
  import { graphDimensions, loadingInfo, containerID, init2DGraph, type LoadingInfo, type GraphDimensions } from "./graph";
  import { onMount } from "svelte";

  import Graph2D from "./Graph2D.svelte";
  import Graph3D from "./Graph3D.svelte";

  loadingInfo.subscribe((lt: LoadingInfo) => {
    if (!document.getElementById(containerID)) {
      return;
    }

    if (lt.shown) {
      document.getElementById(containerID).classList.add("hidden");
    } else {
      document.getElementById(containerID).classList.remove("hidden");
    }
  });

  onMount(() => {
    init2DGraph(document.getElementById(containerID));
  });
</script>

<main class="panel">
  {#if $graphDimensions == 2 }
    <Graph2D />
  {:else if $graphDimensions == 3 }
    <Graph3D />
  {/if}
  {#if $loadingInfo.shown}
    <div class="w-full h-full rounded-md flex items-center justify-center">
      <div class="space-y-3 select-none">
        <div>
          <p class="text-center">Loading: {$loadingInfo.text}...</p>
          {#if $loadingInfo.artist}
          <p class="text-center italic">{$loadingInfo.artist}</p>
          {/if}
        </div>
        <div class="w-full h-4 bg-slate-900 border border-slate-700 rounded-md">
          <div class="bg-slate-600 h-full rounded-md" style="width: {($loadingInfo.value / $loadingInfo.max) * 100}%" />
        </div>
        <p class="text-center">{$loadingInfo.value}/{$loadingInfo.max}</p>
      </div>
    </div>
  {/if}
</main>
