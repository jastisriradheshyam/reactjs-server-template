//---------- IMPORTS BEGIN ---------
import React from 'react';
import { connect } from 'react-redux';
import { setExampleState } from '../../store/actions/action';
import { ToastContainer } from 'react-toastify';

//---------- IMPORTS ENS ---------

const Header = ({ exampleState, setExampleState, dispatch }) => {

  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE REACT STATES AND VARIABLES WILL BE DECLARED HERE
  //---------- STATES AND VARIABLES BEGIN ---------

  //---------- STATES AND VARIABLES ENDS ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE REACT USEEFFECTS WILL BE HERE
  //---------- USEEFFECTS BEGIN ---------

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

  //---------- CONSOLES END ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  //---------- COMPONENT BODY START ---------
  return (<>
    <div className="col-md-12 text-center bg-dark" style={{ "height": "100px" }}>
      <h3 className="text-primary pt-2"> This is Header</h3>
      <button className="btn btn-sm btn-primary mt-2" onClick={() => setExampleState(true, { key: "value" })}>Redux Test</button>
    </div>
    <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnVisibilityChange draggable pauseOnHover />
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
)(Header)
