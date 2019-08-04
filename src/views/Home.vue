<template>
  <div>
    <sectionCom />
    <div class="about-contact">
      <div class="wrapper">
     <contactCom />
     <about />
     </div>
    </div>
    <footerCom />
  </div>
</template>
<script>
import sectionCom from '../components/sectionCom.vue'
import contactCom from '../components/contactCom.vue'
import about from '../components/about.vue'
import footerCom from '../components/footerCom.vue'
export default {
  name: 'Home',
  components: {
    sectionCom,
    contactCom,
    about,
    footerCom,
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1200px) {
  .wrapper {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    padding: 70px 170px 0px;
  }
  .about-contact {
    background-image: url('~@/assets/about-background.png');
    background-size: cover;
    height: 100vh;
  }
}
@media only screen and (min-width: 1250px) {
  .wrapper {
    max-width: 1250px;
    width: 98%;
    margin: 0 auto;
  }
}
</style>


