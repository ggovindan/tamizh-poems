// app.js

new Vue({
  el: "#mdEditor",

  data: {
          content: '',
          files: [],
        },
  mounted: function() {
    this.defaultPage();
  },

  methods: {
    defaultPage: function() {
      this.$http.get('/defaultPage')
        .then((result) => {
          this.$set(this, 'content', result.data.html);
          this.$set(this, 'files', result.data.files);
          this.files.forEach( (data, index, arr) => {
            arr[index] = data.split('.md')[0];
          });
          console.log(this.files);
          console.log('result=', result);
        }, (err) => {
          console.log('error=', err);
        });
    }
  }
});