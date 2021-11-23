<template>
    <div class="main">
        <div class="servicesNav">
            <span>s</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
        </div>
        <div class="services">
            <div class="servicesList" v-for="data in items" :key="data.id">
                <i :class="data.logo"></i>
                <h3>{{ data.name }}</h3>
                <h5>
                    You have booked your flights and hotels, now the next thing you seek to do is scour through tour
                    packages and book one.
                </h5>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Services",
    data() {
        return {
            items: [
                { id: 1, logo: "fas fa-hotel", name: "Affordable Hotels" },
                { id: 2, logo: "fas fa-utensils", name: "Food And Drinks" },
                { id: 3, logo: "fas fa-user-hard-hat", name: "Safty Guide" },
                { id: 4, logo: "fas fa-globe-asia", name: " Around The World" },
                { id: 5, logo: "fas fa-fighter-jet", name: "Fatest Travel" },
                { id: 6, logo: "fas fa-hiking", name: "Adventures" },
            ],
        };
    },
};
</script>
<style scoped>
.main{
    margin-top: 80px;
}
.servicesNav span {
    text-transform: uppercase;
    color: orange;
    font-size: 30px;
    font-weight: 550;
    margin-left: 4px;
    background-color: #fde68a;
    padding: 10px;
    border-radius: 3px;
}
.services{
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 40px;

}
.servicesList{
height: 180px;
    width: 22%;
    padding: 10px;
    margin: 15px;
}
.servicesList:hover{
    box-shadow: 6px 6px 20px 5px #e5e7eb;

}
.servicesList i{
    font-size: 35px;
    color: orange;
}
</style>
