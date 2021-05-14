System.register([],(function(e){return{execute:function(){e(function(e){var a={};function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(n,r,function(a){return e[a]}.bind(null,r));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=1011)}({1011:function(e,a,t){"use strict";t.r(a);var n={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"aproximadamente 1 mês",other:"aproximadamente {{count}} meses"},xWeeks:{one:"1 mês",other:"{{count}} meses"},aboutXMonths:{one:"aproximadamente 1 mês",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};var r=t(5),i={date:Object(r.a)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'na última' eeee 'às' p",yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"};var d=t(3);var u={ordinalNumber:function(e){return Number(e)+"º"},era:Object(d.a)({values:{narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(d.a)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:Object(d.a)({values:{narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","sáb"],abbreviated:["dom","seg","ter","qua","qui","sex","sáb"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"noite",night:"madrugada"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},defaultFormattingWidth:"wide"})},s=t(8),m=t(4),l={code:"pt",formatDistance:function(e,a,t){var r;return t=t||{},r="string"==typeof n[e]?n[e]:1===a?n[e].one:n[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"daqui a "+r:"há "+r:r},formatLong:i,formatRelative:function(e,a,t,n){return o[e]},localize:u,match:{ordinalNumber:Object(s.a)({matchPattern:/^(\d+)(º|ª)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(m.a)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era comum|depois de cristo|era comum)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era comum)/i,/^(depois de cristo|era comum)/i]},defaultParseWidth:"any"}),quarter:Object(m.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º|ª)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(m.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ab/i,/^mai/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(m.a)({matchPatterns:{narrow:/^[dstq]/i,short:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,wide:/^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^s/i,/^t/i,/^q/i,/^q/i,/^s/i,/^s/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[áa]/i]},defaultParseWidth:"any"}),dayPeriod:Object(m.a)({matchPatterns:{narrow:/^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,any:/^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^meia/i,noon:/^meio/i,morning:/manh[ãa]/i,afternoon:/tarde/i,evening:/noite/i,night:/madrugada/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=l},3:function(e,a,t){"use strict";function n(e){return function(a,t){var n,r=t||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var d=e.defaultWidth,u=r.width?String(r.width):e.defaultWidth;n=e.values[u]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(a):a]}}t.d(a,"a",(function(){return n}))},4:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),r=t||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=n.match(o);if(!d)return null;var u,s=d[0],m=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(m)?function(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}(m,(function(e){return e.test(s)})):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}(m,(function(e){return e.test(s)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(s.length)}}}t.d(a,"a",(function(){return n}))},5:function(e,a,t){"use strict";function n(e){return function(a){var t=a||{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}t.d(a,"a",(function(){return n}))},8:function(e,a,t){"use strict";function n(e){return function(a,t){var n=String(a),r=t||{},i=n.match(e.matchPattern);if(!i)return null;var o=i[0],d=n.match(e.parsePattern);if(!d)return null;var u=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(o.length)}}}t.d(a,"a",(function(){return n}))}}))}}}));