

$(document).ready(function(){
    // 화면이 준비되면 실행해라.
    // setInterval, animate, css, appendTo(객체 위치를 바꾸는것)




    // setInterval의 프로토 타입 만드세요.  (앞에 실행 뒤에 시간 표현)
    // 정답: setInterval(function(){}, 3000) 

    // 모든 메소드는 규칙을 갖고있어요 = 메뉴얼 = 먼저 암기한 사람이 쓰는거예요. = jsweller=많이외운사람

    // animate 프로 타입 만드세요.
    // 객체.animate({}, speed, function(){}) 에서 세번째 인자 function 값 쓰는 사람이 고급인력 , 세번 째 인자는 에니메이션 실행 후 처리하는 것을 넣는 것. 

    // css 프로토타입 만드세요. 객체중에서 태그객체만 쓸 수 있어요.
    // 태그객체.css{스타일, 스타일값}

    // appendTo 프로토 타입 만드세요 
    // $(옮길태그).appendTo($(부모가될태그))

// const aniw = $(".swiper-slide").width(); height 해보려고 주석함
// const aniw = $(".swiper-slide").height();  좌우 상하 다음 세번째꺼 하려고 주석함

// const aniw = $(".swiper-slide").css("width"); jquery는 규칙이 없으니 위에처럼도 쓰이는거다. 값을 넣으면 그 값이 들어가고 값이 없으면 가져오는 것. "width"를 가져오는 것.

// 전자는 숫자 후자는 문자로 받아요. (css("width")는 문자로 받아 짜증난다던데 이유는 샘께 한번더 물어보기 )

let count = 0;

    setInterval(function() {  

//         $(".swiper-wrapper").animate({"marginTop" : -aniw } , 400, function () {  좌우 상하 다음 세번째꺼 하려고 주석함
// $ (".swiper-slide").eq(0).appendTo($(".swiper-wrapper")) 좌우 상하 다음 세번째꺼 하려고 주석함
//             $(".swiper-wrapper").css("marginTop", 0) 좌우 상하 다음 세번째꺼 하려고 주석함
//         })               좌우 상하 다음 세번째꺼 하려고 주석함
        count++; // 순환 코드는 몫을 구한 후 남은 나머지 식에서 나온 것이예요.
        count = count % 3;
        $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on")
    },3000)

})

