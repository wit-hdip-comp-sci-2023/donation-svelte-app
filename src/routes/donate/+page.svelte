<script lang="ts">
  import { subTitle } from "$lib/stores";
  import DonateForm from "./DonateForm.svelte";

  subTitle.set("Make a Donation");
</script>

<DonateForm />
