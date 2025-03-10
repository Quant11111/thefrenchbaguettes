"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        TheFrenchBaguettes
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              href={item.href}
            >
              <ListItemText primary={item.name} />
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
        elevation={1}
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              TheFrenchBaguettes
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              TheFrenchBaguettes
            </Typography>

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
                    color: "text.primary",
                    mx: 1,
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
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
                  borderRadius: "24px",
                  px: 3,
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
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from hiding behind the AppBar */}
      <Toolbar />
    </Box>
  );
}
