export interface FileUploadConfig {
    variant?: 'button' | 'dropzone' | 'image-preview' | 'image-only' | 'multi-file' | 'compact';
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
    stylePresets?: string;
    [key: string]: any;
}
