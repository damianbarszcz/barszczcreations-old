<script>
  import HeaderNavigation from '@/components/navigation/HeaderNavigation.vue'
  import PrimaryFooter from '@/components/layout/PrimaryFooter.vue'
  import Home from '@/components/pages/Home.vue'

  export default {
    components: {
      HeaderNavigation,
      PrimaryFooter,
      Home,
    },

    data(){
      return{
        isScroll: 0
      }
    },

    head(){
        return{
            title: "Barszcz Creations | Blog personalny"
        }
    },
  }
</script>

<template>
    <div>
      <HeaderNavigation  />

      <main>
        <Home />
      </main>

      <PrimaryFooter />
    </div>
</template>