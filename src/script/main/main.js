import { DataJson, DataJson2 } from '../data/data-json.js';
import '../component/mainCmp/cov-stat.js';
import $ from 'jquery';

const main = () => {
    const statItem = document.querySelector("cov-stat");

    const onLoaded = async() => {
      try{
        const result = await DataJson.getData();
        console.log(result);
        renderResult(result);
      }catch(message){
        console.log(message);;
      }
    };

    const onLoaded2 = async() => {
      try{
        const result = await DataJson2.getData();
        console.log(result);
        renderResult2(result);
      }catch(message){
        console.log(message);;
      }
    };

    const renderResult = results => {
        statItem.data = results;
    };
    const renderResult2 = results => {
        statItem.data2 = results;
    };

    $('.back-to-top').hide();
    $(window).on('scroll', function(e){
      const ini = $(this);
      if(ini.scrollTop() > 800){
        $('.back-to-top').fadeIn('slow');
      }else{
        $('.back-to-top').fadeOut('fast');
      }
      if (ini.scrollTop() > ($(document).height()-1000)) {
        $('.back-to-top').addClass('arrow-color');
      }else{
        $('.back-to-top').removeClass('arrow-color');
      }
    });

    $('.back-to-top').on('click', function(){
      $('body,html').animate({scrollTop: 0}, 1000);
    });

    onLoaded();
    onLoaded2();
};

export default main;
