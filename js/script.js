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
	
	
});