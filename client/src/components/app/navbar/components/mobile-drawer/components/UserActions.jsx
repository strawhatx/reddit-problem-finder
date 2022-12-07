import React from "react";
import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/system";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../../../../stores/authentication";

const MobileDrawerUserActions = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();

  const { logout } = useAuthStore((state) => ({
    logout: state.logout,
  }));

  const handleSignOut = () => {
    logout().then(() => navigate("/signin"));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(2.5, 2.5, 5),
      }}
    >
      <Button
        fullWidth
        size="medium"
        type="submit"
        variant="outlined"
        onClick={handleSignOut}
      >
        {t("Sign out")}
      </Button>
    </Box>
  );
};

export default MobileDrawerUserActions;
