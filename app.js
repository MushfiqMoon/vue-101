const app = Vue.createApp({
  data() {
    return {
      firstName: "Jhon",
      lastName: "Doe",
      email: "jhon@doe.com",
      gender: "male",
      city: "Dhaka",
      country: "Banglasesh",
      picture: "https://randomuser.me/api/portraits/lego/2.jpg",
      flag: "https://flagcdn.com/w320/bd.png"
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.city = results[0].location.city;
      this.country = results[0].location.country;
      this.picture = results[0].picture.large;

      let countryName = results[0].location.country.toLowerCase();
      console.log(countryName);

      const flagResponse = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await flagResponse.json();

      console.log(data);

      this.flag = data[0].flags.svg

    },
  },
});

app.mount("#app");
