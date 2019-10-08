import React from 'react';
import Box from '@material-ui/core/Box';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { withStyles } from '@material-ui/core/styles';
import history from '../../../history';
import './styles.css';

const navigate = (path) => {
  history.push(path)
}

const IconTextLink = (props) => {
  const LinkBox = withStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      background: props.color || 'black',
      borderRadius: '100px',
      justifyContent: 'center',
      alignItems: 'center',
      width: '157px',
      height: '35px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '13px',
      color: '#FFFFFF',
      textTransform: 'uppercase',
      marginRight: props.marginRight || '0px',
      marginLeft: props.marginLeft || '0px',
      marginTop: props.marginTop || '0px',
      marginBottom: props.marginBottom || '0px',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }))(Box);

  return (
    <LinkBox onClick={() => navigate(props.url)}>
      <PersonOutlineIcon/>
      <div id='text'>{props.children}</div>
    </LinkBox>
  );
}

export default IconTextLink;