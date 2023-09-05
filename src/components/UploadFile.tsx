import { useMemo, useState } from "react"
import { songService } from "../services/song.service"
import { useDropzone } from "react-dropzone";

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor: 'pointer'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

export const UploadFile = () => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null)

    const onDrop = async (files: File[]) => {
        const file = files[0]
        setUploadedFile(file)
        
        const formData = new FormData()
        formData.append('file', file)
        
        try {
            const response = await songService.upload(formData)

            console.log('response', response)
        } catch (err) {
            console.error('Error uploading file', err)
        }
    }
    
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isFocused,
        isDragAccept,
        isDragReject
      } = useDropzone({ onDrop });
    
      const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isFocused,
        isDragAccept,
        isDragReject
      ]);
    
    return (
        <section className="upload-file">
            <div
                {...getRootProps({style: style as React.CSSProperties})}
                className={isDragActive ? "active" : ""}
            >
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop a file here, or click to select file</p>
                }
            </div>
            {uploadedFile && <p className="uploaded-file">{uploadedFile.name}</p>}
        </section>
    )
}