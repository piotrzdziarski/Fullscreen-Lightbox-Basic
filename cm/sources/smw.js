import{ABSOLUTED_CLASS_NAME,FLEX_CENTERED_CLASS_NAME,FULL_DIMENSION_CLASS_NAME,TRANSFORM_TRANSITION_CLASS_NAME}from"../../cn/classes-names";import{saw}from"./saw";export function smw(o,i){var{core:{stageManager},elements:{smw,sourceWrappersContainer},props}=o,t=0,w=document.createElement("div");w.className=`${ABSOLUTED_CLASS_NAME} ${FULL_DIMENSION_CLASS_NAME} ${FLEX_CENTERED_CLASS_NAME}`;w.s=function(){w.style.display="flex"};w.h=function(){w.style.display="none"};w.a=function(){w.classList.add(TRANSFORM_TRANSITION_CLASS_NAME)};w.d=function(){w.classList.remove(TRANSFORM_TRANSITION_CLASS_NAME)};w.n=function(){w.style.removeProperty("transform")};w.v=function(v){t=v;return w;};w.ne=function(){s(-dt())};w.z=function(){s(0)};w.p=function(){s(dt())};function s(v){w.style.transform=`translateX(${v+t}px)`;t=0}function dt(){return(1+props.slideDistance)*innerWidth}if(!stageManager.i(i)){w.h()}smw[i]=w;sourceWrappersContainer.appendChild(w);saw(o,i)}
