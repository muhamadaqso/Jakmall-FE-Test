import summary from './summary.vue'
export default {
  data(){
    return {
      btntitle: 'Continue to payment',
      linkto: '/payment',
      show: false
    }
  },
  components: {
    'app-summary': summary,
  },
  computed: {
    checked(){
      return this.$store.state.checked;
    },
    dropFee(){
      return this.$store.state.dropFee;
    },
    cost(){
      return this.$store.state.cost;
    },
    totalcost(){
      return this.$store.state.totalcost;
    },
    user(){
      return this.$store.state.user;
    },
    valid(){
      return this.$store.state.valid;
    },
    notvalid(){
      return this.$store.state.notvalid;
    },
    addrcount(){
      return this.$store.state.addrcount;
    },
    purchased(){
      return this.$store.state.purchased;
    },
    btnlink(){
      return this.$store.state.btnlink;
    },
    isvalid(){
      return this.$store.state.isvalid;
    }
    
  },
  
  methods: {
    isChecked(){
      this.$store.state.checked = this.$store.state.checked ? false: true
      if(this.checked){
        this.$store.state.dropFee.title = 'Dropshipping Fee';
        this.$store.state.dropFee.cost = 5900
        if(this.user.droname == '' || this.user.drophone == ''){
          this.$store.state.isvalid = ''
        }
        
      }else{
        this.$store.state.dropFee.title = '';
        this.$store.state.dropFee.cost = ''
        this.$store.state.isvalid = 'click'
      }
     
     
      this.$store.state.totalcost = parseInt(this.cost + this.dropFee.cost);
    },
    validate(){
      
      //validate user email || !emailIsValid
      const emailRegex = /^[a-z]+((_|\.|-)?[a-z\d]+)*@[a-z\d]+((-)?[a-z\d]+)*\.[a-z]{2,8}(\.[a-z]{2,8})?$/;
      let emailIsValid = emailRegex.test(this.user.email)
      if(this.user.email == '' || !emailIsValid){
        this.notvalid.emailval = true;
        this.valid.emailval= false
      }else{
            localStorage.setItem('storedData', this.user)
        this.notvalid.emailval = false;
        this.valid.emailval = true
      }


      //validate user phone || !phoneIsValid
      const phoneRegex = /^(0|\+62|\(\d{3,4}\))[\d\-]{5,19}$/;
      let phoneIsValid = phoneRegex.test(this.user.phone);
      if(this.user.phone == '' || !phoneIsValid){
        this.notvalid.phoneval = true;
        this.valid.phoneval = false;
      }else{
            localStorage.setItem('storedData', this.user)
        this.notvalid.phoneval = false;
        this.valid.phoneval = true;
      }

      //validate address this.user.address.length > 120 || 
      if(this.user.address == '' || this.user.address.length > 120){
        this.notvalid.addressval = true;
        this.valid.addressval = false;
      }else{
            localStorage.setItem('storedData', this.user)
        this.notvalid.addressval = false;
        this.valid.addressval = true;
      }
      this.addrcount.used = this.user.address.length;

     
      //validate dropship name
      if(this.user.droname == ''){
        this.valid.droname = false;
        this.notvalid.droname = true
      }else{
            localStorage.setItem('storedData', this.user)
        this.valid.droname = true;
        this.notvalid.droname = false
      }
      //validate dropship phone || !isValidPhoneDrop
      let isValidPhoneDrop = phoneRegex.test(this.user.drophone);
      if(this.user.drophone =='' || !isValidPhoneDrop){
        this.valid.drophone = false;
        this.notvalid.drophone = true
      }else{
            localStorage.setItem('storedData', this.user)
        this.valid.drophone = true;
        this.notvalid.drophone = false
      }

       if(!emailIsValid || !phoneIsValid || this.user.address.length > 120 || this.user.address == ''){
        this.$store.state.isvalid = ''
      }else if(this.checked){
        //console.log(12)
        if(this.user.droname == '' || !isValidPhoneDrop){
          this.$store.state.isvalid = ''
        }else{
          this.$store.state.isvalid = 'click'
        }
      }else if(this.checked == false){
        this.$store.state.isvalid = 'click'
      }
    },
    mounted(){
        this.$store.state.user = localStorage.getItem("storedData");
    }
  } 
}