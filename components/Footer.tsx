// components/Footer.tsx

import { Box, Container, Grid, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
       
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        {/* <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="body2">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="body2">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex">
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
               facebok
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
              tweet
              </Link>
              <Link href="#" color="inherit">
               inst
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Subscribe to our newsletter to get the latest updates.
            </Typography>
          </Grid>
        </Grid> */}
        <Box className='p-2'>
          <Typography variant="body2" color="textSecondary" align="center">
            {'© '}
            {new Date().getFullYear()}roshinis.com. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
