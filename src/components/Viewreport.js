
        <div>
        {dailyKWH ?( <Loading/>
        ):(
        <div>
        <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell className={classes.tableHeaderCell} 
                         key={header} 
                        //  hidden={header === 'Active'
                         hidden={['Active','MeterType','SwitchStatus'].includes(header)}>
                          {header}
                          </TableCell>  // Render each header name
             ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dailyKWH.map((row) => (
            <TableRow key={row.id}>  
              {headers.map((header) => (
                <>
                <TableCell  key={header} hidden={['Active', 'MeterType', 'SwitchStatus'].includes(header)}>{row[header]}</TableCell>             
                {/* <TableCell><span className={header['RA Set Temp']>'21'? "text-success":"text-center"} >{header['SA %RH']}</span></TableCell> */}
                </>          
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
        </div>
        )
        }
        </div>
    