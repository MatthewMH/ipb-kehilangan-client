import logo from './logosipbk.svg';
import './Mystyle.css';
import * as React from 'react';
import { useState } from 'react';
import { TextField, Stack, Box, Button, InputAdornment, IconButton}from '@mui/material';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default function CreateReport(){

    const [val, setVal] = useState({
        things: '',
        date: '',
        time: '',
        place:'',
        desc: '',
        pic: '',
      });

    const [valErr, setValErr] = useState({
        things: false,
        date: false,
        time: false,
        place: false,
        desc: false,
       });

    const handleChange = (prop) => (e) => {

        setVal({ ...val, [prop]: e.target.value })

        e.preventDefault()

        setValErr(false)

        if( val === ''){
            setValErr (true)
        }       
        if (val){
            console.log("Report: ", val)
        }
      };

    // const handleSubmit = (e) => {}

    return (
        <>
            <div className="Body">
                <img src={logo} className="App-logo" alt="logo" />
                <header className = "Container">
                    <form noValidate autoComplete="off" onSubmit={handleChange} >
                    <Stack spacing={3}>
                        <TextField
                            label="Nama Barang"
                            type="text"
                            variant="outlined"
                            value={val.things}
                            fullWidth
                            required
                            onChange={handleChange('things')}
                            error={valErr.things}
                        />
                        <Stack direction="row" spacing={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                type="date"
                                label="Tanggal Hilang"
                                value={val.date}
                                onChange={(newDate) => setVal(newDate)}
                                // onChange={handleChange('date')}
                                // renderInput={(inputProps) => <TextField {...inputProps} required/>}
                                renderInput={(params) => <TextField {...params} required/>}
                                error={valErr.time}
                            />

                            <TimePicker
                                type="time"
                                label="Jam"
                                value={val.time}
                                onChange={(newTime) => setVal(newTime)}
                                // onChange={handleChange('time')}
                                renderInput={(inputProps) => <TextField {...inputProps} required/>}
                                error={valErr.date}
                            />

                        </LocalizationProvider>
                        </Stack>

                        <TextField
                            type="text"
                            // className={style.field}
                            label="Tempat"
                            variant="outlined"
                            value={val.place}
                            fullWidth
                            required
                            onChange={handleChange('place')}
                            error={valErr.place}

                        />

                        <TextField
                            type="text"
                            label="Ciri-ciri Barang"
                            variant="outlined"
                            value={val.desc}
                            multiline
                            rows={4}
                            fullWidth
                            required
                            onChange={handleChange('desc')}
                            error={valErr.desc}
                        />

                        <TextField
                            // type="file"
                            // className={style.field}
                            label="Foto Barang"
                            variant="outlined"
                            value={val.pic}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment>
                                        <label htmlFor="icon-button-photo">
                                            <IconButton>
                                                <AddAPhotoIcon />
                                            </IconButton>
                                        </label>
                                        <input
                                            type="file"
                                            accept='image/*'
                                            onChange={handleChange('pic')}
                                        />

                                    </InputAdornment>
                                ),
                              }}
                            
                        />
                        
                        <Box alignItems='center' justifyContent='center'>
                        <Button
                            onClick = {() => console.log('submitted')}
                            type = "submit"
                            sx = {{backgroundColor:'#5D5FEF', width : 100}}
                            variant = "contained"
                        >
                        <b>Post</b>
                        </Button>
                        </Box>

                    </Stack>

                    </form>
                </header>
            </div> 
        </>
    );
}
  