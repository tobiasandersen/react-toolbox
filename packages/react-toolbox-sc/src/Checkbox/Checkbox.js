import styled from 'styled-components';
import withOverride from '../utils/withOverride';
import { field, input } from './style';
import { checkboxFactory, checkFactory } from 'react-toolbox-core';
import Check from './Check'

const CheckboxNode = styled.input`
  ${input}
  ${withOverride('CheckboxNode')}
`;

const CheckboxWrapper = styled.label`
  ${field}
  ${withOverride('CheckboxWrapper')}
`;

const Checkbox = checkboxFactory({
  Check,
  CheckboxNode,
  CheckboxWrapper
});

export default Checkbox;
