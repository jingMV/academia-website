<template>
  <div id="section">
    <div class="wrapper">
      <h1>Academia</h1>
      <h4>Find your home in Asia</h4>
      <p>
        A home, or domicile, is a living space used as a 
permanent or semi-permanent residence for 
an individual, family, household or several 
families in a tribe. It is often a house, apartment,
or other building, or alternatively a mobile home,
houseboat, yurt or any other portable shelter.
      </p>
      <button>EXPLORE</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'sectionCom'
};
</script>
<style scoped>
#section {
  background-image: url('~@/assets/home-phone-background.png');
  background-size: cover;
  height: 100vh;
  text-align: center;
  padding-top: 100px;
}
.wrapper {
  padding: 0px 15px;
}
.wrapper h1 {
  font-size: 55px;
  font-family: 'montserrat'
}
.wrapper h4 {
  font-size: 15px;
  line-height: 8px;
}
.wrapper p {
  font-size: 13px;
  margin: 40px 0px 90px 0px;
  text-align: left;
}
.wrapper button {
  font-weight: bold;
  border-radius: 20px;
  padding: 9px 16px;
  background-color: #fff;

}
@media only screen and (min-width: 375px) {
  .wrapper p {
   margin: 70px 30px 90px 30px; 
  }
}
@media only screen and (min-width: 500px) {
  #section {
  background-image: url('~@/assets/home-tab-background.png');
  background-size: cover;
  height: 100vh;
  text-align: left;
  padding: 90px 50px;
}
.wrapper h1 {
  font-size: 70px;
}
.wrapper h4 {
  line-height: 0px;
}
.wrapper p {
   margin: 70px 0px 90px 0px; 
   width: 300px;
}
.wrapper button {
  margin-left: 50px;
}
}
@media only screen and (min-width: 700px) {
    #section {
  padding: 120px 50px;
  background-position-y: -120px;
}
  .wrapper h1 {
  font-size: 90px;
}
.wrapper h4 {
  font-size: 15px;
}
.wrapper p {
  width: 300px;
}
.wrapper button {
  margin-left: 100px;
}
}
@media only screen and (min-width: 960px) {
    #section {
  background-image: url('~@/assets/home-desktop-background.png');
  background-position-y: inherit;
  background-size: cover;

}
.wrapper button {
  color: #475349;
  border: 1px solid #475349;
  margin-left: 120px;
}
.wrapper button:hover {
color: #29322B;
border: 1px solid #29322b;
}
}
@media only screen and (min-width: 1200px) {
    .wrapper h1 {
  font-size: 7vw;
}
.wrapper h4 {
  font-size: 1vw;
  line-height: -10vw;
}
.wrapper p {
  width: 39%;
  font-size: 0.8vw;
}
.wrapper button {
  color: #475349;
  border: 1px solid #475349;
  margin: 1vh 10vw;
  font-size: 1vw;
}
}
@media only screen and (min-width: 1250px) {
  #section {
    padding: 20vmin;
  }
}
</style>