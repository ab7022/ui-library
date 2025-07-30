import * as React from 'react';
import { FileUploadConfig } from '../configSchema';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function ButtonUpload({ config }: { config: FileUploadConfig }) {
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

  const sizeClass = theme.size === 'sm' ? 'text-sm py-1 px-2' : theme.size === 'lg' ? 'text-lg py-3 px-6' : 'text-base py-2 px-4';
  const borderRadius = theme.borderRadius || 'rounded-md';
  const borderStyle = theme.borderStyle || 'border';
  const color = theme.color || 'border-gray-300';
  const bgColor = theme.bgColor || 'bg-white';
  const textColor = theme.textColor || 'text-gray-900';
  const focusRing = theme.focusRing || 'focus:ring-2 focus:ring-blue-500';

  return (
    <div className={`inline-block ${borderStyle} ${color} ${borderRadius} p-4 ${bgColor}`}> 
      <label
        className={`cursor-pointer inline-flex items-center gap-2 ${sizeClass} ${textColor} ${focusRing}`}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            inputRef.current?.click();
          }
        }}
        aria-label={labels.uploadButton || 'Upload File'}
      >
        {/* Optional icon placement */}
        {theme.iconPlacement === 'left' && <span aria-hidden>📁</span>}
        {labels.uploadButton || 'Upload File'}
        {theme.iconPlacement === 'right' && <span aria-hidden>📁</span>}
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
      {file && (
        <div className="mt-2 flex items-center gap-2" role="status">
          {previewUrl && (
            <img
              src={previewUrl}
              alt={file.name}
              className="w-12 h-12 object-cover rounded border"
              style={{ minWidth: 48, minHeight: 48 }}
            />
          )}
          <span className="text-xs text-green-600">{labels.preview || 'Selected:'} {file.name}</span>
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