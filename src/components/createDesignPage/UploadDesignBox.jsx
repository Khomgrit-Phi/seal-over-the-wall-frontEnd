  import React, { useRef, useState } from 'react';
import fileicon from '../../assets/images/create-design-pages/file-icon.svg';

const CLOUD_NAME = 'dvpnipb6g';
const UPLOAD_PRESET = 'upload_designs';

function UploadDesignBox({ onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [uploadURL, setUploadURL] = useState('');
  const fileInputRef = useRef();

  const handleFileUpload = async (file) => {
    if (!file) return;
    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      setError('Only JPG and PNG files are allowed.');
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      setError('File exceeds 25MB limit.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      setUploading(true);
      setError('');
      const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.secure_url) {
        setUploadURL(data.secure_url);
        onUpload?.(data.secure_url);
      } else {
        setError('Upload failed. Try again.');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError('Upload error. Check connection.');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleBrowse = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFileUpload(file);
  };

  const handleRemove = () => {
    setUploadURL('');
    setError('');
    onUpload?.('');
  };

  return (
    <>
      {uploadURL ? (
        <div className='relative w-[290px] h-[250px] flex items-center justify-center  mt-10'>
        <img
          src={uploadURL}
          alt='Uploaded Design Preview'
          className='max-h-full max-w-full object-contain'
          />
        <button
        onClick={handleRemove}
        className='absolute mt-130 left-1/2 -translate-x-1/2 bg-red-400 text-white font-medium py-2 px-4 rounded-[8px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-500 hover:scale-105'
          >
        Remove
      </button>
      </div>
      ) : (
        <div
          className='step-2 flex flex-col items-center justify-center w-[290px] h-[330px] outline-3 outline-dashed outline-gray-200 mt-2 cursor-pointer relative'
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <p className='font-semibold text-2xl'>Upload your design</p>
          <p className='font-medium text-lg'>Drag & Drop it here</p>
          <img src={fileicon} alt="File Icon" className='w-[56px] h-[72px] my-8' />

          <div className='flex items-center justify-center gap-2'>
            <p className='font-medium text-lg text-secondary-dark-gray-300'>or</p>
            <button
              onClick={handleBrowse}
              className='font-medium text-lg text-primary-blue-500 underline hover:text-primary-blue-700 cursor-pointer'
            >
              Upload
            </button>
            <p className='font-medium text-lg text-secondary-dark-gray-300'>your file</p>
            <input
              type='file'
              accept='image/jpeg, image/png'
              ref={fileInputRef}
              onChange={handleFileChange}
              className='hidden'
            />
          </div>

          <div className='text-sm text-secondary-dark-gray-300 mt-2'>
            Max file size: <strong>25MB</strong><br />
            Supported: <strong>JPG, PNG</strong>
          </div>

          {uploading && <p className='text-blue-500 mt-2'>Uploading...</p>}
          {error && <p className='text-red-500 mt-2'>{error}</p>}
        </div>
      )}
    </>
  );
}

export default UploadDesignBox;

