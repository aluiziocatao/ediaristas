import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[40]};
  }

  .MuiOutlineInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
