import Vue from "vue";
import Button from './button'
import Icon from "./Icon"

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
new Vue({
  el: '#app',
  data:{
    message: 'hi'
  }
})