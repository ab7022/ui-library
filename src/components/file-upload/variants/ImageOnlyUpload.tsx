import * as React from 'react';
import { FileUploadConfig } from '../configSchema';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function ImageOnlyUpload({ config }: { config: FileUploadConfig }) {
  const [file, setFile] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const labels = config.labels || {};
  const theme = config.theme || {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setPreviewUrl(null);
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const f = files[0];
    if (!f.type.startsWith('image/')) {
      setError(labels.fileTypeInvalid || 'Only image files allowed.');
      return;
    }
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
  };

  const bgColor = theme.bgColor || 'bg-white';
  const textColor = theme.textColor || 'text-gray-900';
  return (
    <div className={`w-full max-w-xs mx-auto border rounded-lg p-4 flex flex-col items-center ${bgColor} ${textColor}`}>
      <label className="cursor-pointer inline-block mb-2">
        {labels.uploadButton || 'Select Image'}
        <VisuallyHidden>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            aria-invalid={!!error}
          />
        </VisuallyHidden>
      </label>
      {file && previewUrl && (
        <img src={previewUrl} alt={file.name} className="w-32 h-32 object-cover rounded border mb-2" />
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
