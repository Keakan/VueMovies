<template>
<div class="wrapper">
  <div class="releases">
    <div class="released" v-for="released in releases" :key="released.id">
      <div class="image">
        <img :src="'/images/movies/'+released.image">
        <div class="info">
        <ul class="title">
          <li><h1>{{released.name}}</h1></li>
          <li><p>(<i>{{released.year}}</i>)</p></li>
        </ul>
        <p>Star Rating: {{released.stars}}</p>
          <ul class="details">
              <li><p>{{released.rating}}</p></li>
              <span class="ghost">|</span>
              <li><p>{{released.length}}</p></li>
              <span class="ghost">|</span>
              <li><p>{{released.genre}}</p></li>
          </ul>
          <h2>{{released.info}}</h2>
        </div>
      </div>
      <div class="bottom">
        <div class="price">
          <p>Price: {{released.price}}</p>
          <button class="buy" @click="buy(released)"> Buy Now </button>
        </div>
        <div class="watchButtons">
          <button class="watch" @click="watched(released)">{{released.watched}}</button>
          <button class="watch" @click="watchList(released)">{{released.watchlist}}</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ReleasedList',
  props: {
    releases: Array
  },
  methods : {
     buy: function(released) {
          var url = released.amazonurl + '?parameter=value';
          window.open(url, 'windowname');
        },
     watched : function(released) {
        if(released.watched === "Watched")
        {
          released.watched = "Mark as Watched";
          this.$root.$data.watchedlist.splice(this.$root.$data.watchedlist.indexOf(released), 1);
        }
        else
        {
          released.watched = "Watched";
          this.$root.$data.watchedlist.push(released);
        }
     },
     watchList : function(released) {
        if(released.watchlist === "In Watchlist")
        {
          released.watchlist = "Add to Watchlist";
          this.$root.$data.watchlist.splice(this.$root.$data.watchlist.indexOf(released), 1);
        }
        else
        {
          released.watchlist = "In Watchlist";
          this.$root.$data.watchlist.push(released);
        }
     }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Verdana, Arial, sans-serif;
}

.releases {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.released {
  margin: 25px;
  margin-top: 50px;
  padding: 5px;
  width: 100%;
  flex-wrap: wrap;
  background-color: #f6f6f5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.released img {
  height: 100%;
  width: 200px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.released .image {
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}

ul > li {
    display: inline-block;
}

.info {
  padding: 10px 30px;
  width: 100%;
}

.info h1 {
  font-size: 34px;
}

.info h2 {
  font-size: 21px;
}

.info p {
  margin-left: 10px;
  margin-right: 10px;
  vertical-align: middle
}

.bottom {
  display: flex;
}

.price {
  display: flex;
  margin: auto auto auto 15px;
}
.watchButtons {
  margin: auto 5px auto auto;
}

button {
  height: 50px;
  background: #e50b14;
  color: white;
  border: none;
  outline: none;
}

.buy {
  margin-left: 10px;
}

.watch {
  margin: 10px;
  background: #000;
}









@media screen and (max-width: 481px){
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Verdana, Arial, sans-serif;
}

.releases {
  margin-top: 10vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.released {
  margin: 10vw;
  margin-top: 15vw;
  padding: 2vw;
  width: 100%;
  background-color: #f6f6f5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.released img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.released .image {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-bottom: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}

ul > li {
    display: inline-block;
}

.info {
  padding: 1vw 3vw;
  width: 100%;
}

.info h1 {
  font-size: 5vw;
}

.info h2 {
  font-size: 3vw;
}

.info p {
  vertical-align: middle
}

.bottom {
  display: flex;
}

.price {
  display: flex;
  margin: auto auto auto 15px;
}
.watchButtons {
  margin: auto 5px auto auto;
}

button {
  background: #e50b14;
  color: white;
  border: none;
  outline: none;
}

.buy {
  margin-left: 1vw;
}

.watch {
  margin: 1vw;
  background: #000;
}
p {
    display: block;
    margin-block-start: 1vw;
    margin-block-end: 1vw;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
}
</style>
