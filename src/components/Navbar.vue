<template>
    <ul class="nav">

        <div class="container navbar">
        <img class="navlogo" src="../assets/logo1.svg">
        <span class="itemslist">
        <li class="items"> <router-link to="/">Home </router-link></li>
        <li class="items"><router-link to="/services">Services</router-link> </li>
        <li class="items"><router-link to="/projects">Projects</router-link> </li>
        <li class="items"> <router-link to="/resources">Resources</router-link> </li>
        <li class="items"> <router-link to="/aboutus">About us</router-link> </li>
        <li class="items">Contact Us</li>
        </span>

           <!-- <router-link to="/">Home</router-link> |
      <router-link to="/services">About</router-link> -->
</div>
<!-- <router-view></router-view> -->

        </ul>
</template>

<script>
// import './assets/msegsstyles.scss'

export default {
    
}
</script>

<style lang="scss" >
@import "../assets/msegsstyles.scss";
.nav{
        background-color:$primarycolor;
    
    }



.navbar{
    display: flex;
    flex-direction: row;
    list-style-type: none;
    background-color:$primarycolor;
    justify-content: space-between;
    align-items: center;


}

.navlogo{
width: 100px;
  height: 30px;
  margin:16px 16px 16px 0;
  align-self: auto;
  
    }

.itemslist{
    display: inline-flex;
    align-items: flex-end;
    }


.items{
  
//   width: 50px;
//   height: 16.5px;
  margin: 16px 16px 16px 10.3px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
</style>