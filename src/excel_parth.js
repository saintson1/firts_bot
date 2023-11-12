// Import dependencies
const fs = require("fs");
const XLSX = require("xlsx");
//const jsontoxml = require("jsontoxml");

let xlsxParthFile = class {
  constructor(dirname, filename) {
    // Read the file into memory
    this.filepath = dirname + "/" + filename;
    //if (this.filepath != undefined)
    this.workbook = XLSX.readFile(this.filepath);
    // convert`s var the XLSX to
    this.worksheets = {};
  }

  convert(typeNameS) {
    if (this.workbook == undefined) return;
    for (const sheetName of this.workbook.SheetNames) {
      if (typeNameS === "CSV")
        //generates CSV
        this.worksheets[sheetName] = XLSX.utils.sheet_to_csv(
          this.workbook.Sheets[sheetName]
        );
      else if (typeNameS === "TXT")
        //generates UTF16 Formatted Text
        this.worksheets[sheetName] = XLSX.utils.sheet_to_txt(
          this.workbook.Sheets[sheetName]
        );
      else if (typeNameS === "HTML")
        //generates HTML
        this.worksheets[sheetName] = XLSX.utils.sheet_to_html(
          this.workbook.Sheets[sheetName]
        );
      else if (typeNameS === "JSON")
        //generates an array of objects
        this.worksheets[sheetName] = XLSX.utils.sheet_to_json(
          this.workbook.Sheets[sheetName]
        );
      else if (typeNameS === "FORMULAE")
        //generates a list of formulae
        this.worksheets[sheetName] = XLSX.utils.sheet_to_formulae(
          this.workbook.Sheets[sheetName]
        );
      else console.log("xlsxParthFile: Unknowing convert format!");
    }
  }

  /* доделать загрузки в др. форматы */
  update(newData, sheetKey) {
    if (this.workbook == undefined) return;
    if (typeof sheetKey === Number) {
      if (
        this.worksheets[Object.keys(this.worksheets)[sheetKey]] == undefined
      ) {
        // Create new the XLSX file
        const newBook = XLSX.utils.book_new();
        const newSheet = XLSX.utils.json_to_sheet(
          this.worksheets[Object.keys(this.worksheets)[sheetKey]]
        );
        XLSX.utils.book_append_sheet(
          newBook,
          newSheet,
          JSON.stringify(sheetKey)
        );
      } else {
        // Modify the XLSX
        this.worksheets[Object.keys(this.worksheets)[sheetKey]].push(newData);
        XLSX.utils.sheet_add_json(
          this.workbook.Sheets[Object.keys(this.worksheets)[sheetKey]],
          this.worksheets[Object.keys(this.worksheets)[sheetKey]]
        );
      }
    } else if (typeof sheetKey === String) {
      if (this.worksheets[sheetKey] == undefined) {
        // Create new the XLSX file
        const newBook = XLSX.utils.book_new();
        const newSheet = XLSX.utils.json_to_sheet(worksheets[sheetKey]);
        XLSX.utils.book_append_sheet(newBook, newSheet, sheetKey);
      } else {
        // Modify the XLSX
        this.worksheets[sheetKey].push(newData);
        XLSX.utils.sheet_add_json(
          this.workbook.Sheets[sheetKey],
          this.worksheets[sheetKey]
        );
      }
    }
    XLSX.writeFile(newBook, filepath);
  }
};

module.exports = xlsxParthFile;
// // Show the data as JSON
// console.log(
//   "json:\n",
//   JSON.stringify(worksheets[Object.keys(worksheets)[0]]),
//   "\n\n"
// );

// // Show the data as XML
// console.log(
//   "xml:\n",S
//   jsontoxml(
//     {
//       worksheets: JSON.parse(JSON.stringify(Object.values(worksheets))).map(
//         (worksheet) =>
//           worksheet.map((data) => {
//             for (property in data) {
//               const newPropertyName = property.replace(/\s/g, "");
//               if (property !== newPropertyName) {
//                 Object.defineProperty(
//                   data,
//                   newPropertyName,
//                   Object.getOwnPropertyDescriptor(data, property)
//                 );
//                 delete data[property];
//               }
//             }
//             return data;
//           })
//       ),
//     },
//     {}
//   ),
//   "\n\n"
// );
