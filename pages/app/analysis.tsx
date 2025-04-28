import { useState, useRef } from "react";
import Card from "../../components/Cards/Card";
import Button from "../../components/Elements/Button";
import Image from "next/image";

export default function Analysis() {
  const [image, setImage] = useState(null);
  const [analysisDone, setAnalysisDone] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    // Simulate analysis done immediately after first photo
    setAnalysisDone(true);
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 space-y-6">
      {!analysisDone ? (
        <Card>
          <div className="flex flex-col items-center space-y-4 animate-fade-in">
            <h1 className="text-2xl font-bold text-blueGray-700 mb-4">
              Upload frontal photo
            </h1>
            {image ? (
              <Image
                src={image}
                alt="Uploaded photo"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
            ) : (
              <p className="text-gray-500">No image selected</p>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              className="hidden"
            />

            <Button color="blue" onClick={triggerFileSelect}>
              📷 Choose a photo
            </Button>

            {image && (
              <Button color="green" onClick={handleNext}>
                ✅ Save and continue
              </Button>
            )}
          </div>
        </Card>
      ) : (
        <div className="flex flex-col md:flex-row md:space-x-6 w-full max-w-5xl animate-fade-in">
          <Card>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4 text-blueGray-700">
                Frontal photo
              </h2>
              <Image
                src={image}
                alt="Frontal photo"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-semibold text-blueGray-700 mb-2">
                Analysis results
              </h2>
              {[
                { label: "Spots", value: 75 },
                { label: "Wrinkles", value: 62 },
                { label: "Pores", value: 80 },
                { label: "UV Spots", value: 58 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blueGray-600">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-blueGray-600">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
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
