<script>
  import ArticleCard from '@/components/article/ArticleCard.vue'

  export default {
    components: {
      ArticleCard
    },
  }
</script>

<template>
    <section class="search-results">
        <div class="search-results__block g-container">
            <div class="search-results__announcement">
                <h1 class="search-results__announcement-caption">Wyniki wyszukiwania frazy <strong>"projekt"</strong></h1>
            </div>

            <div class="search-results__inner">
                <ArticleCard 
                pubtype="project"
                puburl="/library/six-ways-to-develop-your-ux-design-career/"
                pubimage="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/Hero_Google.Design_Web_LibraryTile_900x600.jpg"
                pubtitle="6 Ways to Develop Your UX Design Career" 
                pubdate="13/3/2023" 
                pubcaption="Tried-and-true advice from Google designers, researchers, and managers" />

                <ArticleCard 
                pubtype="review"
                puburl="/library/exploring-color-google-maps/"
                pubimage="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/Branded-Maps_3X2_tile.png"
                pubtitle="Exploring Color on Google Maps" 
                pubdate="13/3/2023" 
                pubcaption="How a minimalist approach unlocked our ability to create a more detailed representation of the world" />

                <ArticleCard 
                pubtype="project"
                puburl="/library/material-design-awards-2020/"
                pubimage="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/GD_MDA_3X2_OpenCall.png" 
                pubtitle="Material Design Awards" 
                pubdate="13/3/2023"
                pubcaption="Nominate your product for a 2020 Material Design Award and help us showcase the flexibility and capability of the Material Design system" />
            </div>
        </div>
    </section>
</template>