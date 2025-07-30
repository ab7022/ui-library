
# 📁 file-upload-ui-lib

## 🚀 Installation

Install the package via npm:

```bash
npm install file-upload-ui-lib
```

Or with yarn:

```bash
yarn add file-upload-ui-lib
```

Or with pnpm:

```bash
pnpm add file-upload-ui-lib
```

A simple, customizable, config-driven file upload component built with React, TailwindCSS, and Vite.

## ✨ Features

- Configurable via JSON
- Themed with Tailwind
- Typed with TypeScript
- Easily customizable

## 🚀 Usage

```bash
npm install file-upload-ui-lib
```

```tsx
import { FileUpload } from 'file-upload-ui-lib';

<FileUpload config={{
  variant: 'button',
  acceptedTypes: ['image/png'],
  labels: {
    uploadButton: 'Upload Avatar'
  }
}} />
```

## 🛠 Config Reference

```ts
export interface FileUploadConfig {
  variant?: 'button' | 'dropzone' | 'image-preview' | 'compact';
  acceptedTypes?: string[];
  maxSizeMB?: number;
  multiple?: boolean;
  labels?: {
    uploadButton?: string;
    dropzone?: string;
    preview?: string;
    removeFile?: string;
    fileSizeExceed?: string;
    fileTypeInvalid?: string;
    placeholder?: string;
  };
  theme?: {
    size?: 'sm' | 'md' | 'lg';
    borderRadius?: string;
    borderStyle?: string;
    iconPlacement?: 'left' | 'right';
    color?: string;
    bgColor?: string;
    textColor?: string;
    focusRing?: string;
  };
  stylePresets?: string; // Optional: for future preset support
  [key: string]: any; // Allow extra config for LLM flexibility
}
```

## 🧑‍💻 Demo & Live Config Editor

To try all variants and edit the config live, run:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) to see the demo page with all variants and a live JSON config editor.

## Example Config

```json
{
  "variant": "button",
  "acceptedTypes": ["image/png", "image/jpeg"],
  "maxSizeMB": 2,
  "multiple": false,
  "labels": {
    "uploadButton": "Upload Avatar",
    "fileTypeInvalid": "Only PNG/JPEG allowed.",
    "fileSizeExceed": "File too large!",
    "preview": "Selected file:",
    "placeholder": "No file selected"
  },
  "theme": {
    "borderRadius": "rounded-lg",
    "size": "md",
    "iconPlacement": "left",
    "color": "border-blue-400",
    "bgColor": "bg-blue-50",
    "textColor": "text-blue-900",
    "focusRing": "focus:ring-2 focus:ring-blue-500"
  }
}
```
# ui-library
