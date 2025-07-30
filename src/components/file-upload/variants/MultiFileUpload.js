import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
export function MultiFileUpload({ config }) {
    const [files, setFiles] = React.useState([]);
    const [error, setError] = React.useState(null);
    const inputRef = React.useRef(null);
    const { acceptedTypes, maxSizeMB, labels = {}, theme = {}, } = config;
    const handleChange = (e) => {
        setError(null);
        const fileList = e.target.files;
        if (!fileList || fileList.length === 0)
            return;
        const newFiles = [];
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
    return (_jsxs("div", { className: `w-full max-w-md mx-auto border rounded-lg p-4 flex flex-col items-center ${bgColor} ${textColor}`, children: [_jsxs("label", { className: "cursor-pointer inline-block mb-2", children: [labels.uploadButton || 'Select Files', _jsx(VisuallyHidden, { children: _jsx("input", { ref: inputRef, type: "file", accept: acceptedTypes?.join(','), multiple: true, onChange: handleChange, "aria-invalid": !!error }) })] }), files.length > 0 && (_jsx("ul", { className: "w-full mt-2 space-y-2", children: files.map((file, idx) => (_jsxs("li", { className: "flex items-center gap-2", children: [file.type.startsWith('image/') && (_jsx("img", { src: URL.createObjectURL(file), alt: file.name, className: "w-10 h-10 object-cover rounded border" })), _jsx("span", { className: "text-xs text-green-600", children: file.name })] }, idx))) })), error && (_jsx("div", { className: "mt-2 text-xs text-red-600", role: "alert", children: error }))] }));
}
