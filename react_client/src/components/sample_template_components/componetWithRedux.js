//---------- IMPORTS BEGIN ---------
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setExampleState } from '../../store/actions/action';
import callAPI from '../../modules/apiService.js';
import toastDisplay from '../../utils/appUtils/toastNotification.js';
//---------- IMPORTS ENS ---------

const ComponentTemplate = ({ props, exampleState, setExampleState, dispatch }) => {

  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE REACT STATES AND VARIABLES WILL BE DECLARED HERE
  //---------- STATES AND VARIABLES BEGIN ---------

  const [data, setData] = useState({});
  const [error, seterror] = useState({})

  //---------- STATES AND VARIABLES ENDS ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE REACT USEEFFECTS WILL BE HERE
  //---------- USEEFFECTS BEGIN ---------

  useEffect(() => {
    //------------------------------------------------------------------
    //FUNCTIONS CALL OR OPERATIONS


    //------------------------------------------------------------------
    //API CALLS
    callAPI('GET', 'route').then((result) => {
      console.log('result in route :->', result);
    }).catch((error) => {
      console.error('error in route :->', error);
      toastDisplay(error, "error")
    })
    //------------------------------------------------------------------

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //------------------------------------------------------------------
    //FUNCTIONS CALL OR OPERATIONS


    //------------------------------------------------------------------
    //API CALLS
    callAPI('POST', 'route', payload).then((result) => {
      console.log('result in route :->', result);
    }).catch((error) => {
      console.error('error in route :->', error);
      toastDisplay(error, "error")
    })
    //------------------------------------------------------------------

  }, [payload]);

  //---------- USEEFFECTS ENDS ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE REACT HANDLERS WILL BE HERE
  //---------- REACT HANDLERS START ---------

  const handleChange = (event) => {
    event.persist();
    setData(data => ({ ...data, [event.target.name]: event.target.value }));
    seterrorData(errorData => ({ ...errorData, [event.target.name]: "" }))
  };

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

  const handleSubmit = () => {
    let formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    })

    call('POST', 'sunmitroute', formData).then((result) => {
      if (result) {
        toastDisplay(result, "success")
      }
    }).catch(error => {
      console.error('error in route :->', error);
      toastDisplay(error, "error")
    })
  }

  //---------- SUBMIT HANDLER END ---------
  //---------------------------------------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------------------------------------
  // ALL THE FUNCTIONS THAT RENDER JSX OR ANY SMALL REACT COMPONENTS WILL BE HERE
  //---------- MINI COMPONENTS START ---------

  const astrix = <span className="required-field text-danger">*</span>

  function toolTip(inputName) {
    return (
      <span className="help-icon" flow="right" tooltip={toolTipText[inputName]}>i</span>
    )
  }

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
    <h1 className="text-success">Hello Worlds {astrix}</h1>
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
)(ComponentTemplate)
