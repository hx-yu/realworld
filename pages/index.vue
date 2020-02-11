<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href>Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href>Global Feed</a>
              </li>
            </ul>
          </div>

          <div 
            class="article-preview" 
            v-for="(item,index) in articles" 
            :key="index"
          >
            <div class="article-meta">
              <a href="profile.html">
                <img :src="item.author.image"/>
              </a>
              <div class="info">
                <a href class="author">{{item.author.usernamez}}</a>
                <span class="date">{{item.createdAt}}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{item.favoritesCount}}
              </button>
            </div>
            <a href class="preview-link">
              <h1>{{item.title}}</h1>
              <p>{{item.description}}</p>
              <span>Read more...</span>
            </a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a href 
                class="tag-pill tag-default" 
                v-for="(item,index) in tags" 
                :key="index"
              >{{item}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticlesList } from '@/api/article.js'
import { getTagsList } from '@/api/tag.js'
export default {
  name: "HomePage",
  async asyncData(){
    // const { data } = await getArticlesList()
    // const { data:tagList } = await getTagsList()
    const [articles,tags] = await Promise.all([getArticlesList(),getTagsList()])
    return {
      articles: articles.data.articles,
      tags: tags.data.tags
    }
  },
  data() {
    return {}
  },
  props: {},
  components: {},
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
</style>