<template>
    <div class="payment">
       <router-link to="/" class="payment__out" @click.native="changelink">
            <i class="fa fa-arrow-left"></i>
            <p>Back to delivery</p>
       </router-link>
       <div class="payment__grid">
           <div class="payment__details">
               <h1>Shipment</h1>
               <div class="payment__service">
                   <div class="payment__courier" @click="activate(1)" :class="{active: active_el == 1}">
                    <div>
                       <p>GO-SEND</p>
                       <P><b id="holder">{{this.$store.state.courierprices[0].toLocaleString()}}</b></P>
                    </div>
                   </div>
                   <div class="payment__courier"  @click="activate(2)" :class="{active: active_el == 2}">
                    <div>
                       <p>JNE</p>
                       <P><b id="holder">{{this.$store.state.courierprices[1].toLocaleString()}}</b></P>
                    </div>
                   </div>
                   <div class="payment__courier"  @click="activate(3)" :class="{active: active_el == 3}">
                    <div>
                       <p>Personal Courier</p>
                       <P><b id="holder">{{this.$store.state.courierprices[2].toLocaleString()}}</b></P>
                    </div>
                   </div>
               </div>
               <h1>Payment</h1>
               <div class="shipment__service">
                   <div class="shipment__courier" @click="payfunc(1)" :class="{activepay: active_ship == 1}">
                       <div>
                         <p>e-wallet</p>
                         <p><b id="holder">{{ewalletsaldo.toLocaleString()}} left</b></p>
                       </div>
                   </div>
                   <div class="shipment__courier" @click="payfunc(2)" :class="{activepay: active_ship == 2}">
                       <div><p><b id="holder">Bank Transfer</b></p></div>
                   </div>
                   <div class="shipment__courier" @click="payfunc(3)" :class="{activepay: active_ship == 3}">
                       <div><p><b id="holder">Virtual Account</b></p></div>
                   </div>
               </div>
           </div>
           <div class="payment__summary">
               <app-summary v-bind:btntitle="btntitle" v-bind:estimation="estimation" v-bind:linkto="linkto"></app-summary>
           </div>
       </div>
    </div>
</template>

<script src="./step-2.js">
</script>

<style scoped lang="stylus">
.payment
    padding 40px
    height 100%
    .fa
        font-size 13px
        margin-right 10px
    .payment__out
        display flex
        align-items center
        color #656567
    .payment__grid
        display grid
        height 65vh
        grid-template-columns 3fr 2fr 2fr
        grid-gap 25px
        margin-top 20px
        .payment__details
            grid-column 1/3
            h1
                padding-bottom -5px
                margin-bottom 25px
                font-weight bold
                color #ff8a00
                font-size 27px
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
        .payment__summary
            height 100%
            border-left 2px solid #fff3e5
            padding-left 20px

@media (max-width: 768px)
    .payment
        padding 25px

@media (max-width: 768px)
    .payment
        .fa
            font-size 12px

@media (max-width: 768px)
    .payment
        .payment__out
            font-size 12px

@media (max-width: 768px)
    .payment
        .payment__grid
            grid-template-columns 1fr
            grid-gap 5px
            height 100%

@media (max-width: 768px)
    .payment
        .payment__grid
            .payment__details
                h1
                    font-size 20px

.payment .payment__grid .payment__details .payment__service, .payment .payment__grid .payment__details .shipment__service
    width 85%
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-gap 20px
    margin-bottom 65px

@media (max-width: 768px)
   .payment .payment__grid .payment__details .payment__service, .payment .payment__grid .payment__details .shipment__service
    width 100%
    grid-gap 5px

.payment .payment__grid .payment__details .payment__service .payment__courier, .payment .payment__grid .payment__details .shipment__service .payment__courier, .payment .payment__grid .payment__details .shipment__service .shipment__courier, .payment .payment__grid .payment__details .payment__service .shipment__service .shipment__courier, .payment .payment__grid .payment__details .shipment__service .payment__service .shipment__courier
    height 55px
    display grid
    align-items center
    justify-items normal
    border 1px solid #999
    cursor pointer
    position relative
.payment .payment__grid .payment__details .payment__service .payment__courier, .payment .payment__grid .payment__details .shipment__service .payment__courier, .payment .payment__grid .payment__details .shipment__service .shipment__courier, .payment .payment__grid .payment__details .payment__service .shipment__service .shipment__courier, .payment .payment__grid .payment__details .shipment__service .payment__service .shipment__courier div 
    padding-left .8rem
.payment .payment__grid .payment__details .payment__service .payment__courier p, .payment .payment__grid .payment__details .shipment__service .payment__courier p, .payment .payment__grid .payment__details .shipment__service .shipment__courier p, .payment .payment__grid .payment__details .payment__service .shipment__service .shipment__courier p, .payment .payment__grid .payment__details .shipment__service .payment__service .shipment__courier p
    font-size 13px
    color : grey

@media (max-width: 768px)
   .payment .payment__grid .payment__details .payment__service .payment__courier p, .payment .payment__grid .payment__details .shipment__service .payment__courier p, .payment .payment__grid .payment__details .shipment__service .shipment__courier p, .payment .payment__grid .payment__details .payment__service .shipment__service .shipment__courier p, .payment .payment__grid .payment__details .shipment__service .payment__service .shipment__courier p
    font-size 10px

.payment .payment__grid .payment__details .payment__service .active, .payment .payment__grid .payment__details .shipment__service .active, .payment .payment__grid .payment__details .shipment__service .activepay, .payment .payment__grid .payment__details .payment__service .shipment__service .activepay, .payment .payment__grid .payment__details .shipment__service .payment__service .activepay
    border 2px solid #19c874
    background #e5fce9
.payment .payment__grid .payment__details .payment__service .payment__courier.active p, .payment .payment__grid .payment__details .shipment__service .shipment__courier.activepay p
    color black
.payment .payment__grid .payment__details .payment__service .active::after, .payment .payment__grid .payment__details .shipment__service .active::after, .payment .payment__grid .payment__details .shipment__service .activepay::after, .payment .payment__grid .payment__details .payment__service .shipment__service .activepay::after, .payment .payment__grid .payment__details .shipment__service .payment__service .activepay::after
    position absolute
    content ' '
    width 10px
    height 5px
    border-left 2px solid #19c874
    border-bottom 2px solid #19c874
    right 10px
    top 37%
    transform rotate(-45deg)
</style>
