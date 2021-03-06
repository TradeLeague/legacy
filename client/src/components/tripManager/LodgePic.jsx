import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

class LodgePic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Column key={4} computer={4}>
        <Image src={ this.props.data }/>
      </Grid.Column>
    );
  }
}

export default LodgePic;