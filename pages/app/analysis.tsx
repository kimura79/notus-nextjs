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
    "no_image_selected": "No image selected",
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10">
        {step <= 3 && (
          <>
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">{getUploadLabel()}</h1>

            <div className="flex flex-col items-center mb-6">
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Preview"
                  width={350}
                  height={350}
                  className="rounded-2xl object-cover shadow-lg"
                />
              ) : (
                <div className="w-72 h-72 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                  {t("no_image_selected")}
                </div>
              )}
            </div>

            <div className="flex justify-center mb-6">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleNext}
                disabled={!previewUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 disabled:opacity-50"
              >
                {t("save")} & {t("next")}
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <div className="text-center">
            {loading ? (
              <div className="flex flex-col items-center justify-center">
                <svg className="animate-spin h-10 w-10 text-blue-600 mb-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <div className="text-lg font-semibold text-blue-600">{t("analyzing")}</div>
              </div>
            ) : results ? (
              <>
                <h1 className="text-3xl font-bold text-blue-600 mb-8">{t("results_title")}</h1>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(results).map(([key, value]) => (
                    <div key={key} className="p-6 bg-gray-50 rounded-2xl shadow-md">
                      <div className="text-gray-500 text-sm mb-2">{t(key)}</div>
                      <div className="text-2xl font-bold text-blue-700">{value}%</div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                          className="bg-blue-500 h-2.5 rounded-full"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
