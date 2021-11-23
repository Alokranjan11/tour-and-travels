<template>
    <div class="main">
        <div class="contactnav">
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
        </div>
        <div class="contactPage">
            <img src="/img/contact.webp" alt="image" />
            <div class="contactList">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Number" />
                <input type="text" placeholder="Subject" />
                <input id="messageBox" type="text" placeholder="Message" />
                <button class="cursor-pointer">Send Message</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Contact",
    data() {
        return {};
    },
};
</script>
<style scoped>
.main{
    margin-top: 80px;
    /* z-index: 997; */
}
.contactnav span {
    text-transform: uppercase;
    color: orange;
    font-size: 30px;
    font-weight: 550;
    margin-left: 4px;
    background-color: #fde68a;
    padding: 10px;
    border-radius: 3px;
}
.contactPage {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
.contactPage img {
    height: 350px;
    width: 500px;
    box-shadow: 0px 0px 15px;
}
.contactList {
    display: flex;
    flex-wrap: wrap;
    width: 38%;
    height: 300px;
    box-shadow: 6px 6px 20px 10px #e5e7eb;
    padding: 10px;
    margin-left: 20px;
}
.contactList input {
    height: 35px;
    width: 245px;
    margin-left: 10px;
    border: none;
    outline: none;
    background-color: #f3f4f6;
    padding-left: 10px;
    border-radius: 3px;
}
#messageBox {
    width: 510px;
    height: 100px;
    text-align: start;
}
.contactList button {
    height: 40px;
    width: 150px;
    margin-left: 10px;
    border: 1px solid orange;
    background-color: orange;
    color: #ffff;
    font-weight: 600;
    border-radius: 3px;
}
.contactList button:hover {
    background-color: #fde68a;
    color: orange;
}
</style>
