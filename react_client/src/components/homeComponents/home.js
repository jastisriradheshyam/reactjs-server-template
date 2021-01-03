//---------- IMPORTS BEGIN ---------
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setExampleState } from '../../store/actions/action';
import toastDisplay from '../../utils/appUtils/toastNotification.js';
import Header from '../partialComponents/header.js'
import Footer from '../partialComponents/footer.js'

//---------- IMPORTS ENS ---------

const Home = ({ exampleState, setExampleState, dispatch }) => {

  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE REACT STATES AND VARIABLES WILL BE DECLARED HERE
  //---------- STATES AND VARIABLES BEGIN ---------

  //---------- STATES AND VARIABLES ENDS ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE REACT USEEFFECTS WILL BE HERE
  //---------- USEEFFECTS BEGIN ---------

  useEffect(() => {
    //------------------------------------------------------------------
    //FUNCTIONS CALL OR OPERATIONS
    if (exampleState.status) {
      toastDisplay("Redux State is Set", "info")
    }

    //------------------------------------------------------------------
    //API CALLS

    //------------------------------------------------------------------

  }, [exampleState]);

  //---------- USEEFFECTS ENDS ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE REACT HANDLERS WILL BE HERE
  //---------- REACT HANDLERS START ---------

  //---------- REACT HANDLERS ENDS ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE FUNCTIONS WILL BE HERE
  //---------- FUNCTIONS START ---------

  //---------- FUNCTIONS END ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE FORM SUNMITTING FUNCTION WILL BE HERE
  //---------- SUBMIT HANDLER START ---------

  //---------- SUBMIT HANDLER END ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE FUNCTIONS THAT RENDER JSX OR ANY SMALL REACT COMPONENTS WILL BE HERE
  //---------- MINI COMPONENTS START ---------

  //---------- MINI COMPONENTS END ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE CONSOLES WILL BE HERE
  //---------- CONSOLES START ---------
  console.log("exampleState==>", exampleState)
  //---------- CONSOLES END ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  //---------- COMPONENT BODY START ---------
  return (<>
    <Header />

    <div className="col-md-12 text-center bg-secondary" style={{ "height": "783px" }}>
      <h1 className="pt-5">Hello World, This is Sample REACT APP</h1>
      <hr />
      <hr />
      <p>State.Status: {exampleState.status ? "True" : "False"}</p>
      <p>State.data.key: {exampleState.data.key ? exampleState.data.key : "NA"}</p>
    </div>

    <Footer />
  </>)
  //---------- COMPONENT BODY ENDS ---------
  //---------------------------------------------------------------------------------------------------------------------
}

//---------------------------------------------------------------------------------------------------------------------
//---------- REDUX START ---------
const mapStateToProps = state => {
  return {
    exampleState: state.exampleState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setExampleState: (status, data) => { dispatch(setExampleState({ status: status, data: data })) },
  }
}
//---------- REDUX END ---------
//---------------------------------------------------------------------------------------------------------------------


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
