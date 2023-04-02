<script>
  import PrimaryNavigation from '@/components/navigation/PrimaryNavigation.vue'
  import PrimaryFooter from '@/components/layout/PrimaryFooter.vue'
  import Privacy from '@/components/pages/Privacy.vue'

  export default {
    components: {
      PrimaryNavigation,
      PrimaryFooter,
      Privacy
    },

    head(){
        return{
            title: "Polityka prywatności | Barszcz Creations"
        }
    },
  }
</script>

<template>
    <div>
        <PrimaryNavigation />

        <Privacy />

        <PrimaryFooter />
    </div>
</template>
