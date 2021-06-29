<template>
    <b-navbar id="nav" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand class="logo__link" href="#/">
            <div class="logo-container">
                <img src="@/assets/logo.png" class="d-inline-block align-top logo" alt="Kitten">

                <span id="nav-title">
                    FamilySize Restaurant
                </span>
            </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-link class="nav-link" to="/">HOME</b-link>
                <b-link class="nav-link" to="/menu">MENU</b-link>
                <b-link class="nav-link" to="/about">ABOUT</b-link>
                <b-link class="nav-link" to="/contact">CONTACT</b-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BLink, BNavItem, BNavbarBrand, BNavbarNav, BNavbarToggle, BCollapse, BNavbar } from 'bootstrap-vue'

Vue.component('b-navbar', BNavbar)
Vue.component('b-navbar-brand', BNavbarBrand)
Vue.component('b-navbar-toggle', BNavbarToggle)
Vue.component('b-collapse', BCollapse)
Vue.component('b-navbar-nav', BNavbarNav)
Vue.component('b-nav-item', BNavItem)
Vue.component('b-link', BLink)

@Component
export default class Navbar extends Vue {}
</script>

<style lang="sass" scoped>
#nav
    padding: 0 .4em

    @media only screen and (max-width: 400px)
        display: flex
        flex-direction: column

    &-collapse
        flex-direction: row-reverse

    &-title
        white-space: pre-line

.logo
    max-width: 3em
    margin-right: .4em
    white-space: pre-wrap
    overflow-wrap: anywhere

    &-container
        display: flex
        align-items: center

        @media only screen and (max-width: 400px)
            display: flex
            flex-direction: column

    &__link
        @media only screen and (max-width: 400px)
            margin-right: 0
</style>
