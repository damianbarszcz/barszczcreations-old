<script>
  import PrimaryNavigation from '@/components/navigation/PrimaryNavigation.vue'
  import PrimaryFooter from '@/components/layout/PrimaryFooter.vue'
  import ArticleHead from '@/components/pages/ArticleHead.vue'
  import ArticleGraphics from '@/components/pages/ArticleGraphics.vue'
  import ArticleBody from '@/components/pages/ArticleBody.vue'

  export default {
    components: {
      PrimaryNavigation,
      PrimaryFooter,
      ArticleHead,
      ArticleGraphics,
      ArticleBody
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

        <article>
            <ArticleHead />
            <ArticleGraphics />
            <ArticleBody />
        </article>

        <PrimaryFooter />
    </div>
</template>
