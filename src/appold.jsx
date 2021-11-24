import {React,  usestate} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import "styles.css" 
//JSON Funnels 
import {initual_funnel, maintenance_funnel} from "04_Constants/Funnels/initial funnel"
 import {n4_branch_long_scotiahank} from "04 Constants/Funnels/n4_branch_long_scotiabank";
 
 
 import {branch_long_logra_mas } from '/04_Constants/Vunnels/n4 branch long logra mas';
 
 // Components
 import Wrapper from "/01 Components/CWrapper"
  import PageContainer from "/01 Components/CPageContainer"
  import CHeader from "/01 Components/CHeader"; 
  import Grid from 'canvas core react/lib/Grid'; 
  import ModalAlert from 'canvas-core-react/lib/ModalAlert'; 
  import CTitleComponent from "/01 Components/CTideComponent"; 
  import Stepper from "/01 Components/Stepper" 
  import {sendEvent, sendVirtual, paperView} from "/06_utils/analytics" 
import {backComponent, intialComponent, loadfunnel, nextComponent} from "/06 Uth/orchestrator"; 
	// Actions 
	import { setCurrentCompement as SetCurrentComponentReduce } from "/05 Store/Actions/ACurrentComponent"; 
	import {getsessionDataRequest} from '/05 Store/Actions/AsessionData'; 
	import {errors as actionsError} from "/05 Store/Actions/error"; 
	import actiomStepper from '/05 Store/Actions/stepper';
	 import Loader from '/01 Components/cLoader'
	  import TextBody from 'canvas core react/lib/TextBody'; 
	 
	 const App = ({props} ) => {
		 const sessionid = props.session; 
		 const loading = useSelector((state) => {state.loader}); 
		 const error = userselector((state) => state.error); 
		 const nextStep = useSelector((state) => state.stepper.next); 
		 const backStep = useSelector((state) => state.stepper.previous);
		  const jumpStep = useSelector((state) => state.stepper.jumpstep);
		   const changeAndLoadFunnel = useSelectort ((state) => state.stepper.funnelName)
		    const dispatch = useDispatch();
			 const maintenance = sessionStorage.getitem(maintenance)
			  const [currentComponent, setCurrentComponent]  = useState( maintenance && maintenance-ves ? initialComponent(maintenance_funnel): initialCompanent(initial_funnet)); 
			  const [funnet, setFunnel] = useState([]); 
			  const [isModalVisible, setModalVisible] = useState(false); 


			  const autoPageView = (analytics, auto) =>
			   {
				   if(auto) {
					   sendvirtualPageView(analytics),
					    lele ( 
							console.infal el componente no tiene activado el autopageview, se debe incluir en el controlador de manera manual 1,1 1, 
							
							
							useEffect() => (thispatch(genSessionDataRequest(sessionid));
							autoPageViewicurrentComponent analytics, currentComponent autoPageview), ), 1) 
							usel Hect() (nextStep -") next():)), [nextStep]), useEffect(()-[if (backstep "backt): 1, Ibackstep]); 
							useEffect() = (i (chang-AndloadFunnel 1 ") [loadFunnelAnd Next(changeAndtoadFunnel); 11. [changeAndtoadf unnell); 
								const dosePrimary-()[error.primaryAction(); - dispatch(actionsError.hidel.rror()): 1;
								
								const loadFunnelAndNext = ('type-long') =>
								 let arrayFunnel- undefined; switch (type) ( case long arrayFunnel-n4 branch long scotiabank, break; case logramas: arrayFunnel-n4 branch long lega mas; break; ) const funnel caded-loadfunnelicurrentComponent, arrayFunnell); const (newCurrentComponent, newFunnel) nextComponent( currentComponent, funnelloaded 1: setCurrent Component(wCutrentComponent); setunnel(newFunnel)); dispatch(SetCurrentComponentReducer (niewCurrentComponent)); autoPageview( newCutrentComponent analytics, newCurrentComponent.autoPageView) window scrollle(0, 01, ), const next-(values) -> (if (furnel.length> 0) (if (currentComponent.net) ( const(newCurrentiomponent, newFunnel, 1 nextComponenticurrentComponent, [funnell), setCurrentComponent(newCurrentComponent); setFunnelnewFunnell); dispatchSetCurrentComponentReducer(new CurrentComponent)); window scrollTo(0, 0); if (jumpstep) (autoPageView newCurrentComponent.analytics, wwwCerrentComponent autoPagyView 1:11 else { console warn('El componente tiene bloqueada la funcion "siguiente");) ) else [loadFunnelAndNext['logramas): ) 1; const back-()(if (currentComponent back) (const { newCurrentComponent, newFunnel, 1-backComponent currentComponent, [funnell); setCurrentComponent(newCurrentComponent); setFunnell new Funnell); dispatch/SetCurrentComponentReducer(newCurrentComponent)); window scrollTo(0, D), autoPageview newCurrentComponent.analytics, newCurrent Component autoPageView), ) else t console.warnt'El componente tiene bloqueada la funcion "back"");)]; useEffect()-> (if (error code) (sendEvent(( errorCode: error code, errorDesc: error title, 1.11. lerror), return (diouter> <witch Route path-"/><PageContainers (maintenance && maintenanceyes 2 null: (CHeader CHeaderTitle-"Cuenta Scotiabank CHeader Cancelfext-"Cancelar solicitud" />)<div cirid> (currentComponent.stepper.show && (Stepper stepperName( currentComponent stepper name) stepper Current-t currentComponent.stepper currentStepstepperFinal-( currentComponent stepper finalStep))) (currentComponent.title - null && currentComponent titleShow false && (TideComponent Title- currentComponent title] /1) </Grid> </div> <Wrapper fluid-[currentComponent.fluid true 7 true false) className-'14 container"> [React.isValidElementi Currentfomponent.controller/17 (currentComponent.controller RenderComponentel currentfomponent.component/>1<divo El controlador no tiene un return
válido </div> 11 </Wrapper> floailing status &&(oader title-loadingtide) |- 1| < P PageContainers (erroristatus && <ModalAlert headline-lerror titlel primary Action-closePrimary) primaryButtonLabel=(error primaryLabel)

set ModalVisible-sets ModalVisible) IsModalviuble-(error status)> 

<Textfiody component-"p" children-ferror content color black className-modal error text" /><TextBody component-"p" children-terror code) color="gray" type="2"

className-modal error code" /> </ModalAlert>11</></Route></Switch</Router> <1) 



export default App;