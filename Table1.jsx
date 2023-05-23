import { Table,TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Table1 = () => {
  return (
    <div>
        <TableContainer>
            <Table>
               <TableHead>
                    <TableRow>
                        <TableCell style={{color:'cyan',fontFamily:"cursive",fontSize:"30px"}}>NAME</TableCell>
                        <TableCell style={{color:'red',fontFamily:"cursive",fontSize:"30px"}}>AGE</TableCell>
                    </TableRow>
                </TableHead> 
            </Table>        
        </TableContainer>
    </div>
  )
}

export default Table1