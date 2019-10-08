import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
  
class BaseButton extends React.Component {
  render() {
    const StyledButton = withStyles(theme => ({
      root: this.props.styles
    }))(Button);

    return (
      <div>
        <StyledButton>
          {this.props.children}
        </StyledButton>
      </div>
    );
  }
}
  
export default BaseButton; 