// JQuery Twitter Feed. Coded by www.webdevdoor.com (2012) and modified from https://twitter.com/javascripts/blogger.js
$(document).ready(function(){function u(e){e=e.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,function(e){return'<a href="'+e+'" >'+e+"</a>"});e=e.replace(/\B@([_a-z0-9]+)/ig,function(e){return'<a href="http://twitter.com/'+e.substring(1)+'" style="font-weight:lighter;" >'+e.charAt(0)+e.substring(1)+"</a>"});return e}function a(e){var t=e.split(" ");e=t[1]+" "+t[2]+", "+t[5]+" "+t[3];var n=Date.parse(e),r=arguments.length>1?arguments[1]:new Date,i=parseInt((r.getTime()-n)/1e3),s=e.substr(4,2)+" "+e.substr(0,3);i+=r.getTimezoneOffset()*60;return i<60?"1m":i<120?"1m":i<3600?parseInt(i/60).toString()+"m":i<7200?"1h":i<86400?parseInt(i/3600).toString()+"h":i<172800?s:s}var e=2,t="eueram",n="EU ERAM",r=!1,i=!0,s=!0,o=!0;$.getJSON("lib/twitteroauth/get_tweets1.1.php",function(t){var n="";for(var o=0;o<e;o++){var a=t[o].user.name,f=t[o].user.screen_name,l=t[o].user.profile_image_url_https,c=t[o].text,h=!1,p=!1,d=t[o].id_str;if(t[o].entities.hasOwnProperty("media"))var v=t[o].entities.media[0].media_url;else var v="";if(typeof t[o].retweeted_status!="undefined"){l=t[o].retweeted_status.user.profile_image_url_https;a=t[o].retweeted_status.user.name;f=t[o].retweeted_status.user.screen_name;d=t[o].retweeted_status.id_str;h=!0}t[o].text.substr(0,1)=="@"&&(p=!0);if((i==1||h==0&&i==0)&&(r==1||r==0&&p==0)&&t[o].text.length>1){s==1&&(c=u(c));n+='<article class="col-xl-3 col-lg-4 col-sm-6 twitter twitter-'+o+'">';n+='<div class="global"><i class="fa fa-twitter"></i>';v!=""?n+='<img src="'+v+'" width="100%" height="auto" />':n+='<div class="comodi"></div>';n+='<footer class="twitt-footer serif"><p><strong><a href="https://twitter.com/'+f+'" >@'+f+"</a>:</strong> ";n+=c+"</p>";n+="</footer></div>";n+="</article>"}}$(".wrapper-inner").append(n)})});