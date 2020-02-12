<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input 
                  v-model="article.title"
                  type="text" 
                  class="form-control form-control-lg" 
                  placeholder="Article Title" 
                />
              </fieldset>
              <fieldset class="form-group">
                <input 
                  v-model="article.description" 
                  type="text" class="form-control" 
                  placeholder="What's this article about?" 
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Enter tags"
                  v-model="tag"
                  @keyup.enter="onAddTag"
                />
                <div class="tag-list">
                  <span class="tag-pill tag-default"
                    v-for="(item,index) in article.tagList" 
                    :key="index"
                  >
                    <i class="ion-close-round" @click.prevent="onRemoveTag(index)"></i>
                    {{item}}
                  </span>
                </div>
              </fieldset>
              <button 
                class="btn btn-lg pull-xs-right btn-primary" 
                type="button"
                @click.prevent="onPublish"
              >Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArticle } from '@/api/article.js'
export default {
  middleware: 'authenticated',
  name: "EditorPage",
  data() {
    return {
      article:{
        title: '',
        description: '',
        body: '',
        tagList: ['007']
      },
      tag: ''
    }
  },
  props: {},
  components: {},
  computed: {},
  methods: {
    async onPublish(){
      try {
        const { data } = await createArticle({
          article:this.article
        })
        this.$router.push(`/article/${data.article.slug}`)
      } catch (err) {
        console.log(err)
      }
    },
    onAddTag(){
      const list = this.article.tagList
      const tag = this.tag
      if (!list.includes(tag)&&tag.length) {
        this.article.tagList.push(tag)
        this.tag = ''
      }
    },
    onRemoveTag(index){
      this.article.tagList.splice(index,1)
    }
  },
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style lang="" scoped>
</style>