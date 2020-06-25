const { readdirSync, writeFileSync } = require('fs')

const { isSVG, removeExtension, toPascalCase } = require('./utils')

const packs = [
  {
    filename: 'icon-map',
    dir: 'src/svg',
  },
]

const mapFiles = (filename, files, dir) => {
  const mapContent = [
    files
      .map(
        (file) =>
          `import { ReactComponent as ${toPascalCase(
            file
          )} } from './${file}.svg'`
      )
      .join('\n'),
    '',
    'export default {',
    `${files.map((file) => `  '${file}': ${toPascalCase(file)},`).join('\n')}`,
    '}',
  ].join('\n')

  writeFileSync(`${dir}/${filename}.js`, mapContent)

  console.log(`${filename} created! ✅`)
}

packs.map((pack) => {
  const files = readdirSync(pack.dir).filter(isSVG).map(removeExtension)

  try {
    mapFiles(pack.filename, files, pack.dir)
  } catch (e) {
    console.error(e)
  }
})
