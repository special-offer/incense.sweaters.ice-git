var World={loaded:!1,init:function s(){this.createOverlays()},createOverlays:function s(){function e(s){for(var e=s.length,t,d;0!==e;)d=Math.floor(Math.random()*e),e-=1,t=s[e],s[e]=s[d],s[d]=t;return s}this.tracker=new AR.ClientTracker("assets/wyd.wtc",{onLoaded:this.worldLoaded});var t=$("#help-trig, #info-trig"),d=new AR.VideoDrawable("assets/wyd01/wyd01a.mp4",.75,{offsetX:-.125,offsetY:-.125,opacity:.95}),a=new AR.VideoDrawable("assets/wyd01/wyd01b.mp4",.75,{offsetX:.15,offsetY:.15,opacity:.95,zOrder:1}),w=new AR.ImageResource("assets/wyd01/wyd01c.jpg"),i=new AR.ImageDrawable(w,.5,{offsetX:-.15,offsetY:-.15,zOrder:2,opacity:.7}),n=new AR.Trackable2DObject(this.tracker,"wyd01",{drawables:{cam:[d,a,i]},onEnterFieldOfVision:function s(){t.removeClass("loaded"),d.play(-1),a.play(-1)},onExitFieldOfVision:function(){t.addClass("loaded"),d.pause(),a.pause()}}),y=new AR.ImageResource("assets/wyd04/wyd04a.png"),o=new AR.ImageResource("assets/wyd04/wyd04b.png"),r=new AR.ImageDrawable(y,.15,{offsetX:-.2,offsetY:.3}),g=new AR.ImageDrawable(o,.3,{offsetX:.5,offsetY:.2}),l=new AR.Trackable2DObject(this.tracker,"wyd04",{drawables:{cam:[r,g]}}),f=document.getElementById("wyd05audio"),c=392,p=["The","natural","state","of","your","skin","is","ashy.","Shea","butter","is","the","only","defense.","Use","it","generously.","Lotion","is","for","white","people."],u=["Be","scuffed.","Visible","tags,","tears,","holes,","patches,","embellishments,","dirt,","and","fixes","are","essential","to","your","look.","Never","look","too","put","together."],m=["Retain","a","California","accent,","certain","mispronunciations,","and","a","casual","way","of","speaking."],h=["Always","speak","for","yourself."],j=["Direct","communication","only.","Hide/remove","logos,","graphics,","colors,","tags,","etc.","that","are","not","part","of","the","message."],v=["Stand","up","straight."],b=["Your","right","side","is","your","good","side."],R=["Retain","a","California","accent,","certain","mispronunciations,","and","a","casual","way","of","speaking."],M=["Never","give","anyone","the","satisfaction."],k=["Leave","while","you’re","having","a","good","time."],T=[p,u,m,h,j,v,b,R],A=new AR.Trackable2DObject(this.tracker,"wyd05",{onEnterFieldOfVision:function(){function s(){a.innerHTML=e[d],d++,d>=e.length&&(a.innerHTML="",clearInterval(w))}var e=T[Math.floor(Math.random()*T.length)],d=0,a=document.getElementById("wyd05-content-inner"),w=setInterval(s,500),i=new Date,n=new Date,y=new Date,o=i.getMinutes();o>=54?y.setMinutes(54):o>=48?y.setMinutes(20):o>=42?y.setMinutes(42):o>=36?y.setMinutes(36):o>=30?y.setMinutes(30):o>=24?y.setMinutes(24):o>=18?y.setMinutes(18):o>=12?y.setMinutes(12):o>=6?y.setMinutes(6):o>=0&&y.setMinutes(0);var r=((n-y)/6e4).toFixed(2),g=60*r;f.currentTime=g,f.play(),t.removeClass("loaded"),$("#wyd05").show()},onExitFieldOfVision:function(){var s=document.getElementById("wyd05-content-inner");s.innerHTML="",f.pause(),t.addClass("loaded"),$("#wyd05").hide()}}),I=new AR.ImageResource("assets/wyd06/wyd06a.png"),O=new AR.ImageResource("assets/wyd06/wyd06b.png"),D=new AR.ImageResource("assets/wyd06/wyd06c.png"),x=new AR.ImageDrawable(I,.15,{offsetX:.05,offsetY:-.075}),C=new AR.ImageDrawable(O,.225,{offsetX:0,offsetY:-.3}),E=new AR.ImageDrawable(D,.05,{offsetX:0,offsetY:.4}),V=new AR.Trackable2DObject(this.tracker,"wyd06",{drawables:{cam:[x,C,E]}}),F="assets/wyd07/wyd07.1.gif",L="assets/wyd07/wyd07.2.gif",Y="assets/wyd07/wyd07.3.gif",X="assets/wyd07/wyd07.4.gif",B="assets/wyd07/wyd07.5.gif",H="assets/wyd07/wyd07.6.gif",N="assets/wyd07/wyd07.7.gif",z="assets/wyd07/wyd07.8.gif",S="assets/wyd07/wyd07.9.gif",W="assets/wyd07/wyd07.10.gif",P="assets/wyd07/wyd07.11.gif",U="assets/wyd07/wyd07.12.gif",q="assets/wyd07/wyd07.13.gif",G="assets/wyd07/wyd07.14.gif",J="assets/wyd07/wyd07.15.gif",K="assets/wyd07/wyd07.16.gif",Q="assets/wyd07/wyd07.17.gif",Z="assets/wyd07/wyd07.18.gif",_="assets/wyd07/wyd07.19.gif",ss="assets/wyd07/wyd07.20.gif",es="assets/wyd07/wyd07.21.gif",ts="assets/wyd07/wyd07.22.gif",ds="assets/wyd07/wyd07.23.gif",as="assets/wyd07/wyd07.24.gif",ws="assets/wyd07/wyd07.25.gif",is="assets/wyd07/wyd07.26.gif",ns="assets/wyd07/wyd07.27.gif",ys="assets/wyd07/wyd07.28.gif",os="assets/wyd07/wyd07.29.gif",rs="assets/wyd07/wyd07.30.gif",gs="assets/wyd07/wyd07.31.gif",ls=[F,L,Y,X,B,H,N,z,S,W,P,U,q,G,J,K,Q,Z,_,ss,es,ts,ds,as,ws,is,ns,ys,os,rs,gs],fs=new AR.Trackable2DObject(this.tracker,"wyd07",{onEnterFieldOfVision:function(){function s(){var s=Math.floor(75*Math.random())+25,e=Math.floor(75*Math.random())+25,t=ls[Math.floor(Math.random()*ls.length)],d="<img src='"+t+"' style='left:"+s+"%;top:"+e+"%;' />";$("#wyd07-content").append(d)}$("#wyd07").show(),t.removeClass("loaded"),window.imageaddtimer=setInterval(s,2e3)},onExitFieldOfVision:function(){clearInterval(window.imageaddtimer),$("#wyd07").hide(),$("#wyd07-content").html(""),t.addClass("loaded")}}),cs="assets/wyd08/wyd08.1.jpg",ps="assets/wyd08/wyd08.2.jpg",us="assets/wyd08/wyd08.3.jpg",ms="assets/wyd08/wyd08.4.jpg",hs="assets/wyd08/wyd08.5.jpg",js="assets/wyd08/wyd08.6.jpg",vs="assets/wyd08/wyd08.7.jpg",bs="assets/wyd08/wyd08.8.jpg",Rs="assets/wyd08/wyd08.9.jpg",Ms="assets/wyd08/wyd08.10.jpg",ks="assets/wyd08/wyd08.11.jpg",Ts="assets/wyd08/wyd08.12.jpg",As="assets/wyd08/wyd08.13.jpg",Is="assets/wyd08/wyd08.14.jpg",Os="assets/wyd08/wyd08.15.jpg",Ds="assets/wyd08/wyd08.16.jpg",$s="assets/wyd08/wyd08.17.jpg",xs="assets/wyd08/wyd08.18.jpg",Cs="assets/wyd08/wyd08.19.jpg",Es="assets/wyd08/wyd08.20.jpg",Vs="assets/wyd08/wyd08.21.jpg",Fs="assets/wyd08/wyd08.22.jpg",Ls="assets/wyd08/wyd08.23.jpg",Ys="assets/wyd08/wyd08.24.jpg",Xs="assets/wyd08/wyd08.25.jpg",Bs="assets/wyd08/wyd08.26.jpg",Hs="assets/wyd08/wyd08.27.jpg",Ns="assets/wyd08/wyd08.28.jpg",zs="assets/wyd08/wyd08.29.jpg",Ss="assets/wyd08/wyd08.30.jpg",Ws="assets/wyd08/wyd08.31.jpg",Ps="assets/wyd08/wyd08.32.jpg",Us="assets/wyd08/wyd08.33.jpg",qs="assets/wyd08/wyd08.34.jpg",Gs="assets/wyd08/wyd08.35.jpg",Js="assets/wyd08/wyd08.36.jpg",Ks="assets/wyd08/wyd08.37.jpg",Qs="assets/wyd08/wyd08.38.jpg",Zs="assets/wyd08/wyd08.39.jpg",_s="assets/wyd08/wyd08.40.jpg",se="assets/wyd08/wyd08.41.jpg",ee="assets/wyd08/wyd08.42.jpg",te="assets/wyd08/wyd08.43.jpg",de="assets/wyd08/wyd08.44.jpg",ae="assets/wyd08/wyd08.45.jpg",we="assets/wyd08/wyd08.46.jpg",ie=[cs,ps,us,ms,hs,js,vs,bs,Rs,Ms,ks,Ts,As,Is,Os,Ds,$s,xs,Cs,Es,Vs,Fs,Ls,Ys,Xs,Bs,Hs,Ns,zs,Ss,Ws,Ps,Us,qs,Gs,Js,Ks,Qs,Zs,_s,se,ee,te,de,ae,we],ne=new AR.Trackable2DObject(this.tracker,"wyd08",{onEnterFieldOfVision:function(){function s(){e>=ie.length&&(e=0),$("#wyd08").css("background-image","url('"+ie[e]+"')"),e++}$("#wyd08").show(),t.removeClass("loaded");var e=0;window.int=setInterval(s,500)},onExitFieldOfVision:function(){$("#wyd08").hide(),t.addClass("loaded"),clearInterval(window.int)}}),ye="assets/wyd10/wyd10a.png",oe="assets/wyd10/wyd10b.png",re="assets/wyd10/wyd10c.png",ge="assets/wyd10/wyd10d.png",le="assets/wyd10/wyd10e.png",fe="assets/wyd10/wyd10f.png",ce="assets/wyd10/wyd10g.png",pe="assets/wyd10/wyd10h.png",ue=new AR.Trackable2DObject(this.tracker,"wyd02",{onEnterFieldOfVision:function(){$("#wyd10").show(),t.removeClass("loaded");var s=$("#wyd10-content");s.append('<div class="text-right"><img src="'+ye+'"/></div>'),setTimeout(function(){s.append('<div class="text-left"><img src="'+oe+'"/></div>')},1e3),setTimeout(function(){s.append('<div class="text-right"><img src="'+re+'"/></div>')},5e3),setTimeout(function(){s.append('<div class="text-left"><img src="'+le+'"/></div>')},8e3),setTimeout(function(){s.append('<div class="text-left"><img src="'+ge+'"/></div>')},8250),setTimeout(function(){s.append('<div class="text-right"><img src="'+fe+'"/></div>')},12500),setTimeout(function(){s.append('<div class="text-right"><img src="'+ce+'"/></div>')},13e3),setTimeout(function(){s.append('<div class="text-left"><img src="'+pe+'"/></div>')},15e3)},onExitFieldOfVision:function(){$("#wyd10").hide(),$("#wyd10-content").html(""),t.addClass("loaded")}})},worldLoaded:function s(){document.getElementById("loadingMessage").innerHTML="<div class='table'><div>Point your phone at one of<br/> the photographs to view.<br/><br/>Click anywhere on the screen<br/> to take a photo.</div></div>",setTimeout(function(){var s=document.getElementById("loadingMessage");s.className+=" loaded"},1e3),setTimeout(function(){$("#loadingMessage").fadeOut()},5e3),setTimeout(function(){$("#info-trig, #help-trig").addClass("loaded")},6e3)}};World.init();