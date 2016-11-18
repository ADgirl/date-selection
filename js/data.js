var search=(function(document){
	var search=function(startyear){
		var it=this;
		this.startyear=startyear;
		this.mycurrentyear=it.getcurrentdata().mycurrentyear;
		this.mycurrentmonth=it.getcurrentdata().mycurrentmonth;	
}
search.prototype.initdata=function(sYearid,sMonthid){
	var it=this;
	var startyear=this.startyear,
	mycurrentyear=this.mycurrentyear,
	mycurrentmonth=this.mycurrentmonth;
	sYearid.options.length=0;
	sMonthid.options.length=0;
	for(var i=mycurrentyear;i>=startyear;i--){
		sYearid.options.add(new Option(i,i));
	}
	for(var j=mycurrentmonth;j>=1;j--){
		sMonthid.options.add(new Option(j,j));
	}
	this.yvalue=it.getYear(sYearid);
	this.mvalue=it.getMonth(sMonthid);
}
search.prototype.getcurrentdata=function(){
	var mydate=new Date();
	var mycurrentyear=mydate.getFullYear(),
	 	mycurrentmonth=mydate.getMonth()+1;
	 	return {
	 		mycurrentmonth:mycurrentmonth,
	 		mycurrentyear:mycurrentyear
	 	};
}
search.prototype.changeyear=function(sYearid,sMonthid){
	var year=this.getYear(sYearid);
	var mycurrentyear=this.mycurrentyear,
	mycurrentmonth=this.mycurrentmonth;
	sMonthid.options.length=0;
	if(year!=mycurrentyear){
		for(var i=12;i>=1;i--){
			sMonthid.options.add(new Option(i,i));
		}
	}
		else{
			for(var j=mycurrentmonth;j>=1;j--){
				sMonthid.options.add(new Option(j,j));
			
		}
	}
}
search.prototype.getYear=function(sYear){
	var yindex=sYear.selectedIndex;
	var yvalue=sYear.options[yindex].text;
	return yvalue;
}
search.prototype.getMonth=function(sMonth){
	var mindex=sMonth.selectedIndex;
	var mvalue=sMonth.options[mindex].text;
	return mvalue;
}

search.prototype.show_date=function(sYearid,sMonthid){
	var yvalue=this.getYear(sYearid);
	var mvalue=this.getMonth(sMonthid);
	alert(yvalue+','+mvalue);
}
return search;
})(document)