<template>
  <div>
    <div>
      <h1>Sign Up</h1>
      <br />
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="fname-input" class="form-label">First name</label
          ><input
            type="text"
            class="form-control"
            id="fname-input"
            required=""
            placeholder="First name"
            v-model="nameFirst"
            style="
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC');
              background-repeat: no-repeat;
              background-attachment: scroll;
              background-size: 16px 18px;
              background-position: 98% 50%;
            "
          />
        </div>
        <div class="mb-3">
          <label for="lname-input" class="form-label">Last name</label
          ><input
            type="text"
            class="form-control"
            id="lname-input"
            required=""
            placeholder="Last name"
            v-model="nameLast"
          />
        </div>
        <div class="mb-3">
          <label for="email-input" class="form-label">Email</label
          ><input
            type="email"
            class="form-control"
            id="email-input"
            required=""
            placeholder="Enter email"
            v-model="email"
          />
          <small v-if="dupEmail" class="text-danger"
            >Please use a different email</small
          >
        </div>
        <div class="mb-3">
          <label for="password-input" class="form-label">Password</label
          ><input
            type="password"
            class="form-control"
            id="password-input"
            placeholder="Password"
            required=""
            v-model="password"
            style="
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=');
              background-repeat: no-repeat;
              background-attachment: scroll;
              background-size: 16px 18px;
              background-position: 98% 50%;
            "
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <p id="error-signup" class="text-danger">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nameFirst: "",
      nameLast: "",
      email: "",
      password: "",
      errorMessage: "",
      dupEmail: false,
    };
  },
  methods: {
    onSubmit() {
      // console.log("Form submitted");
      const myFormData = {
        nameFirst: this.nameFirst,
        nameLast: this.nameLast,
        email: this.email,
        password: this.password,
      };
      // console.log("data", myFormData);
      axios
        .post("/listeners", myFormData)
        .then((myResponse) => {
          console.log("myResponse", myResponse);
          this.$router.replace("/login?signupsuccess=true");
        })
        .catch((myError) => {
          if (myError.response.status === 409) {
            this.dupEmail = true;
          } else {
            this.errorMessage = "Cannot sign you up. Please try again later";
          }
        });
    },
  },
};
</script>

<style></style>
