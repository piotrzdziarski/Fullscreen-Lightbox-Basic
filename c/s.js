import{setUpClassFacade}from"./elements/setUpClassFacade";import{setUpEventsDispatcher}from"./events/setUpEventsDispatcher";import{sfs}from"./sfs";import{setUpGlobalEventsController}from"./events/setUpGlobalEventsController";import{setUpLightboxCloser}from"./main-component/closing/setUpLightboxCloser";import{setUpScrollbarRecompensor}from"./scrollbar/setUpScrollbarRecompensor";import{setUpSlideIndexChanger}from"./slide/setUpSlideIndexChanger";import{setUpSlideChangeFacade}from"./slide/setUpSlideChangeFacade";import{setUpSourceDisplayFacade}from"./sources/setUpSourceDisplayFacade";import{ssws}from"./ssws";import{setUpSourcesPointerDown}from"./sources/pointering/down/setUpSourcesPointerDown";import{setUpWindowResizeActioner}from"./sizes/setUpWindowResizeActioner";export function s(o){setUpClassFacade(o);setUpEventsDispatcher(o);sfs(o);setUpGlobalEventsController(o);setUpLightboxCloser(o);setUpScrollbarRecompensor(o);setUpSlideChangeFacade(o);setUpSlideIndexChanger(o);setUpSourcesPointerDown(o);setUpSourceDisplayFacade(o);ssws(o);setUpWindowResizeActioner(o);}