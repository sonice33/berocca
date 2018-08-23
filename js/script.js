$(document).ready(function(){
	
	
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