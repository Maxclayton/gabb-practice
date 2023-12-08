<script>
export default {
    data() {
        return {
            navItems: [
                { text: 'Shop', link: '/item1' },
                { text: 'Why Gabb', link: '/item2' },
                { text: 'Blog', link: '/item3' },
                { text: 'Our Mission', link: '/item3' },
                { text: 'Activate', link: '/item3' }
            ]
        };

    },
};
</script>

<template>
    <div class="nav-container">
        <div class="nav-left">
            <img class="logo-img" src="../components/images/gabb-logo.png" />
        </div>
        <div class="nav-right">
            <div v-for="(item, index) in navItems" :key="index" class="nav-item">
                <a :href="item.link">{{ item.text }}</a>
            </div>
            <div class="icon-container">
                <font-awesome-icon icon="fa-solid fa-user" color="black" />
                <font-awesome-icon icon="fa-solid fa-bag-shopping" color="black" />
            </div>

        </div>
    </div>
</template>



<style scoped>
a {
    color: #313638;
    font-size: 16px;
    text-decoration: none;
    transition: .2s;
}

a:hover {
    color: #00B1E3;
}

.icon-container {
    display: flex;
    gap: 20px;
    margin-left: 25px;
}

.logo-img {
    height: 31.72px;
    width: 80px;
}

.nav-container {
    align-items: center;
    background-color: #FFF;
    display: flex;
    height: 61.72px;
    justify-content: space-around;
    width: 100vw;
}

.nav-left {
    display: flex;
    width: 25%;
}

.nav-right {
    align-items: center;
    display: flex;
    gap: 20px;
}


@media screen and (max-width: 730px) {
.nav-right{
    display: none;
}

.nav-container {
    justify-content: left;
    padding-left: 25px;
}
}

</style>
