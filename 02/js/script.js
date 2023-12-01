$(function () {
  // 대상을 변수에 저장
  const $body = $('body');

  // 테스트 : body에 배경이미지 넣기
  // $body.css({
  //   background: 'url(img/blackpink01.jpg) no-repeat 0 0 /cover',
  // });

  const $tabMenu = $('.tab-menu > li');
  const $tabContent = $('.tab-con-item');

  // 초기화
  let idx = 0;
  tabAction(idx);

  // 공통의 동작을 함수로 정의
  function tabAction(index) {
    // 메서드 체인
    $tabMenu.removeClass('on').eq(index).addClass('on');
    $tabContent.hide().eq(index).show();
  }

  $tabMenu.on('click', function (e) {
    e.preventDefault();

    // 인덱스 받아오기
    idx = $(this).index();
    tabAction(idx);
  });
});
