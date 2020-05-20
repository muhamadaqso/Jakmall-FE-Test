<template>
  <div class="summary">
      <div class="summary__purchased">
        <h1>Summary</h1>
        <p>{{purchased}} items purchased</p>
      </div>
         <div class="summary__estimation">
             <p>{{estimation}}</p>
             <h2>{{estimate}} {{by}} {{courierchose}}</h2>
         </div>
         <div class="summary__payment">
            <p>{{paytitle}}</p>
            <h2>{{paymethod}}</h2>
         </div>
      <div class="summary__total">
        <div class="summary__cost">
            <p>Cost of goods</p>
            <p>{{cost}}</p>
            <p>{{dropTitle}}</p>
            <p>{{dropFee}}</p>
            <p><b id="holder">{{courierchose}}</b> {{shipment}}</p>
            <p>{{pricechose}}</p>
            <h1>Total</h1>
            <h1>{{totalcomp}}</h1>
        </div>
        <router-link v-bind:class="{hide: hide}" v-bind:to="linkto" v-bind:event="isvalid"><button id="btnSum" @click="changebtn">{{btntitle}}</button></router-link>
        <!-- The Modal -->
        <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <div style="    padding-top: 4rem;text-align:center">
                <i style="font-size: 136px;
                color: #d4d405" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                 <p>Please Fill Form</p>
                 <button id="okModal">OK</button>
            </div>
        </div>

        </div>

      </div>
  </div>
</template>

<script>
export default {
    props:{
        btntitle: {
            type: String
        },
        estimation: {
            type: String
        },
        linkto: {
            type: String
        },
        hide: {
            type: Boolean
        },
        paytitle: {
            type: String
        },
        paymethod: {
            type: String
        }
    },
    computed: {
        by(){
            return this.$store.state.by
        },
        shipment(){
            return this.$store.state.shipment
        },
        estimate(){
            return this.$store.state.estimate
        },
        courierchose(){
            return this.$store.state.courierchose
        },
        pricechose(){
            if(this.$store.state.pricechose > 0){
                return this.$store.state.pricechose.toLocaleString()
            }
        },
        purchased(){
            return this.$store.state.purchased;
        },
        cost(){
            return this.$store.state.cost.toLocaleString()
        },
        dropTitle(){
            return this.$store.state.dropFee.title
        },
        dropFee(){
            return this.$store.state.dropFee.cost.toLocaleString()
        },
        totalcomp(){
            return this.$store.state.totalcost.toLocaleString()
        },
        link(){
            return this.$store.state.btnlink;
        },
        isvalid(){
            return this.$store.state.isvalid;
        }
    },

    methods:{
        changebtn(){
            if(this.isvalid == 'click'){
                this.$store.state.btnlink = 'Pay with e-Wallet'
                this.$store.state.linkto = '/completed'
            }else if(this.isvalid == ''){
                    var btn = document.getElementById("btnSum");
        var modal = document.getElementById("myModal");
                btn.onclick = function() {
                   modal.style.display = "block";
                }
            }
            
        }
        
    },
    mounted() {
        var modal = document.getElementById("myModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        var Okmodal = document.getElementById("okModal");

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        Okmodal.onclick = function() {
        modal.style.display = "none";
        }


        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    
}
</script>
<style scoped>
#okModal {
    margin-top: 2rem;
}
.modal {
  display: none; 
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(181, 181, 181, 0.12); 
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #d8d8d8;
    width: 40%;
    border-radius: 1rem;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
<style scoped lang="stylus">
 .summary
    display flex
    flex-direction column
    height 100%
    justify-content space-between
    .summary__purchased
        h1
            font-size 27px
            font-family: 'Montserrat ExtraBold'
            color #ff8a00
        p
            font-size 14px
            color #656567
            margin-top: 8px
    .summary__estimation
        h2
            font-size 13px
            font-weight bold
            color #19d875
    .summary__payment
        h2
            font-size 14px
            font-weight bold
            color #19d875
    .summary__total
        width 100%
        align-self end
        .hide
            display none
        .summary__cost
            display grid
            grid-template-columns 3fr 1fr
            margin-bottom 10px
            p
                font-size 12px
                margin-bottom 5px
                color #656567
                &:nth-child(even)
                    justify-self end
                    font-weight bold
                b#holder
                            font-weight 700
            h1
                font-size 18px
                margin-top 20px
                font-weight bold
                color #ff8a00
                &:nth-child(even)
                    justify-self end
        button
            width 100%
            height 50px
            border none
            background #ff8a00
            color #fff
            border-radius 3px
            cursor pointer
            outline none

@media (max-width: 768px)
    .summary
        .summary__purchased
            margin-bottom 20px

@media (max-width: 768px)
    .summary
        .summary__purchased
            h1
                font-size 15px

@media (max-width: 768px)
    .summary
        .summary__purchased
            p
                font-size 12px

@media (max-width: 768px)
    .summary
        .summary__total
            .summary__cost
                margin-top 20px
</style>
