<template>
  <div class="container-fluid">
    <h4>Podcast Subscription App</h4>
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-7">
        <div>
          <h1>Home</h1>
          <br />
          <div class="my-container">
            <router-link :to="`/podcasts/4`"
              ><img src="../assets/csu-logo-300px.png" /></router-link
            ><router-link :to="`/podcasts/1`"
              ><img src="../assets/dane-moore-logo-300px.png" /></router-link
            ><router-link :to="`/podcasts/3`"
              ><img src="../assets/h3-logo-300px.png" /></router-link
            ><router-link :to="`/podcasts/5`"
              ><img src="../assets/regular-show-logo-300px.png" /></router-link
            ><router-link :to="`/podcasts/2`"
              ><img src="../assets/ringer-logo-300px.png"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
