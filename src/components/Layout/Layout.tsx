import { FC, type ReactNode } from "react";
import { Outlet } from "react-router";
import { Box, Container } from "@mui/material";

interface LayoutProps {
  header: ReactNode;
  footer?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ header, footer }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      {header}
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      {footer}
    </Container>
  );
};
