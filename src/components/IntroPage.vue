<template>
    <div class="pwr-intro">
        <h4>Welcome to the Renmoney online payment platform.</h4>
        <p>Click the button below to proceed.</p>
        <small class="required-label warning-intro">
            <i>Please note: ALL fields are required.</i>
        </small>
        <button @click="$emit('next-page')" type="button" class="btn btn-orange btn-arrow btn-continue">
            <span class="btn-arrow-text">Continue</span>
        </button>
    </div>
</template>

