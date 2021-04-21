import React from 'react';
// import PropTypes from 'prop-types';
import { ResponsiveBar } from '@nivo/bar';

function Bar(props) {
  return (
    <ResponsiveBar
      margin={{ top: 0, left: 100, bottom: 50, right: 0 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      borderColor={{ from: 'color', modifiers: [['darker', 10]] }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 10]] }}
      motionStiffness={90}
      motionDamping={15}
      animate
      {...props}
    />
  );
}
Bar.propTypes = {};

export default Bar;