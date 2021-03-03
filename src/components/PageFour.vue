<template>
    <div class="form-page">
        <div class="user-data-wrapper">
            <h5>Your Information</h5>
            <br>
            <div class="user-data"></div>
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
  data() {
    return {
      todo: {},
      loading: false,
    };
  },
  created() {
    this.getTodo();
  },
  methods: {
    getTodo() {
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
