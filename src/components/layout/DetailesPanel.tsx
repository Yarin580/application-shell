import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { motion } from "framer-motion";
import { BaseModel } from "../../types/models";

interface DetailPanelProps {
  selectedItem: BaseModel | null;
}

export const DetailPanel = ({ selectedItem }: DetailPanelProps) => {
  return (
    <Card
      sx={{
        mt: 2,
        height: "25vh",
        overflowY: "auto",
        boxShadow: 3,
        borderRadius: 3,
        backgroundColor: "#F3FAF8",
        border: "1px solid #D1EDE8",
      }}
    >
      {selectedItem === null ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flexDirection: "column",
            gap: 1,
            textAlign: "center",
          }}
        >
          <InfoOutlinedIcon sx={{ fontSize: 40, color: "#94BEB9" }} />
          <Typography variant="body1" color="#608A86">
            Select an item to view details
          </Typography>
        </Box>
      ) : (
        <motion.div
          key={selectedItem.id || "empty"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <CardContent>
            <Grid container spacing={2}>
              {Object.entries(selectedItem).map(([key, value]) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: "#E6F4F1",
                        borderRadius: 2,
                        boxShadow: 1,
                        border: "1px solid #C4DFDA",
                      }}
                    >
                      <Typography variant="subtitle2" color="#467F79">
                        {key}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "bold",
                          mt: 0.5,
                          color: "#28534E",
                        }}
                      >
                        {value instanceof Date
                          ? value.toLocaleDateString()
                          : value?.toString()}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </motion.div>
      )}
    </Card>
  );
};
