import { Rating, Box, Grid, Paper, Typography, createTheme, ThemeProvider } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});
const TourCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img className="img" alt="" src="https://ychef.files.bbci.co.uk/1600x900/p04kt0s1.webp"></img>
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              Immerse into the Falls
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime
                sx={{
                  width: 12.3,
                }}
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                5 hours
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />

              <Typography variant="body2" component="p" marginLeft={1.5}>
                4.5
              </Typography>
              <Typography variant="body3" component="p" marginLeft={1.5}>
                (460 Reviews)
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C $147
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
