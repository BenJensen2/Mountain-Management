import React from 'react';

const OperatingTimes = (props) => {
  return (
    <div className="open-times">
      <h4>{props.title}</h4>
      <ul>
        East Side
          <li>
          <ul>
            <li>Chair 8</li>
          </ul>
        </li>
          Learning
          <li>
          <ul>
            <li>Chair 6</li>
            <li>Chair 7</li>
            <li>MC 4</li>
            <li>MC 3</li>
            <li>MC 2</li>
            <li>MC 1</li>
          </ul>
        </li>
          Silver
          <li>
          <ul>
            <li>Chair 6</li>
          </ul>
        </li>
        <br />
        <h5>Central</h5>
        <li>
          <ul>
            <li>Chair 2</li>
            <li>Chair 5</li>
            <li>Chair 9</li>
          </ul>
        </li>
          West Side
          <li>
          <ul>
            <li>Chair 3</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default OperatingTimes;