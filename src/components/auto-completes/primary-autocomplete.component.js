/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react/macro';
import { Autocomplete } from '@mui/material';

export const PrimaryAutocomplete = (props) => (
  <Autocomplete
    {...props}
    css={css`
      & .MuiAutocomplete-input {
        color: 'primary';
      }
      & .Mui-focused {
        color: #13577d;
      }
      & .MuiAutocomplete-tag {
        color: #13577d;
        size: 4rem;
      }
      & .MuiInputLabel-root {
        color: #13557d;
      }

      & .MuiInputBase-root {
        &:hover::before {
          color: pink;
        }
        &::before {
          border-bottom: 1px solid #13557d;
        }
      }

      & .MuiSvgIcon-root {
        color: #13557d;
      }
    `}
  >
    {props.children}
  </Autocomplete>
);
