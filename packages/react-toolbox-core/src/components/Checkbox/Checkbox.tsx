import * as React from 'react';
import { ComponentClass, FocusEvent, FormEvent, MouseEvent, PureComponent, ReactNode } from 'react';
import getPassThrough, { PassTroughFunction } from '../../utils/getPassThrough';
import { Component }  from '../../types';
import { Check } from './Check';

export interface CheckboxProps {
  children: ReactNode;
  checked: boolean;
  innerRef(instance: HTMLElement): void;
  label: string;
  onMouseLeave(event: MouseEvent<any>): void;
  onMouseUp(event: MouseEvent<any>): void;
  onChange(checked: boolean): void;
  onFocus(event: FocusEvent<any>): void;
  onBlur(event: FocusEvent<any>): void;
}

export interface CheckProps {
  checked: boolean;
}

export interface CheckboxNodeProps {
  checked: boolean;
  type: 'checkbox';
  onChange(event: FormEvent<any>): void;
}

export interface CheckboxWrapperProps {
  onMouseEnter(event: MouseEvent<any>): void;
  onMouseLeave(event: MouseEvent<any>): void;
}

export type CheckboxNodes = 'Check' | 'CheckboxNode' | 'CheckboxWrapper';

export interface CheckboxFactoryArgs {
  /**
   * Used to render the visual Checkbox.
   */
  Check: Check;
  /**
   * The actual checkbox node, probably input[type=checkbox], used to mimic a native checkbox.
   */
  CheckboxNode: Component<CheckboxNodeProps>;
  /**
   * The wrapper for the component, including e.g. the label.
   */
  CheckboxWrapper: Component<any>;
  /**
   * Customize how props are passed around.
   */
  passthrough: PassTroughFunction<CheckboxProps, CheckboxNodes>;
}

export default function checkboxFactory({
  Check,
  CheckboxNode,
  CheckboxWrapper,
  passthrough,
}: CheckboxFactoryArgs): ComponentClass<CheckboxProps> {
  const passProps = getPassThrough(passthrough);
  return class Checkbox extends PureComponent<CheckboxProps, void> {
    public static defaultProps = {
      checked: false,
      type: 'checkbox',
    };

    private handleToggle = event => {
      this.props.onChange(!this.props.checked);
    }

    public render() {
      const { children, checked, label, onChange, ...others } = this.props;

      return (
        <CheckboxWrapper {...others} {...passProps(this.props, 'CheckboxWrapper', this)}>
          <CheckboxNode
            {...passProps(this.props, 'CheckboxNode', this)}
            checked={checked}
            type='checkbox'
            onChange={this.handleToggle}
          />
          <Check checked={checked} />
          {label}
          {children}
        </CheckboxWrapper>
      );
    }
  };
}
