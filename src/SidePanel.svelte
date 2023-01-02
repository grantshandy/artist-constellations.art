<script lang="ts">
  import { logout } from "./account";

  enum TimeRange {
    Month,
    Year,
    All,
    Following,
    Available,
  }

  const timeRangeModel = [
    { id: TimeRange.Month, text: "Past Month" },
    { id: TimeRange.Year, text: "Past Year" },
    { id: TimeRange.All, text: "All Time" },
    { id: TimeRange.Following, text: "Following" },
    { id: TimeRange.Available, text: "All Available" },
  ];

  enum ArtistView {
    Dot,
    Picture,
    Text,
  }

  const artistViewModel = [
    { id: ArtistView.Dot, text: "Dot" },
    { id: ArtistView.Picture, text: "Picture" },
    { id: ArtistView.Text, text: "Text" },
  ];

  export const artistView = ArtistView.Dot;
  export const timeRange = TimeRange.Month;
</script>

<main class="panel flex flex-col">
  <div class="grow p-2 overflow-y-auto">
    <div class="border p-1 rounded-lg border-slate-700">
      <div class="inline-flex md:block">
        <p>Time Range:</p>
        <select class="interactable rounded-md w-full" value={timeRange}>
          {#each timeRangeModel as option}
            <option value={option.id}>{option.text}</option>
          {/each}
        </select>
      </div>
      <div class="inline-flex md:block">
        <p>Artist View:</p>
        <select class="interactable rounded-md w-full">
          <option value={ArtistView.Dot}>Dots</option>
          <option value={ArtistView.Picture}>Pictures</option>
          <option value={ArtistView.Text}>Text</option>
        </select>
      </div>
    </div>
  </div>
  <button class="button-1 m-2" on:click={logout}>Logout</button>
</main>
