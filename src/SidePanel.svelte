<script lang="ts">
  import { logout, spotify } from "./account";
  import { NodeStyle, GraphType, updateGraphType, updateNodeStyle } from "./graph";

  let graphType = GraphType.TopYear;
  let nodeStyle = NodeStyle.Dot;

  $: {
    updateGraphType(graphType, $spotify);
  }

  $: {
    updateNodeStyle(nodeStyle);
  }
</script>

<main class="panel flex flex-col">
  <div class="grow p-2 overflow-y-auto">
    <div class="border rounded-lg border-slate-700 space-y-1">
      <h2 class="text-center text-xl font-semibold mt-1">Settings</h2>
      <hr class="border-t-1 border-t-slate-700" />
      <div class="px-2 pt-1 pb-2 space-y-1">
        <div class="w-full inline-flex md:block">
          <p>Artists Shown:</p>
          <select value={graphType}>
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
          <select value={nodeStyle}>
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
