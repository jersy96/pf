import React from 'react';
import BaseSelectList from '../BaseSelectList/BaseSelectList';
import BaseButton from '../BaseButton/BaseButton';
import './styles.css'
  
class FieldFilter extends React.Component {
  getCities() {
    return [
      {value: 'Barranquilla', label: 'Barranquilla'},
      {value: 'Santa marta', label: 'Santa marta'},
      {value: 'Cartagena', label: 'Cartagena'}
    ]
  }

  render() {
    const buttonStyles = {
      color: '#FFFFFF',
      backgroundColor: '#1C1C1C;',
      width: '172px',
      height: '60px',
      marginLeft: '0px'
    }

    const selectListStyles = {
      control: {
        width: '191px',
        height: '60px'
      }
    }

    return (
      <div id='field-filter-main-container' className={this.props.classNames}>
        <BaseSelectList
          options={this.getCities()}
          placeholder='Ciudad'
          styles={selectListStyles}
        />
        <BaseButton styles={buttonStyles}>
          Buscar
        </BaseButton>
      </div>
    );
  }
}
  
export default FieldFilter; 