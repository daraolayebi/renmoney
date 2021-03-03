<template>
    <div class="form-page">
        <div class="form-header">
            <h4>Employment Details (3/3)</h4>
        </div>

        <div class="form-group">
            <label for="sector">Employer Sector</label>
            <div class="form-input">
                <select v-model="form.sector" name="EmployerSector" id="sector" required>
                    <option value="" disabled selected>Select sector</option>
                    <option value="Finance">Finance</option>
                    <option value="Banking">Banking</option>
                    <option value="Charity">Charity</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label for="employer">Employer Name</label>
            <div class="form-input">
                <input v-model="form.employer" type="text" id="employer" name="EmployerName" placeholder="Employer Name" maxlength="80" required>
            </div>
        </div>

        <div class="form-group">
            <label for="startDate">Start Date</label>
            <div class="form-input">
                <input v-model="form.startDate" type="date" name="StartDate" id="startDate" required>
            </div>
        </div>

        <div class="form-group">
            <label for="office">Office Address</label>
            <div class="form-input">
                <input v-model="form.office" type="text" id="office" name="OfficeAddress" placeholder="Office Address" maxlength="80" required>
            </div>
        </div>

        <div class="form-group">
            <label for="workEmail">Work Email</label>
            <div class="form-input">
                <input v-model="form.workEmail" type="email" id="workEmail" name="WorkEmail" placeholder="jane@employer.com" required>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PageFour",
  computed: {
    form() {
      return this.$store.getters.form;
    },
  },
};
</script>
