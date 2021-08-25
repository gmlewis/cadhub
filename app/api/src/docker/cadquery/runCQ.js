const { writeFiles, runCommand } = require('../common/utils')
const { nanoid } = require('nanoid')

module.exports.runCQ = async ({
  file,
  settings: { deflection = 0.3 } = {},
} = {}) => {
  const tempFile = await writeFiles(
    [{ file, fileName: 'main.py' }],
    'a' + nanoid() // 'a' ensure nothing funny happens if it start with a bad character like "-", maybe I should pick a safer id generator :shrug:
  )
  const fullPath = `/tmp/${tempFile}/output.gz`
  const stlPath = `/tmp/${tempFile}/output.stl`
  const command = [
    `cq-cli/cq-cli`,
    `--codec stl`,
    `--infile /tmp/${tempFile}/main.py`,
    `--outfile ${stlPath}`,
    `--outputopts "deflection:${deflection};angularDeflection:${deflection};"`,
  ].join(' ')
  console.log('command', command)

  try {
    const consoleMessage = await runCommand(command, 30000)
    await writeFiles(
      [
        {
          file: JSON.stringify({
            consoleMessage,
          }),
          fileName: 'metadata.json',
        },
      ],
      tempFile
    )
    await runCommand(
      `cat ${stlPath} /var/task/cadhub-concat-split /tmp/${tempFile}/metadata.json | gzip > ${fullPath}`,
      15000
    )
    return { consoleMessage, fullPath }
  } catch (error) {
    return { error, fullPath }
  }
}
