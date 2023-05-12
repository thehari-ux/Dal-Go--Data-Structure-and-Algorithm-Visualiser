import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { auth, signInWithGoogle } from 'src/pages/auth/firebase';
import { useEffect, useState } from "react";

export const AccountProfile = () => {
  const [user, setUser] = useState({
    avatar: '/assets/avatars/avatar-default.png',
    name: '',
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        const { displayName, photoURL } = userAuth;
        setUser({
          avatar: photoURL || '/assets/avatars/avatar-default.png',
          name: displayName || '',
        });
      } else {
        // User is signed out
        setUser({
          avatar: '/assets/avatars/avatar-default.png',
          name: '',
        });
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 80,
              mb: 2,
              width: 80
            }}
          />
          <Typography
            gutterBottom
            variant="h5"
          >
            {user.name}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.city} {user.country}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};
