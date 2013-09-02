
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){$("#Stage").css("margin","auto")});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Build}","click",function(sym,e){sym.$("Text").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Run}","click",function(sym,e){sym.$("Output").show();sym.$("Rectangle").show();sym.$("Rectangle2").show();sym.play("start");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stop2}","click",function(sym,e){sym.$("Text").hide();sym.$("Output").hide();sym.$("Rectangle").hide();sym.$("Rectangle2").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Editor'
(function(symbolName){})("Editor");
//Edge symbol end:'Editor'

//=========================================================

//Edge symbol: 'Build'
(function(symbolName){})("Build");
//Edge symbol end:'Build'

//=========================================================

//Edge symbol: 'Run'
(function(symbolName){})("Run");
//Edge symbol end:'Run'

//=========================================================

//Edge symbol: 'Stop'
(function(symbolName){})("Stop");
//Edge symbol end:'Stop'

//=========================================================

//Edge symbol: 'Output'
(function(symbolName){})("Output");
//Edge symbol end:'Output'
})(jQuery,AdobeEdge,"EDGE-90018980");