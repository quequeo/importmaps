import { ref, createApp } from 'vue'

const count = ref(0)

createApp({
  data() {
    return {
      name: 'Loopitos',
      count: count
    }
  },

  methods: {
    increment() {
      this.count += 1
    }
  },
}).mount('#app-vue')