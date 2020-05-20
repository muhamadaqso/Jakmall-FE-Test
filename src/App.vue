<template>
<div class="root">
    <div class="root__container">
      <ul class="root__breadcrumbs">
        <li><p :class="{activelink: activelink}">1</p>Delivery</li>
        <span></span>
        <li><p :class="{activelink2: activelink2}">2</p>Payment</li>
        <span></span>
        <li><p :class="{activelink3: activelink3}">3</p>Finish</li>
      </ul>
      <div class="root__content">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      whereami: this.$route.path,
      activelink: false,
      activelink2: false,
      activelink3: false
    }
  },
  watch: {
    '$route'(to, from){
      if(this.$route.path == '/'){
      this.activelink = true
      this.activelink2 = false
      this.activelink3 = false
      this.$store.state.totalcost = parseInt(this.$store.state.cost + this.$store.state.dropFee.cost);
      this.$store.state.courierchose = ''
      this.$store.state.shipment = ''
      this.$store.state.by = ''
      this.$store.state.pricechose = ''
      this.$store.state.estimate = ''
    }else if(this.$route.path == '/payment'){
      this.$store.state.totalcost = parseInt(this.$store.state.cost + this.$store.state.dropFee.cost);
      this.activelink2 = true
      this.activelink3 = false
      this.$store.state.estimate = 'today'
    }else if(this.$route.path == '/completed'){
      this.activelink = true
      this.activelink2 = true
      this.activelink3 = true
    }
    }
  },
  mounted(){
    //console.log(this.whereami, typeof this.whereami)
    if(this.whereami == '/'){
      this.activelink = true
    }else if(this.whereami == '/payment'){
      this.activelink = true
      this.activelink2 = true
    }else if(this.whereami == '/completed'){
      this.activelink = true
      this.activelink2 = true
      this.activelink3 = true
    }
  },
}
</script>

<style lang="stylus">
.root
    width 100%
    height 100vh
    background #fffae6
    .root__container
        width 90%
        position relative
        top 50%
        left 50%
        transform translate(-50%, -50%)
        .root__breadcrumbs
            position relative
            transform translateY(50%)
            width 45%
            background #fffae6
            padding 0 30px 20px 30px
            border-radius 30px
            margin 0 auto
            display flex
            justify-content space-between
            align-items center
            li
                display flex
                align-items center
                color #ff8a00
                p
                    background #ffdfba
                    width 25px
                    height 25px
                    border-radius 50%
                    text-align center
                    padding 3px
                    margin-right 5px
                    color #ff8a00
            span
                width 8px
                height 8px
                border-right 2px solid #ff8a00
                border-bottom 2px solid #ff8a00
                transform rotate(-45deg)
        .root__content
            width 100%
            height 80vh
            background #fff
            box-shadow 0px 7px 30px #fbebd6
            border-radius 5px

@media (max-width: 768px)
    .root
        position relative
        height auto

@media (max-width: 768px)
    .root
        .root__container
            width 95%
            position static
            top 0
            left 0
            transform none
            margin 0 auto

@media (max-width: 768px)
    .root
        .root__container
            .root__breadcrumbs
                width 95%
                font-size 12px
                padding 5px

@media (max-width: 768px)
    .root
        .root__container
            .root__breadcrumbs
                li
                    p
                        width 20px
                        height 20px
                        margin-right 2px

.root .root__container .root__breadcrumbs li .activelink, .root .root__container .root__breadcrumbs li .activelink2, .root .root__container .root__breadcrumbs li .activelink3
    background #ff8a00
    color #fff

@media (max-width: 768px)
    .root
        .root__container
            .root__content
                height auto
</style>

