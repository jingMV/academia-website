<template>
    <div id="about">
        <div class="wrapper">
            <h2>About</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s, when an unknown printer took a galley 
of type and scrambled it to make a type specimen book. It has 
survived not only five centuries, but also the leap into electronic 
typesetting, remaining essentially unchanged. It was popularised 
in the 1960s with the release of Letraset sheets containing Lorem 
Ipsum passages, and more recently with desktop publishing software
 like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s, when an unknown printer took a galley 
of type and scrambled it to make a type specimen book. It has 
survived not only five centuries, but also the leap into electronic 
typesetting, remaining essentially unchanged. It was popularised 
in the 1960s with the release of Letraset sheets containing Lorem 
Ipsum passages, and more recently with desktop publishing software
 like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'about'
}
</script>
<style scoped>
.wrapper h2 {
font-size: 14px;
margin: 12px;
}
.wrapper p {
    font-size: 10px;
    text-align: left;
}
.wrapper {
    text-align: center;
}
#about {
    padding: 30px 35px;
}
@media only screen and (min-width: 500px) {
.wrapper h2 {
font-size: 23px;
}
.wrapper p {
    font-size: 12px;
}
}
@media only screen and (min-width: 700px) {
    #about {
        padding: 30px 80px;
    }
}
@media only screen and (min-width: 960px) {
    #about p {
        width: 500px;
        margin: 0 auto;
        padding: 10px;
    }
    #about {
        padding: 50px 0px;
    }
}
@media only screen and (min-width: 1200px) {
#about {
    padding: 0;
    margin: 0px;
}
.wrapper {
    text-align: left;
}
.wrapper p {
    font-size: 13px;
}
}
</style>
