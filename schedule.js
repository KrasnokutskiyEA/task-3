import fs from 'fs'

// Задаем пути к входному и выходному файлам.
const inputPath = './data/input.json'
const outputPath = './data/output.json'

/**
 * Возвращает объект, содержащий данные из входного файла.
 * @param {string} inputPath - путь к файлу с входными данными.
 * @returns {object} - объект, содержащий данные из входного файла.
 */
const readInput = (inputPath) => {
  const inputData = fs.readFileSync(inputPath, 'utf8', (error, data) => {
    if (error) throw error
  })
  console.log('OK__Input file has been parsed!')
  return JSON.parse(inputData)
}

/**
 * Записывает принимаемый объект в выходной файл.
 * @param {string} outputPath - путь к файлу с выходными данными.
 * @param {object} outputData - объект, содержащий данные для записи в выходной файл.
 */
const writeOutput = (outputPath, outputData) => {
  fs.writeFile(outputPath, JSON.stringify(outputData, null, 2), (error) => {
    if (error) throw error
    console.log('OK__Output file has been saved!')
  })
}


const inputFileContent = readInput(inputPath) // читаем входной файл input.json

const outputData = inputFileContent // делаем обработку...

writeOutput(outputPath, outputData) // записываем результат в output.json
