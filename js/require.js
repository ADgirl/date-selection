window.onload=(function(){
	var sYear=document.getElementById('sYear'),
		sMonth=document.getElementById('sMonth');
	var date=new search(2014);
		date.initdata(sYear,sMonth);
var show_btn=document.getElementById('show_btn');
	show_btn.addEventListener('click',function(){
	date.show_date(sYear,sMonth);
});
	sMonth.addEventListener('change',function(){
		date.show_date(sYear,sMonth);
	});
	sYear.addEventListener('change',function(){
		date.changeyear(sYear,sMonth);
	});
});
