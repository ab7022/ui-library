import * as React from 'react';
import { FileUploadConfig } from '../configSchema';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function MultiFileUpload({ config }: { config: FileUploadConfig }) {
  const [files, setFiles] = React.useState<File[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const {
    acceptedTypes,
    maxSizeMB,
    labels = {},
    theme = {},
  } = config;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;
    const newFiles: File[] = [];
    for (let i = 0; i < fileList.length; i++) {
      const f = fileList[i];
      if (acceptedTypes && !acceptedTypes.includes(f.type)) {
        setError(labels.fileTypeInvalid || 'Invalid file type.');
        return;
      }
      if (maxSizeMB && f.size > maxSizeMB * 1024 * 1024) {
        setError(labels.fileSizeExceed || `File exceeds ${maxSizeMB}MB.`);
        return;
      }
      newFiles.push(f);
    }
    setFiles(newFiles);
  };

  const bgColor = theme.bgColor || 'bg-white';
  const textColor = theme.textColor || 'text-gray-900';
  return (
    <div className={`w-full max-w-md mx-auto border rounded-lg p-4 flex flex-col items-center ${bgColor} ${textColor}`}>
      <label className="cursor-pointer inline-block mb-2">
        {labels.uploadButton || 'Select Files'}
        <VisuallyHidden>
          <input
            ref={inputRef}
            type="file"
            accept={acceptedTypes?.join(',')}
            multiple
            onChange={handleChange}
            aria-invalid={!!error}
          />
        </VisuallyHidden>
      </label>
      {files.length > 0 && (
        <ul className="w-full mt-2 space-y-2">
          {files.map((file, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {file.type.startsWith('image/') && (
                <img src={URL.createObjectURL(file)} alt={file.name} className="w-10 h-10 object-cover rounded border" />
              )}
              <span className="text-xs text-green-600">{file.name}</span>
            </li>
          ))}
        </ul>
      )}
      {error && (
        <div className="mt-2 text-xs text-red-600" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
