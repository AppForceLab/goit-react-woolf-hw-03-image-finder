import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className="Button" onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
