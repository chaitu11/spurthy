
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Button}","click",function(sym,e){sym.$("Output").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Button'
(function(symbolName){})("Button");
//Edge symbol end:'Button'

//=========================================================

//Edge symbol: 'Output'
(function(symbolName){})("Output");
//Edge symbol end:'Output'
})(jQuery,AdobeEdge,"EDGE-295033226");