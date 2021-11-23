<template>
    <div class="main">
        <div class="reviewNav">
            <span>r</span>
            <span>e</span>
            <span>v</span>
            <span>i</span>
            <span>e</span>
            <span>w</span>
        </div>
        <div class="review">
            <div class="reviewList cursor-pointer" v-for="data in reviewList" :key="data.id">
                <img :src="data.image" alt="image" />
                <h3 class="reviewNmae">{{ data.name }}</h3>
                <h5>Really good travel writing inspires us to get up, go out and see the world.</h5>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i id="ratingstar" class="far fa-star"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Review",
    data() {
        return {
            reviewList: [
                { id: 1, image: "/img/pic1.png", name: "Adomas" },
                { id: 2, image: "/img/pic2.png", name: "Dilshad" },
                { id: 3, image: "/img/pic3.png", name: "Ebrima" },
                { id: 4, image: "/img/pic4.png", name: "Gracian" },
                { id: 5, image: "/img/pic5.jpeg", name: "Brien" },
                { id: 6, image: "/img/pic6.jpeg", name: "Proinsias" },
                { id: 7, image: "/img/pic7.jpeg", name: "Bacchus" },
            ],
        };
    },
};
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
}
.reviewNav span {
    text-transform: uppercase;
    color: orange;
    font-size: 30px;
    font-weight: 550;
    margin-left: 4px;
    background-color: #fde68a;
    padding: 10px;
    border-radius: 3px;
}
.review {
    display: flex;
    align-items: center;
    margin-top: 40px;
    box-shadow: 6px 6px 20px 10px #e5e7eb;
    width: 58%;
    height: 340px;
    overflow: scroll;
}
.review::-webkit-scrollbar{
    width: 1px;
}
.reviewList {
    display: flex;
    flex-direction: column;
    width: 160px;
    margin: 10px;
    padding: 15px;
    box-shadow: 6px 6px 20px 10px #e5e7eb;
}
.reviewList img {
    height: 150px;
    max-width: 170px;
}
.rating {
    display: flex;
    justify-content: center;
    margin-top: -10px;
    color: orange;
}
#ratingstar {
    color: orange;
}
.reviewNmae {
    margin-top: 10px;
}
.reviewList h5 {
    margin-top: -9px;
}
</style>
