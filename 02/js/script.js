$(function () {
  // 대상을 변수에 저장
  const $body = $('body');
  const $tabMenu = $('.tab-menu > li');
  const $tabContent = $('.tab-con-item');
  const $minimi = $('.minimi');

  // 배열에 이미지와 텍스트 정보를 저장
  const bgArr = [
    {
      pic: 'blackpink01.jpg',
      title: '지수가 제일 예뻐요',
      action: function () {
        $minimi.css({
          backgroundColor: 'orangered',
          backgroundImage: 'url(img/jisoo01.png)',
          transform: 'translateY(-50px)',
        });
      },
    },
    {
      pic: 'blackpink02.jpg',
      title: '지수가 정말 예뻐요',
      action: function () {
        $minimi.css({
          backgroundColor: 'yellowgreen',
          backgroundImage: 'url(img/jisoo02.png)',
          transform: 'rotate(20deg)',
        });
      },
    },
    {
      pic: 'blackpink03.jpg',
      title: '지수가 항상 예뻐요',
      action: function () {
        $minimi.css({
          backgroundColor: 'skyblue',
          backgroundImage: 'url(img/jisoo03.png)',
          transform: 'scale(1.5)',
        });
      },
    },
  ];

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
      background: `url(img/${bgArr[index].pic}) no-repeat 0 0 /cover`,
    });

    // 탭 콘텐츠의 제목을 수정
    $tabContent.eq(index).find('h2').text(bgArr[index].title);

    bgArr[index].action();
  }

  $tabMenu.on('click', function (e) {
    e.preventDefault();

    // 인덱스 받아오기
    idx = $(this).index();
    tabAction(idx);
  });
});
