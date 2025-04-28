import { useRef, useState } from "react";
import Image from "next/image";

const t = (key: string) => {
  const translations: Record<string, string> = {
    "upload_front": "Upload frontal photo",
    "upload_left": "Upload 3/4 left photo",
    "upload_right": "Upload 3/4 right photo",
    "choose_photo": "Choose a photo",
    "save_next": "Save & Next",
    "analyzing": "Analyzing...",
    "results_title": "Analysis Results",
    "spots": "Spots",
    "wrinkles": "Wrinkles",
    "pores": "Pores",
    "texture": "Texture",
    "no_image_selected": "No image selected",
    "upload_completed": "Upload completed. Analysis started...",
  };
  return translations[key] || key;
};

export default function AnalysisPage() {
  const [step, setStep] = useState<number>(1);
  const [images, setImages] = useState<{
    front: File | null;
    left: File | null;
    right: File | null;
  }>({ front: null, left: null, right: null });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [results, setResults] = useState<{
    spots: number;
    wrinkles: number;
    pores: number;
    texture: number;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      if (step === 1) {
        setImages((prev) => ({ ...prev, front: file }));
      } else if (step === 2) {
        setImages((prev) => ({ ...prev, left: file }));
      } else if (step === 3) {
        setImages((prev) => ({ ...prev, right: file }));
      }
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      setPreviewUrl(null);
    } else {
      // All images uploaded, start fake analysis
      setLoading(true);
      setTimeout(() => {
        setResults({
          spots: Math.floor(Math.random() * 100),
          wrinkles: Math.floor(Math.random() * 100),
          pores: Math.floor(Math.random() * 100),
          texture: Math.floor(Math.random() * 100),
        });
        setLoading(false);
      }, 2000);
    }
  };

  const getUploadLabel = () => {
    if (step === 1) return t("upload_front");
    if (step === 2) return t("upload_left");
    if (step === 3) return t("upload_right");
    return "";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      {/* Upload Section */}
      {(!results && !loading) && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">{getUploadLabel()}</h2>

          <div className="flex flex-col items-center space-y-4">
            {/* Preview image */}
            <div className="w-64 h-64 bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden">
              {previewUrl ? (
                <Image src={previewUrl} alt="Preview" width={256} height={256} className="object-cover" />
              ) : (
                <span className="text-gray-400">{t("no_image_selected")}</span>
              )}
            </div>

            {/* File upload hidden */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />

            {/* Button to open file selector */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-2 px-6 rounded-full transition"
            >
              {t("choose_photo")}
            </button>

            {/* Save & Next button */}
            <button
              onClick={handleNext}
              disabled={!previewUrl}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition disabled:opacity-50"
            >
              {t("save_next")}
            </button>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center mt-20">
          <svg className="animate-spin h-10 w-10 text-blue-600 mb-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          <div className="text-lg font-semibold text-blue-600">{t("analyzing")}</div>
        </div>
      )}

      {/* Results Section */}
      {results && (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Front Photo Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex-1 flex flex-col items-center">
            <h3 className="text-xl font-bold text-blue-700 mb-4">{t("upload_front")}</h3>
            {images.front ? (
              <Image
                src={URL.createObjectURL(images.front)}
                alt="Front photo"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            ) : (
              <div className="w-64 h-64 bg-gray-200 flex items-center justify-center text-gray-400 rounded-lg">
                {t("no_image_selected")}
              </div>
            )}
          </div>

          {/* Analysis Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
            <h3 className="text-xl font-bold text-blue-700 mb-6">{t("results_title")}</h3>
            <div className="space-y-6">
              {Object.entries(results).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-500">{t(key)}</span>
                    <span className="text-sm font-semibold text-blue-700">{value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
