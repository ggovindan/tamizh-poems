// app.js

new Vue({
  el: "#mdEditor",

  data: {
          content: '',
        },
  mounted: function() {
    this.defaultPage();
  },

  methods: {
    defaultPage: function() {
      this.$http.get('/defaultPage')
        .then((result) => {
          this.$set(this, 'content', result.data.html);
          console.log('result=', result);
        }, (err) => {
          console.log('error=', err);
        });
    }
  }
});