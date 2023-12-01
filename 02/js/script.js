$(function () {
  // 대상을 변수에 저장
  const $body = $('body');

  // 테스트 : body에 배경이미지 넣기
  // $body.css({
  //   background: 'url(img/blackpink01.jpg) no-repeat 0 0 /cover',
  // });

  const $tabMenu = $('.tab-menu > li');
  const $tabContent = $('.tab-con-item');

  // 배경이미지를 배열에 저장
  const bgArr = ['blackpink01.jpg', 'blackpink02.jpg', 'blackpink03.jpg'];
  console.log(bgArr[2]);

  // 초기화
  let idx = 0;
  tabAction(idx);

  // 공통의 동작을 함수로 정의
  function tabAction(index) {
    // 메서드 체인
    $tabMenu.removeClass('on').eq(index).addClass('on');
    $tabContent.hide().eq(index).show();

    // 배경이미지 적용
    $body.css({
      // background: 'url(img/' + bgArr[index] + ') no-repeat 0 0 /cover',
      background: `url(img/${bgArr[index]}) no-repeat 0 0 /cover`,
    });
  }

  $tabMenu.on('click', function (e) {
    e.preventDefault();

    // 인덱스 받아오기
    idx = $(this).index();
    tabAction(idx);
  });
});
