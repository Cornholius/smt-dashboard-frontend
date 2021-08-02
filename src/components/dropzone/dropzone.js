import React, { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    display: 'flex',
    width: '40%',
    height: '520px',
    boxSizing: 'border-box',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'rgba(78, 205, 196, 0.8)',
    borderStyle: 'dashed',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    backgroundColor: '#fff',
    color: '#2F323A',
    transition: 'border .3s ease-in-out',
    textAlign: 'center',
    alignSelf: 'flex-start',
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

function DropzoneComponent(props) {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png'
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    return (
        <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            <div>Кидай сюда файлы для закрепления, или жми на эту область</div>
        </div>
    )
}

export default DropzoneComponent;