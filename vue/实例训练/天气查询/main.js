  var app = new Vue({
    el:"#app",
    data:{
        city:'',
        weatherList:[]
    },
    methods: {
        searchWeather:function(){
          
           var that = this;
           axios.get('http://ajax-api.itheima.net/api/weather?city='+this.city)
           .then(function(response){
               console.log(response);
               console.log(response.data.data.data);
               that.weatherList = response.data.data.data
           })
           .catch(function(err){})
        },
        changeCity:function(city){
            this.city=city;
            this.searchWeather();
        }
    },
})