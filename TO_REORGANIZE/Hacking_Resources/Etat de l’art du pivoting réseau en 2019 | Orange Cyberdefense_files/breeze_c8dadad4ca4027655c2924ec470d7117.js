
(function(){var a,b;a=this.jQuery||window.jQuery;b=a(window);a.fn.stick_in_parent=function(d){var p,m,o,n,j,h,k,f,l,e,c,g;if(d==null){d={};}g=d.sticky_class,h=d.inner_scrolling,c=d.recalc_every,e=d.parent,l=d.offset_top,f=d.spacer,o=d.bottoming;
if(l==null){l=0;}if(e==null){e=void 0;}if(h==null){h=true;}if(g==null){g="is_stuck";}p=a(document);if(o==null){o=true;}n=function(t,G,q,i,B,C,y,z){var D,H,r,F,I,s,w,u,x,A,v,E;
if(t.data("sticky_kit")){return;}t.data("sticky_kit",true);I=p.height();w=t.parent();if(e!=null){w=w.closest(e);}if(!w.length){throw"failed to find stick parent";
}r=false;D=false;v=f!=null?f&&t.closest(f):a("<div />");u=function(){var J,L,K;if(z){return;}I=p.height();J=parseInt(w.css("border-top-width"),10);L=parseInt(w.css("padding-top"),10);
G=parseInt(w.css("padding-bottom"),10);q=w.offset().top+J+L;i=w.height();if(r){r=false;D=false;if(f==null){t.insertAfter(v);v.detach();}t.css({position:"",top:"",width:"",bottom:""}).removeClass(g);
K=true;}B=t.offset().top-(parseInt(t.css("margin-top"),10)||0)-l;C=t.outerHeight(true);y=t.css("float");if(v){v.css({width:t.outerWidth(true),height:C,display:t.css("display"),"vertical-align":t.css("vertical-align"),"float":y});
}if(K){return E();}};u();if(C===i){return;}F=void 0;s=l;A=c;E=function(){var L,O,M,K,J,N;if(z){return;}M=false;if(A!=null){A-=1;if(A<=0){A=c;u();M=true;
}}if(!M&&p.height()!==I){u();M=true;}K=b.scrollTop();if(F!=null){O=K-F;}F=K;if(r){if(o){J=K+C+s>i+q;if(D&&!J){D=false;t.css({position:"fixed",bottom:"",top:s}).trigger("sticky_kit:unbottom");
}}if(K<B){r=false;s=l;if(f==null){if(y==="left"||y==="right"){t.insertAfter(v);}v.detach();}L={position:"",width:"",top:""};t.css(L).removeClass(g).trigger("sticky_kit:unstick");
}if(h){N=b.height();if(C+l>N){if(!D){s-=O;s=Math.max(N-C,s);s=Math.min(l,s);if(r){t.css({top:s+"px"});}}}}}else{if(K>B){r=true;L={position:"fixed",top:s};
L.width=t.css("box-sizing")==="border-box"?t.outerWidth()+"px":t.width()+"px";t.css(L).addClass(g);if(f==null){t.after(v);if(y==="left"||y==="right"){v.append(t);
}}t.trigger("sticky_kit:stick");}}if(r&&o){if(J==null){J=K+C+s>i+q;}if(!D&&J){D=true;if(w.css("position")==="static"){w.css({position:"relative"});}return t.css({position:"absolute",bottom:G,top:"auto"}).trigger("sticky_kit:bottom");
}}};x=function(){u();return E();};H=function(){z=true;b.off("touchmove",E);b.off("scroll",E);b.off("resize",x);a(document.body).off("sticky_kit:recalc",x);
t.off("sticky_kit:detach",H);t.removeData("sticky_kit");t.css({position:"",bottom:"",top:"",width:""});w.position("position","");if(r){if(f==null){if(y==="left"||y==="right"){t.insertAfter(v);
}v.remove();}return t.removeClass(g);}};b.on("touchmove",E);b.on("scroll",E);b.on("resize",x);a(document.body).on("sticky_kit:recalc",x);t.on("sticky_kit:detach",H);
return setTimeout(E,0);};for(j=0,k=this.length;j<k;j++){m=this[j];n(a(m));}return this;};}).call(this);