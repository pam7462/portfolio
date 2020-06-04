$(function(){
  
  var welcomeTop;
  var iamTop;
  var skillTop;
  var portfolioTop;
  var telTop;

  //start 문서준비
  navMenu();
  sectionTop();
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
    sectionTop();
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
      if(scrTop<=50){
        $('.header').css({
          backgroundColor:'#ffffff',
          height:'100px'
        });
      }else if(scrTop>50 && scrTop<skillTop){
        $('.header').css({
          backgroundColor:'#ffffff',
          height:'80px'
        });
      }else if(scrTop>=skillTop && scrTop<portfolioTop){
        $('.header').css({
          backgroundColor:'#ff0000',
          height:'80px'
        });
      }else if(scrTop>=portfolioTop && scrTop<telTop){
        $('.header').css({
          backgroundColor:'#ffffff',
          height:'80px'
        });
      }else if(scrTop>=telTop){
        $('.header').css({
          backgroundColor:'#00ff00',
          height:'80px'
        });
      }
    });
  // end 스크롤이벤트
  
  // start section Y좌표값 함수
  function sectionTop(){
    welcomeTop=$('#welcome').offset().top-80;
    iamTop=$('#i_am').offset().top-80;
    skillTop=$('#skill').offset().top-80;
    portfolioTop=$('#portfolio').offset().top-80;
    telTop=$('#tel').offset().top-80;
  }
  // end section Y좌표값 함수
})
