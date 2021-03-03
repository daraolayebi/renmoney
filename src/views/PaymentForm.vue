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
                        <!-- I chose to use class binding here instead of v-if so that the form information will be persistent -->
                        <IntroPage :class="{'visible' : currentPage == 1}" @next-page="nextPage" />
                        <PageOne :class="{'visible' : currentPage == 2}" />
                        <PageTwo :class="{'visible' : currentPage == 3}" />
                        <PageThree :class="{'visible' : currentPage == 4}" />
                        <PageFour :class="{'visible' : currentPage == 5}" :currentPage="currentPage" />

                        <div class="btn-toggle-group" v-if="buttonsVisible">
                            <button type="button" class="btn-page-toggle prev" @click="previousPage">Prev</button>
                            <small id="warning" class="required-label">ALL fields are required!</small>
                            <button type="button" class="btn-page-toggle next" @click="nextPage">{{buttonText}}</button>
                        </div>
                    </form>

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
    updateForm(data) {
      this.formData.push(...data);
    },
    submitForm() {
      //   console.log(this.formData);
    },
  },
};
</script>

