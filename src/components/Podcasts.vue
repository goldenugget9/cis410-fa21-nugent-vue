<template>
  <div>
    <h1>Podcast</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Creator first name</th>
          <th>Creator last name</th>
          <th>Date of creation</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="aPodcast in thePodcasts" :key="aPodcast.PodcastPK">
          <th>{{ aPodcast.Title }}</th>
          <th>{{ aPodcast.CreatorFname }}</th>
          <th>{{ aPodcast.CreatorLname }}</th>
          <th>{{ aPodcast.DateOfCreation }}</th>
          <th>
            <router-link :to="`/podcasts/${aPodcast.PodcastPK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    thePodcasts() {
      return this.$store.state.podcasts;
    },
  },
};
</script>

<style></style>
