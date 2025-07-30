import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
export function DropzoneUpload({ config }) {
    const [file, setFile] = React.useState(null);
    const [previewUrl, setPreviewUrl] = React.useState(null);
    const [error, setError] = React.useState(null);
    const inputRef = React.useRef(null);
    const [dragActive, setDragActive] = React.useState(false);
    const { acceptedTypes, maxSizeMB, labels = {}, theme = {}, multiple = false, } = config;
    const handleFiles = (files) => {
        setError(null);
        setPreviewUrl(null);
        if (!files || files.length === 0)
            return;
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
    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        handleFiles(e.dataTransfer.files);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            inputRef.current?.click();
        }
    };
    const sizeClass = theme.size === 'sm' ? 'text-sm py-4' : theme.size === 'lg' ? 'text-lg py-12' : 'text-base py-8';
    const borderRadius = theme.borderRadius || 'rounded-md';
    const borderStyle = theme.borderStyle || 'border-2 border-dashed';
    const color = theme.color || 'border-blue-400';
    const bgColor = dragActive ? 'bg-blue-100' : (theme.bgColor || 'bg-white');
    const textColor = theme.textColor || 'text-blue-900';
    const focusRing = theme.focusRing || 'focus:ring-2 focus:ring-blue-500';
    return (_jsxs("div", { className: `w-full max-w-lg mx-auto ${borderStyle} ${color} ${borderRadius} ${bgColor} ${focusRing} flex flex-col items-center justify-center transition-all duration-150`, tabIndex: 0, onKeyDown: handleKeyDown, onDrop: handleDrop, onDragOver: handleDragOver, onDragLeave: handleDragLeave, "aria-label": labels.dropzone || 'Drop files here or click to upload', style: { minHeight: 160, cursor: 'pointer' }, onClick: () => inputRef.current?.click(), role: "button", children: [_jsx("span", { className: `block ${sizeClass} ${textColor} select-none`, children: labels.dropzone || 'Drag & drop file here or click to select' }), _jsx(VisuallyHidden, { children: _jsx("input", { ref: inputRef, type: "file", accept: acceptedTypes?.join(','), multiple: multiple, onChange: e => handleFiles(e.target.files), "aria-invalid": !!error }) }), file && (_jsxs("div", { className: "mt-2 flex items-center gap-2", role: "status", children: [previewUrl && (_jsx("img", { src: previewUrl, alt: file.name, className: "w-12 h-12 object-cover rounded border", style: { minWidth: 48, minHeight: 48 } })), _jsxs("span", { className: "text-xs text-green-600", children: [labels.preview || 'Selected:', " ", file.name] })] })), error && (_jsx("div", { className: "mt-2 text-xs text-red-600", role: "alert", children: error }))] }));
}
