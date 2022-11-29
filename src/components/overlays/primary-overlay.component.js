/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';
import { Box } from '@mui/material';

export const PrimaryOverlay = (props) => (
  <Box
    css={css`
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);

      position: absolute;
      z-index: 2;
    `}
  >
    {props.children}
  </Box>
);
