<script>
  import PrimaryNavigation from '@/components/navigation/PrimaryNavigation.vue'
  import PrimaryFooter from '@/components/layout/PrimaryFooter.vue'

  export default {
    components: {
      PrimaryNavigation,
      PrimaryFooter,
    },

    head(){
        return{
            title: "Scatching up with Erik Spiekermann - Barszcz Creations"
        }
    },
  }
</script>

<template>
     <div>
        <PrimaryNavigation />

        <section class="article-intro">

        </section>

        

        <PrimaryFooter />
    </div>
</template>
