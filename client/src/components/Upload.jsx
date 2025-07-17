import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { toast } from "react-toastify";

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    return { signature: data.signature, expire: data.expire, token: data.token };
  } catch (error) {
    console.error("Upload Authentication Failed:", error.message);
    toast.error("Failed to authenticate image upload.");
    return null;
  }
};

const Upload = ({ children, type = "image", setProgress, setData }) => {
  const ref = useRef(null);

  const onError = (err) => {
    console.error("Image Upload Error:", err);
    toast.error(`Upload failed: ${err.message || "Unknown error"}`);
  };

  const onSuccess = (res) => {
    console.log("Upload Success:", res);
    setData(res);
    toast.success("Image uploaded successfully!");
  };

  const onUploadProgress = (progress) => {
    const percent = Math.round((progress.loaded / progress.total) * 100);
    console.log("Upload Progress:", percent, "%");
    setProgress(percent);
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`} // Supports multiple types like "image/*, video/*"
      />
      <div
        className="cursor-pointer"
        onClick={() => ref.current && ref.current.click()}
      >
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
