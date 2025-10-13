import React, { useState } from "react";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (option: "currentPage" | "wholeReport") => void;
}

const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [selectedOption, setSelectedOption] = useState<
    "currentPage" | "wholeReport"
  >("currentPage");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50"
      // Full-page overlay with semi-transparent background
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Export Options</h2>
        <div className="space-y-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="exportOption"
              value="currentPage"
              checked={selectedOption === "currentPage"}
              onChange={() => setSelectedOption("currentPage")}
              className="mr-2"
            />
            Export Current Page
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="exportOption"
              value="wholeReport"
              checked={selectedOption === "wholeReport"}
              onChange={() => setSelectedOption("wholeReport")}
              className="mr-2"
            />
            Export Whole Report
          </label>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit(selectedOption)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
