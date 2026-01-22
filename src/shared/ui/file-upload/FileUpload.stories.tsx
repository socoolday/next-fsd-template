import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { FileUpload } from "./FileUpload";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";

/**
 * FileUpload 컴포넌트는 파일 선택, 미리보기, 삭제 기능을 제공하는 파일 업로드 컴포넌트입니다.
 */
const meta: Meta<typeof FileUpload> = {
  title: "shared/ui/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "드래그 앤 드롭, 이미지 미리보기, 파일명 표시, 파일 삭제 기능을 제공하는 파일 업로드 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

/**
 * 기본 파일 업로드
 */
export const Default: Story = {
  render: function DefaultFileUpload() {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="w-[500px]">
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          buttonText="파일 선택"
        />
      </div>
    );
  },
};

/**
 * 이미지 업로드 (미리보기 포함)
 */
export const ImageUpload: Story = {
  render: function ImageFileUpload() {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="w-[500px]">
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          accept="image/*"
          showImagePreview={true}
          buttonText="이미지 선택"
        />
      </div>
    );
  },
};

/**
 * 다중 파일 업로드
 */
export const MultipleFiles: Story = {
  render: function MultipleFileUpload() {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="w-[500px]">
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          multiple={true}
          maxFiles={5}
          buttonText="여러 파일 선택"
        />
      </div>
    );
  },
};

/**
 * 파일 크기 제한
 */
export const WithSizeLimit: Story = {
  render: function SizeLimitFileUpload() {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="w-[500px]">
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          maxSize={5}
          buttonText="파일 선택 (최대 5MB)"
        />
      </div>
    );
  },
};

/**
 * 특정 파일 형식만 허용
 */
export const SpecificFileTypes: Story = {
  render: function SpecificFileTypesUpload() {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="w-[500px]">
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          accept=".pdf,.doc,.docx"
          buttonText="문서 파일 선택"
        />
      </div>
    );
  },
};

/**
 * 드래그 앤 드롭 비활성화
 */
export const NoDragDrop: Story = {
  render: function NoDragDropUpload() {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="w-[500px]">
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          enableDragDrop={false}
          buttonText="파일 선택"
        />
      </div>
    );
  },
};

/**
 * 이미지 미리보기 없음
 */
export const NoPreview: Story = {
  render: function NoPreviewUpload() {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="w-[500px]">
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          showImagePreview={false}
          accept="image/*"
          buttonText="이미지 선택"
        />
      </div>
    );
  },
};

/**
 * Form과 함께 사용
 */
export const WithForm: Story = {
  render: function FormFileUpload() {
    const [files, setFiles] = useState<File[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("제출된 파일:", files);
    };

    return (
      <div className="w-[500px]">
        <Card>
          <CardHeader>
            <CardTitle>프로필 이미지 업로드</CardTitle>
            <CardDescription>
              프로필에 사용할 이미지를 업로드하세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FileUpload
                files={files}
                onFilesChange={setFiles}
                accept="image/*"
                maxSize={2}
                maxFiles={1}
                buttonText="이미지 선택"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setFiles([])}
                  className="rounded-md border px-4 py-2 text-sm"
                >
                  초기화
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
                >
                  업로드
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  },
};

/**
 * 다양한 파일 타입 혼합
 */
export const MixedFileTypes: Story = {
  render: function MixedFileTypesUpload() {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="w-[500px]">
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          multiple={true}
          maxFiles={10}
          buttonText="파일 선택"
        />
      </div>
    );
  },
};

/**
 * 제한된 파일 개수
 */
export const LimitedFiles: Story = {
  render: function LimitedFilesUpload() {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="w-[500px]">
        <FileUpload
          files={files}
          onFilesChange={setFiles}
          multiple={true}
          maxFiles={3}
          accept="image/*"
          buttonText="최대 3개 이미지 선택"
        />
      </div>
    );
  },
};
