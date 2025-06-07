import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Container,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function InterviewHomePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#0d47a1",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            Ace Your Java Interviews
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Comprehensive resources to crack technical and behavioral interviews with confidence.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/mock-interview")}
          >
            Start Preparing Now
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 5 }}>
        <Typography
          variant="h4"
          textAlign="center"
          color="text.primary"
          gutterBottom
        >
          What We Offer
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          Explore resources and tools tailored for Java developers.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {/* Mock Interviews */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#ffffff", borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  Mock Technical Interviews
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Simulate real interview scenarios with coding challenges and feedback.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" onClick={() => navigate("/mock-interview")}>
                  Start Now
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Coding Challenges */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#ffffff", borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  Coding Challenges
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Solve Java problems to sharpen your problem-solving skills.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" onClick={() => navigate("/coding-challenge")}>
                  Practice
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Behavioral Questions */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#ffffff", borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  Behavioral Questions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Prepare for HR rounds with curated questions and tips.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined">
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* SQL Query Practice - Moves to Next Row */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: "#ffffff", borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  SQL Query Practice
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Improve your database skills by solving SQL queries.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" onClick={() => navigate("/sql-questions")}>
                  Try Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default InterviewHomePage;
