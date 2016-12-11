function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fpages\u002Findex.pug":"doctype html\r\nhtml\r\n  include \u002Ftemplates\u002Fpartials\u002Fhead.pug\r\n  body\r\n    include \u002Ftemplates\u002Flayouts\u002Fhomepage.pug\r\n  include \u002Ftemplates\u002Fpartials\u002Fscripts.pug","templates\\partials\\head.pug":"head\r\n  title Langenium 2016 Rebuild\r\n  link(href='dist\u002Fstyles.css', rel='stylesheet')","templates\\layouts\\homepage.pug":"#fb-root\r\n.container\r\n  header.row\r\n    h1.logo \r\n      a(href='\u002F', title='Langenium')\r\n        img(src='logo.png')\r\n    nav\r\n      ul\r\n        li\r\n          a(href='#') About\r\n        li\r\n          a(href='#') Status\r\n        li\r\n          a(href='#') Gallery\r\n        li\r\n          a(href='#') Wiki\r\n    .fb-like(data-href=\"https:\u002F\u002Fwww.facebook.com\u002FLangenium\u002F\", data-layout=\"button_count\", data-action=\"like\" data-size=\"small\", data-show-faces=\"true\", data-share=\"false\")\r\n  .row\r\n    .hero \r\n      h1 Interactive Hero Area\r\n    .call_to_action\r\n      ul.row\r\n        li\r\n          a(href='#') Play\r\n        li\r\n          a(href='#') Concept Art\r\n        li\r\n          a(href='#') Storyline\r\n        li\r\n          a(href='#') Github\r\n  .row\r\n    .news\r\n      h2 News\r\n      include news.md\r\n    .most_popular\r\n      h2 Most Popular\r\n      ul\r\n        li\r\n          h3 \r\n            a(href='#') Bacon ipsum dolor amet frankfurter boudin\r\n        li\r\n          h3 \r\n            a(href='#') Ham hock capicola sausage\r\n        li\r\n          h3 \r\n            a(href='#') Tri-tip tail meatball chicken\r\n        li\r\n          h3 \r\n            a(href='#') Hamburger cow alcatra strip steak drumstick\r\n        li\r\n          h3 \r\n            a(href='#') Capicola sirloin corned beef pancetta rump pork chop","templates\\layouts\\news.md":"### This is the title of a new article\r\n_27th of August 2016_\r\n\r\nBacon ipsum dolor amet frankfurter boudin capicola pig bacon sausage brisket beef cupim ground round. Pork belly ball tip spare ribs, andouille kielbasa jowl chicken capicola. \r\n\r\nTenderloin turkey ball tip swine, ham hock capicola sausage. Pork chop kielbasa jowl, beef ribs cow jerky leberkas biltong. Capicola sirloin corned beef pancetta rump pork chop meatloaf salami ground round ribeye sausage shoulder alcatra chuck.\r\n\r\n### Another article begins with this heading\r\n_25th of August 2016_\r\n\r\nPork belly jerky leberkas pork alcatra turducken fatback. Sausage ribeye shoulder doner shankle, ham hock pork chop ham frankfurter tongue. Tri-tip tail meatball chicken. Hamburger cow alcatra strip steak drumstick, sausage corned beef filet mignon pastrami shoulder brisket chuck pork belly prosciutto.","templates\\partials\\scripts.pug":"include vendor_scripts.pug","templates\\partials\\vendor_scripts.pug":"script(src='vendor\u002Fjquery\u002Fdist\u002Fjquery.min.js')\r\nscript(src='vendor\u002FLive2D-WebGL-SDK\u002Flib\u002Flive2d.min.js')\r\nscript(src='vendor\u002Fthreejs\u002Fbuild\u002Fthree.min.js')\r\nscript(src='vendor\u002FLive2D_ThreeJS\u002FLive2DRender.js')\r\nscript\r\n  | \u002F\u002F Facebook Like Button.\r\n  | (function(d, s, id) {\r\n  |   var js, fjs = d.getElementsByTagName(s)[0];\r\n  |   if (d.getElementById(id)) return;\r\n  |   js = d.createElement(s); js.id = id;\r\n  |   js.src = \"\u002F\u002Fconnect.facebook.net\u002Fen_GB\u002Fsdk.js#xfbml=1&version=v2.8\";\r\n  |   fjs.parentNode.insertBefore(js, fjs);\r\n  | }(document, 'script', 'facebook-jssdk'));\r\n  | \r\n  | \u002F\u002F Google Analytics\r\n  | (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r\n  |   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n  |   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n  | })(window,document,'script','\u002F\u002Fwww.google-analytics.com\u002Fanalytics.js','ga');\r\n  | \r\n  | ga('create', 'UA-37159175-1', 'auto');\r\n  | ga('send', 'pageview');"};
var pug_indent = [];
;pug_debug_line = 1;pug_debug_filename = ".\u002Fpages\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fpages\u002Findex.pug";
pug_html = pug_html + "\n\u003Chtml\u003E";
;pug_debug_line = 1;pug_debug_filename = "templates\\partials\\head.pug";
pug_html = pug_html + "\n  \u003Chead\u003E";
;pug_debug_line = 2;pug_debug_filename = "templates\\partials\\head.pug";
pug_html = pug_html + "\n    \u003Ctitle\u003E";
;pug_debug_line = 2;pug_debug_filename = "templates\\partials\\head.pug";
pug_html = pug_html + "Langenium 2016 Rebuild\u003C\u002Ftitle\u003E";
;pug_debug_line = 3;pug_debug_filename = "templates\\partials\\head.pug";
pug_html = pug_html + "\n    \u003Clink href=\"dist\u002Fstyles.css\" rel=\"stylesheet\"\u003E\n  \u003C\u002Fhead\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fpages\u002Findex.pug";
pug_html = pug_html + "\n  \u003Cbody\u003E";
;pug_debug_line = 1;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n    \u003Cdiv id=\"fb-root\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 2;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n    \u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n      \u003Cheader class=\"row\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n        \u003Ch1 class=\"logo\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + " ";
;pug_debug_line = 5;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"\u002F\" title=\"Langenium\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Cimg src=\"logo.png\"\u003E\u003C\u002Fa\u003E\u003C\u002Fh1\u003E";
;pug_debug_line = 7;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n        \u003Cnav\u003E";
;pug_debug_line = 8;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n          \u003Cul\u003E";
;pug_debug_line = 9;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 10;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "About\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 11;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 12;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Status\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 13;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 14;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Gallery\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 15;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 16;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Wiki\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003C\u002Ful\u003E\n        \u003C\u002Fnav\u003E";
;pug_debug_line = 17;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n        \u003Cdiv class=\"fb-like\" data-href=\"https:\u002F\u002Fwww.facebook.com\u002FLangenium\u002F\" data-layout=\"button_count\" data-action=\"like\" data-size=\"small\" data-show-faces=\"true\" data-share=\"false\"\u003E\u003C\u002Fdiv\u003E\n      \u003C\u002Fheader\u003E";
;pug_debug_line = 18;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n      \u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n        \u003Cdiv class=\"hero\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + " ";
;pug_debug_line = 20;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n          \u003Ch1\u003E";
;pug_debug_line = 20;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Interactive Hero Area\u003C\u002Fh1\u003E\n        \u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n        \u003Cdiv class=\"call_to_action\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n          \u003Cul class=\"row\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 24;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Play\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 25;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 26;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Concept Art\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 27;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 28;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Storyline\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 29;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 30;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Github\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n      \u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n        \u003Cdiv class=\"news\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n          \u003Ch2\u003E";
;pug_debug_line = 33;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "News\u003C\u002Fh2\u003E### This is the title of a new article\n_27th of August 2016_\n\nBacon ipsum dolor amet frankfurter boudin capicola pig bacon sausage brisket beef cupim ground round. Pork belly ball tip spare ribs, andouille kielbasa jowl chicken capicola. \n\nTenderloin turkey ball tip swine, ham hock capicola sausage. Pork chop kielbasa jowl, beef ribs cow jerky leberkas biltong. Capicola sirloin corned beef pancetta rump pork chop meatloaf salami ground round ribeye sausage shoulder alcatra chuck.\n\n### Another article begins with this heading\n_25th of August 2016_\n\nPork belly jerky leberkas pork alcatra turducken fatback. Sausage ribeye shoulder doner shankle, ham hock pork chop ham frankfurter tongue. Tri-tip tail meatball chicken. Hamburger cow alcatra strip steak drumstick, sausage corned beef filet mignon pastrami shoulder brisket chuck pork belly prosciutto.\n        \u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n        \u003Cdiv class=\"most_popular\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n          \u003Ch2\u003E";
;pug_debug_line = 36;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Most Popular\u003C\u002Fh2\u003E";
;pug_debug_line = 37;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n          \u003Cul\u003E";
;pug_debug_line = 38;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 39;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n              \u003Ch3\u003E";
;pug_debug_line = 39;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + " ";
;pug_debug_line = 40;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Bacon ipsum dolor amet frankfurter boudin\u003C\u002Fa\u003E\u003C\u002Fh3\u003E\n            \u003C\u002Fli\u003E";
;pug_debug_line = 41;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 42;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n              \u003Ch3\u003E";
;pug_debug_line = 42;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + " ";
;pug_debug_line = 43;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Ham hock capicola sausage\u003C\u002Fa\u003E\u003C\u002Fh3\u003E\n            \u003C\u002Fli\u003E";
;pug_debug_line = 44;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 45;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n              \u003Ch3\u003E";
;pug_debug_line = 45;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + " ";
;pug_debug_line = 46;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Tri-tip tail meatball chicken\u003C\u002Fa\u003E\u003C\u002Fh3\u003E\n            \u003C\u002Fli\u003E";
;pug_debug_line = 47;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 48;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n              \u003Ch3\u003E";
;pug_debug_line = 48;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + " ";
;pug_debug_line = 49;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Hamburger cow alcatra strip steak drumstick\u003C\u002Fa\u003E\u003C\u002Fh3\u003E\n            \u003C\u002Fli\u003E";
;pug_debug_line = 50;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n            \u003Cli\u003E";
;pug_debug_line = 51;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\n              \u003Ch3\u003E";
;pug_debug_line = 51;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + " ";
;pug_debug_line = 52;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "templates\\layouts\\homepage.pug";
pug_html = pug_html + "Capicola sirloin corned beef pancetta rump pork chop\u003C\u002Fa\u003E\u003C\u002Fh3\u003E\n            \u003C\u002Fli\u003E\n          \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E";
;pug_debug_line = 1;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n  \u003Cscript src=\"vendor\u002Fjquery\u002Fdist\u002Fjquery.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 2;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n  \u003Cscript src=\"vendor\u002FLive2D-WebGL-SDK\u002Flib\u002Flive2d.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 3;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n  \u003Cscript src=\"vendor\u002Fthreejs\u002Fbuild\u002Fthree.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 4;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n  \u003Cscript src=\"vendor\u002FLive2D_ThreeJS\u002FLive2DRender.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 5;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n  \u003Cscript\u003E\n    ";
;pug_debug_line = 6;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\u002F\u002F Facebook Like Button.";
;pug_debug_line = 7;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 7;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "(function(d, s, id) {";
;pug_debug_line = 8;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 8;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "  var js, fjs = d.getElementsByTagName(s)[0];";
;pug_debug_line = 9;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 9;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "  if (d.getElementById(id)) return;";
;pug_debug_line = 10;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 10;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "  js = d.createElement(s); js.id = id;";
;pug_debug_line = 11;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 11;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "  js.src = \"\u002F\u002Fconnect.facebook.net\u002Fen_GB\u002Fsdk.js#xfbml=1&version=v2.8\";";
;pug_debug_line = 12;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 12;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "  fjs.parentNode.insertBefore(js, fjs);";
;pug_debug_line = 13;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 13;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "}(document, 'script', 'facebook-jssdk'));";
;pug_debug_line = 14;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 14;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + " ";
;pug_debug_line = 15;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 15;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\u002F\u002F Google Analytics";
;pug_debug_line = 16;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 16;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){";
;pug_debug_line = 17;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 17;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),";
;pug_debug_line = 18;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 18;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)";
;pug_debug_line = 19;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 19;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "})(window,document,'script','\u002F\u002Fwww.google-analytics.com\u002Fanalytics.js','ga');";
;pug_debug_line = 20;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 20;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + " ";
;pug_debug_line = 21;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 21;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "ga('create', 'UA-37159175-1', 'auto');";
;pug_debug_line = 22;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "\n    ";
;pug_debug_line = 22;pug_debug_filename = "templates\\partials\\vendor_scripts.pug";
pug_html = pug_html + "ga('send', 'pageview');\n  \u003C\u002Fscript\u003E\n\u003C\u002Fhtml\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}