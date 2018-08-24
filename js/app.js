var accessKey = "1fffb24a617e42356ae40c0f9fe44b40eaaa251789c95732c36113e6484b3dec"

new Vue({
  el: '#app',
  data: {
    photos: [],
    totalPhotos: 0,
    perPage: 9,
    currentPage: 1,
  },
  methods: {
    fetchPhotos(page) {
      var options = {
        params: {
          client_id: accessKey,
          page: page,
          per_page: this.perPage
        }
      }

      this.$http.get('https://api.unsplash.com/photos', options).then(function (response) {

        this.photos = response.data
        this.totalPhotos = parseInt(response.headers.get('x-total'))
        this.currentPage = page

      }, console.log)
    },
  },
  created: function() {
    this.fetchPhotos(this.currentPage)
  }
})