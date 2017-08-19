import React, {PropTypes} from 'react';

class GamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event) {
    const game = this.state.game;
    game.title = event.target.value;
    this.setState({game: game});
  }

  onClickSave(event) {
    alert(`Saving ${this.state.game.title}`);
  }
  render() {
    return (
      <div>
        <h1>Games</h1>

        <h2>Add Game</h2>

        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.game.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />

      </div>
    );
  }
}

export default GamesPage;
