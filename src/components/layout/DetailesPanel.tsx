import { Paper, Typography, Grid, Box } from "@mui/material";
import { BaseModel } from "../../types/models";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { motion } from "framer-motion";

interface DetailPanelProps {
  selectedItem: BaseModel | null;
}

export const DetailPanel = ({ selectedItem }: DetailPanelProps) => {
  return (
    <Paper sx={{ p: 2, mt: 2, height: "25vh", overflow: "auto" }}>
      {selectedItem === null ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <InfoOutlinedIcon sx={{ fontSize: "30px", color: "gray" }} />
          <Typography color="textSecondary">
            Select an item to view details
          </Typography>
        </Box>
      ) : (
        <motion.div
          key={selectedItem ? selectedItem.id : "empty"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h6" gutterBottom>
            More Detailes
          </Typography>
          <Grid container spacing={2}>
            {Object.entries(selectedItem).map(([key, value]) => (
              <Grid item xs={6} sm={4} md={3} key={key}>
                <Typography variant="subtitle2" color="textSecondary">
                  {key}
                </Typography>
                <Typography variant="body2">
                  {value instanceof Date
                    ? value.toLocaleDateString()
                    : value?.toString()}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      )}
    </Paper>
  );
};
