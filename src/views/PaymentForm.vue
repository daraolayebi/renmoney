<template>
    <div class="pwr-wrapper">
        <div class="pwr-btn-wrapper">
            <button class="btn btn-main" @click="showWidget">Pay With Renmoney</button>
        </div>

        <div class="pwr-widget-wrapper">
            <div class="pwr-widget">
                <div class="pwr-widget-inner">
                    <button @click="hideWidget" class="btn-close"></button>

                    <img src="@/assets/images/logo.svg" alt="Renmoney logo" class="pwr-logo" :class="{'large' : currentPage == 1 || currentPage == 4}">

                    <form @submit="submitForm" class="payment-form">
                        <IntroPage v-if="currentPage == 1" @next-page="nextPage" />
                        <PageOne v-if="currentPage == 2" @save-fields="saveFields" />
                        <PageTwo v-if="currentPage == 3" @save-fields="saveFields" />
                        <PageThree v-if="currentPage == 4" @save-fields="saveFields" />
                        <PageFour v-if="currentPage == 5" :form="formFields" />
                    </form>

                    <div class="btn-toggle-group" v-if="buttonsVisible">
                        <button class="btn-page-toggle prev" @click="previousPage">Prev</button>
                        <small id="warning" class="required-label">ALL fields are required!</small>
                        <button type="submit" class="btn-page-toggle next" @click="nextPage">{{buttonText}}</button>
                    </div>
                </div>
            </div>

            <footer>
                <div class="footer-inner">
                    <img src="@/assets/images/logo-icon.svg" alt="Renmoney logo icon" width="30">
                    <span>&copy; Renmoney. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import IntroPage from "../components/IntroPage";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageThree";
import PageFour from "../components/PageFour";
export default {
  components: {
    IntroPage,
    PageOne,
    PageTwo,
    PageThree,
    PageFour,
  },
  data() {
    return {
      currentPage: 1,
      className: "widget-is-open",
    };
  },
  computed: {
    buttonText() {
      if (this.currentPage == 4) return "Finish";
      else return "Next";
    },
    buttonsVisible() {
      if (this.currentPage > 1 && this.currentPage <= 4) return true;
    },
  },
  methods: {
    showWidget() {
      const el = document.body;
      el.classList.add(this.className);
    },
    hideWidget() {
      const el = document.body;
      el.classList.remove(this.className);
      this.currentPage = 1;
    },
    previousPage() {
      this.currentPage = this.currentPage - 1;
    },
    nextPage() {
      this.currentPage = this.currentPage + 1;
    },
    saveFields(data) {
      this.formData.push(...data);
    },
    submitForm() {
      //   console.log(this.formData);
    },
  },
};
</script>

