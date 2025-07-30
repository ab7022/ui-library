import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
export function ImageOnlyUpload({ config }) {
    const [file, setFile] = React.useState(null);
    const [previewUrl, setPreviewUrl] = React.useState(null);
    const [error, setError] = React.useState(null);
    const inputRef = React.useRef(null);
    const labels = config.labels || {};
    const theme = config.theme || {};
    const handleChange = (e) => {
        setError(null);
        setPreviewUrl(null);
        const files = e.target.files;
        if (!files || files.length === 0)
            return;
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
    return (_jsxs("div", { className: `w-full max-w-xs mx-auto border rounded-lg p-4 flex flex-col items-center ${bgColor} ${textColor}`, children: [_jsxs("label", { className: "cursor-pointer inline-block mb-2", children: [labels.uploadButton || 'Select Image', _jsx(VisuallyHidden, { children: _jsx("input", { ref: inputRef, type: "file", accept: "image/*", onChange: handleChange, "aria-invalid": !!error }) })] }), file && previewUrl && (_jsx("img", { src: previewUrl, alt: file.name, className: "w-32 h-32 object-cover rounded border mb-2" })), file && (_jsxs("div", { className: "text-xs text-green-600", role: "status", children: [labels.preview || 'Selected:', " ", file.name] })), error && (_jsx("div", { className: "mt-2 text-xs text-red-600", role: "alert", children: error }))] }));
}
