<script lang="ts">
  import MainPanel from "./MainPanel.svelte";
  import SidePanel from "./SidePanel.svelte";
</script>

<main
  class="grid grid-cols-1 md:grid-cols-5 grid-rows-5 md:grid-rows-1 gap-3 p-3 min-h-screen"
>
  <div class="md:col-span-4 row-span-4 md:row-span-1">
    <MainPanel />
  </div>
  <div class="md:col-span-1 row-span-1 md:col-span-1">
    <SidePanel />
  </div>
</main>
