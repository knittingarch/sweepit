import React from 'react';

import CheckboxTwo from './CheckboxTwo';

const notificationLabels = [
  'Email Me',
  'Text Me',
  'Call Me'
];

const NotificationContainer = (props) => {

const createCheckbox = label => (
    <ul className="notifications">
      <li>
        <CheckboxTwo
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
        />
      </li>
    </ul>
  )

  const toggleCheckbox = label => {
    if (props.boxes.has(label)) {
      props.boxes.delete(label);
    } else {
      props.boxes.add(label);
    }
  }

  return (
    notificationLabels.map(createCheckbox)
  )
}

export default NotificationContainer;