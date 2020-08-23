import React from 'react';

interface Props {
    children: React.ReactNode,
    onUpload: (file : string | ArrayBuffer | null) => void
}

const UploadButton : React.FC<Props> = ({ children, onUpload }) => {
    const fileInput = React.useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        if (fileInput.current !== null) {
            fileInput.current.click();
        }
    }

    const handleUpload = (e : any) => {
        const file = e.target.files[0];

        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onloadend = () => {
                // this.setState({
                //     title: file.name,
                //     videoFile: file,
                //     videoUrl: fileReader.result
                // });

                onUpload(fileReader.result);
            }
        } else {
            // this.setState({ videoFile: null, videoUrl: '' })
            onUpload('');
        }
    }

    return (
        <div className='ui-upload-button'>
            <input type="file" ref={fileInput} onChange={handleUpload} />
            <button className='ui-button' onClick={onButtonClick}>
                {children}
            </button>
        </div>
    )
};

export default UploadButton;