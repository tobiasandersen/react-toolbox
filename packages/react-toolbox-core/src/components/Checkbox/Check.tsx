import * as React from 'react';
import { ComponentClass, PureComponent, ReactNode } from 'react';
import getPassThrough, { PassTroughFunction } from '../../utils/getPassThrough';
import { Component }  from '../../types';

export interface CheckNodeProps {
  checked: boolean;
}

export interface CheckFactoryArgs {
  CheckNode: Component<CheckNodeProps>;
  passthrough: PassTroughFunction<CheckProps, 'CheckNode'>;
}

export interface CheckProps {
  checked: boolean;
}

export type Check = ComponentClass<CheckProps>;

export default function checkFactory({ CheckNode, passthrough }: CheckFactoryArgs): Check {
  const passProps = getPassThrough(passthrough);

  return class Check extends PureComponent<CheckProps, void> {
    public static defaultProps = {
      checked: false,
    };

    public render() {
      const { checked, children, ...rest } = this.props;

      return (
        <CheckNode
          {...rest}
          {...passProps(this.props, 'CheckNode', this)}
          checked={checked}
        />
      );
    }
  };
}