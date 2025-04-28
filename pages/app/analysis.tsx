// pages/app/analysis.tsx
import { useState } from "react";
import Image from "next/image";

const t = (key: string) => {
  const translations: Record<string, string> = {
    "upload_front": "Upload frontal photo",
    "upload_left": "Upload 3/4 left photo",
    "upload_right": "Upload 3/4 right photo",
    "save": "Save",
    "next": "Next",
    "analyzing": "Analyzing...",
    "results_title": "Analysis Results",
    "spots": "Spots",
    "wrinkles": "Wrinkles",
    "pores": "Pores",
    "texture": "Texture",
  };
  return translations[key] || key;
};

export default function AnalysisPage() {
  const [step, setStep] = useState<number>(1);
  const [images, setImages] = useState<{
    front: File | null;
    left: File | null;
    right: File | null;
  }>({
    front: null,
    left: null,
    right: null,
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [results, setResults] = useState<{
    spots: number;
    wrinkles: number;
    pores: number;
    texture: number;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
      setPreviewUrl(null);
      setStep(step + 1);
    } else {
      // Step 4: Start analysis
      setLoading(true);
      setTimeout(() => {
        setResults({
          spots: Math.floor(Math.random() * 100),
          wrinkles: Math.floor(Math.random() * 100),
          pores: Math.floor(Math.random() * 100),
          texture: Math.floor(Math.random() * 100),
        });
        setLoading(false);
        setStep(4);
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
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        {step <= 3 && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">{getUploadLabel()}</h1>

            <div className="mb-6 flex flex-col items-center">
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Preview"
                  width={300}
                  height={300}
                  className="rounded-xl object-cover"
                />
              ) : (
                <div className="w-64 h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                  No image selected
                </div>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={handleNext}
                disabled={!previewUrl}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg disabled:opacity-50"
              >
                {t("save")} & {t("next")}
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <div className="text-center">
            {loading ? (
              <div className="text-lg font-semibold">{t("analyzing")}</div>
            ) : results ? (
              <>
                <h1 className="text-2xl font-bold mb-6">{t("results_title")}</h1>
                <ul className="text-left space-y-4">
                  <li>
                    <strong>{t("spots")}:</strong> {results.spots}%
                  </li>
                  <li>
                    <strong>{t("wrinkles")}:</strong> {results.wrinkles}%
                  </li>
                  <li>
                    <strong>{t("pores")}:</strong> {results.pores}%
                  </li>
                  <li>
                    <strong>{t("texture")}:</strong> {results.texture}%
                  </li>
                </ul>
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
