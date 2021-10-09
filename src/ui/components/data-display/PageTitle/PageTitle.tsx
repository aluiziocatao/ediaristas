import React from "react";
import { Container } from "@mui/material";
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: JSX.Element | string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <Container>
        <PageTitleStyled>{props.title}</PageTitleStyled>
        <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
      </Container>
    </PageTitleContainer>
  );
};

export default PageTitle;
