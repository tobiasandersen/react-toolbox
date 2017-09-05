import React, { Component } from 'react';
import { css } from 'styled-components';
import { FontIcon } from 'react-toolbox/src/components/font_icon';
import Checkbox from 'react-toolbox-sc/src/Checkbox';
import Github from '../Github';

class CheckboxTest extends Component {
  state = {
    checkbox_1: true,
    checkbox_2: false,
    checkbox_3: true,
  };

  handleChange = field => value => {
    console.log({field, value })
    this.setState({ ...this.state, [field]: value });
  };

  handleFocus = () => {
    console.log('Focsed');
  };

  handleBlur = () => {
    console.log('Blur');
  };

  render () { 
    const { checkbox_1, checkbox_2, checkbox_3 } = this.state
    console.log({ checkbox_1, checkbox_2, checkbox_3})
    return (
      <section>
        <h5>Checkbox</h5>
        <p>Agnostic + Styled Components</p>

        <Checkbox
          checked={this.state.checkbox_1}
          label="Checked checkbox"
          onChange={this.handleChange('checkbox_1')}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <Checkbox
          checked={this.state.checkbox_2}
          label="Not checked checkbox"
          onChange={this.handleChange('checkbox_2')}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <Checkbox
          checked={this.state.checkbox_3}
          label="Disabled checkbox"
          disabled
          onChange={this.handleChange('checkbox_3')}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </section>
    );
  }
}

export default CheckboxTest;
