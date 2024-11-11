// export const fetchProducts = async () => {
//   const urls = [
//     "https://dev.backend.mobigarage.com/v1/mp/spares/?limit=4",
//     "https://dev.backend.mobigarage.com/v1/mp/vrp/?limit=4",
//     "https://dev.backend.mobigarage.com/v1/mp/open_box/?limit=4",
//     "https://dev.backend.mobigarage.com/v1/mp/new_phones/?limit=4",
//   ];

//   try {
//     const responses = await Promise.all(urls.map((url) => fetch(url)));

//     const allResponsesOk = responses.every((response) => response.ok);
//     if (!allResponsesOk) {
//       throw new Error("One or more requests failed");
//     }

//     const data = await Promise.all(
//       responses.map((response) => response.json())
//     );
//     return data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };
