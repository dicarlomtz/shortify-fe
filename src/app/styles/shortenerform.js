export const boxContainer = {
  width: '100%',
  height: '140px',
  '& > .MuiBox-root > .MuiBox-root': {
    p: 1,
    borderRadius: 2,
    fontSize: '0.875rem',
    fontWeight: '700'
  }
}

export const itemsBoxContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'auto',
  gridTemplateAreas: `"title title title title"
                    "input input input button"
                    "error error error error"`
}

export const titleStyles = {
  fontWeight: 'regular',
  fontSize: 'h3.fontSize',
  textTransform: 'capitalize'
}

export const buttonBoxContainer = {
  gridArea: 'button',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
