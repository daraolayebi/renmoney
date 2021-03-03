<template>
    <div class="form-page">
        <div class="form-header">
            <h4>Employment Details (3/3)</h4>
        </div>

        <div class="form-group">
            <label for="sector">Employer Sector</label>
            <div class="form-input">
                <select v-model="sector" name="Employer Sector" id="sector" required>
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
                <input v-model="employer" type="text" id="employer" name="Employer Name" placeholder="Employer Name" maxlength="80" required>
            </div>
        </div>

        <div class="form-group">
            <label for="startDate">Start Date</label>
            <div class="form-input">
                <input v-model="startDate" type="date" name="Start Date" id="startDate" required>
            </div>
        </div>

        <div class="form-group">
            <label for="office">Office Address</label>
            <div class="form-input">
                <input v-model="office" type="text" id="office" name="Office Address" placeholder="Office Address" maxlength="80" required>
            </div>
        </div>

        <div class="form-group">
            <label for="workEmail">Work Email</label>
            <div class="form-input">
                <input v-model="workEmail" type="email" id="workEmail" name="Work Email" placeholder="jane@employer.com" required>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PageFour",
  props: ["sector", "employer", "startDate", "office", "workEmail"],
  //   data() {
  //     return {
  //
  //     };
  //   },
};
</script>
