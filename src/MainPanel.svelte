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
      text: "Starting Graph",
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
      <div>
        <p class="text-center">Loading: {$loadingInfo.text}...</p>
        <progress class="mx-auto w-full h-6" value={$loadingInfo.current} max={$loadingInfo.total} />
      </div>
    </div>
  {/if}
</main>
