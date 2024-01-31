// const csv = require("csvtojson");
// module.exports.read_csv = async (req, res) => {
//     try {
//         let yearData = [];
//         csv()
//         .fromFile(req.file.path)
//         .then(async (res) => {
//             for(let x = 0; x < res.length; x++) {
//                 yearData.push({
//                    time: res[x].TimeStamp,
//                    profit: res[x].Profit
//                 })
//             }
//         })
//         res.send({success: true, msg: "SUCCESSFULLY"})
//     }catch(err) {
//         res.send({success: false, msg: err.message})
//     }
// }

const csv = require("csvtojson");
const fs = require("fs");
const csvParser = require("csv-parser");
const path = require("path")
const csvFilePath = path.join(__dirname, '../downsampled_dataset.csv'); // Replace with the path to your CSV file


// Max-Min downsampling function
function maxMinDownsample(data, targetSize) {
    if (targetSize >= data.length) {
        return data; // No downsampling needed if the target size is greater or equal to the dataset size.
    }

    const windowSize = Math.floor(data.length / targetSize);

    const downsampledData = [];

    for (let i = 0; i < targetSize; i++) {
        const startIdx = i * windowSize;
        const endIdx = (i === targetSize - 1) ? data.length : startIdx + windowSize;

        const maxIndex = startIdx + data.slice(startIdx, endIdx).findIndex(point => point.profit === Math.max(...data.slice(startIdx, endIdx).map(p => p.profit)));
        const minIndex = startIdx + data.slice(startIdx, endIdx).findIndex(point => point.profit === Math.min(...data.slice(startIdx, endIdx).map(p => p.profit)));

        downsampledData.push(data[maxIndex], data[minIndex]);
    }

    return downsampledData;
}

module.exports.read_csv = async (req, res) => {
    try {
        const rawData = await csv().fromFile(req.file.path);

        if (!rawData || rawData.length === 0) {
            throw new Error("Empty or undefined data in CSV file.");
        }

        // Map the data to the required format
        const yearData = rawData.map(row => ({
            time: row.Timestamp ? row.Timestamp : null,
            profit: row['Profit Percentage'] ? parseFloat(row['Profit Percentage']) : null
        }));

        if (yearData.some(row => row.time === null || row.profit === null)) {
            throw new Error("Invalid data in CSV file. Check Timestamp and Profit Percentage columns.");
        }

        // Apply Max-Min downsampling
        const targetSize = 10; // You can adjust this based on your requirements
        const downsampledData = maxMinDownsample(yearData, targetSize);

        // Write downsampled data to a new CSV file
        const outputFilePath = 'downsampled_dataset.csv';
        const outputContent = `Timestamp,Profit Percentage\n${downsampledData.map(row => `${row.time},${row.profit}`).join('\n')}`;
        fs.writeFileSync(outputFilePath, outputContent, 'utf8');

        res.send({ success: true, msg: "Downsampling completed successfully." });
    } catch (err) {
        console.error(err);
        res.send({ success: false, msg: err.message });
    }
};


module.exports.get_csv_data = (req, res) => {
    const rows = [];
 fs.createReadStream(csvFilePath)
  .pipe(csvParser())
  .on('data', (row) => {
    // Process each row as it is read
    rows.push(row);
  })
  .on('end', () => {
    // All rows have been read
    console.log(rows.length)
    // console.log('CSV file successfully processed:', rows);
    res.json(rows)
  })
  .on('error', (error) => {
    console.error('Error reading CSV file:', error.message);
  });
}