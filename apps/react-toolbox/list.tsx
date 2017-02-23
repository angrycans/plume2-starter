import * as React from 'react'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox'

export default class myList extends React.Component<any, any> {

  handleCheckboxChange=()=>{
    
  }

  render() {
    return (
      <List selectable ripple>
        <ListSubHeader caption='Explore characters' />
        <ListItem
          avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
          caption='Dr. Manhattan'
          legend="Jonathan 'Jon' Osterman"
          rightIcon='star'
        />
        <ListItem
          avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
          caption='Ozymandias'
          legend='Adrian Veidt'
          rightIcon='star'
        />
        <ListItem
          avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
          caption='Rorschach'
          legend='Walter Joseph Kovacs'
          rightIcon='star'
        />
        <ListSubHeader  caption='Configuration' className='list_height'/>
        <ListItem caption='Contact the publisher' leftIcon='send' />
        <ListItem caption='Remove this publication' leftIcon='delete' />
      </List>
    );
  }
}