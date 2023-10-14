import React from 'react';

export class Menu extends React.Component {
  constructor(){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){;
    let text = e.target.value;
    this.props.chooseVideo(text)
  }
  render() {
    return (
      <form>
        <input type="radio" name="src" value="fast" onClick={this.handleClick}/> fast
        <input type="radio" name="src" value="slow" onClick={this.handleClick}/> slow
        <input type="radio" name="src" value="cute" onClick={this.handleClick}/> cute
        <input type="radio" name="src" value="eek" onClick={this.handleClick}/> eek
      </form>
    );
  }
}