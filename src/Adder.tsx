import { Box, Button, Heading } from 'grommet';
import React from 'react';
import { useStore } from './store';

export const Adder: React.FC = () => {
  const number = useStore(state => state.number);
  const increase = useStore(state => state.increase);
  const decrease = useStore(state => state.decrease);

  return (
    <Box>
      <Heading margin="none" alignSelf="center">
        {number}
      </Heading>
      <Box
        flex
        direction="row"
        justify="between"
        alignSelf="center"
        width="200px"
        height="100px"
      >
        <Button
          primary
          label="Inc"
          onClick={increase}
        />

        <Button
          secondary
          label="Dec"
          onClick={decrease}
        />
      </Box>
    </Box>
  );
};
