import 'axios-response-logger';
import axios from 'axios';
import qs from 'qs';
import DeviceInfo from 'react-native-device-info';

export default class Net {
    static BASE_URL = 'http://diting.3tichina.com:80/diting/diting'; 
    static initAxios(){
      axios.defaults.baseURL = 'http://diting.3tichina.com:80/diting/diting';    
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded,utf-8';
      axios.interceptors.request.use(function(config){
          //在发送请求之前做某事
          console.log(config.data);
          var data = qs.parse(config.data) ;
          //data.IMEI = DeviceInfo.getMACAddress ;
          data.IMEI = 'sdsds' ;
          config.data =  qs.stringify(data);
          console.log(config.data);
          return config;
        },function(error){
          //请求错误时做些事
          return Promise.reject(error);
        });
    }

    static post(url , data){
        const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url:url
        };

        axios(options)
        .then(function (response) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
      })
      .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
      });   
    }

}