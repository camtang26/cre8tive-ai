import{g as e,c as n}from"./vendor.CQxHiMzN.js";function t(e,n){for(var t=0;t<n.length;t++){const o=n[t];if("string"!=typeof o&&!Array.isArray(o))for(const n in o)if("default"!==n&&!(n in e)){const t=Object.getOwnPropertyDescriptor(o,n);t&&Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:()=>o[n]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,r={};
/*! howler.js v2.2.3 | (c) 2013-2020, James Simpson of GoldFire Studios | MIT License | howlerjs.com */o=r,function(){var e=function(){this.init()};e.prototype={init:function(){var e=this||t;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var n=this||t;if(e=parseFloat(e),n.ctx||l(),void 0!==e&&e>=0&&e<=1){if(n._volume=e,n._muted)return n;n.usingWebAudio&&n.masterGain.gain.setValueAtTime(e,t.ctx.currentTime);for(var o=0;o<n._howls.length;o++)if(!n._howls[o]._webAudio)for(var r=n._howls[o]._getSoundIds(),a=0;a<r.length;a++){var u=n._howls[o]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return n}return n._volume},mute:function(e){var n=this||t;n.ctx||l(),n._muted=e,n.usingWebAudio&&n.masterGain.gain.setValueAtTime(e?0:n._volume,t.ctx.currentTime);for(var o=0;o<n._howls.length;o++)if(!n._howls[o]._webAudio)for(var r=n._howls[o]._getSoundIds(),a=0;a<r.length;a++){var u=n._howls[o]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}return n},stop:function(){for(var e=this||t,n=0;n<e._howls.length;n++)e._howls[n].stop();return e},unload:function(){for(var e=this||t,n=e._howls.length-1;n>=0;n--)e._howls[n].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,l()),e},codecs:function(e){return(this||t)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||t;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{void 0===(new Audio).oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{(new Audio).muted&&(e.noAudio=!0)}catch(o){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||t,n=null;try{n="undefined"!=typeof Audio?new Audio:null}catch(s){return e}if(!n||"function"!=typeof n.canPlayType)return e;var o=n.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator?e._navigator.userAgent:"",a=r.match(/OPR\/([0-6].)/g),u=a&&parseInt(a[0].split("/")[1],10)<33,d=-1!==r.indexOf("Safari")&&-1===r.indexOf("Chrome"),i=r.match(/Version\/(.*?) /),_=d&&i&&parseInt(i[1],10)<15;return e._codecs={mp3:!(u||!o&&!n.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!o,opus:!!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(n.canPlayType('audio/wav; codecs="1"')||n.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!n.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!n.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(n.canPlayType("audio/x-m4a;")||n.canPlayType("audio/m4a;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(n.canPlayType("audio/x-m4b;")||n.canPlayType("audio/m4b;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(n.canPlayType("audio/x-mp4;")||n.canPlayType("audio/mp4;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!(_||!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!(_||!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(n.canPlayType("audio/x-flac;")||n.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||t;if(!e._audioUnlocked&&e.ctx){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var n=function(t){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var o=new Audio;o._unlocked=!0,e._releaseHtml5Audio(o)}catch(_){e.noAudio=!0;break}for(var r=0;r<e._howls.length;r++)if(!e._howls[r]._webAudio)for(var a=e._howls[r]._getSoundIds(),u=0;u<a.length;u++){var d=e._howls[r]._soundById(a[u]);d&&d._node&&!d._node._unlocked&&(d._node._unlocked=!0,d._node.load())}e._autoResume();var i=e.ctx.createBufferSource();i.buffer=e._scratchBuffer,i.connect(e.ctx.destination),void 0===i.start?i.noteOn(0):i.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),i.onended=function(){i.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",n,!0),document.removeEventListener("touchend",n,!0),document.removeEventListener("click",n,!0),document.removeEventListener("keydown",n,!0);for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("unlock")}};return document.addEventListener("touchstart",n,!0),document.addEventListener("touchend",n,!0),document.addEventListener("click",n,!0),document.addEventListener("keydown",n,!0),e}},_obtainHtml5Audio:function(){var e=this||t;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var n=(new Audio).play();return n&&"undefined"!=typeof Promise&&(n instanceof Promise||"function"==typeof n.then)&&n.catch((function(){})),new Audio},_releaseHtml5Audio:function(e){var n=this||t;return e._unlocked&&n._html5AudioPool.push(e),n},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&t.usingWebAudio){for(var n=0;n<e._howls.length;n++)if(e._howls[n]._webAudio)for(var o=0;o<e._howls[n]._sounds.length;o++)if(!e._howls[n]._sounds[o]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout((function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var n=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(n,n)}}),3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&t.usingWebAudio)return"running"===e.state&&"interrupted"!==e.ctx.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state||"running"===e.state&&"interrupted"===e.ctx.state?(e.ctx.resume().then((function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")})),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var t=new e,r=function(e){e.src&&0!==e.src.length&&this.init(e)};r.prototype={init:function(e){var n=this;return t.ctx||l(),n._autoplay=e.autoplay||!1,n._format="string"!=typeof e.format?e.format:[e.format],n._html5=e.html5||!1,n._muted=e.mute||!1,n._loop=e.loop||!1,n._pool=e.pool||5,n._preload="boolean"!=typeof e.preload&&"metadata"!==e.preload||e.preload,n._rate=e.rate||1,n._sprite=e.sprite||{},n._src="string"!=typeof e.src?e.src:[e.src],n._volume=void 0!==e.volume?e.volume:1,n._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:!(!e.xhr||!e.xhr.withCredentials)&&e.xhr.withCredentials},n._duration=0,n._state="unloaded",n._sounds=[],n._endTimers={},n._queue=[],n._playLock=!1,n._onend=e.onend?[{fn:e.onend}]:[],n._onfade=e.onfade?[{fn:e.onfade}]:[],n._onload=e.onload?[{fn:e.onload}]:[],n._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],n._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],n._onpause=e.onpause?[{fn:e.onpause}]:[],n._onplay=e.onplay?[{fn:e.onplay}]:[],n._onstop=e.onstop?[{fn:e.onstop}]:[],n._onmute=e.onmute?[{fn:e.onmute}]:[],n._onvolume=e.onvolume?[{fn:e.onvolume}]:[],n._onrate=e.onrate?[{fn:e.onrate}]:[],n._onseek=e.onseek?[{fn:e.onseek}]:[],n._onunlock=e.onunlock?[{fn:e.onunlock}]:[],n._onresume=[],n._webAudio=t.usingWebAudio&&!n._html5,void 0!==t.ctx&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(n),n._autoplay&&n._queue.push({event:"play",action:function(){n.play()}}),n._preload&&"none"!==n._preload&&n.load(),n},load:function(){var e=this,n=null;if(!t.noAudio){"string"==typeof e._src&&(e._src=[e._src]);for(var o=0;o<e._src.length;o++){var r,u;if(e._format&&e._format[o])r=e._format[o];else{if("string"!=typeof(u=e._src[o])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}(r=/^data:audio\/([^;,]+);/i.exec(u))||(r=/\.([^.]+)$/.exec(u.split("?",1)[0])),r&&(r=r[1].toLowerCase())}if(r&&t.codecs(r)){n=e._src[o];break}}return n?(e._src=n,e._state="loading","https:"===window.location.protocol&&"http:"===n.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new a(e),e._webAudio&&d(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")}e._emit("loaderror",null,"No audio support.")},play:function(e,n){var o=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===o._state&&!o._sprite[e])return null;if(void 0===e&&(e="__default",!o._playLock)){for(var a=0,u=0;u<o._sounds.length;u++)o._sounds[u]._paused&&!o._sounds[u]._ended&&(a++,r=o._sounds[u]._id);1===a?e=null:r=null}}var d=r?o._soundById(r):o._inactiveSound();if(!d)return null;if(r&&!e&&(e=d._sprite||"__default"),"loaded"!==o._state){d._sprite=e,d._ended=!1;var i=d._id;return o._queue.push({event:"play",action:function(){o.play(i)}}),i}if(r&&!d._paused)return n||o._loadQueue("play"),d._id;o._webAudio&&t._autoResume();var _=Math.max(0,d._seek>0?d._seek:o._sprite[e][0]/1e3),s=Math.max(0,(o._sprite[e][0]+o._sprite[e][1])/1e3-_),l=1e3*s/Math.abs(d._rate),c=o._sprite[e][0]/1e3,f=(o._sprite[e][0]+o._sprite[e][1])/1e3;d._sprite=e,d._ended=!1;var p=function(){d._paused=!1,d._seek=_,d._start=c,d._stop=f,d._loop=!(!d._loop&&!o._sprite[e][2])};if(!(_>=f)){var m=d._node;if(o._webAudio){var v=function(){o._playLock=!1,p(),o._refreshBuffer(d);var e=d._muted||o._muted?0:d._volume;m.gain.setValueAtTime(e,t.ctx.currentTime),d._playStart=t.ctx.currentTime,void 0===m.bufferSource.start?d._loop?m.bufferSource.noteGrainOn(0,_,86400):m.bufferSource.noteGrainOn(0,_,s):d._loop?m.bufferSource.start(0,_,86400):m.bufferSource.start(0,_,s),l!==1/0&&(o._endTimers[d._id]=setTimeout(o._ended.bind(o,d),l)),n||setTimeout((function(){o._emit("play",d._id),o._loadQueue()}),0)};"running"===t.state&&"interrupted"!==t.ctx.state?v():(o._playLock=!0,o.once("resume",v),o._clearTimer(d._id))}else{var h=function(){m.currentTime=_,m.muted=d._muted||o._muted||t._muted||m.muted,m.volume=d._volume*t.volume(),m.playbackRate=d._rate;try{var r=m.play();if(r&&"undefined"!=typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(o._playLock=!0,p(),r.then((function(){o._playLock=!1,m._unlocked=!0,n?o._loadQueue():o._emit("play",d._id)})).catch((function(){o._playLock=!1,o._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),d._ended=!0,d._paused=!0}))):n||(o._playLock=!1,p(),o._emit("play",d._id)),m.playbackRate=d._rate,m.paused)return void o._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||d._loop?o._endTimers[d._id]=setTimeout(o._ended.bind(o,d),l):(o._endTimers[d._id]=function(){o._ended(d),m.removeEventListener("ended",o._endTimers[d._id],!1)},m.addEventListener("ended",o._endTimers[d._id],!1))}catch(a){o._emit("playerror",d._id,a)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===m.src&&(m.src=o._src,m.load());var y=window&&window.ejecta||!m.readyState&&t._navigator.isCocoonJS;if(m.readyState>=3||y)h();else{o._playLock=!0,o._state="loading";var g=function(){o._state="loaded",h(),m.removeEventListener(t._canPlayEvent,g,!1)};m.addEventListener(t._canPlayEvent,g,!1),o._clearTimer(d._id)}}return d._id}o._ended(d)},pause:function(e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var t=n._getSoundIds(e),o=0;o<t.length;o++){n._clearTimer(t[o]);var r=n._soundById(t[o]);if(r&&!r._paused&&(r._seek=n.seek(t[o]),r._rateSeek=0,r._paused=!0,n._stopFade(t[o]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"stop",action:function(){t.stop(e)}}),t;for(var o=t._getSoundIds(e),r=0;r<o.length;r++){t._clearTimer(o[r]);var a=t._soundById(o[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,t._stopFade(o[r]),a._node&&(t._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),t._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause(),a._node.duration===1/0&&t._clearSound(a._node))),n||t._emit("stop",a._id))}return t},mute:function(e,n){var o=this;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"mute",action:function(){o.mute(e,n)}}),o;if(void 0===n){if("boolean"!=typeof e)return o._muted;o._muted=e}for(var r=o._getSoundIds(n),a=0;a<r.length;a++){var u=o._soundById(r[a]);u&&(u._muted=e,u._interval&&o._stopFade(u._id),o._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,t.ctx.currentTime):u._node&&(u._node.muted=!!t._muted||e),o._emit("mute",u._id))}return o},volume:function(){var e,n,o,r=this,a=arguments;if(0===a.length)return r._volume;if(1===a.length||2===a.length&&void 0===a[1]?r._getSoundIds().indexOf(a[0])>=0?n=parseInt(a[0],10):e=parseFloat(a[0]):a.length>=2&&(e=parseFloat(a[0]),n=parseInt(a[1],10)),!(void 0!==e&&e>=0&&e<=1))return(o=n?r._soundById(n):r._sounds[0])?o._volume:0;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,a)}}),r;void 0===n&&(r._volume=e),n=r._getSoundIds(n);for(var u=0;u<n.length;u++)(o=r._soundById(n[u]))&&(o._volume=e,a[2]||r._stopFade(n[u]),r._webAudio&&o._node&&!o._muted?o._node.gain.setValueAtTime(e,t.ctx.currentTime):o._node&&!o._muted&&(o._node.volume=e*t.volume()),r._emit("volume",o._id));return r},fade:function(e,n,o,r){var a=this;if("loaded"!==a._state||a._playLock)return a._queue.push({event:"fade",action:function(){a.fade(e,n,o,r)}}),a;e=Math.min(Math.max(0,parseFloat(e)),1),n=Math.min(Math.max(0,parseFloat(n)),1),o=parseFloat(o),a.volume(e,r);for(var u=a._getSoundIds(r),d=0;d<u.length;d++){var i=a._soundById(u[d]);if(i){if(r||a._stopFade(u[d]),a._webAudio&&!i._muted){var _=t.ctx.currentTime,s=_+o/1e3;i._volume=e,i._node.gain.setValueAtTime(e,_),i._node.gain.linearRampToValueAtTime(n,s)}a._startFadeInterval(i,e,n,o,u[d],void 0===r)}}return a},_startFadeInterval:function(e,n,t,o,r,a){var u=this,d=n,i=t-n,_=Math.abs(i/.01),s=Math.max(4,_>0?o/_:o),l=Date.now();e._fadeTo=t,e._interval=setInterval((function(){var r=(Date.now()-l)/o;l=Date.now(),d+=i*r,d=Math.round(100*d)/100,d=i<0?Math.max(t,d):Math.min(t,d),u._webAudio?e._volume=d:u.volume(d,e._id,!0),a&&(u._volume=d),(t<n&&d<=t||t>n&&d>=t)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,u.volume(t,e._id),u._emit("fade",e._id))}),s)},_stopFade:function(e){var n=this,o=n._soundById(e);return o&&o._interval&&(n._webAudio&&o._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(o._interval),o._interval=null,n.volume(o._fadeTo,e),o._fadeTo=null,n._emit("fade",e)),n},loop:function(){var e,n,t,o=this,r=arguments;if(0===r.length)return o._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(t=o._soundById(parseInt(r[0],10)))&&t._loop;e=r[0],o._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=o._getSoundIds(n),u=0;u<a.length;u++)(t=o._soundById(a[u]))&&(t._loop=e,o._webAudio&&t._node&&t._node.bufferSource&&(t._node.bufferSource.loop=e,e&&(t._node.bufferSource.loopStart=t._start||0,t._node.bufferSource.loopEnd=t._stop,o.playing(a[u])&&(o.pause(a[u],!0),o.play(a[u],!0)))));return o},rate:function(){var e,n,o,r=this,a=arguments;if(0===a.length?n=r._sounds[0]._id:1===a.length?r._getSoundIds().indexOf(a[0])>=0?n=parseInt(a[0],10):e=parseFloat(a[0]):2===a.length&&(e=parseFloat(a[0]),n=parseInt(a[1],10)),"number"!=typeof e)return(o=r._soundById(n))?o._rate:r._rate;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,a)}}),r;void 0===n&&(r._rate=e),n=r._getSoundIds(n);for(var u=0;u<n.length;u++)if(o=r._soundById(n[u])){r.playing(n[u])&&(o._rateSeek=r.seek(n[u]),o._playStart=r._webAudio?t.ctx.currentTime:o._playStart),o._rate=e,r._webAudio&&o._node&&o._node.bufferSource?o._node.bufferSource.playbackRate.setValueAtTime(e,t.ctx.currentTime):o._node&&(o._node.playbackRate=e);var d=r.seek(n[u]),i=1e3*((r._sprite[o._sprite][0]+r._sprite[o._sprite][1])/1e3-d)/Math.abs(o._rate);!r._endTimers[n[u]]&&o._paused||(r._clearTimer(n[u]),r._endTimers[n[u]]=setTimeout(r._ended.bind(r,o),i)),r._emit("rate",o._id)}return r},seek:function(){var e,n,o=this,r=arguments;if(0===r.length?o._sounds.length&&(n=o._sounds[0]._id):1===r.length?o._getSoundIds().indexOf(r[0])>=0?n=parseInt(r[0],10):o._sounds.length&&(n=o._sounds[0]._id,e=parseFloat(r[0])):2===r.length&&(e=parseFloat(r[0]),n=parseInt(r[1],10)),void 0===n)return 0;if("number"==typeof e&&("loaded"!==o._state||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,r)}}),o;var a=o._soundById(n);if(a){if(!("number"==typeof e&&e>=0)){if(o._webAudio){var u=o.playing(n)?t.ctx.currentTime-a._playStart:0,d=a._rateSeek?a._rateSeek-a._seek:0;return a._seek+(d+u*Math.abs(a._rate))}return a._node.currentTime}var i=o.playing(n);i&&o.pause(n,!0),a._seek=e,a._ended=!1,o._clearTimer(n),o._webAudio||!a._node||isNaN(a._node.duration)||(a._node.currentTime=e);var _=function(){i&&o.play(n,!0),o._emit("seek",n)};if(i&&!o._webAudio){var s=function(){o._playLock?setTimeout(s,0):_()};setTimeout(s,0)}else _()}return o},playing:function(e){var n=this;if("number"==typeof e){var t=n._soundById(e);return!!t&&!t._paused}for(var o=0;o<n._sounds.length;o++)if(!n._sounds[o]._paused)return!0;return!1},duration:function(e){var n=this,t=n._duration,o=n._soundById(e);return o&&(t=n._sprite[o._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,n=e._sounds,o=0;o<n.length;o++)n[o]._paused||e.stop(n[o]._id),e._webAudio||(e._clearSound(n[o]._node),n[o]._node.removeEventListener("error",n[o]._errorFn,!1),n[o]._node.removeEventListener(t._canPlayEvent,n[o]._loadFn,!1),n[o]._node.removeEventListener("ended",n[o]._endFn,!1),t._releaseHtml5Audio(n[o]._node)),delete n[o]._node,e._clearTimer(n[o]._id);var r=t._howls.indexOf(e);r>=0&&t._howls.splice(r,1);var a=!0;for(o=0;o<t._howls.length;o++)if(t._howls[o]._src===e._src||e._src.indexOf(t._howls[o]._src)>=0){a=!1;break}return u&&a&&delete u[e._src],t.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,t,o){var r=this["_on"+e];return"function"==typeof n&&r.push(o?{id:t,fn:n,once:o}:{id:t,fn:n}),this},off:function(e,n,t){var o=this,r=o["_on"+e],a=0;if("number"==typeof n&&(t=n,n=null),n||t)for(a=0;a<r.length;a++){var u=t===r[a].id;if(n===r[a].fn&&u||!n&&u){r.splice(a,1);break}}else if(e)o["_on"+e]=[];else{var d=Object.keys(o);for(a=0;a<d.length;a++)0===d[a].indexOf("_on")&&Array.isArray(o[d[a]])&&(o[d[a]]=[])}return o},once:function(e,n,t){return this.on(e,n,t,1),this},_emit:function(e,n,t){for(var o=this,r=o["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,t)}.bind(o,r[a].fn),0),r[a].once&&o.off(e,r[a].fn,r[a].id));return o._loadQueue(e),o},_loadQueue:function(e){var n=this;if(n._queue.length>0){var t=n._queue[0];t.event===e&&(n._queue.shift(),n._loadQueue()),e||t.action()}return n},_ended:function(e){var n=this,o=e._sprite;if(!n._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(n._ended.bind(n,e),100),n;var r=!(!e._loop&&!n._sprite[o][2]);if(n._emit("end",e._id),!n._webAudio&&r&&n.stop(e._id,!0).play(e._id),n._webAudio&&r){n._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=t.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);n._endTimers[e._id]=setTimeout(n._ended.bind(n,e),a)}return n._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,n._clearTimer(e._id),n._cleanBuffer(e._node),t._autoSuspend()),n._webAudio||r||n.stop(e._id,!0),n},_clearTimer:function(e){var n=this;if(n._endTimers[e]){if("function"!=typeof n._endTimers[e])clearTimeout(n._endTimers[e]);else{var t=n._soundById(e);t&&t._node&&t._node.removeEventListener("ended",n._endTimers[e],!1)}delete n._endTimers[e]}return n},_soundById:function(e){for(var n=this,t=0;t<n._sounds.length;t++)if(e===n._sounds[t]._id)return n._sounds[t];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new a(e)},_drain:function(){var e=this,n=e._pool,t=0,o=0;if(!(e._sounds.length<n)){for(o=0;o<e._sounds.length;o++)e._sounds[o]._ended&&t++;for(o=e._sounds.length-1;o>=0;o--){if(t<=n)return;e._sounds[o]._ended&&(e._webAudio&&e._sounds[o]._node&&e._sounds[o]._node.disconnect(0),e._sounds.splice(o,1),t--)}}},_getSoundIds:function(e){if(void 0===e){for(var n=[],t=0;t<this._sounds.length;t++)n.push(this._sounds[t]._id);return n}return[e]},_refreshBuffer:function(e){return e._node.bufferSource=t.ctx.createBufferSource(),e._node.bufferSource.buffer=u[this._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,t.ctx.currentTime),this},_cleanBuffer:function(e){var n=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(t._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),n))try{e.bufferSource.buffer=t._scratchBuffer}catch(o){}return e.bufferSource=null,this},_clearSound:function(e){/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var a=function(e){this._parent=e,this.init()};a.prototype={init:function(){var e=this,n=e._parent;return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._rate=n._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++t._counter,n._sounds.push(e),e.create(),e},create:function(){var e=this,n=e._parent,o=t._muted||e._muted||e._parent._muted?0:e._volume;return n._webAudio?(e._node=void 0===t.ctx.createGain?t.ctx.createGainNode():t.ctx.createGain(),e._node.gain.setValueAtTime(o,t.ctx.currentTime),e._node.paused=!0,e._node.connect(t.masterGain)):t.noAudio||(e._node=t._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(t._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=n._src,e._node.preload=!0===n._preload?"auto":n._preload,e._node.volume=o*t.volume(),e._node.load()),e},reset:function(){var e=this,n=e._parent;return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._rate=n._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++t._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,n=e._parent;n._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(n._sprite).length&&(n._sprite={__default:[0,1e3*n._duration]}),"loaded"!==n._state&&(n._state="loaded",n._emit("load"),n._loadQueue()),e._node.removeEventListener(t._canPlayEvent,e._loadFn,!1)},_endListener:function(){var e=this,n=e._parent;n._duration===1/0&&(n._duration=Math.ceil(10*e._node.duration)/10,n._sprite.__default[1]===1/0&&(n._sprite.__default[1]=1e3*n._duration),n._ended(e)),e._node.removeEventListener("ended",e._endFn,!1)}};var u={},d=function(e){var n=e._src;if(u[n])return e._duration=u[n].duration,void s(e);if(/^data:[^;]+;base64,/.test(n)){for(var t=atob(n.split(",")[1]),o=new Uint8Array(t.length),r=0;r<t.length;++r)o[r]=t.charCodeAt(r);_(o.buffer,e)}else{var a=new XMLHttpRequest;a.open(e._xhr.method,n,!0),a.withCredentials=e._xhr.withCredentials,a.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach((function(n){a.setRequestHeader(n,e._xhr.headers[n])})),a.onload=function(){var n=(a.status+"")[0];"0"===n||"2"===n||"3"===n?_(a.response,e):e._emit("loaderror",null,"Failed loading audio file with status: "+a.status+".")},a.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete u[n],e.load())},i(a)}},i=function(e){try{e.send()}catch(n){e.onerror()}},_=function(e,n){var o=function(){n._emit("loaderror",null,"Decoding audio data failed.")},r=function(e){e&&n._sounds.length>0?(u[n._src]=e,s(n,e)):o()};"undefined"!=typeof Promise&&1===t.ctx.decodeAudioData.length?t.ctx.decodeAudioData(e).then(r).catch(o):t.ctx.decodeAudioData(e,r,o)},s=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},l=function(){if(t.usingWebAudio){try{"undefined"!=typeof AudioContext?t.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch(a){t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),n=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),o=n?parseInt(n[1],10):null;if(e&&o&&o<9){var r=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!r&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=void 0===t.ctx.createGain?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};o.Howler=t,o.Howl=r,void 0!==n?(n.HowlerGlobal=e,n.Howler=t,n.Howl=r,n.Sound=a):"undefined"!=typeof window&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=r,window.Sound=a)}();const a=t({__proto__:null,default:e(r)},[r]);export{a as h};
