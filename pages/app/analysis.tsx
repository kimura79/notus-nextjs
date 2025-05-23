import { useState, useRef } from "react";
import Card from "../../components/Cards/Card";
import Button from "../../components/Elements/Button";
import Image from "next/image";

export default function Analysis() {
  const [image, setImage] = useState<string | null>(null);
  const [analysisDone, setAnalysisDone] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    setAnalysisDone(true); // Simulate analysis
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 space-y-8">
      {!analysisDone ? (
        <Card>
          <div className="flex flex-col items-center space-y-6 animate-fade-in">
            <h1 className="text-2xl font-bold text-slate-700">
              Upload frontal photo
            </h1>

            {/* Uploaded Image or Placeholder */}
            {image ? (
              <Image
                src={image}
                alt="Uploaded photo"
                width={250}
                height={250}
                className="rounded-lg shadow-md object-cover"
              />
            ) : (
              <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                <p className="text-gray-400">No image selected</p>
              </div>
            )}

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              className="hidden"
            />

            {/* Buttons */}
            <div className="flex flex-col items-center w-full max-w-xs space-y-4 mt-6">
              <Button color="blue" onClick={triggerFileSelect}>
                📷 Choose a photo
              </Button>

              {image && (
                <Button color="green" onClick={handleNext}>
                  ✅ Save and continue
                </Button>
              )}
            </div>
          </div>
        </Card>
      ) : (
        <div className="flex flex-col md:flex-row md:space-x-6 w-full max-w-6xl animate-fade-in">
          {/* Photo Card */}
          <Card>
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-xl font-semibold text-slate-700">
                Frontal photo
              </h2>
              {image && (
                <Image
                  src={image}
                  alt="Frontal photo"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg object-cover"
                />
              )}
            </div>
          </Card>

          {/* Analysis Results */}
          <Card>
            <div className="flex flex-col space-y-6">
              <h2 className="text-xl font-semibold text-slate-700">
                Analysis Results
              </h2>
              {[
                { label: "Spots", value: 75 },
                { label: "Wrinkles", value: 62 },
                { label: "Pores", value: 80 },
                { label: "UV Spots", value: 58 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-gray-600">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
