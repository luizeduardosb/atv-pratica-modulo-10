import React, { useState } from 'react';
import { Grid, FormControl, Input, FormHelperText } from '@mui/material';

function Login() {
    const [login, setLogin] = useState('');
    return (
        <div>
            <h1>Olá</h1>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <Input 
                        id="login-nome" 
                        aria-describedby="login-nome_helper_text" 
                        value={login} 
                        onChange={e => setLogin(e.target.value)} 
                    />
                    <FormHelperText id="login-nome_helper_text">Login</FormHelperText>
                </FormControl>
            </Grid>
        </div>
    );
}

export default Login;
