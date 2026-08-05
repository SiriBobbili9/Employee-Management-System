// "use client";

// import { useMemo, useState } from "react";
// import {
//   Alert,
//   Box,
//   CircularProgress,
//   Pagination,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";

// export interface Column<T> {
//   field: keyof T | string;
//   headerName: string;
//   align?: "left" | "center" | "right";
//   width?: number;
//   render?: (row: T) => React.ReactNode;
// }

// interface DataTableProps<T> {
//   rows: T[];
//   columns: Column<T>[];

//   loading?: boolean;
//   error?: string | null;

//   rowsPerPage?: number;

//   getRowId: (row: T) => number | string;
// }

// export default function DataTable<T>({
//   rows,
//   columns,
//   loading = false,
//   error = null,
//   rowsPerPage = 10,
//   getRowId,
// }: DataTableProps<T>) {
//   const [page, setPage] = useState(1);

//   const paginatedRows = useMemo(() => {
//     const start = (page - 1) * rowsPerPage;

//     return rows.slice(start, start + rowsPerPage);
//   }, [page, rows, rowsPerPage]);

//   if (loading) {
//     return (
//       <Box py={6} textAlign="center">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Alert severity="error">
//         {error}
//       </Alert>
//     );
//   }

//   return (
//     <>
//       <Paper elevation={2} sx={{ borderRadius: 3 }}>
//         <TableContainer>
//           <Table>

//             <TableHead>
//               <TableRow>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.headerName}
//                     align={column.align ?? "left"}
//                     sx={{
//                       fontWeight: "bold",
//                       width: column.width,
//                     }}
//                   >
//                     {column.headerName}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>

//             <TableBody>

//               {paginatedRows.length === 0 ? (
//                 <TableRow>
//                   <TableCell
//                     colSpan={columns.length}
//                     align="center"
//                   >
//                     No records found
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 paginatedRows.map((row) => (
//                   <TableRow key={getRowId(row)}>

//                     {columns.map((column) => (
//                       <TableCell
//                         key={column.headerName}
//                         align={column.align ?? "left"}
//                       >
//                         {column.render
//                           ? column.render(row)
//                           : String(
//                               row[
//                                 column.field as keyof T
//                               ] ?? ""
//                             )}
//                       </TableCell>
//                     ))}

//                   </TableRow>
//                 ))
//               )}

//             </TableBody>

//           </Table>
//         </TableContainer>
//       </Paper>

//       <Box
//         mt={3}
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//       >
//         <Typography
//           variant="body2"
//           color="text.secondary"
//         >
//           Showing {paginatedRows.length} of {rows.length} records
//         </Typography>

//         <Pagination
//           page={page}
//           count={Math.ceil(rows.length / rowsPerPage)}
//           color="primary"
//           onChange={(e, value) => setPage(value)}
//         />
//       </Box>
//     </>
//   );
// }

"use client";

import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
} from "@mui/x-data-grid";
import { useState } from "react";

interface DataTableProps {
  rows: any[];
  columns: GridColDef[];
  loading?: boolean;
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
}

export default function DataTable({
  rows,
  columns,
  loading = false,
  pageSizeOptions = [10, 25, 50],
  checkboxSelection = false,
}: DataTableProps) {
  const [paginationModel, setPaginationModel] =
    useState<GridPaginationModel>({
      page: 0,
      pageSize: 10,
    });

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: 2,
        overflow: "hidden",
        marginTop: 5,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
        autoHeight
        sx={{
          border: 0,

          "& .MuiDataGrid-columnHeaders": {
            fontWeight: 700,
            backgroundColor: "#f5f5f5",
          },

          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 700,
          },

          "& .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
          },

          "& .MuiDataGrid-footerContainer": {
            borderTop: "1px solid #ddd",
          },
        }}
      />
    </Box>
  );
}