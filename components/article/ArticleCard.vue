<script>
export default {
  name: 'ArticleCard',
  props: {
    pubtitle: {
      type: String,
      required: true
    },
    pubcaption: {
      type: String,
      required: true
    },

    pubimage: {
      type: String,
      required: true
    },

    puburl: {
      type: String,
      required: true
    },

    pubtype: {
      type: String,
      required: true
    },

    pubdate: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
    <article class="article-card"  :data-pub-type="pubtype">
        <a class="article-card__link" :href="puburl" target="_self">
            <div class="article-card__inner">
                <div class="article-card__image">
                    <img :src="pubimage"  :alt="pubtitle" />
                </div>

                <div class="article-card__content">
                    <div class="article-card__content--date">{{ pubdate }}</div>

                    <div class="article-card__content--headline">{{ pubtitle }}</div>

                    <p class="article-card__content--caption">{{ pubcaption }}</p>
                </div>
            </div>
        </a>
    </article>
</template>