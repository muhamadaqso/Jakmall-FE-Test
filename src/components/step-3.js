import summary from './summary.vue'
export default{
  data(){
    return {
      linkto: '/',
      hide: true,
      estimation: 'Delivery Estimation',
      paymethod : this.$store.state.payment,
      paytitle: 'Payment Method',
      randomize: ''
    }
  },
  components: {
    'app-summary' : summary
  },
  mounted(){
    
    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    let rstring = randomString(5, '23456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ')
    this.randomize = rstring;
  },
  computed:{
    estimate(){
      return this.$store.state.estimate
    },
    courierchose(){
      return this.$store.state.courierchose
    }
  },
  methods: {
    resetstate(){
      this.$store.replaceState({
      btnlink: 'Continue to payment',
      linkto: '/payment',
      purchased: 10,
      isvalid: '',
      cost: 500000,
      dropFee:{
        title: '',
        cost: ''
      },
      totalcost: 500000,
      checked: false,
      addrcount:{
        used: 0,
        left: 120
      },
      valid: {
        nameval: false,
        emailval: false,
        phoneval: false,
        addressval: false,
        droname: false,
        drophone: false
      },
      notvalid: {
        nameval: false,
        emailval: false,
        phoneval: false,
        addressval: false,
        droname: false,
        drophone: false
      },
      user: {
        name: '',
        phone: '',
        email: '',
        address: '',
        droname: '',
        drophone: ''
      },
      ewalletsaldo: 1500000,
      estimate: '',
      dayestimate: ['today', '2 days', '1 day'],
      courierchose: '',
      courier: ['GO-SEND', 'JNE', 'Personal Courier'],
      courierprices: [15000, 9000, 29000],
      pricechose: '',
      payment: '',
      paymethod: ['e-Wallet', 'Bank Transfer', 'Virtual Account'],
      by: '',
      shipment: ''
      })
    }
  }
}