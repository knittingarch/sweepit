import React from 'react';

const BufferTimeContainer = () => {
    return (
      <div>
        <select name="buffer">
          <option>1 hour</option>
          <option>1 day</option>
          <option>1 week</option>
        </select>
        <label htmlFor="buffer-time">Before Sweeping Starts</label>
      </div>
    )
}

export default BufferTimeContainer;