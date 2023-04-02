<script>
  import PrimaryNavigation from '@/components/navigation/PrimaryNavigation.vue'
  import PrimaryFooter from '@/components/layout/PrimaryFooter.vue'
  import AboutBanner from '@/components/pages/AboutBanner.vue'
  import Biography from '@/components/pages/Biography.vue'

  export default {
    components: {
      PrimaryNavigation,
      PrimaryFooter,
      AboutBanner,
      Biography
    },

    head(){
        return{
            title: "O mnie | Barszcz Creations"
        }
    },
  }
</script>

<template>
    <div>
        <PrimaryNavigation />

        <AboutBanner />

        <Biography />

       <PrimaryFooter />
   </div>
</template>