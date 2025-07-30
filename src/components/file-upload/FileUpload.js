import { jsx as _jsx } from "react/jsx-runtime";
import { ButtonUpload } from './variants/ButtonUpload';
import { DropzoneUpload } from './variants/DropzoneUpload';
import { PreviewUpload } from './variants/PreviewUpload';
import { ImageOnlyUpload } from './variants/ImageOnlyUpload';
import { MultiFileUpload } from './variants/MultiFileUpload';
export function FileUpload({ config }) {
    const { variant = 'button' } = config;
    switch (variant) {
        case 'dropzone':
            return _jsx(DropzoneUpload, { config: config });
        case 'image-preview':
            return _jsx(PreviewUpload, { config: config });
        case 'image-only':
            return _jsx(ImageOnlyUpload, { config: config });
        case 'multi-file':
            return _jsx(MultiFileUpload, { config: config });
        case 'button':
        default:
            return _jsx(ButtonUpload, { config: config });
    }
}
