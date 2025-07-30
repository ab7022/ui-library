import * as React from 'react';
import { FileUploadConfig } from '../configSchema';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function PreviewUpload({ config }: { config: FileUploadConfig }) {
  const [file, setFile] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const {
    acceptedTypes,
    maxSizeMB,
    labels = {},
    theme = {},
    multiple = false,
  } = config;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setPreviewUrl(null);
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const f = files[0];
    if (acceptedTypes && !acceptedTypes.includes(f.type)) {
      setError(labels.fileTypeInvalid || 'Invalid file type.');
      return;
    }
    if (maxSizeMB && f.size > maxSizeMB * 1024 * 1024) {
      setError(labels.fileSizeExceed || `File exceeds ${maxSizeMB}MB.`);
      return;
    }
    setFile(f);
    if (f.type.startsWith('image/')) {
      const url = URL.createObjectURL(f);
      setPreviewUrl(url);
    }
  };

  const bgColor = theme.bgColor || 'bg-white';
  const textColor = theme.textColor || 'text-gray-900';
  return (
    <div className={`w-full max-w-md mx-auto border rounded-lg p-4 flex flex-col items-center ${bgColor} ${textColor}`}>
      <label className="cursor-pointer inline-block mb-2">
        {labels.uploadButton || 'Select File'}
        <VisuallyHidden>
          <input
            ref={inputRef}
            type="file"
            accept={acceptedTypes?.join(',')}
            multiple={multiple}
            onChange={handleChange}
            aria-invalid={!!error}
          />
        </VisuallyHidden>
      </label>
      {file && previewUrl && (
        <img src={previewUrl} alt={file.name} className="w-48 h-48 object-contain rounded border mb-2" />
      )}
      {file && (
        <div className="text-xs text-green-600" role="status">
          {labels.preview || 'Selected:'} {file.name}
        </div>
      )}
      {error && (
        <div className="mt-2 text-xs text-red-600" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
