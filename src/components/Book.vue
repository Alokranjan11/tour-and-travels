<template>
    <div class="bookPage">
        <div class="headerNav">
            <span>b</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span id="n">n</span>
            <span>o</span>
            <span>w</span>
        </div>
        <div class="bookContent">
            <img src="/img/book.jpeg" alt="image" />
            <div class="fillDetail">
                <span>Where To</span>
                <input type="text" />
                <span>How Many</span>
                <input type="number" />
                <span>Arrivals</span>
                <input type="date" value="yyyy-mm-day" />
                <span>Leaving</span>
                <input type="date" value="yyyy-mm-day" />
                <button>Book Now</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Book",
    data() {
        return {};
    },
};
</script>
<style scoped>
.bookPage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
}
.bookContent {
    display: flex;
    margin-top: 50px;
}
.fillDetail {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    text-align: left;
    padding: 15px;
    font-weight: 550;
    box-shadow: 0px 0px 6px;
    height: 42vh;
}
.fillDetail input {
    width: 400px;
    height: 30px;
    outline: none;
    border: 1px solid rgb(226, 221, 221);
    border-radius: 3px;
    margin: 7px 0px 10px 0px;
}
.fillDetail button {
    height: 40px;
    width: 140px;
    background-color: orange;
    border: none;
    color: #fff;
    font-weight: 550;
    margin-top: 10px;
    cursor: pointer;
    border: 1px solid orange;
}
.fillDetail button:hover{
    background-color: #fde68a;
    color: orange;
}
.headerNav span {
    text-transform: uppercase;
    color: orange;
    font-size: 30px;
    font-weight: 550;
    margin-left: 4px;
    background-color: #fde68a;
    padding: 10px;
    border-radius: 3px;
}
#n {
    margin-left: 20px;
}
.bookContent {
    display: flex;
}
.bookContent img {
    height: 400px;
    width: 700px;
    box-shadow: 1px 1px 6px #333;
}
</style>
