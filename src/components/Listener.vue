<template>
  <div>
    <h1>Listener</h1>
    <hr />
    <h3>{{ firstName }}'s Subscriptions</h3>
    <p v-if="accountError" class="text-danger">
      Cannot get your account information. Please try again later.
    </p>
    <table v-if="subscriptionsByUser" class="table">
      <thead>
        <th id>Title</th>
        <th>Date of Subscription</th>
      </thead>

      <tbody>
        <tr
          v-for="thisSubscription in subscriptionsByUser"
          :key="thisSubscription.SubscriptionPK"
        >
          <th>
            <router-link :to="`/podcasts/${thisSubscription.PodcastFK}`">{{
              thisSubscription.PodcastFK
            }}</router-link>
          </th>
          <th>{{ thisSubscription.date }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      subscriptionsByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("store so far", this.$store.state);
      return this.$store.state.user.NameFirst;
    },
  },
  created() {
    axios
      .get("/subscriptions/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log(theResponse);
        this.subscriptionsByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};

// if (this.subscription.PodcastFK === 1) {
//   podcastTitle = "The NBA Podcast";
// } else if (this.subscription.PodcastFK === 2) {
//   podcastTitle = "The Ringer";
// } else if (this.subscription.PodcastFK === 3) {
//   podcastTitle = "H3";
// } else if (this.subscription.PodcastFK === 4) {
//   podcastTitle = "Go Rams";
// } else if (this.subscription.PodcastFK === 5) {
//   podcastTitle = "Regular Show";
// }
</script>

<style></style>
