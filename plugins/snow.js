/*
	krpano 1.21 Snow Plugin (build 2023-04-30)
	https://krpano.com/plugins/snow/
*/
var krpanoplugin=function(){function B(Z,C){C=!0===C;if(g&&D){var m=f.get("view");if(null!=m&&null!=m.r_rmatrix){var w=D,p=g.width,t=g.height;w.clearRect(0,0,p,t);var b,z=1;switch(String(a.mode).toLowerCase()){case "snow":z=1;break;case "image":z=3}var n=a.flakes;f.ismobile&&1E3<n&&(n=1E3);f.istablet&&2E3<n&&(n=2E3);var u=a.color,x=1E3*a.floor,E=1E3*a.spreading,K=1*a.imagescale,c=1*a.speed,F=1*a.shake,B=1*a.speedvariance,G=1*a.wind,q=a.winddir*Math.PI/180,A=1500;a.invert&&(x*=-1,c*=-1,A*=-1);Y!=u&&
(r=null,Y=u);if(null==r){r=document.createElement("canvas");r.width=2;r.height=2;var H=r.getContext("2d");H.fillStyle="rgba("+(u>>16&255)+","+(u>>8&255)+","+(u&255)+",0.5)";H.fillRect(0,0,2,2)}var u=r,H=G*Math.cos(q),G=G*Math.sin(q),q=null,L=0,M=0;if(3==z){var l=a.imageurl;if(null==l||""==l)return;N!=l&&(v=null,N=l,v=new Image,v.src=f.parsePath(N));if(null==v)return;v&&v.complete&&(q=v,L=q.naturalWidth,M=q.naturalHeight);if(null==q)return}null==k&&(k=Array(3*n));if(0==C&&n!=I){if(I<n)for(b=3*I;b<
3*n;b+=3)k[0|b]=(Math.random()-.5)*E,k[0|b+2]=(Math.random()-.5)*E,k[0|b+1]=-(Math.random()*(x+1*A))+x;I=n}var p=.5*p,l=.5*t,O=Number(m.r_zoff);isNaN(O)&&(O=0);b=f.stagescale;t=m.r_zoom*t/f.stageheight/b;b=Math.max(4*f.stageheight/3,f.stagewidth)/b;K*=b*t/(2*l);b=m.r_rmatrix;var P,Q,R,S,T,U,V,W;b.hasOwnProperty("m11")?(m=b.m11,P=b.m12,Q=b.m13,R=b.m21,S=b.m22,T=b.m23,U=b.m31,V=b.m32,W=b.m33):(m=b[0],P=b[1],Q=b[2],R=b[4],S=b[5],T=b[6],U=b[8],V=b[9],W=b[10]);var y=1E3/(X+1)/122;.5<y&&(y=.5);var y=y*
c,F=F*y,d,e,h,J;for(b=0;b<3*n;b+=3){c=k[0|b];d=k[0|b+1];e=k[0|b+2];if(0==C){d+=y*(10+Math.random()*B);h=!1;if(h=a.invert?d<x:d>x)c=(Math.random()-.5)*E,e=(Math.random()-.5)*E,d=1*(-(2*A/3)-Math.random()*(1*A/3));c+=(Math.random()-.5)*F+H;e+=(Math.random()-.5)*F+G;2E3<c?c-=4100:-2E3>c&&(c+=4100);2E3<d?d-=4100:-2E3>d&&(d+=4100);k[0|b]=c;k[0|b+1]=d;k[0|b+2]=e}h=c;J=d;c=m*h+R*J+U*e;d=P*h+S*J+V*e;e=Q*h+T*J+W*e+O;10<e&&(1==z?(e=t/e,c*=e,d*=e,c>-p&&c<+p&&d>-l&&d<l&&(c+=p-1,d+=l-1,w.drawImage(u,c|0,d|0))):
3==z&&(h=e,e=t/e,c*=e,d*=e,h=K/h,e=.5*L*h,h*=.5*M,c>-p-e&&c<+p+e&&d>-l-h&&d<l+h&&(c+=p-e,d+=l-h,w.drawImage(q,0,0,L,M,c,d,e,h))))}}}}this.name="Snow";this.version="__BUILD_VERSION__";this.build="__BUILD_DATE__";var f=null,a=null,g=null,D=null,Y=null,k=null,I=0,N=null,v=null,X=30,w=null,r=null;this.registerplugin=function(k,r,m){f=k;a=m;a.registerattribute("mode","snow");a.registerattribute("imageurl","");a.registerattribute("flakes",f.ismobile||f.istablet?1E3:4E3);a.registerattribute("color",16777215);
a.registerattribute("floor",.3);a.registerattribute("invert",!1);a.registerattribute("speed",1);a.registerattribute("spreading",4);a.registerattribute("shake",4);a.registerattribute("speedvariance",2);a.registerattribute("wind",0);a.registerattribute("winddir",0);a.registerattribute("rainwidth",.5);a.registerattribute("rainalpha",.5);a.registerattribute("imagescale",1);a.enabled=!1;a.align="lefttop";a.edge="lefttop";a.width="100%";a.height="100%";a.x=0;a.y=0;a.registercontentsize(256,256);g=document.createElement("canvas");
g.width=256;g.height=256;g.style.width="100%";g.style.height="100%";g.onselectstart=function(){return!1};D=g.getContext("2d");a.sprite.appendChild(g);if(f.ismobile||f.istablet)X=15;w=setInterval(B,1E3/X);f.set("events["+a.name+"_snowevents].keep",a.keep);f.set("events["+a.name+"_snowevents].onviewchanged",function(){B(null,!0)})};this.unloadplugin=function(){try{clearInterval(w),f.set("events["+a.name+"_snowevents].keep",!1),f.set("events["+a.name+"_snowevents].onviewchanged",null),f.set("events["+
a.name+"_snowevents].name",null),a.sprite.removeChild(g),f=a=g=D=w=null}catch(k){}};this.onresize=function(a,f){g&&(g.width=a>>0,g.height=f>>0);return!1}};
