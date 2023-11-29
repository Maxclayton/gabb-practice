

<template>
    <div class="trouble-container">
        <div class="icon-container">
            <font-awesome-icon icon="fa-solid fa-comment" color="#00B1E3" style="font-size: 100px;" />
            <div class="dot-container">
                <font-awesome-icon icon="fa-solid fa-ellipsis" color="#fff" style="font-size: 75px;" />
            </div>
        </div>
        <h3>Having Trouble?</h3>
        <p>Our customer support team deeply believes in our cause and is here to help you live it. Chat with us day or night.</p>
    </div>
</template>
    
<script setup>


</script>
    
<style scoped>
h3 {
    color: #777879;
    font-size: 28px;
    font-weight: 500;
    margin: 0;
}

.icon-container {
    position: relative;
    margin-bottom: 25px;
}

p {
    color: #777879;
    width: 400px;
    text-align: center;
}

.dot-container {
    position: absolute;
    margin-top: -90px;
    margin-left: 17px;
}

.trouble-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F9F9F9;
    padding-top: 100px;
    padding-bottom: 100px;
}

@media screen and (max-width: 730px) {
 p {
    width: 300px;
 }
}

</style>
    