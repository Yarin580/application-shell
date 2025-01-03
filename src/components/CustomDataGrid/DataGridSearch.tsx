import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from "react";

interface DataGridSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setPage: (page: number) => void;
}

const DataGridSearch = ({
  searchQuery,
  setSearchQuery,
  setPage,
}: DataGridSearchProps) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset to the first page on search
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchChange}
      sx={{
        width: 240,
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          "& fieldset": {
            borderColor: "divider",
          },
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default DataGridSearch;
