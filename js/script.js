$(document).ready(function(){
	
	//마우스휠 이벤트
	var cont_top = new Array();
	var scr_move = 0;
	
	for( var i = 0; i <= 3; i++){
		cont_top[i] = $("#container > div").eq(i).offset().top;
		console.log(cont_top[i]);
	}

	
	$(window).scroll(function(){
		
		//현재 스크롤위치 담음
		var scr_top = $(window).scrollTop();
		
		for( var i=0; i<=3; i++ ){
			if( scr_top >= cont_top[i] && scr_top < cont_top[i+1] ){
					scr_move = i;
			}else if( scr_top >= cont_top[3] ){
					scr_move = 3;
			}	
		}
		
	
		$(".gnb li").removeClass("on");
		$(".gnb li").eq(scr_move).addClass("on");
	});
	
	//메뉴 클릭시 해당 영역으로 이동
	$(".gnb li").click(function(){
		scr_move = $(this).index();
		
		$("html,body").stop().animate({"scrollTop":cont_top[scr_move]});
	});
	
	$("#container > div").mousewheel(function(event,delta){
		
		if(delta > 0){
			var prev = $(this).prev().offset().top;
			$("html, body").stop().animate({"scrollTop":prev});
		}else if(delta < 0){
			var next = $(this).next().offset().top;
			$("html, body").stop().animate({"scrollTop":next});
		}
		
	});
	
	//슬라이더 타이퍼
	$("#typer").typer({
		typeSpeed: 200,
  	backspaceSpeed: 50,
		
		strings: [
				"비타민C",
				"마그네슘",
				"엽산",
				"아연",
				"칼슘",
				"비타민 B1",
				"비타민 B2",
				"비타민 B3",
				"비타민 B5",
				"비타민 B6",
				"비타민 B12"
		]

	});
	
	//약 슬라이드
	var list = 0;
	
	setInterval(function(){
		if(list == 2){
			list = 0;
		}else{
			list ++;
		}
		$(".product_img li").hide();
		$(".product_img li").eq(list).show();
		
	},3000);
	
	
	//faq 버튼 누르면 해당 질문 목록 보이기
	$(".faq_btn li").click(function(event){
		event.preventDefault();
		
		var list= $(this).index();
		
		$(".faq_btn li").removeClass("on");
		$(this).addClass("on");
		
		$(".faq_list ul").hide();
		$(".faq_list ul").eq(list).show();
	});
	
	//faq 질문 누르면 답변 토글
	$(".faq_list .question").click(function(){
		$(this).siblings(".answer").slideToggle();
		$(this).children(".q_title").toggleClass("on");
	});
	
	
});