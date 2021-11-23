<template>
    <div class="main">
        <div class="packagesNav">
            <span>p</span>
            <span>a</span>
            <span>c</span>
            <span>k</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
            <span>s</span>
        </div>
        <div class="packages">
            <div class="packagesList" v-for="data in place" :key="data.id">
                <img :src="data.image" alt="image" />
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3>{{ data.name }}</h3>
                </div>
                <p>
                    Mumbai is a city that has been inspiration for writing many beautiful stories and making several
                    movies.
                </p>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i id="ratingstar" class="far fa-star"></i>
                </div>
                <div class="rent">
                    <h4>{{ data.offRent }}</h4>
                    <p id="offRent">{{ data.rent }}</p>
                </div>
                <button>Book Now</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Packages",
    data() {
        return {
            place: [
                { id: 1, image: "/img/p-1.jpg", name: "Mumbai", offRent: "$220.00", rent: "$120.00" },
                { id: 2, image: "/img/p-2.jpg", name: "Hawaii", offRent: "$100.00", rent: "$20.00" },
                { id: 3, image: "/img/sydeny.jpeg", name: "Sydney", offRent: "$150.00", rent: "$50.00" },
                { id: 4, image: "/img/p-4.jpg", name: "Paris", offRent: "$120.00", rent: "$80.00" },
                { id: 5, image: "/img/p-5.jpg", name: "Tokyo", offRent: "$90.00", rent: "$40.00" },
                { id: 6, image: "/img/p-6.jpg", name: "Egypt", offRent: "$1100.00", rent: "$10.00" },
            ],
        };
    },
};
</script>
<style scoped>
.main{
    margin-top: 80px;
    /* position: relative; */
}
.packagesNav span {
    text-transform: uppercase;
    color: orange;
    font-size: 30px;
    font-weight: 550;
    margin-left: 4px;
    background-color: #fde68a;
    padding: 10px;
    border-radius: 3px;
}
.packages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
}
.packagesList img {
    max-height: 255px;
    max-width: 375px;
}
.packagesList {
    box-shadow: 4px 4px 20px 2px #e5e7eb;

    width: 26%;
    margin: 10px;
}
.location {
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.location i {
    color: orange;
    font-size: 23px;
    margin-right: 7px;
}
.rating {
    display: flex;
    margin: 10px;
    color: orange;
}
#ratingstar {
    color: orange;
}
.rent {
    display: flex;
    align-items: center;
    margin-left: 10px;
}
#offRent {
    margin-left: 7px;
    text-decoration: line-through;
}
.packagesList button {
    align-items: flex-start;
    height: 40px;
    width: 130px;
    background-color: orange;
    border: 1px solid orange;
    border-radius: 3px;
    color: #ffff;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: -233px;
    cursor: pointer;
}
.packagesList button:hover {
    background-color: #fde68a;
    color: orange;
}
</style>
