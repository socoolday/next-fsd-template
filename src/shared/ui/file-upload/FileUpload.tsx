"use client";

import * as React from "react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { Input } from "@/shared/ui/input";
import Image from "next/image";

interface FileUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  /**
   * 선택된 파일들
   */
  files?: File[];
  /**
   * 파일 선택 시 호출되는 콜백
   */
  onFilesChange?: (files: File[]) => void;
  /**
   * 파일 삭제 시 호출되는 콜백
   */
  onFileRemove?: (index: number) => void;
  /**
   * 이미지 미리보기 표시 여부
   * @default true
   */
  showImagePreview?: boolean;
  /**
   * 다중 파일 선택 허용 여부
   * @default false
   */
  multiple?: boolean;
  /**
   * 허용되는 파일 타입 (예: "image/*", ".pdf,.doc")
   */
  accept?: string;
  /**
   * 최대 파일 크기 (MB)
   */
  maxSize?: number;
  /**
   * 최대 파일 개수
   */
  maxFiles?: number;
  /**
   * 업로드 버튼 텍스트
   * @default "파일 선택"
   */
  buttonText?: string;
  /**
   * 드래그 앤 드롭 활성화 여부
   * @default true
   */
  enableDragDrop?: boolean;
}

/**
 * FileUpload 컴포넌트
 * 파일 선택, 미리보기, 삭제 기능을 제공하는 파일 업로드 컴포넌트입니다.
 * 
 * @example
 * <FileUpload
 *   accept="image/*"
 *   onFilesChange={(files) => console.log(files)}
 * />
 */
const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      className,
      files: controlledFiles,
      onFilesChange,
      onFileRemove,
      showImagePreview = true,
      multiple = false,
      accept,
      maxSize,
      maxFiles,
      buttonText = "파일 선택",
      enableDragDrop = true,
      ...props
    },
    ref
  ) => {
    const [internalFiles, setInternalFiles] = React.useState<File[]>([]);
    const [isDragging, setIsDragging] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const fileInputRef = ref || inputRef;

    const files = controlledFiles ?? internalFiles;

    const handleFileSelect = React.useCallback(
      (selectedFiles: FileList | null) => {
        if (!selectedFiles || selectedFiles.length === 0) return;

        const newFiles = Array.from(selectedFiles);
        const validFiles: File[] = [];

        // 파일 크기 검증
        if (maxSize) {
          newFiles.forEach((file) => {
            const fileSizeMB = file.size / (1024 * 1024);
            if (fileSizeMB <= maxSize) {
              validFiles.push(file);
            }
          });
        } else {
          validFiles.push(...newFiles);
        }

        // 최대 파일 개수 검증
        if (maxFiles && files.length + validFiles.length > maxFiles) {
          const remaining = maxFiles - files.length;
          validFiles.splice(remaining);
        }

        const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;

        if (onFilesChange) {
          onFilesChange(updatedFiles);
        } else {
          setInternalFiles(updatedFiles);
        }
      },
      [files, multiple, maxSize, maxFiles, onFilesChange]
    );

    const handleFileRemove = React.useCallback(
      (index: number) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        if (onFileRemove) {
          onFileRemove(index);
        }
        if (onFilesChange) {
          onFilesChange(updatedFiles);
        } else {
          setInternalFiles(updatedFiles);
        }
      },
      [files, onFileRemove, onFilesChange]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFileSelect(e.target.files);
      // 같은 파일을 다시 선택할 수 있도록 reset
      e.target.value = "";
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (enableDragDrop) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (enableDragDrop && e.dataTransfer.files) {
        handleFileSelect(e.dataTransfer.files);
      }
    };

    const isImageFile = (file: File): boolean => {
      return file.type.startsWith("image/");
    };

    const formatFileSize = (bytes: number): string => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
    };

    return (
      <div className={cn("w-full space-y-4", className)}>
        {/* 파일 선택 영역 */}
        <div
          className={cn(
            "relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50",
            enableDragDrop && "cursor-pointer"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => {
            if (enableDragDrop && inputRef.current) {
              inputRef.current.click();
            }
          }}
        >
          <Input
            ref={fileInputRef}
            type="file"
            className="hidden"
            multiple={multiple}
            accept={accept}
            onChange={handleInputChange}
            {...props}
          />
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <Icon
              name="Upload"
              className="mb-4 h-10 w-10 text-muted-foreground"
            />
            <p className="mb-2 text-sm font-medium">
              {enableDragDrop
                ? "파일을 드래그하거나 클릭하여 선택"
                : "파일을 선택하세요"}
            </p>
            <p className="text-xs text-muted-foreground">
              {accept && `지원 형식: ${accept}`}
              {maxSize && ` 최대 크기: ${maxSize}MB`}
              {maxFiles && ` 최대 개수: ${maxFiles}개`}
            </p>
            {!enableDragDrop && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  if (inputRef.current) {
                    inputRef.current.click();
                  }
                }}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>

        {/* 선택된 파일 목록 */}
        {files.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">
              선택된 파일 ({files.length}
              {maxFiles && ` / ${maxFiles}`})
            </p>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="flex items-center gap-3 rounded-lg border p-3"
                >
                  {/* 이미지 미리보기 */}
                  {showImagePreview && isImageFile(file) ? (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border">
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border bg-muted">
                      <Icon
                        name="FileText"
                        className="h-8 w-8 text-muted-foreground"
                      />
                    </div>
                  )}

                  {/* 파일 정보 */}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(file.size)}
                    </p>
                  </div>

                  {/* 삭제 버튼 */}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0"
                    onClick={() => handleFileRemove(index)}
                  >
                    <Icon name="X" className="h-4 w-4" />
                    <span className="sr-only">삭제</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);
FileUpload.displayName = "FileUpload";

export { FileUpload, type FileUploadProps };
