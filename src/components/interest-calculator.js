import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import { setPrincipal, setInterest, setYears  } from '../actions';

// Connect this component
export function InterestCalculator(props) {
  
    function changePrincipal(num){
        console.log('clicked');
        props.dispatch(setPrincipal(num));
    }
    function changeInterest(num){
        console.log('clicked');
        props.dispatch(setInterest(num));
    }
    function changeYears(num){
        console.log('clicked');
        props.dispatch(setYears(num));
    }


  
    return (
        <form className="interest-calculator"
            onSubmit={e => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="principal">Principal ($)</label>
                <input onChange={(event) => {changePrincipal(event.target.value)}} type="number" id="principal" value={props.principal}
                    min="0" />
            </div>
            <div className="form-group">
                <label htmlFor="interest">Interest rate (%)</label>
                <input onChange={(event) => {changeInterest(event.target.value)}} type="number" id="interest" value={props.interest}
                    min="0" max="100" step="0.1" />
            </div>
            <div className="form-group">
                <label htmlFor="years">Years</label>
                <input onChange={(event) => {changeYears(event.target.value)}} type="number" id="years" value={props.years}
                    min="0" max="100" />
            </div>
            <div className="form-group">
                <label htmlFor="total">Total</label>
                <output type="number" id="total">${props.total.toFixed(2)}</output>
            </div>
        </form>
    );
}

InterestCalculator.defaultProps = {
  principal: 0,
  interest: 0,
  years: 0,
  total: 0
};

export const mapStateToProps = state => {
  return{
    principal: state.principal,
    interest: state.interest,
    years: state.years,
    total: state.principal * Math.pow(1 + state.interest / 100, state.years)
  }
};

export default connect(mapStateToProps)(InterestCalculator);