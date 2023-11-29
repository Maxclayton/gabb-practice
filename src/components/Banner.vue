<script setup>
</script>

<template>
    <div class="banner-container">
        <h1>Your Account</h1>
    </div>
</template>

<style scoped>
.banner-container {
    height: 150px;
    width: 100vw;
    background: rgb(0,177,227);
	background: linear-gradient(-45deg, #00b1e3, #0029b8, #00b1e3, #00b8b6);  
    animation: gradient 30s ease infinite;
    background-size: 400% 400%;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 200px;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


h1 {
    margin: 0;
    font-size: 36px;
    font-weight: 300;
}

@media screen and (max-width: 730px) {
   .banner-container {
    padding-left: 50px;

   }
}
</style>
