<template>
  <div class="main">
      <div class="galleryNav">
          <span>g</span>
          <span>a</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>r</span>
          <span>y</span>
      </div>
      <div class="gallery">
          <div class="gallerylist" v-for="data in photos" :key="data.id">
              <img :src="data.image" alt="image" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:"Gallery",
data(){
    return{
        photos:[
            {id:1,image:"/img/g-1.jpg"},
            {id:2,image:"/img/g-2.jpg"},
            {id:3,image:"/img/taj-mahal.jpeg"},
            {id:4,image:"/img/g-4.jpg"},
            {id:5,image:"/img/g-5.jpg"},
            {id:6,image:"/img/gallery.jpeg"},
            {id:7,image:"/img/g-7.jpg"},
            {id:8,image:"/img/g-8.jpg"},
            {id:9,image:"/img/g-9.jpg"},

        ]
    }
}
}
</script>
<style scoped>
.main{
    margin-top: 80px;
}
.galleryNav span{
      text-transform: uppercase;
    color: orange;
    font-size: 30px;
    font-weight: 550;
    margin-left: 4px;
    background-color: #fde68a;
    padding: 10px;
    border-radius: 3px;
}
.gallery{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
}
.gallerylist{
    width: 24%;
    padding: 10px;
    margin:10px;
    /* border: 2px solid black; */
    box-shadow: 6px 6px 20px #e5e7eb;

}
.gallerylist img{
    max-height: 230px;
    max-width: 345px;
}
</style>