import React from "react";

const BuybackTypeBadge = ({ isStandalone }: { isStandalone: boolean }) => {
  return isStandalone ? (
    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
      Standalone
    </span>
  ) : (
    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
      With Sale
    </span>
  );
};

export default BuybackTypeBadge;
