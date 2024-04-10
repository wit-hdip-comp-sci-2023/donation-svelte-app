<script lang="ts">
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import { onMount } from "svelte";
  import { donationService } from "$lib/services/donation-service";
  import { currentSession, subTitle } from "$lib/stores";
  import { get } from "svelte/store";
  import Card from "$lib/ui/Card.svelte";

  const totalByMethod = {
    labels: ["paypal", "direct"],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  };

  subTitle.set("Donations Data");

  onMount(async () => {
    const donationList = await donationService.getDonations(get(currentSession));
    donationList.forEach((donation) => {
      if (donation.method == "paypal") {
        totalByMethod.datasets[0].values[0] += donation.amount;
      } else if (donation.method == "direct") {
        totalByMethod.datasets[0].values[1] += donation.amount;
      }
    });
  });
</script>

<div class="columns">
  <div class="column">
    <Card title="Donations By Method">
      <Chart data={totalByMethod} type="bar" />
    </Card>
  </div>
  <div class="column has-text-centered">
    <Card title="Donations By Method">
      <Chart data={totalByMethod} type="pie" />
    </Card>
  </div>
</div>
