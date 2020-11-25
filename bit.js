var a=[1,1];
for(let i=0;i<1000;++i){
	console.log(a[0]+a[1]);
	var t=a[0];
	a[0]=a[1];
	a[1]=t+a[1];
}