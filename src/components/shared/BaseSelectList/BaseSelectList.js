import React from 'react';
import Select from 'react-select'
  
class BaseSelectList extends React.Component {
  getControlStyles(styles) {
    if (this.props.styles == null || this.props.styles.control == null) {
      return {
        ...styles,
        width: '200px'
      }
    } else {
      return {
        ...styles,
        ...this.props.styles.control
      }
    }
  }

  render() {
    const styles = {
      control: styles => {
        return this.getControlStyles(styles)
      },
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          fontfamily: 'Roboto'
        }
      }
    }

    return (
      <div>
        <Select
          searchable={true}
          options={this.props.options}
          placeholder={this.props.placeholder}
          styles={styles}
        />
      </div>
    );
  }
}
  
export default BaseSelectList; 