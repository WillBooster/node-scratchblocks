/*
 * scratchblocks2
 * http://github.com/blob8108/scratchblocks2
 *
 * Copyright 2013, Tim Radvan
 * @license MIT
 * http://opensource.org/licenses/MIT
 */
var scratchblocks2=function($){"use strict";function assert(bool){if(!bool)throw"Assertion failed!"}var sb2={};var strings=sb2.strings={images:{},define:[],math:[],osis:[],click:[]};var english={code:"en",blocks:[],define:["define"],images:{left:"arrow-ccw",ccw:"arrow-ccw",right:"arrow-cw",cw:"arrow-cw",gf:"green-flag",flag:"green-flag","green flag":"green-flag"},math:["abs","floor","ceiling","sqrt","sin","cos","tan","asin","acos","atan","ln","log","e^","10^"],osis:["otherscriptsinsprite"],click:["when_clicked"]};var block_info_by_id={};var blockid_by_text={};var blockids=[];var block_images_by_text={};var english_blocks=[["motion"],["move_steps",[]],["turn@_degrees",["@arrow-ccw","@arrow-cw"]],["pointindirection_",[]],["pointtowards_",[]],["gotox:_y:_",[]],["goto_",[]],["glide_secstox:_y:_",[]],["changexby_",[]],["setxto_",[]],["changeyby_",[]],["setyto_",[]],["ifonedge,bounce",[]],["setrotationstyle_",[]],["xposition",[]],["yposition",[]],["direction",[]],["looks"],["say_for_secs",[]],["say_",[]],["think_for_secs",[]],["think_",[]],["show",[]],["hide",[]],["switchcostumeto_",[]],["nextcostume",[]],["switchbackdropto_",[]],["change_effectby_",[]],["set_effectto_",[]],["cleargraphiceffects",[]],["changesizeby_",[]],["setsizeto_%",[]],["gotofront",[]],["goback_layers",[]],["costume#",[]],["backdropname",[]],["size",[]],["switchbackdropto_andwait",[]],["nextbackdrop",[]],["backdrop#",[]],["switchtocostume_",[]],["switchtobackground_",[]],["nextbackground",[]],["background#",[]],["sound"],["playsound_",[]],["playsound_untildone",[]],["stopallsounds",[]],["playdrum_for_beats",[]],["restfor_beats",[]],["playnote_for_beats",[]],["setinstrumentto_",[]],["changevolumeby_",[]],["setvolumeto_%",[]],["volume",[]],["changetempoby_",[]],["settempoto_bpm",[]],["tempo",[]],["pen"],["clear",[]],["stamp",[]],["pendown",[]],["penup",[]],["setpencolorto_",[]],["changepencolorby_",[]],["setpencolorto_",[]],["changepenshadeby_",[]],["setpenshadeto_",[]],["changepensizeby_",[]],["setpensizeto_",[]],["variables"],["set_to_",[]],["change_by_",[]],["showvariable_",[]],["hidevariable_",[]],["list"],["add_to_",[]],["delete_of_",[]],["insert_at_of_",[]],["replaceitem_of_with_",[]],["item_of_",[]],["lengthof_",[]],["_contains_",[]],["showlist_",[]],["hidelist_",[]],["events"],["when@clicked",["hat","@green-flag"]],["when_keypressed",["hat"]],["whenthisspriteclicked",["hat"]],["whenbackdropswitchesto_",["hat"]],["when_>_",["hat"]],["whenIreceive_>_",["hat"]],["broadcast_",[]],["broadcast_andwait",[]],["when***clicked",["hat"]],["control"],["wait_secs",[]],["repeat_",["cstart"]],["forever",["cstart","cap"]],["if_then",["cstart"]],["else",["celse"]],["end",["cend"]],["waituntil_",[]],["repeatuntil_",["cstart"]],["stop_",["cap"]],["whenistartasaclone",["hat"]],["createcloneof_",[]],["deletethisclone",["cap"]],["if_",["cstart"]],["foreverif_",["cstart","cap"]],["stopscript",["cap"]],["stopall",["cap"]],["sensing"],["touching_?",[]],["touchingcolor_?",[]],["color_istouching?",[]],["distanceto_",[]],["ask_andwait",[]],["answer",[]],["key_pressed?",[]],["mousedown?",[]],["mousex",[]],["mousey",[]],["loudness",[]],["video_on_",[]],["turnvideo_",[]],["setvideotransparencyto_%",[]],["timer",[]],["resettimer",[]],["_of_",[]],["current_",[]],["dayssince2000",[]],["username",[]],["userid",[]],["loud?",[]],["operators"],["_+_",[]],["_-_",[]],["_*_",[]],["_/_",[]],["pickrandom_to_",[]],["[]<[]",[]],["[]=[]",[]],["[]>[]",[]],["_and_",[]],["_or_",[]],["not_",[]],["join__",[]],["letter_of_",[]],["lengthof_",[]],["_mod_",[]],["round_",[]],["_of_",[]],["purple"],["when_",["hat"]],["sensor_?",[]],["_sensorvalue",[]],["turnmotoronfor_secs",[]],["turnmotoron",[]],["turnmotoroff",[]],["setmotorpower_",[]],["setmotordirection_",[]],["whendistance<_",["hat"]],["whentilt=_",["hat"]],["distance",[]],["tilt",[]],["motoron",[]],["motoroff",[]],["motoronfor_seconds",[]],["motorpower_",[]],["motordirection_",[]],["grey"],["...",[]],["…",[]]];var category=null;for(var i=0;i<english_blocks.length;i++){if(english_blocks[i].length==1){category=english_blocks[i][0]}else{var block_and_flags=english_blocks[i],spec=block_and_flags[0],flags=block_and_flags[1];english.blocks.push(spec);blockids.push(spec);block_info_by_id[spec]={blockid:spec,category:category,flags:flags}}}load_language(english);function load_language(language){var iso_code=language.code;delete language.code;var block_spec_by_id={};for(var i=0;i<language.blocks.length;i++){var spec=language.blocks[i],blockid=blockids[i];blockid_by_text[minify_spec(spec)]=blockid;block_spec_by_id[blockid]=spec}language.blocks=block_spec_by_id;strings.define=strings.define.concat(language.define);strings.math=strings.math.concat(language.math);strings.osis=strings.osis.concat(language.osis);strings.click=strings.click.concat(language.click);for(var text in language.images){strings.images[text]=language.images[text]}}block_info_by_id["_of_"].hack=function(info,args){var func=strip_brackets(args[0]).replace(/ v$/,"");info.category=$.inArray(func,strings.math)>-1?"operators":"sensing"};block_info_by_id["lengthof_"].hack=function(info,args){info.category=/^\[.* v\]$/.test(args[0])?"list":"operators"};function find_block(text,args){var minitext=minify_spec(text);if(minitext in blockid_by_text){var blockid=blockid_by_text[minitext];var info=block_info_by_id[blockid];info.text=text;if(info.hack)info.hack(info,args);return info}for(var image_text in strings.images){if(text.indexOf(image_text)>-1){var new_text=text.replace(image_text,"@"),blockid=blockid_by_text[minify_spec(new_text)];if(blockid in block_info_by_id){var info=block_info_by_id[blockid],image=strings.images[image_text];if($.inArray("@"+image,info.flags)>-1){info.text=new_text;info.image_replacement=image;return info}}}}}function remove_diacritics(text){text=text.replace("ß","ss");var map=diacritics_removal_map;for(var i=0;i<map.length;i++){text=text.replace(map[i].letters,map[i].base)}return text}function minify(text){text=text.replace(/[ ,%?:]/g,"").toLowerCase();if(window.diacritics_removal_map)text=remove_diacritics(text);return text}function minify_spec(text){return minify(text).replace(/_/g,"")}var DATA_INSERTS=["string","dropdown","number","number-dropdown","color"];function arg_fits_shape($arg,insert_shape){var arg_shape=get_arg_shape($arg);if(!$arg){return false}if(arg_shape===insert_shape){return true}if($.inArray(arg_shape,["reporter","embedded"])!==-1){arg_shape="block"}switch(insert_shape){case"math-function":var func=$arg.text().replace(/[ ]/g,"").toLowerCase();return $.inArray(func,MATH_FUNCTIONS)!==-1;case"dropdown":return arg_shape=="block";case"number":return $.inArray(arg_shape,["block","string"])!==-1;case"string":return $.inArray(arg_shape,["block","number"])!==-1;default:return false}}function _find_block(text,$arg_list){text=strip_block_text(text);return{classes:block_flags[text]};var blocks=get_blocks_db(),block,poss_blocks,classes=[],arg_classes=[];poss_blocks=blocks[text];if(poss_blocks!==undefined){if(poss_blocks.length>1){$.each(poss_blocks,function(i,poss_block){var category=poss_block[0][0],need_args=poss_block[1],fits=true,j;for(j=0;j<need_args.length;j++){if(!arg_fits_shape($arg_list[j],need_args[j])){fits=false;break}}if(fits){block=poss_block}})}if(block===undefined){block=poss_blocks[0]}}if(block===undefined){if(/^when.*clicked$/.test(text)){if(blocks["whenthisspriteclicked"]){block=blocks["whenthisspriteclicked"][0]}}}if(block){classes=block[0];$.each(block[1],function(i,shape){if(shape==="list-dropdown"||shape==="math-function"){arg_classes.push(shape)}else{arg_classes.push("")}})}return[classes,arg_classes]}var BRACKETS="([<)]>";sb2.parse=function(selector,options){selector=selector||"pre.blocks";options=options||{inline:false};$(selector).each(function(i,el){var $el=$(el),$container=$("<div>"),code,scripts,html=$el.html();html=html.replace(/<br>\s?|\n|\r\n|\r/gi,"\n");code=$("<pre>"+html+"</pre>").text();if(options.inline){code=code.replace("\n","")}scripts=render(code);$el.text("");$el.append($container);$container.addClass("scratchblocks2-container");if(options.inline){$container.addClass("inline-block")}$.each(scripts,function(i,$script){$container.append($script)})})};function render(code){var scripts=[],$script,$current,nesting=0,lines=code.split(/\n/),line,$block,$cwrap,$cmouth,$comment,$last_comment,comment_text,one_only,$first,i;function add_cend($block,do_comment){$cmouth=$current;$cwrap=$cmouth.parent();assert($cwrap.hasClass("cwrap"));$cwrap.append($block);$current=$cwrap.parent();nesting-=1;if($comment&&do_comment){$cwrap.append($comment);$comment=null}$block.removeClass(get_block_category($block));$block.addClass(get_block_category($cwrap));if($cmouth.find("> :last-child").hasClass("cap")){$block.addClass("capend")}}function new_script(){while(nesting>0){var $cend=$("<div><span>end</span></div>").addClass("stack").addClass("cend").addClass("control");add_cend($cend,false)}if($script!==undefined&&$script.children().length>0){scripts.push($script)}$script=$("<div>").addClass("script");$current=$script;nesting=0;$last_comment=null}new_script();for(i=0;i<lines.length;i++){line=lines[i];if(line.trim()===""&&nesting===0){new_script();continue}$comment=null;comment_text=null;if(line.indexOf("//")>-1){comment_text=line.substr(line.indexOf("//")+2).trim();line=line.substr(0,line.indexOf("//"))}$block=render_block(line,"stack");if($block){$last_comment=null}if(comment_text){if($last_comment){$last_comment.children().text($last_comment.children().text()+"\n"+comment_text)}else{$comment=render_comment(comment_text)}}if($block){one_only=false;if($block.hasClass("hat")||$block.hasClass("custom-definition")){new_script();if($comment){$comment.addClass("to-hat");if($block.hasClass("custom-definition")){$comment.addClass("to-custom-definition")}}}else if($block.hasClass("boolean")||$block.hasClass("embedded")||$block.hasClass("reporter")){new_script();one_only=true;if($comment){$comment.addClass("to-reporter")}}if($comment){$comment.addClass("attached")}if($block.hasClass("cstart")){$cwrap=$("<div>").addClass("cwrap");$current.append($cwrap);$cwrap.append($block);if($comment){$cwrap.append($comment);$comment=null}$cmouth=$("<div>").addClass("cmouth");$cwrap.append($cmouth);$current=$cmouth;$cwrap.addClass(get_block_category($block));if($block.hasClass("cap")){$cwrap.addClass("cap");$block.removeClass("cap")}nesting+=1}else if($block.hasClass("celse")){if(nesting>0){$cwrap=$current.parent();assert($cwrap.hasClass("cwrap"));$cwrap.append($block);if($comment){$cwrap.append($comment);$comment=null}$cmouth=$cwrap.find("."+"cmouth");if($cmouth.find("> :last-child").hasClass("cap")){$block.addClass("capend")}$cmouth=$("<div>").addClass("cmouth");$cwrap.append($cmouth);$current=$cmouth;$block.removeClass(get_block_category($block));$block.addClass(get_block_category($cwrap))}else{$current.append($block)}}else if($block.hasClass("cend")){if(nesting>0){add_cend($block,true);if(nesting===0&&$cwrap.hasClass("cap")){new_script()}}else{$current.append($block)}}else{$current.append($block)}if($comment){if(/^category=[a-z]+$/i.test(comment_text)){var category=comment_text.substr(9);if($.inArray(category,CLASSES.category)>-1){$block.addClass(category)}}else{$current.append($comment)}}if(one_only||nesting===0&&$block.hasClass("cap")){new_script()}}else{if($comment){if(nesting>0){$current.append($comment)}else{new_script();$current.append($comment);new_script()}}}if($comment){$last_comment=$comment}}new_script();var list_names=[],custom_blocks_text=[];for(i=0;i<scripts.length;i++){$script=scripts[i];$script.find(".list-dropdown").each(function(i,list){var list_name=$(list).text();list_names.push(list_name)})}for(i=0;i<scripts.length;i++){$script=scripts[i];var custom_arg_names=[];$first=$script.children().first();if($first.hasClass("custom-definition")){$first.find(".custom-arg").each(function(i,arg){custom_arg_names.push($(arg).text())});custom_blocks_text.push(get_block_text($first.find(".outline").clone()))}$script.find(".variables.reporter").each(function(i,variable){var $variable=$(variable);var var_name=$variable.text();if($.inArray(var_name,custom_arg_names)>-1){$variable.removeClass("variables").addClass("custom-arg")}else if($.inArray(var_name,list_names)>-1){$variable.removeClass("variables").addClass("list")}})}for(i=0;i<scripts.length;i++){$script=scripts[i];$script.find(".obsolete.stack").each(function(i,block){$block=$(block);var text=get_block_text($block.clone());if($.inArray(text,custom_blocks_text)>-1){$block.removeClass("obsolete").addClass("custom")}})}return scripts}function render_comment(text){var $comment=$("<div>").addClass("comment").append($("<div>").text(text.trim()));return $comment}function render_block(code,need_shape){var $block=$("<div>"),shape,category="",bracket="",is_dropdown=false,pieces=[],text="",classes=[];if(need_shape===undefined){need_shape=""}shape=need_shape;code=code.trim();if(code===""){return}if(need_shape==="stack"&&split_into_pieces(code).length>1){}else{if(is_open_bracket(code[0])){bracket=code[0];code=strip_brackets(code)}if(bracket!=="["){code=code.trim()}}if($.inArray(code.split(" ")[0],strings.define)>-1){var define_text=code.split(" ")[0];shape="custom-definition";code=code.replace(/^[^ ]+ /,"")}if(bracket==="["){pieces=[code]}else{pieces=split_into_pieces(code)}if(shape!=="custom-definition"){if(pieces.length>1){switch(bracket){case"(":shape="embedded";break;case"<":shape="boolean";break;default:assert(shape==="stack");break}}else{switch(bracket){case"(":if(/^(-?[0-9.]+( v)?)?$/i.test(code)){shape="number";if(/ v$/i.test(code)){is_dropdown=true;code=code.substr(0,code.length-2);shape="number-dropdown"}}else if(/ v$/i.test(code)){is_dropdown=true;code=code.substr(0,code.length-2);shape="number-dropdown"}else{shape="reporter"}break;case"[":if(/^#[A-Fa-f0-9]{3,6}$/.test(code)){shape="color"}else{shape="string";if(/ v$/i.test(code)){is_dropdown=true;code=code.substr(0,code.length-2);shape="dropdown"}}break;case"<":shape="boolean";category="operators";break;default:break}}}if(shape==="reporter"){if(pieces.length===1&&!is_open_bracket(pieces[0][0])){category="variables"}else{shape="embedded"}}$block.addClass(shape);if(code.length===0){code=" ";pieces=[code];$block.addClass("empty")}if(shape==="color"){$block.css({"background-color":code});$block.text(" ");return $block}function is_block(piece){return piece.length>1&&(is_open_bracket(piece[0])||is_close_bracket(piece[0]))}var args=[];for(var i=0;i<pieces.length;i++){var piece=pieces[i];if(is_block(piece)){args.push(piece);text+="_"}else{text+=piece}}var info;if($.inArray(shape,DATA_INSERTS)>-1){}else{info=find_block(text,args);if(info){var pieces=[];var text_parts=info.text.split(/([_@])/);for(var i=0;i<text_parts.length;i++){var part=text_parts[i];if(part=="_")part=args.shift();pieces.push(part)}console.log(pieces)}}var $arg_list=[];if(shape==="custom-definition"){$block.append(define_text);var $outline=$("<div>").addClass("outline");$block.append($outline);$.each(pieces,function(i,piece){if(is_block(piece)){var $arg=$("<div>").addClass("custom-arg");if(piece[0]==="<"){$arg.addClass("boolean")}$arg.text(strip_brackets(piece));$outline.append($arg)}else{$outline.append(document.createTextNode(piece))}})}else if(pieces.length===1){if(code==" "){$block.html("&nbsp;")}else{$block.text(code)}}else{$.each(pieces,function(i,piece){var $arg;if(is_block(piece)){$arg=render_block(piece);$block.append($arg);$arg_list.push($arg)}else if(piece==="@"&&info.image_replacement){var $image=$("<span>").addClass(info.image_replacement);$block.append($image)}else{$block.append(document.createTextNode(piece))}})}if(shape==="custom-definition"){$block.addClass("custom")}else if($.inArray(shape,DATA_INSERTS)>-1){}else{if(!info){if(category!==""){$block.addClass(category)}else{$block.addClass("obsolete")}}else{$block.addClass(info.category);$.each(info.flags,function(i,name){$block.addClass(name)});if($.inArray("hat",info.classes)>-1){$block.removeClass("stack")}}}if($block.hasClass("cend")){var html=$block.html();$block.html("").append($("<span>").html(html))}if(need_shape==="stack"&&$.inArray(shape,DATA_INSERTS)>-1){var $insert=$block;$block=$("<div>").addClass("stack").addClass("obsolete").append($insert)}if(info)$block.category=info.category;$block.shape=shape;return $block}function split_into_pieces(code){var pieces=[],piece="",matching_bracket="",nesting=[],chr,i;for(i=0;i<code.length;i++){chr=code[i];if(nesting.length>0){piece+=chr;if(is_open_bracket(chr)&&!is_lt_gt(code,i)&&nesting[nesting.length-1]!=="["){nesting.push(chr);matching_bracket=get_matching_bracket(chr)}else if(chr===matching_bracket&&!is_lt_gt(code,i)){nesting.pop();if(nesting.length===0){pieces.push(piece);piece=""}else{matching_bracket=get_matching_bracket(nesting[nesting.length-1])}}}else{if(is_open_bracket(chr)&&!is_lt_gt(code,i)){nesting.push(chr);matching_bracket=get_matching_bracket(chr);if(piece){pieces.push(piece)}piece=""}piece+=chr}}if(piece){pieces.push(piece)}return pieces}function strip_brackets(code){if(is_open_bracket(code[0])){var bracket=code[0];if(code[code.length-1]===get_matching_bracket(bracket)){code=code.substr(0,code.length-1)}code=code.substr(1)}return code}function is_open_bracket(chr){var bracket_index=BRACKETS.indexOf(chr);return-1<bracket_index&&bracket_index<3}function is_close_bracket(chr){return 2<BRACKETS.indexOf(chr)}function get_matching_bracket(chr){return BRACKETS[BRACKETS.indexOf(chr)+3]}function is_lt_gt(code,index){var chr,i;if(code[index]!=="<"&&code[index]!==">"||index===code.length||index===0){return false}if(/^whendistance$/i.test(strip_block_text(code.substr(0,index)))){return true}for(i=index+1;i<code.length;i++){chr=code[i];if(is_open_bracket(chr)){break}if(chr!==" "){return false}}for(i=index-1;i>-1;i--){chr=code[i];if(is_close_bracket(chr)){break}if(chr!==" "){return false}}return true}function get_block_category($block){return $block.category}function get_arg_shape($arg){if(!$arg){return""}return $arg.shape}function strip_block_text(text){var map=diacritics_removal_map,i;text=text.replace(/[ ,%?:]/g,"").toLowerCase();text=text.replace("ß","ss");for(i=0;i<map.length;i++){text=text.replace(map[i].letters,map[i].base)}return text}function get_block_text($block){$block.children().remove();return strip_block_text($block.text())}return sb2}(jQuery);diacritics_removal_map=[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}];