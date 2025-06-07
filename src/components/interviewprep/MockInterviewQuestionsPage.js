// import React, { useState } from "react";
// import {
//   Box, Typography, Container, TextField, Grid, Select, MenuItem, FormControl, InputLabel, Card, CardContent, Accordion,
//   AccordionSummary, AccordionDetails, Button,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useNavigate } from "react-router-dom";
// import { styled } from "@mui/system";
// import mockInterviewQuestions from "../../data/mockInterviewQuestions";

// // Styled components for aesthetics
// const StyledCard = styled(Card)({
//   borderRadius: 10, boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.03)",
//     boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
//   },
// });

// const Header = styled(Box)({
//   textAlign: "center",
//   padding: "10px 0",
//   backgroundColor: "#2E3B55",
//   color: "#fff",
//   borderRadius: "10px",
//   marginBottom: "30px",
// });

// const StartPracticeButton = styled(Button)({
//   backgroundColor: "#2E3B55",
//   color: "#fff",
//   fontWeight: "bold",
//   margin: "20px auto",
//   padding: "10px 20px",
//   display: "block",
//   "&:hover": {
//     backgroundColor: "#3B4A6B",
//   },
// });

// function MockInterviewQuestionsPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("");
//   const navigate = useNavigate();

//   const questions = mockInterviewQuestions;

//   // Filter logic
//   const filteredQuestions = questions.filter(
//     (q) =>
//       (category === "" || q.category === category) &&
//       q.question.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Box sx={{ backgroundColor: "#F4F6F9", minHeight: "100vh", padding: "40px 0" }}>
//       <Container maxWidth="lg">
//         {/* Header */}
//         <Header>
//           <Typography variant="h4">Mock Interview Questions</Typography>
//           <Typography variant="body1" sx={{ fontStyle: "italic" }}>
//             Practice your skills with handpicked questions across various topics.
//           </Typography>
//         </Header>

//         {/* Start Practice Button */}
//         <StartPracticeButton
//           onClick={() => navigate("/mock-interview-practice")}
//         >
//           Take Mock Session
//         </StartPracticeButton>

//         {/* Filters */}
//         <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Search Questions"
//               variant="outlined"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel>Filter by Category</InputLabel>
//               <Select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <MenuItem value="">All Categories</MenuItem>
//                 <MenuItem value="Core Java">Core Java</MenuItem>
//                 <MenuItem value="Data Structures">Data Structures</MenuItem>
//                 <MenuItem value="Java 8 Features">Java 8 Features</MenuItem>
//                 <MenuItem value="MySQL">MySQL</MenuItem>
//                 <MenuItem value="Hibernate">Hibernate</MenuItem>
//                 <MenuItem value="Springboot">Springboot</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>

//         {/* Questions List */}
//         <Grid container spacing={2}>
//           {filteredQuestions.map((q) => (
//             <Grid item xs={12} key={q.id}>
//               <StyledCard>
//                 <CardContent>
//                   <Accordion>
//                     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                       <Typography variant="h6">{q.question}</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Typography>{q.answer}</Typography>
//                     </AccordionDetails>
//                   </Accordion>
//                 </CardContent>
//               </StyledCard>
//             </Grid>
//           ))}

//           {filteredQuestions.length === 0 && (
//             <Typography textAlign="center" sx={{ marginTop: "20px", fontStyle: "italic" }}>
//               No questions match your search criteria.
//             </Typography>
//           )}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default MockInterviewQuestionsPage;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import mockInterviewQuestions from "../../data/mockInterviewQuestions";

function MockInterviewQuestionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const questions = mockInterviewQuestions;

  // Filter logic
  const filteredQuestions = questions.filter(
    (q) =>
      (category === "" || q.category === category) &&
      q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: "20px 10px", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1200px", px: 2 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            Mock Interview Questions
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1, fontStyle: "italic" }}>
            Practice your skills with handpicked questions across various topics.
          </Typography>
        </Box>

        {/* Start Practice Button */}
        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            onClick={() => navigate("/mock-interview-practice")}
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#115293" },
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: 1,
            }}
          >
            Take Mock Session
          </Button>
        </Box>

        {/* Filters */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Search Questions"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Filter by Category</InputLabel>
              <Select value={category} onChange={(e) => setCategory(e.target.value)} label="Filter by Category">
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="Core Java">Core Java</MenuItem>
                <MenuItem value="Data Structures">Data Structures</MenuItem>
                <MenuItem value="Java 8 Features">Java 8 Features</MenuItem>
                <MenuItem value="MySQL">MySQL</MenuItem>
                <MenuItem value="Hibernate">Hibernate</MenuItem>
                <MenuItem value="Springboot">Springboot</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Questions List */}
        <Box>
          {filteredQuestions.length === 0 ? (
            <Typography textAlign="center" color="text.secondary" sx={{ fontStyle: "italic", mt: 4 }}>
              No questions match your search criteria.
            </Typography>
          ) : (
            filteredQuestions.map((q) => (
              <Accordion key={q.id} sx={{ mb: 2, boxShadow: "none", border: "1px solid #ddd", borderRadius: 1 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {q.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{q.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default MockInterviewQuestionsPage;




