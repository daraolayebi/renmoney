<template>
    <div class="form-page">
        <div class="form-header">
            <h4>Personal Details (2/3)</h4>
        </div>

        <div class="form-group">
            <label for="residentialStatus">Residential Status</label>
            <div class="form-input">
                <select v-model="residentialStatus" name="Residential Status" id="residentialStatus" required>
                    <option value="" disabled selected>Select status</option>
                    <option value="Owner">Owner</option>
                    <option value="Renting">Renting</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label for="address">Residential Address</label>
            <div class="form-input">
                <input type="text" v-model="address" id="address" name="Residential Address" placeholder="Residential Address" maxlength="80" required>
            </div>
        </div>

        <div class="form-group">
            <label for="dateMovedIn">Date Moved In</label>
            <div class="form-input">
                <input type="date" v-model="dateMovedIn" name="Date Moved In" id="dateMovedIn" required>
            </div>
        </div>

        <div class="form-group">
            <label for="maritalStatus">Marital Status</label>
            <div class="form-input">
                <select v-model="maritalStatus" name="Marital Status" id="maritalStatus" required>
                    <option value="" disabled selected>Select status</option>
                    <option value="Single">Single</option>
                    <option value="Renting">Married</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label for="education">Education Level</label>
            <div class="form-input">
                <select v-model="education" name="Education Level" id="education" required>
                    <option value="" disabled selected>Select level</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="Graduate">Graduate</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PageTwo",
  computed: {
    pageTwo() {
      return this.$store.pageTwo;
    },
  },
  data() {
    return {
      residentialStatus: "",
      address: "",
      dateMovedIn: "",
      maritalStatus: "",
      education: "",
    };
  },
};
</script>
