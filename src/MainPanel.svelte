<script lang="ts">
  import { loadingInfo, containerID, init2DGraph, type LoadingInfo } from "./graph";
  import { onMount } from "svelte";

  // const ro = new ResizeObserver((entries) => {
  //   if ($graph) {
  //     const cr = entries[0].contentRect;

  //     $graph.width(cr.width);
  //     $graph.height(cr.height);
  //   }
  // });

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
    let container = document.getElementById(containerID);
    init2DGraph(container);
    // ro.observe(container);

    // >;)
    // container.firstElementChild.classList.add("rounded-md");
    // container.firstElementChild.firstElementChild.classList.add("rounded-md");
  });
</script>

<main class="panel">
  <div class="w-full h-full" id={containerID} />
  {#if $loadingInfo.shown}
    <div class="w-full h-full rounded-md flex items-center justify-center">
      <div class="space-y-3 select-none">
        <p class="text-center">Loading: {$loadingInfo.text}...</p>
        <div class="w-full h-4 bg-slate-900 border border-slate-700 rounded-md">
          <div class="bg-slate-700 h-full rounded-md" style="width: {($loadingInfo.value / $loadingInfo.max) * 100}%" />
        </div>
      </div>
    </div>
  {/if}
</main>
