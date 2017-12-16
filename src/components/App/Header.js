import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';

export default class Header extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name="my movies" active={activeItem === 'userMovies'} onClick={this.handleItemClick} />
          <Menu.Item name="profile" active={activeItem === 'profile'} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Button >Logout</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
