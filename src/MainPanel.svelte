<script lang="ts">
  import { graph, loadingInfo, containerID } from "./graph";
  import { onMount } from "svelte";
  import ForceGraph from "force-graph";

  const ro = new ResizeObserver((entries) => {
    if ($graph) {
      const cr = entries[0].contentRect;

      $graph.width(cr.width);
      $graph.height(cr.height);
    }
  });

  loadingInfo.subscribe((lt) => {
    if (!document.getElementById(containerID)) {
      return;
    }

    if (lt) {
      document.getElementById(containerID).classList.add("hidden");
    } else {
      document.getElementById(containerID).classList.remove("hidden");
    }
  });

  onMount(() => {
    let container = document.getElementById(containerID);

    loadingInfo.set({
      text: "Initalizing Graph",
      current: 1,
      total: 100,
    });
    graph.set(
      ForceGraph()(container)
        .width(container.clientWidth)
        .height(container.clientHeight)
    );
    ro.observe(container);

    // >;)
    container.firstElementChild.classList.add("rounded-md");
    container.firstElementChild.firstElementChild.classList.add("rounded-md");
  });
</script>

<main class="panel">
  <div class="w-full h-full" id={containerID} />
  {#if $loadingInfo}
    <div class="w-full h-full rounded-md flex items-center justify-center">
      <div class="space-y-3 select-none">
        <p class="text-center">Loading: {$loadingInfo.text}...</p>
        <div class="w-full h-4 bg-slate-900 border border-slate-700 rounded-md">
          <div class="bg-slate-800 h-full rounded-md" style="width: {$loadingInfo.current}%" />
        </div>
      </div>
    </div>
  {/if}
</main>
