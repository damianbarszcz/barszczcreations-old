<script>
  import PrimaryNavigation from '@/components/navigation/PrimaryNavigation.vue'
  import PrimaryFooter from '@/components/layout/PrimaryFooter.vue'
  import SearchResults from '@/components/pages/SearchResults.vue'

  export default {
    components: {
      PrimaryNavigation,
      PrimaryFooter,
      SearchResults
    },
  }
</script>

<template>
    <div>
        <PrimaryNavigation />

        <SearchResults />

        <PrimaryFooter />
    </div>
</template>