<script lang="ts">
  import { subTitle } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";

  subTitle.set("Donations Geo Data");
</script>

<Card title="Donations Locations">
  <LeafletMap height={60} />
</Card>
