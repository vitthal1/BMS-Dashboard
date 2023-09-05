
<div style={{ display: 'flex', alignItems: 'center', 
justifyContent: 'flex-end' }}>
  <TextField
    label="Search"
    value={search}
    onChange={handleSearchChange}
    className={classes.name}
    InputLabelProps={{
      style: {
        fontWeight: 'bold',
        color: 'grey'
      }
    }}
    inputProps={{
      style: {
        border: '1px solid grey'
      }
    }}
  />
  <button
    variant="contained"
    color="primary"
    onClick={fetchData}
    startIcon={<RefreshIcon />}
    style={{ marginLeft: '15px' }}
  >
    Refresh
  </button>
</div>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
  <TextField
    label="Search"
    value={search}
    onChange={handleSearchChange}
    className={classes.name}
    InputLabelProps={{
      style: {
        fontWeight: 'bold',
        color: 'grey'
      }
    }}
    inputProps={{
      style: {
        border: '1px solid grey',
        height: '38px' // same as button height
      }
    }}
  />
  <button
    variant="contained"
    color="primary"
    onClick={fetchData}
    startIcon={<RefreshIcon />}
    style={{ marginLeft: '10px', height: '30px' }}
  >
    Refresh
  </button>
</div>
