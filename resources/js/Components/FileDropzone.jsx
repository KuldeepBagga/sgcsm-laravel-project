import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function FileDropzone({ onFileSelect }) {
    const onDrop = useCallback((acceptedFiles) => {
        onFileSelect(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false, // change if you want multiple files
        accept: {
            "image/*": []
        }
    });

    return (
        <div
            {...getRootProps()}
            className={`border-2 border-dashed p-6 rounded-lg text-center cursor-pointer 
            ${isDragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300"}`}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p className="text-indigo-500">Drop the file here...</p>
            ) : (
                <p className="text-gray-500">
                    Drag & drop an image here, or click to select
                </p>
            )}
        </div>
    );
}