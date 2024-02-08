import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import Button from '@mui/material/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button 
        variant="contained" 
        color="error" 
        size="small"
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;