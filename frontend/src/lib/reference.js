<TextField
  variant='filled'
  color='primary'
  style={{ margin: 10, maxWidth: 300 }}
  type='text'
  name='name'
  value={state.example}
  onChange={handleNameInput} 
  placeholder='Enter your name ...'
  required>
</TextField>

import { TextField } from '@material-ui/core'