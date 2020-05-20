import summary from './summary.vue'
export default {
    components: {
        'app-summary': summary
    },
    data(){
        return {
           active_el: 1,
           active_ship: 1,
           btntitle:  'Pay with e-Wallet',
           changebtn: ['Pay with e-Wallet', 'Pay with Bank Transfer', 'Pay with Virtual Account'],
           estimation: 'Delivery estimation',
           totalall: this.$store.state.totalcost,
           linkto: '/completed'
        }
    },
    computed: {
        ewalletsaldo(){
          return this.$store.state.ewalletsaldo
        }
    },
    methods: {
        activate(el){
            this.active_el = el;
            this.$store.state.estimate = this.$store.state.dayestimate[el-1];
            this.$store.state.courierchose = this.$store.state.courier[el-1];
            this.$store.state.pricechose = this.$store.state.courierprices[el-1];
           
        },
        payfunc(el){
            this.active_ship = el;
            this.btntitle = this.changebtn[el-1]
            this.$store.state.payment = this.$store.state.paymethod[el-1]
        },
        changelink(){
            //console.log(this.$store.state.linkto = '/payment')
            this.$store.state.estimate = '';
            this.$store.state.courierchose = '';
            this.$store.state.by = ''
            this.$store.state.shipment = ''
            this.$store.state.totalcost -= this.$store.state.pricechose
            this.$store.state.pricechose = ''
            
            this.$store.state.linkto = '/payment';
            this.$store.state.btnlink = 'Continue to payment';
        },
    },
    beforeUpdate(){
      this.$store.state.totalcost = this.totalall + this.$store.state.pricechose
    },
    mounted(){
       this.$store.state.pricechose = 15000
       this.$store.state.totalcost = this.totalall + this.$store.state.pricechose
       this.$store.state.courierchose = 'GO-SEND'
       this.$store.state.by = 'by'
       this.$store.state.shipment = 'shipment'
       this.$store.state.payment = 'e-Wallet'
    }
    
    
}