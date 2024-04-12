import { donationService } from "$lib/services/donation-service";
import { generateByCandidate, generateByMethod } from "$lib/services/donation-utils";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
  const { session } = await parent();
  if (session) {
    const donations = await donationService.getDonations();
    const candidates = await donationService.getCandidates();
    return {
      byMethod: generateByMethod(donations),
      byCandidate: generateByCandidate(donations, candidates)
    };
  }
};
