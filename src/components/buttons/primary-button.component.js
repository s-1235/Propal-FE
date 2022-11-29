/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';
import { Button } from '@mui/material';

export const PrimaryButton = (props) => (
  <Button
    {...props}
    variant='outline'
    css={css`
      box-shadow: none;
      text-transform: none;
      font-size: 16;
      padding: 9px 32px;
      border: 1px solid;
      line-height: 1.5;
      background-color: transparent;
      border-color: #fff;
      color: #fff;
      border-radius: 2rem;
      &:hover {
        background-color: #fff;
        border-color: #fff;
        box-shadow: none;
        color: #13577d;
      }
      &:active {
        box-shadow: none;
        background-color: #fff;
        border-color: #fff;
        color: #1d3557;
        font-weight: 700;
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
      }
    `}
  >
    {props.children}
  </Button>
);
