import React from 'react';
import PropTypes from 'prop-types';

export class ExpandableRow extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    sideContent: PropTypes.node,
    children: PropTypes.node,
  };

  render() {
    return (
      <div
        style={{
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          borderStyle: 'solid',
          borderWidth: 2,
          borderColor: 'grey',
          borderRadius: 15,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {this.props.title}
          {this.props.sideContent}
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
