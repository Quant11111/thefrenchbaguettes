"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Expertise", href: "#expertise" },
  { name: "Partenaires", href: "#partenaires" },
  { name: "À propos", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        py: 3,
        bgcolor: "primary.main",
        height: "100%",
      }}
    >
      <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
        <Logo variant="text" color="light" />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: "white",
                "&:hover": {
                  bgcolor: "rgba(212, 175, 55, 0.1)",
                },
              }}
              component={Link}
              href={item.href}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontSize: "0.875rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{ bgcolor: "white" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 80 }}>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 4 }}>
              <Logo size="medium" />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                sx={{ color: "primary.main" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <Logo size="small" />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "primary.main",
                    mx: 1,
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    fontSize: "0.875rem",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      width: 0,
                      height: 2,
                      bgcolor: "secondary.main",
                      transition: "all 0.3s ease",
                      transform: "translateX(-50%)",
                    },
                    "&:hover": {
                      bgcolor: "transparent",
                      "&::after": {
                        width: "70%",
                      },
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href="#contact"
                sx={{
                  px: 3,
                  py: 1,
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                Nous contacter
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from hiding behind the AppBar */}
      <Toolbar sx={{ height: 80 }} />
    </Box>
  );
}
