import React from "react";

const ProductListEmpty = () => {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-400 even:bg-gray-50 even:dark:bg-gray-400">
        <th
          colSpan={9}
          scope="row"
          className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
        >
          There is no Data.
        </th>
      </tr>
    </>
  );
};

export default ProductListEmpty;
