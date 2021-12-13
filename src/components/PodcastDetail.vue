<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ podcast.Title }}</h2>
        <br />

        <p>
          Creator first name: <br /><strong>{{ podcast.CreatorFname }}</strong>
        </p>
        <p>
          Creator last name: <br /><strong>{{ podcast.CreatorLname }}</strong>
        </p>
        <p>
          Date of creation: <br /><strong>{{ podcast.DateOfCreation }}</strong>
        </p>
      </div>
    </div>

    <br />
    <router-link
      v-if="auth"
      :to="`/podcasts/${this.$route.params.pk}/subscription`"
    >
      <button class="btn btn-success" @click="subscribe">Subscribe</button>
    </router-link>
    <p v-if="errorMessage" class="text-danger">
      {{ errorMessage }}
    </p>
    <!-- <router-link
      v-else-if="auth && ifSubscribed"
      :to="`/podcasts/${this.$route.params.pk}/subscription`"
    >
      <button class="btn btn-danger" @click="unsubscribe">
        Unsubscribe
      </button></router-link
    > -->
    <router-link v-if="!auth" :to="`/login`">
      <button class="btn btn-outline-success">
        Sign in to Subscribe
      </button></router-link
    >

    <!-- <router-view /> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ifSubscribed: false,
      errorMessage: null,
    };
  },
  computed: {
    podcast() {
      let allPodcasts = this.$store.state.podcasts;

      let thisPodcast = allPodcasts.find((aPodcast) => {
        return aPodcast.PodcastPK == this.$route.params.pk;
      });

      return thisPodcast;
    },
    auth() {
      return this.$store.state.token;
    },
  },
  methods: {
    subscribe() {
      let mySubscription = {
        podcastFK: this.$route.params.pk,
      };

      axios
        .post("/subscriptions", mySubscription, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/listener");
        })
        .catch(() => {
          this.errorMessage = "Unable to subscribe. Please try again later.";
        });
      return (this.ifSubscribed = true);
    },
    // unsubscribe() {
    //   return (this.ifSubscribed = false);
    // },
    // submitSub() {
    //   let mySubscription = {
    //     PodcastFK: this.$route.params.pk,
    //   };

    //   axios
    //     .post("/subscriptions", mySubscription, {
    //       headers: { Authorization: `Bearer ${this.$store.state.token}` },
    //     })
    //     .then(() => {
    //       this.$router.replace("/listener");
    //     });
    // },
  },
};
</script>

<style></style>
