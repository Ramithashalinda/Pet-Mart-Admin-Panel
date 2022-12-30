import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LinearProgressWithLabel from './uploadProgressBar';

function UploadFiles() {
    const [selectedFiles, setSelectedFiles] = useState('av');
    const [progress, setProgress] = useState(43);
    const [isSubmited, setIsSubmited] = useState(false);

    const submitHandler = () => {
        setIsSubmited(true);
    };

    const onFileChange = (e) => {
        setSelectedFiles(e.target.files[0]);
    };
    return (
        <div>
            <input type="file" onChange={onFileChange} />

            <Button variant="contained" component="label" onClick={submitHandler}>
                Upload
            </Button>

            {isSubmited ? (
                <div style={{ width: '100%' }}>
                    <LinearProgressWithLabel value={progress} />
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default UploadFiles;
