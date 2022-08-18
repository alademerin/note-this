import React from 'react';
import { Switch, Checkbox, Slider } from './styles/Toggle.styled';
const Toggle = ({ color, rounded, isToggled, onToggle }) => {
  return (
    <Switch>
      <Checkbox
        color={color}
        type='checkbox'
        checked={isToggled}
        onChange={onToggle}
      />
      <Slider color={color} rounded={rounded} />
    </Switch>
  );
};

export default Toggle;
