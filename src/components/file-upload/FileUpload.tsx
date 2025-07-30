import { FileUploadConfig } from './configSchema';
import { ButtonUpload } from './variants/ButtonUpload';
import { DropzoneUpload } from './variants/DropzoneUpload';
import { PreviewUpload } from './variants/PreviewUpload';
import { ImageOnlyUpload } from './variants/ImageOnlyUpload';
import { MultiFileUpload } from './variants/MultiFileUpload';

export function FileUpload({ config }: { config: FileUploadConfig }) {
  const { variant = 'button' } = config;

  switch (variant) {
    case 'dropzone':
      return <DropzoneUpload config={config} />;
    case 'image-preview':
      return <PreviewUpload config={config} />;
    case 'image-only':
      return <ImageOnlyUpload config={config} />;
    case 'multi-file':
      return <MultiFileUpload config={config} />;
    case 'button':
    default:
      return <ButtonUpload config={config} />;
  }
}