<template>
    <div class="main">
        <div class="footerNav">
            <div class="imageList cursor-pointer" v-for="data in photos" :key="data.id">
                <img :src="data.image" alt="image" />
            </div>
        </div>
        <div class="footer">
            <div class="section">
                <h2>About us</h2>
                <h5>
                     Tourism also involves a journey and services like transport, accommodation,
                    catering, and viewing, etc.There is a movement of tourists from the place of origin to the
                    destination. 
                </h5>
            </div>
            <div class="section">
                <h2>Branch Locations</h2>
                <h5>India</h5>
                <h5>USA</h5>
                <h5>Japan</h5>
                <h5>France</h5>
                <h5>Dubai</h5>
            </div>
            <div class="section">
                <h2>Quick Links</h2>
                <h5>Home</h5>
                <h5>Book</h5>
                <h5>Packages</h5>
                <h5>Services</h5>
                <h5>Gallery</h5>
                <h5>Review</h5>
                <h5>Contact</h5>
            </div>
            <div class="section">
                <h2>Follow Us</h2>
                <h5>Facebook</h5>
                <h5>Instagram</h5>
                <h5>Twitter</h5>
                <h5>Linkedin</h5>
            </div>
        </div>
        <div class="created">
            <h4>Created By</h4>
            <h4 id="name"> Mr. Alok Ranjan</h4>
            <h4>All Rights Reserved!</h4>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {
            photos: [
                { id: 1, image: "/img/1.jpg" },
                { id: 2, image: "/img/2.jpg" },
                { id: 3, image: "/img/3.jpg" },
                { id: 4, image: "/img/4.jpg" },
                { id: 5, image: "/img/5.jpg" },
                { id: 6, image: "/img/6.jpg" },
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
    margin-top: 60px;
}
.footerNav {
    display: flex;
    align-items: center;
    width: 59%;
    height: 160px;
    overflow: scroll;
}
.footerNav::-webkit-scrollbar{
    width: 1px;
}
.imageList {
    display: flex;
    flex-direction: column;
    width: 160px;
    margin: 10px;
    padding: 15px;
    box-shadow: 3px 3px 20px 5px #e5e7eb;
}
.footer {
    display: flex;
    justify-content: center;
    background-color: #333;
    color: #D1D5DB;
    width: 100%;
    /* padding: 10px; */
}
.section{
    width: 20%;
    /* border: 2px solid #fff; */
    text-align: left;
    padding-left: 10px;
}
.section h2{
    margin-bottom: 30px;
}
.section h5{
    margin-top: -15px;
}
.created{
    display: flex;
    justify-content: center;
    background-color: #333;
    width: 100%;
    border-top:1px solid #9CA3AF;
    color: #D1D5DB;
}
#name{
    color: orange;
    margin: 22px 7px 0px 7px ;
    height: 18px;
    text-transform: uppercase;
}
</style>
