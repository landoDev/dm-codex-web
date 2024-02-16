import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import Button from '@mui/material/Button';

type LoginButtonProps = {
  label?: string
}

const LoginButton = ({ label }: LoginButtonProps) => {
  const { loginWithRedirect } = useAuth0();

  // TODO: update the callback url to go to "/dashboard "

  return <Button variant="contained" onClick={() => loginWithRedirect()}>{label ? label : "Login"}</Button>;
};

export default LoginButton;