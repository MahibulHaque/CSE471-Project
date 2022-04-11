import React from "react";
import { Alert } from "@mui/material";
import styled from "styled-components";

const AlertComponent = ({AlterMessage,severity}) => {
  return (
    <AlterContainer>
      <Alert severity={`${severity == "200" ? "success" : "error"}`}>{AlterMessage}</Alert>
    </AlterContainer>
  );
};

const AlterContainer = styled.div`
    width:300px;
    display:flex;
    align-items:center;
    z-index:999;
    position:absolute;
    right:20px;

    @keyframes popup{
        0%{
            bottom:0px;
            opacity:0;
        }
        50%{
            bottom:20px;
            opacity:1;
        }
        100%{
            display:none;
            opacity:0;
            cursor: none;
        }
    }
`;

export default AlertComponent;
