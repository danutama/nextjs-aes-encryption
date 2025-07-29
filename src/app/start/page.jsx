'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import DropZone from '@/components/DropZone';
import InputKey from '@/components/InputKey';
import Credit from '@/components/Credit';
import { encryptFile, decryptFile } from '@/utils/crypto';
import toast from 'react-hot-toast';

const MAX_FILE_SIZE_MB = 200;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export default function EncryptionPage() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleRefresh = () => {
    setFile(null);
    setFileName('');
    setPrivateKey('');
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleEncryptClick = () => {
    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      toast.error(`File too large. Max allowed size is ${MAX_FILE_SIZE_MB}MB`);
      return;
    }
    encryptFile(file, fileName, privateKey);
  };

  const handleDecryptClick = () => {
    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      toast.error(`File too large. Max allowed size is ${MAX_FILE_SIZE_MB}MB`);
      return;
    }
    decryptFile(file, fileName, privateKey);
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="text-center mb-4">
        <div className="mb-3 d-flex justify-content-center align-items-center">
          <span className="icon blue-pastel-1 d-flex justify-content-center align-items-center pt-1">
            {/* <i className="bi bi-shield-fill-check text-primary"></i> */}
            <Image src="/logo-blue.png" alt="logo" className="img-logo" width={43} height={50} priority />
          </span>
        </div>
        <h1 className="mb-2 fw-bold">AES Security</h1>
        <p className="text-secondary">Securely encrypt and decrypt your files with AES 128, 192, or 256 bit</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <DropZone file={file} fileName={fileName} fileInputRef={fileInputRef} handleFileChange={handleFileChange} setFile={setFile} setFileName={setFileName} />

          <InputKey privateKey={privateKey} setPrivateKey={setPrivateKey} />

          <div className="d-flex justify-content-sm-center justify-content-between gap-sm-2 gap-1 mt-4">
            <button className="btn btn-primary" onClick={handleEncryptClick}>
              <i className="bi bi-lock-fill"></i> Encrypt
            </button>
            <button className="btn btn-primary" onClick={handleDecryptClick}>
              <i className="bi bi-unlock-fill"></i> Decrypt
            </button>
            <button className="btn btn-refresh" onClick={handleRefresh}>
              <i className="bi bi-arrow-clockwise"></i> Refresh
            </button>
          </div>

          <div className="mt-4">
            <Credit />
          </div>
        </div>
      </div>
    </div>
  );
}
