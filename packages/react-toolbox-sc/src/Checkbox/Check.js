import styled from 'styled-components';
import withOverride from '../utils/withOverride';
import { check, field, input } from './style';
import { checkboxFactory, checkFactory, withRippleFactory } from 'react-toolbox-core';
import RippleNode from '../withRipple/RippleNode';
import RippleWrapper from '../withRipple/RippleWrapper';

const CheckNode = styled.div`
  ${check}
  ${withOverride('Check')}
`
const Check = checkFactory({ CheckNode });

const withRipple = withRippleFactory({
  passthrough: ['overrides'],
  RippleNode,
  RippleWrapper: styled(RippleWrapper)`
    ${withOverride('RippleWrapper')}
  `,
});

export default withRipple()(Check);