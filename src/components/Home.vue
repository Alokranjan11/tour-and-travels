<template>
    <div>
        <div class="homeList" v-for="data in displayVideo" :key="data.id">
            <video controls autoplay muted>
                <source :src="data.video" type="video/mp4" />
                <!-- Your browser does not support the video tag. -->
            </video>
            <div class="homeText">
                <h4>adventure is worthwhile</h4>
                <span id="text">Dicover New Places With Us. Adventure Awaits</span>
                <button>Discover More</button>
            </div>
            <i @click="previous()" id="backward" class="fas fa-less-than"></i>
            <i @click="next()" id="forward" class="fas fa-greater-than"></i>
        </div>
        <div class="content">
            <Book></Book>
        </div>
        <div id="content">
          <Packages></Packages>
        </div>
        <div class="content">
          <Services></Services>
        </div>
        <div class="content">
          <Gallery></Gallery>
        </div>
        <div class="content">
          <Review></Review>
        </div>
        <div class="content">
          <Contact></Contact>
        </div>
    </div>
</template>

<script>
import Book from "../components/Book.vue";
import Packages from "../components/Packages.vue";
import Services from "../components/Services.vue";
import Gallery from "../components/Gallery.vue";
import Review from "../components/Review.vue";
import Contact from "../components/Contact.vue"
export default {
    name: "Home",
    components: {
        Book,
        Packages,
        Services,
        Gallery,
        Review,
        Contact,
    },
    data() {
        return {
            videos: [
                { id: 1, video: "/video/vid-1.mp4" },
                { id: 2, video: "/video/vid-2.mp4" },
                { id: 3, video: "/video/vid-3.mp4" },
                { id: 4, video: "/video/vid-4.mp4" },
                { id: 5, video: "/video/vid-5.mp4" },
            ],
            start: 0,
            end: 1,
        };
    },
    methods: {
        previous() {
            if (this.start <= 0) {
                this.start = 0;
            } else {
                this.start = this.start - 1;
                this.end = this.end - 1;
            }
        },
        next() {
            if (this.end < this.videos.length) {
                this.start = this.start + 1;
                this.end = this.end + 1;
            }
        },
    },
    computed: {
        displayVideo() {
            return this.videos.slice(this.start, this.end);
        },
    },
};
</script>
<style scoped>
.content{
  margin-top:80px;
}
.homeList video {
    height: 100%;
    width: 100%;
}
.homeList {
    height: 100vh;
    width: 100%;
}
.homeText {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 190px;
    left: 480px;
    color: #fff;
}
.homeText h4 {
    font-size: 35px;
    text-transform: uppercase;
    text-shadow: 1px 1px rgba(0, 0, 0, .1);
}
#text {
    font-size: 16px;
    font-weight: 550;
    margin-top: -35px;
}
.homeText button {
    height: 40px;
    width: 150px;
    border: none;
    background-color: orange;
    color: #fff;
    font-size: 14px;
    font-weight: 550;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid orange;
}
.homeText button:hover{
    background-color: rgba(0, 0, 0, 0.5);
}
#backward {
    position: absolute;
    top: 360px;
    left: 20px;
    color: orange;
    font-size: 40px;
    cursor: pointer;
}
#forward {
    position: absolute;
    top: 360px;
    left: 1390px;
    color: orange;
    font-size: 40px;
    cursor: pointer;
}
</style>
