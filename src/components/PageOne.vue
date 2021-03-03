<template>
    <div class="form-page">
        <div class="form-header">
            <h4>Eligibility Check (1/3)</h4>
        </div>

        <div class="form-group">
            <label for="statelga">State / LGA</label>
            <div class="form-input">
                <input type="text" v-model="form.statelga" id="statelga" name="StateLGA" placeholder="State / LGA" maxlength="50" required>
            </div>
        </div>

        <div class="form-group">
            <label for="employment">Employment</label>
            <div class="form-input">
                <select v-model="form.employment" name="Employment" id="employment" required>
                    <option value="" disabled selected>Select status</option>
                    <option value="Employed">Employed</option>
                    <option value="Self-Employed">Self-Employed</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label for="income">Monthly Income</label>
            <div class="form-input">
                <input type="number" v-model="form.income" id="income" name="MonthlyIncome" placeholder="500000" maxlength="50" required>
            </div>
        </div>

        <div class="form-group">
            <label for="bvn">BVN</label>
            <div class="form-input">
                <input type="tel" v-model="form.bvn" id="bvn" name="BVN" placeholder="11-digit BVN" minlength="11" maxlength="11" required>
            </div>
        </div>

        <div class="form-group">
            <label for="dob">Date of Birth</label>
            <div class="form-input">
                <input type="date" v-model="form.dob" name="DateOfBirth" id="dob" required>
            </div>
        </div>

        <div class="form-group">
            <label for="fullname">Full Name</label>
            <div class="form-input">
                <input type="text" v-model="form.fullname" id="fullname" name="FullName" placeholder="First, middle and last name" maxlength="70" required>
            </div>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <div class="form-input">
                <input type="email" v-model="form.email" id="email" name="Email" placeholder="jane@doe.com" required>
            </div>
        </div>

        <div class="form-group">
            <label for="mobile">Phone Number</label>
            <div class="form-input">
                <input type="tel" v-model="form.mobile" id="mobile" name="PhoneNumber" placeholder="Phone number" maxlength="11" required>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label>Gender</label>
                <div class="form-input">
                    <div class="radio-group">
                        <div class="radio-item">
                            <input type="radio" v-model="form.gender" value="Female" name="Gender" id="female">
                            <label for="female">Female</label>
                        </div>
                        <div class="radio-item">
                            <input type="radio" v-model="form.gender" value="Male" name="Gender" id="male">
                            <label for="male">Male</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PageOne",
  computed: {
    form() {
      return this.$store.getters.form;
    },
  },
};
</script>
