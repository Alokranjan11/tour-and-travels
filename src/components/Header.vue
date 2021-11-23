<template>
    <div class="header">
        <div class="headerList">
            <div class="logo"><span id="t">T</span><span>RAVEL</span></div>
            <div class="nav cursor-pointer">
                <router-link to="/">
                    <span>Home</span>
                </router-link>
                <router-link to="/book">
                    <span>Book</span>
                </router-link>
                <router-link to="/packages">
                    <span>Packages</span>
                </router-link>
                <router-link to="/services">
                    <span>Services</span>
                </router-link>
                <router-link to="/gallery">
                    <span>Gallery</span>
                </router-link>
                <router-link to="/review">
                    <span>Review</span>
                </router-link>
                <router-link to="/contact">
                    <span>Contact</span>
                </router-link>
            </div>
            <div class="headerIcon">
                <i v-if="hideInputSection == true" @click="showInputSection()" class="fas fa-search"></i>
                <i v-else @click="showInputSection()" class="fas fa-times"></i>
                <i @click="showLoginPage()" class="fas fa-user"></i>
            </div>
        </div>
        <div v-if="!hideInputSection" class="headerInput">
            <input type="text" placeholder="Search here...." />
            <i class="fas fa-search cursor-pointer"></i>
        </div>
    </div>
    <UserLoginPage v-if="showHideLoginPage" class="userLogin">
        <i @click="hideLoginPage()" class="fas fa-times cursor-pointer"></i>
        <div class="userLoginList">
            <h2>LOGIN</h2>
            <input type="text" placeholder="enter your email" />
            <input type="text" placeholder="enter your password" />
            <button class="cursor-pointer">Login Now</button>
            <div class="user">
                <input type="checkbox" />
                <h4>Remember Me</h4>
            </div>
            <div class="user">
                <h4>Forget Password?</h4>
                <span class="cursor-pointer">Click Here</span>
            </div>
            <div class="user">
                <h4>Don't Have An Account</h4>
                <span class="cursor-pointer">Register Now</span>
            </div>
        </div>
    </UserLoginPage>
</template>

<script>
import UserLoginPage from "../components/UserLoginPage.vue";
export default {
    name: "Header",
    components: {
        UserLoginPage,
    },
    data() {
        return {
            hideInputSection: true,
            showHideLoginPage: false,
        };
    },
    methods: {
        showInputSection() {
            this.hideInputSection = !this.hideInputSection;
        },
        showLoginPage() {
            this.showHideLoginPage = true;
        },
        hideLoginPage() {
            this.showHideLoginPage = false;
        },
    },
};
</script>
<style scoped>
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #333;
    color: #ffff;
    padding: 5px;
}
.headerList {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.logo {
    font-size: 23px;
    font-weight: 550;
}
#t {
    color: orange;
}
.nav span {
    color: #fff;
    font-size: 15px;
    font-weight: 550;
    margin: 7px;
    text-transform: uppercase;
}
.nav span:hover {
    color: orange;
}
.headerIcon i {
    font-size: 18px;
    font-weight: 550;
    margin: 8px;
    color: #fff;
    cursor: pointer;
}
.headerIcon i:hover {
    color: orange;
}
.headerInput {
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    margin-top: 15px;
}
.headerInput input {
    width: 90%;
    padding: 8px;
    margin: 15px 5px 10px 5px;
    border-radius: 6px;
    outline: none;
    border: #333;
    font-size: 16px;
    position: relative;
}
.headerInput i {
    position: absolute;
    top: 78px;
    right: 35px;
    font-size: 20px;
}
.userLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100vh;
    position: fixed;
    top: 44px;
    left: 0px;
    right: 0px;
    z-index: 1000;
    animation-name: loginPage;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
}
@keyframes loginPage {
    from {
        height: 0px;
    }
    to {
        height: 100vh;
    }
}
.userLogin i {
    position: absolute;
    top: 50px;
    left: 1350px;
    font-size: 25px;
    color: #fff;
}
.userLoginList {
    display: flex;
    flex-direction: column;
    width: 30%;
    position: absolute;
    top: 150px;
    padding-bottom: 20px;
    background-color: #ffff;
    border-radius: 3px;
}
.userLoginList input {
    height: 20px;
    width: 87%;
    margin: 5px 18px;
    padding: 10px;
    outline: none;
    border: 1px solid rgb(189, 185, 185);
    border-radius: 4px;
}
.userLoginList button {
    height: 35px;
    width: 92%;
    margin: 5px 18px;
    background-color: orange;
    border: none;
    color: #fff;
    font-weight: 600;
}
.user {
    display: flex;
    align-items: center;
    margin: -10px 0px -15px 20px;
}
.user input {
    width: 20px;
}
.user span {
    margin-left: 8px;
    color: orange;
}
.user span:hover {
    text-decoration: underline;
}
</style>
