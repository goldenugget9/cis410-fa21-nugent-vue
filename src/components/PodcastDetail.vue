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
      <button class="btn btn-success">Subscribe</button></router-link
    >
    <router-link v-else :to="`/login`">
      <button class="btn btn-outline-success">
        Sign in to Subscribe
      </button></router-link
    >
  </div>
</template>

<script>
export default {
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
};
</script>

<style></style>
