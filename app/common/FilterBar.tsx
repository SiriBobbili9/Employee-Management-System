"use client";

import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterField {
  key: string;
  label: string;
  type: "text" | "select";
  placeholder?: string;
  options?: FilterOption[];
}

interface FilterBarProps {
  filters: Record<string, string>;
  sortBy: string;

  fields: FilterField[];

  sortOptions: FilterOption[];

  onChange: (field: string, value: string) => void;
  onSortChange: (value: string) => void;
}

export default function FilterBar({
  filters,
  sortBy,
  fields,
  sortOptions,
  onChange,
  onSortChange,
}: FilterBarProps) {
  return (
    <Grid container spacing={2} mb={3}>
      {fields.map((field) => (
        <Grid key={field.key} size={{ xs: 12, md: 4 }}>
          {field.type === "text" ? (
            <TextField
              fullWidth
              label={field.label}
              placeholder={field.placeholder}
              value={filters[field.key]}
              onChange={(e) =>
                onChange(field.key, e.target.value)
              }
            />
          ) : (
            <FormControl fullWidth>
              <InputLabel>{field.label}</InputLabel>

              <Select
                label={field.label}
                value={filters[field.key]}
                onChange={(e) =>
                  onChange(field.key, e.target.value)
                }
              >
                <MenuItem value="">
                  All {field.label}
                </MenuItem>

                {field.options?.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Grid>
      ))}

      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Sort By</InputLabel>

          <Select
            value={sortBy}
            label="Sort By"
            onChange={(e) =>
              onSortChange(e.target.value)
            }
          >
            {sortOptions.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}