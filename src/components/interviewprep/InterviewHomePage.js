
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function InterviewHomePage() {
  const navigate = useNavigate();

  const theme = {
    background: "#ecf0f3",
    primaryDark: "#2c3e50",
    primaryLight: "#34495e",
    accent: "#00bfa6",
    accentLight: "#26c6da",
    card: "#ffffff",
    text: "#000000",
  };

  return (
    <Box sx={{ backgroundColor: theme.background, minHeight: "100vh", color: theme.text }}>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        {/* Hero + Progress Section */}
        <Box
          sx={{
            backgroundColor: theme.primaryDark,
            p: { xs: 3, sm: 4 },
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Ace Your Java Interviews
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Crack technical and behavioral interviews with confidence.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.accent, '&:hover': { backgroundColor: theme.accentLight } }}
            size="large"
            onClick={() => navigate("/mock-interview")}
          >
            Start Preparing
          </Button>

          {/* Progress Tracker */}
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            {[
              { label: "Total Topics Covered", value: 18 },
              { label: "Mock Interviews Done", value: 6 },
              { label: "Challenges Solved", value: 45 },
            ].map(({ label, value }, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ p: 3, backgroundColor: theme.primaryLight, color: "white", borderRadius: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>{label}</Typography>
                  <Typography variant="h5">{value}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features Section */}
        <Box sx={{ mt: .1, backgroundColor: theme.primaryDark,  p: { xs: 3, sm: 4 } }}>
          <Typography variant="h5" textAlign="center" gutterBottom sx={{ color: "white" }}>
            Explore Our Tools
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {[{
              title: "Mock Interviews",
              desc: "Simulate real interview scenarios with feedback.",
              action: "Start Now",
              route: "/mock-interview",
            }, {
              title: "Coding Challenges",
              desc: "Solve Java problems to sharpen your skills.",
              action: "Practice",
              route: "/coding-challenge",
            }, {
              title: "Behavioral Questions",
              desc: "Prepare for HR rounds with curated content.",
              action: "Explore",
              route: "",
            }, {
              title: "SQL Practice",
              desc: "Improve your DB skills with SQL problems.",
              action: "Try Now",
              route: "/sql-questions",
            }].map(({ title, desc, action, route }, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    backgroundColor: theme.card,
                    border: `2px solid ${theme.accent}`,
                    borderRadius: 2,
                    boxShadow: 1,
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ color: theme.text }} gutterBottom>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.text }}>
                      {desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: theme.accent, color: theme.accent, '&:hover': { backgroundColor: theme.accentLight, color: '#fff' } }}
                      onClick={() => route && navigate(route)}
                    >
                      {action}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Why PrepJava Section */}
        <Box sx={{ mt: 0.1, backgroundColor: theme.primaryLight, p: { xs: 3, sm: 4 }, color: "white" }}>
          <Typography variant="h5" textAlign="center" gutterBottom>
            Why PrepJava?
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ maxWidth: 800, mx: "auto" }}>
            PrepJava brings together curated content, interactive practice tools, and AI-powered feedback to ensure you’re ready for your next technical interview.
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {[
              "Personalized Prep",
              "Expert-Curated Content",
              "AI Feedback"
            ].map((label, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card sx={{ p: 3, backgroundColor: theme.card, border: `1px solid ${theme.accent}` }}>
                  <Typography variant="h6" gutterBottom>{label}</Typography>
                  <Typography variant="body2" color={theme.text}>
                    {i === 0
                      ? "Track your progress, focus on weaknesses, and grow at your own pace."
                      : i === 1
                      ? "Get access to questions and tips collected from real interview experiences."
                      : "Instant insights on your answers help you identify and fix mistakes in real time."}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default InterviewHomePage;



// import React from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Paper,
//   Container,
//   Card,
//   CardContent,
//   CardActions,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function InterviewHomePage() {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           backgroundColor: "#0d47a1",
//           color: "white",
//           py: 6,
//           textAlign: "center",
//         }}
//       >
//         <Container>
//           <Typography variant="h2" gutterBottom>
//             Ace Your Java Interviews
//           </Typography>
//           <Typography variant="h6" sx={{ mb: 3 }}>
//             Comprehensive resources to crack technical and behavioral interviews with confidence.
//           </Typography>
//           <Button
//             variant="contained"
//             color="secondary"
//             size="large"
//             onClick={() => navigate("/mock-interview")}
//           >
//             Start Preparing Now
//           </Button>
//         </Container>
//       </Box>

//       {/* Features Section */}
//       <Container sx={{ py: 5 }}>
//         <Typography
//           variant="h4"
//           textAlign="center"
//           color="text.primary"
//           gutterBottom
//         >
//           What We Offer
//         </Typography>
//         <Typography variant="body1" color="text.secondary" textAlign="center">
//           Explore resources and tools tailored for Java developers.
//         </Typography>

//         <Grid container spacing={4} sx={{ mt: 3 }}>
//           {/* Mock Interviews */}
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: "#ffffff", borderRadius: 2, boxShadow: 3 }}>
//               <CardContent>
//                 <Typography variant="h5" color="primary" gutterBottom>
//                   Mock Technical Interviews
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Simulate real interview scenarios with coding challenges and feedback.
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" variant="outlined" onClick={() => navigate("/mock-interview")}>
//                   Start Now
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>

//           {/* Coding Challenges */}
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: "#ffffff", borderRadius: 2, boxShadow: 3 }}>
//               <CardContent>
//                 <Typography variant="h5" color="primary" gutterBottom>
//                   Coding Challenges
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Solve Java problems to sharpen your problem-solving skills.
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" variant="outlined" onClick={() => navigate("/coding-challenge")}>
//                   Practice
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>

//           {/* Behavioral Questions */}
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: "#ffffff", borderRadius: 2, boxShadow: 3 }}>
//               <CardContent>
//                 <Typography variant="h5" color="primary" gutterBottom>
//                   Behavioral Questions
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Prepare for HR rounds with curated questions and tips.
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" variant="outlined">
//                   Explore
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>

//           {/* SQL Query Practice - Moves to Next Row */}
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: "#ffffff", borderRadius: 2, boxShadow: 3 }}>
//               <CardContent>
//                 <Typography variant="h5" color="primary" gutterBottom>
//                   SQL Query Practice
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Improve your database skills by solving SQL queries.
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" variant="outlined" onClick={() => navigate("/sql-questions")}>
//                   Try Now
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default InterviewHomePage;