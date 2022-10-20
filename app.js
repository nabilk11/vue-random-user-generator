const app = Vue.createApp({
  data() {
    return {
      firstName: "Nabil",
      lastName: "Khan",
      email: "khan.nabiln11@gmail.com",
      gender: "male",
      image:
        "https://randomuser.me/api/portraits/men/7.jpg",
    };
  },
  methods: {
    fetchUser() {
      this.firstName = "Laura";
      this.lastName = "Donaldson";
      this.email = "laura@gmail.com";
      this.gender = "female";
      this.image = "https://randomuser.me/api/portraits/women/7.jpg";
    },
  },
});

app.mount("#app");
