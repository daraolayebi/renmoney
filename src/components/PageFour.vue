<template>
    <div class="form-page">
        <div class="user-data-wrapper">
            <h5>Your Information</h5>
            <br>
            <div class="user-data">
                <p class="user-data-item">State / LGA: {{form.statelga}}</p>
                <p class="user-data-item">Full Name: {{form.fullname}}</p>
                <p class="user-data-item">Email: {{form.email}}</p>
                <p class="user-data-item">Mobile: {{form.mobile}}</p>
                <p class="user-data-item">Employment: {{form.employment}}</p>
                <p class="user-data-item">Monthly Income: {{form.income}}</p>
                <p class="user-data-item">BVN: {{form.bvn}}</p>
                <p class="user-data-item">Date of Birth: {{form.dob}}</p>
                <p class="user-data-item">Gender: {{form.gender}}</p>
                <p class="user-data-item">Residential Status: {{form.residentialStatus}}</p>
                <p class="user-data-item">Residential Address: {{form.address}}</p>
                <p class="user-data-item">Date Moved In: {{form.dateMovedIn}}</p>
                <p class="user-data-item">Marital Status: {{form.maritalStatus}}</p>
                <p class="user-data-item">Education Level: {{form.education}}</p>
                <p class="user-data-item">Employer Sector: {{form.sector}}</p>
                <p class="user-data-item">Employer: {{form.employer}}</p>
                <p class="user-data-item">Start Date: {{form.startDate}}</p>
                <p class="user-data-item">Office Address: {{form.office}}</p>
                <p class="user-data-item">Work Email: {{form.workEmail}}</p>
            </div>
        </div>
        <div class="user-data-wrapper small">
            <p v-if="loading">Loading todo ...</p>
            <template v-else>
                <h5>Your Todo:{{todo.title}}</h5>
                <p class="user-data-item">User ID: {{todo.userId}}</p>
                <p class="user-data-item">Status: {{todo.completed}}</p>
            </template>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PageFour",
  props: ["currentPage"],
  data() {
    return {
      todo: {},
      loading: false,
    };
  },
  watch: {
    currentPage(value) {
      if (value == 5) this.getTodo();
    },
  },
  computed: {
    form() {
      return this.$store.getters.form;
    },
  },
  methods: {
    getTodo() {
      this.todo = {};
      this.loading = true;
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
          this.loading = false;
          this.todo = response.data;
        })
        .catch(error => {
          this.loading = false;
          alert(error);
        });
    },
  },
};
</script>
