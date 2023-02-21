<script>
  import PrimaryNavigation from '@/components/navigation/PrimaryNavigation.vue'
  import HeaderNavigation from '@/components/navigation/HeaderNavigation.vue'
  import PrimaryFooter from '@/components/layout/PrimaryFooter.vue'
  import Home from '@/components/pages/Home.vue'

  export default {
    components: {
      PrimaryNavigation,
      HeaderNavigation,
      PrimaryFooter,
      Home,
    },

    data(){
      return{
        isScroll: 0
      }
    }
  }
</script>

<template>
    <div>
      <PrimaryNavigation v-if="isScroll > 0" />

      <HeaderNavigation v-else />

      <main>
        <Home />
      </main>

      <PrimaryFooter />
    </div>
</template>