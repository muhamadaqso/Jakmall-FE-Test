<template>
  <div class="finish">
    <div class="finish__grid">
      <div class="finish__details">
        <h1>Thank You</h1>
        <h2>Order ID : {{randomize}}</h2>
        <p>Your order will be delivered {{estimate}} with {{courierchose}}</p>
        <router-link class="home" to="/" @click.native="resetstate">&larr; Go to homepage</router-link>
      </div>
      <app-summary v-bind:paytitle="paytitle" v-bind:paymethod="paymethod" v-bind:linkto="linkto" v-bind:hide="hide" v-bind:estimation="estimation"></app-summary>
    </div>
    
  </div>
      
</template>

<script src="./step-3.js">
</script>

<style scoped lang="stylus">
.finish
    padding 40px
    height 100%
    .finish__grid
        display grid
        grid-template-columns 3fr 2fr 2fr
        height 65vh
        grid-gap 25px
        margin-top 20px
        align-items center
        justify-items center
        .finish__details
            grid-column 1/3
            h1
                padding-bottom -5px
                margin-bottom 36px
                font-weight bold
                color #ff8a00
                font-size 40px
                position relative
                z-index 1
                &::after
                    position absolute
                    content ' '
                    width 8em
                    height 7px
                    background #e9e9ec
                    left 0
                    z-index -1
                    bottom 2px
            h2
                font-size 18px
                font-weight bold
                margin-bottom 1.3rem
            p
                font-size 15px
                margin-bottom 5rem
            .home
                font-size 15px
                color #616161

@media (max-width: 768px)
    .finish
        padding 25px
        height auto

@media (max-width: 768px)
    .finish
        .finish__grid
            grid-template-columns 1fr
            grid-gap 5px
            height 100%

@media (max-width: 768px)
    .finish
        .finish__grid
            .finish__details
                margin-bottom 1px
</style>