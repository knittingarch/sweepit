import React from 'react';
import Neighborhood from '../Neighborhood';
import Street from '../Street';

const selectStreets = (props) => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Sweep This!</legend>
            <div id="notification-choices" className ="selector-bar">
              <input list="neighborhoods" onClick={ props.loaded } placeholder="Choose neighborhood..." />
              <datalist id="neighborhoods">
                { Object.keys(props.state.streets).map( key => 
                  <option><Neighborhood key={ key } details={ props.state.streets[key] } /></option>)}
              </datalist>    
            
              <input list="streets" placeholder="Choose streets..." />
              <datalist id="streets">
                { Object.keys(props.state.streets).map( key => 
                  <option><Street key={ key } details={ props.state.streets[key] } /></option>)}
              </datalist>
                
              <div className="street-side">
                <input type="checkbox" name="even" id="even" /><label htmlFor="even">Even</label>
                <input type="checkbox" name="odd" id="odd" /><label htmlFor="odd">Odd</label>
              </div>
            </div>
            
            <div id="notification-types" className="notification-bar">
              <label htmlFor="email">Email Me</label><input type="checkbox" name="email" id="email" />
              <label htmlFor="text">Text Me</label><input type="checkbox" name="text" id="text" />
              <label htmlFor="phone">Call Me</label><input type="checkbox" name="phone" id="phone" />    
            </div>
            
            <div id="buffer-time" className="buffer-time">
              <select name="buffer">
                <option>1 hour</option>
                <option>1 day</option>
                <option>1 week</option>
              </select>
              <label htmlFor="buffer-time">Before Sweeping Starts</label>
            </div>
            
            <div className="notification-buttons">
              <button type="button">Add to Calendar</button>
              <input type="submit" value="Notify Me!" />
            </div>
        </fieldset>
      </form>
    </div>
  )
}

export default selectStreets;