export function sfs({componentsServices,data,fs:self}){var FS_CHANGE_EVENTS_NAMES=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];self.o=()=>{componentsServices.ofs();var documentElement=document.documentElement;if(documentElement.requestFullscreen){documentElement.requestFullscreen();}else if(documentElement.mozRequestFullScreen){documentElement.mozRequestFullScreen();}else if(documentElement.webkitRequestFullscreen){documentElement.webkitRequestFullscreen();}else if(documentElement.msRequestFullscreen){documentElement.msRequestFullscreen();}};self.x=()=>{componentsServices.xfs();if(document.exitFullscreen){document.exitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitExitFullscreen){document.webkitExitFullscreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}};self.t=function(){data.ifs?self.x():self.o()};self.l=function(){m("addEventListener");};self.q=function(){m("removeEventListener")};function m(listen_method_name){for(var i=0;i<FS_CHANGE_EVENTS_NAMES.length;i++){document[listen_method_name](FS_CHANGE_EVENTS_NAMES[i],l)}}function l(){document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement?componentsServices.ofs():componentsServices.xfs();}}