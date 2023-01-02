<script lang="ts">
  import MainPanel from "./MainPanel.svelte";
  import SidePanel from "./SidePanel.svelte";
</script>

<main
  class="h-screen w-screen md:grid md:grid-cols-8 md:grid-rows-1 p-3 lg:p-5 xl:p-10 md:gap-x-3 lg:gap-x-5 xl:gap-x-10"
>
  <div class="h-3/5 md:h-full md:col-span-5 mdrow-span-1 lg:col-span-6">
    <MainPanel />
  </div>
  <div class="h-2/5 md:h-full md:col-span-3 md:row-span-1 lg:col-span-2 flex">
    <!-- this part is SUPER hacky but force-graph's canvas acts really weird on resize without this -->
    <div class="grow mt-3 md:mt-0">
      <SidePanel />
    </div>
  </div>
</main>
