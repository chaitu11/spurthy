
(function($,Edge,compId){var _=null,y=true,n=false,x19='rgba(0,170,15,1.00)',x7='700',x41='75px',x35='65px',x1='2.0.1',e32='${_editor2}',x52='547px',b='block',e16='${_Run}',a='Base State',e23='${_Build}',x31='Editor',dt='Default Timeline',x3='2.0.1.268',i='none',lf='left',bg='background-color',e17='${_Editor}',x29='auto',x40='run',x13='rgba(255,255,255,1)',tp='top',e18='${_Text}',e14='${_Stage}',x11='stage',zy='scaleY',e20='${_Rectangle2}',c='color',x8='rgba(0,0,0,0)',g='image',x25='editor2',x38='Build',e50='${_Stop}',x='text',x55='Output',x53='253px',m='rect',x26='0px',fs='font-size',h='height',e56='${_final5}',x51='final5',x48='21px',x47='72px',e45='${_run}',x46='Stop',p='px',x44='Run',e21='${_Stop2}',s='style',x36='24px',ov='overflow',e39='${_build}',e33='${symbolSelector}',e22='${_Rectangle}',x6='Arial, Helvetica, sans-serif',x34='build',x42='23px',x12='hidden',x10='rgba(255,255,255,1.00)',x2='2.0.0',e24='${_Output}',w='width',t='transform',x5='24',ql='linear',x27='504px',d='display',x28='408px',xc='rgba(0,0,0,1)',e15='${_code}';var im='images/';var g9='code.jpg',g49='Stop.jpg',g30='editor2.jpg',g37='build.jpg',g54='final5.jpg',g43='run.jpg';var s4="Build Sucessful..... :-)";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Editor',t:m,r:['80','8','auto','auto','auto','auto']},{id:'Stop2',t:m,r:['467','10','auto','auto','auto','auto']},{id:'Run',t:m,r:['379','10','auto','auto','auto','auto']},{id:'Build',t:m,r:['299','7','auto','auto','auto','auto']},{id:'Text',v:i,t:x,r:['307px','389px','268px','21px','auto','auto'],text:s4,n:[x6,x5,xc,x7,i,""]},{id:'code',t:g,r:['146px','138px','473px','306px','auto','auto'],f:[x8,im+g9,'0px','0px']},{id:'Output',v:i,t:m,r:['229','212','auto','auto','auto','auto']},{id:'Rectangle',v:i,t:m,r:['239px','318px','258px','196px','auto','auto'],f:[x10],s:[0,xc,i]},{id:'Rectangle2',v:i,t:m,r:['497px','325px','234px','183px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i]}],sI:[{id:'Editor',sN:'Editor'},{id:'Stop2',sN:'Stop'},{id:'Output',sN:'Output'},{id:'Run',sN:'Run'},{id:'Build',sN:'Build'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3925,a:y,l:{"start":1000},tt:[]}}},"Editor":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x25,t:g,r:[x26,x26,x27,x28,x29,x29],f:[x8,im+g30,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"Build":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x34,t:g,r:[x26,x26,x35,x36,x29,x29],f:[x8,im+g37,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"Run":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x40,t:g,r:[x26,x26,x41,x42,x29,x29],f:[x8,im+g43,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"Stop":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x46,t:g,r:[x26,x26,x47,x48,x29,x29],f:[x8,im+g49,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"Output":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x51,t:g,r:[x26,x26,x52,x53,x29,x29],f:[x8,im+g54,x26,x26]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}}};var S1=symbols[x11];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e14).P(bg,x13,c).P(ov,x12).P(h,900).P(w,800);A1.A(e15).P(tp,138).P(h,306).P(lf,146).P(w,473);A1.A(e16).P(tp,82).T(0,82).P(lf,429).T(0,429);A1.A(e17).P(tp,80).T(0,80).P(lf,129).T(0,129);A1.A(e18).P(ov,x12).P("font-weight",700,_,_,"").P(tp,465,_,_,p).T(0,465).P(h,33).T(0,33).P(c,x19,c).T(0,x19).P(d,i).T(0,i).P(lf,467).T(0,467).P(fs,16).T(0,16);A1.A(e20).P(bg,x10,c).P(d,i).T(0,i).T(0.997,b).T(3.925,b).P(lf,497).T(1,620,2.25,ql).P(w,234).T(1,123,1.575).T(2.575,0,0.675);A1.A(e21).P(lf,539).T(0,539).P(tp,82).T(0,82);A1.A(e22).P(tp,318).P(h,196).P(bg,x10,c).P(d,i).T(0,i).T(0.997,b).T(3.925,b).P(lf,239).T(1,341,0.835,ql).T(1.835,497,2.09).P(w,258).T(1,156,0.835).T(1.835,0,2.09);A1.A(e23).P(tp,81).T(0,81).P(lf,340).T(0,340).P(zy,0.875,t,_,"").T(0,0.88,_,_,0.88);A1.A(e24).P(ov,x12).P(d,i).T(0,i).T(1,b).P(lf,223).T(0,223).P(tp,277).T(0,277);var S2=symbols[x31];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e32).P(lf,0).P(tp,0);A2.A(e33).P(h,408).P(w,504);var S3=symbols[x38];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e39).P(tp,0).P(lf,0).P(h,24);A3.A(e33).P(h,24).P(w,65);var S4=symbols[x44];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e33).P(h,23).P(w,75);A4.A(e45).P(tp,0).P(lf,0).P(h,23);var S5=symbols[x46];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e50).P(tp,0).P(lf,0).P(h,21);A5.A(e33).P(h,21).P(w,72);var S6=symbols[x55];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e56).P(lf,0).P(tp,0);A6.A(e33).P(h,253).P(w,547);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-90018980");