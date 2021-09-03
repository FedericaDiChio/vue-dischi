console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: [],
  },
  methods: {
  },
  computed: {
    sortedAlbums(){
      return this.albums.sort((a, b) => a.year - b.year);
      }
    },
    created(){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
        // const response = res.data.response;
        // console.log(response)
        this.albums = res.data.response;
      })
    }
  });
  
