$(function(){

  //start 문서준비
  navMenu();
  //end 문서준비

  // start 버거메뉴이벤트
  $('#open_nav_btn').click(function(){
    $('.nav>ul').css('display','block');
  });
  $('#close_nav_btn').click(function(){
    $('.nav>ul').css('display','none');
  });
  // end 버거메뉴이벤트

  // start 리사이즈이벤트
  $(window).resize(function(){
    navMenu();
  });
  //end 리사이즈이벤트
  
  //start 네비게이션변환함수
  function navMenu(){
    var winWidth=$(window).width();
    if(winWidth>=768){
      $('.nav>ul').css('display','flex');
      $('#open_nav_btn').css('display','none');
    }else{
      $('.nav>ul').css('display','none');
      $('#open_nav_btn').css('display','block');
    }
  }
  //end 네비게이션변환함수
  
  // start 스크롤이벤트
    $(window).scroll(function(){
      var scrTop=$(this).scrollTop();
      if(scrTop<50){
        $('.header').css({
          backgroundColor:'white',
          height:'100px'
        });
      }else if(scrTop>=50 && scrTop<=400){
        $('.header').css({
          backgroundColor:'red',
          height:'80px'
        });
      }else if(scrTop>=401 && scrTop<=750){
        $('.header').css({
          backgroundColor:'green',
          height:'80px'
        });
      }else if(scrTop>=751){
        $('.header').css({
            backgroundColor:'blue',
            height:'80px'
          });
      }
    });
  // end 스크롤이벤트
  // var tmp=$('#skill');
  console.log($('#skill').offset().top);
})
